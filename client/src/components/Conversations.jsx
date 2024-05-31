import useConversations from "../hooks/useConversations";
import Conversation from "./Conversation";
import React from "react";

const Conversations = () => {
  const { loading, conversations } = useConversations();
  console.log("CONVERSATION:", conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
