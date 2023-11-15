import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { ChatBox } from "../components/page-sections/chat/ChatBox";

export function ChatPage() {
  const ref = useRef<HTMLInputElement | undefined>();
  const [showChat, setShowChat] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleOpenChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (ref.current && ref.current.value == "") {
      setError(true);
      return;
    }
    setShowChat(true);
  };

  return (
    <div className="h-[calc(100vh-80px)] flex justify-center items-center ">
      {!showChat && (
        <form className="flex flex-col gap-3" onSubmit={handleOpenChat}>
          <TextField size="small" label="Name" variant="outlined" inputRef={ref} error={error} />
          <Button variant="contained" type="submit">
            Start Chat
          </Button>
        </form>
      )}
      {showChat && ref.current && <ChatBox name={ref.current.value} />}
    </div>
  );
}
