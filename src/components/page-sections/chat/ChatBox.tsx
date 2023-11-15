import { Button, TextField } from "@mui/material";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { collection } from "firebase/firestore";
import { motion } from "framer-motion";
import moment from "moment";
import { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { useIP } from "../../../hooks/useIP";
import { db } from "../../../lib/firestore";
import { ipHexEncode } from "../../../utils/ipHexEncode";
import { sendChatMessage } from "../../../utils/sendChatMessage";
import { LoadingSpinner } from "../../ui/LoadingSpinner";

export function ChatBox({ name }: { name: string }) {
  const [col, loading, error] = useCollection(collection(db, "chats"));
  const ref = useRef<HTMLInputElement | undefined>();
  const chatBoxRef = useRef<HTMLDivElement | undefined>();
  const { ip } = useIP();

  const handleSendMessage = async () => {
    if (ref.current) {
      await sendChatMessage({ message: ref.current.value, name, ip: ip });
      ref.current.value = "";
      ref.current.focus();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef?.current.scrollBy(0, chatBoxRef.current.scrollHeight);
    }
  }, [col?.docs.length]);

  if (loading)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  if (error) return <>error</>;

  return (
    <div className="w-full px-4">
      <ScrollArea.Root className="h-[calc(100vh-250px)] my-4">
        {/* //TODO fix ref type for this package */}
        <ScrollArea.Viewport className="w-full h-full" ref={chatBoxRef}>
          <div className="flex flex-col ">
            {col?.docs &&
              col.docs
                .sort((a, b) => a.data().created.seconds - b.data().created.seconds)
                .map((v, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: "-10px" }}
                    animate={{ opacity: 1, x: "0" }}
                    transition={{ duration: 0.3 }}
                    key={index}
                    className={`my-2 p-2 rounded-md w-fit ${v.data().ip == ip && "self-end"}`}
                    style={{ backgroundColor: ipHexEncode(ip) }}
                  >
                    <p>{v.data().message}</p>
                    <div className="flex gap-2">
                      <p className="text-xs text-gray-500">{v.data().name}</p>
                      <p className="text-xs text-gray-500">{moment.unix(v.data()?.created?.seconds).fromNow()}</p>
                    </div>
                  </motion.div>
                ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="bg-gray-200 w-2" orientation="vertical">
          <ScrollArea.Thumb className="bg-gray-400 rounded-md w-2" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
      <div className="w-full flex gap-2">
        <TextField label="message" size="small" inputRef={ref} className="w-full" />
        <Button variant="contained" onClick={handleSendMessage}>
          send
        </Button>
      </div>
    </div>
  );
}
