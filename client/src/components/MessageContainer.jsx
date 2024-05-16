import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="m-4 rounded-2xl md:min-w-[450px] flex flex-col min-h-[90vh] bg-white">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-1 mb-1 bg-transparent">
            <span className="label-text"> To: </span>
            <span className="text-gray-900 font-bold">John Doe</span>
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
  return (
    <div className="flex items-center justify-center pt-20 w-full h-full">
      <div className="px-4 text-center sm:text-lg  md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome, John Doe!</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
