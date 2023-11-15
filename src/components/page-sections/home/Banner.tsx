import { motion } from "framer-motion";

export function Banner() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-[calc(100vh-80px)]">
      <motion.h1
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="text-6xl font-light text-[#e6477a] z-0"
      >
        Welcome To Wardlin
      </motion.h1>
      <img src="banner.png" className="max-w-7xl z-10" />
    </div>
  );
}
