import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../zustand/useConversation";
import { useAuthContext } from "../context/AuthContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [mode, setMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("mode", mode ? "light" : "dark");
  }, [mode]);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`m-4 rounded-2xl md:min-w-[450px] flex flex-col min-h-[95vh] h-[90vh] ${
        mode ? "bg-white text-black" : "bg-black text-white"
      } overflow-auto`}
    >
      <div className="flex justify-end p-2">
        {mode ? (
          <MdOutlineDarkMode
            onClick={toggleMode}
            className="cursor-pointer text-2xl"
          />
        ) : (
          <MdOutlineLightMode
            onClick={toggleMode}
            className="cursor-pointer text-2xl"
          />
        )}
      </div>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-1 mb-1 bg-transparent">
            <span className="label-text text-gray-500">To: </span>
            <span className="font-bold">{selectedConversation.fullName}</span>
          </div>
          <div className="divider px-3 m-0 mb-2"></div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center pt-20 w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
        <p>Welcome, {authUser.username.replace(".", " ").toUpperCase()}!</p>
        <p className="text-gray-500">Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
