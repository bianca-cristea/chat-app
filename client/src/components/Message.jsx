import React from "react";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const name = authUser.username;
  const timeTheMessageWasSent = extractTime(message.createdAt);
  let initials =
    name.charAt(0) + (name.split(".")[1]?.charAt(0) || name.charAt(1));
  const profilePicture = fromMe
    ? `https://ui-avatars.com/api/?name=${initials}&background=random`
    : selectedConversation?.profilePicture;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const isImageMessage = message.messageType === "file";
  let src = "";
  if (isImageMessage) src = `data:image/png;base64,${message.message}`;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile pic" src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} b-2 w-auto`}>
        {isImageMessage ? (
          <img
            src={src}
            style={{ maxWidth: "70px", height: "auto" }}
            alt="Sent Image"
          />
        ) : (
          <span className="p-0">{message.message}</span>
        )}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {timeTheMessageWasSent}
      </div>
    </div>
  );
};

export default Message;

function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
