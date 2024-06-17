import React from "react";
import { GoPaperclip } from "react-icons/go";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../hooks/useSendMessage";
import { useState, useRef } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const fileInputRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result); // Setează previewURL cu rezultatul citirii
      };
      reader.readAsDataURL(selectedFile); // Citirea fișierului ca și Data URL
    }
  };

  const handleFileIconClick = () => {
    fileInputRef.current.click();
  };

  const handleEmojiSelect = (emoji) => {
    setMessage((prevMessage) => prevMessage + emoji);
    setShowEmojis(false);
  };

  const handleRemoveImage = () => {
    setFile(null);
    setPreviewURL(null);
    fileInputRef.current.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !file) return;

    const formData = new FormData();
    formData.append("content", message);
    if (file) {
      formData.append("file", file);
    }

    await sendMessage(formData);

    setMessage("");
    setFile(null);
    setPreviewURL(null);
  };

  return (
    <form
      className="px-4 my-3 flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <button
          type="button"
          className="flex items-center text-black mr-3"
          onClick={handleFileIconClick}
        >
          <GoPaperclip className="text-blue-700" size={19} />
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFile}
          />
        </button>

        <button
          type="button"
          className="flex items-center text-black mr-3"
          onClick={() => setShowEmojis(!showEmojis)}
        >
          😊
        </button>

        {showEmojis && (
          <div className="bg-white border rounded-lg p-2 flex absolute bottom-16 left-15 z-10 transform -translate-x-4">
            <button className="emoji" onClick={() => handleEmojiSelect("😊")}>
              😊
            </button>
            <button className="emoji" onClick={() => handleEmojiSelect("😂")}>
              😂
            </button>
            <button className="emoji" onClick={() => handleEmojiSelect("😍")}>
              😍
            </button>
            <button className="emoji" onClick={() => handleEmojiSelect("🎉")}>
              🎉
            </button>
            <button className="emoji" onClick={() => handleEmojiSelect("💕")}>
              💕
            </button>
            <button className="emoji" onClick={() => handleEmojiSelect("👏")}>
              👏
            </button>
          </div>
        )}

        <div className="relative">
          <input
            type="text"
            className="border text-sm rounded-lg bottom-6 left-5 block p-2.5 w-[64vw] bg-white border-gray-600 text-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              backgroundImage: previewURL ? `url(${previewURL})` : "none",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              paddingLeft: previewURL ? "50px" : "8px",
            }}
          />
          {previewURL && (
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute left-12 top-1 bg-red-500 text-white rounded-full p-1"
            >
              X
            </button>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center bottom-5 left-1 text-black ml-3"
      >
        {loading ? (
          <div className="loading loading-spinner"></div>
        ) : (
          <BsSend className="text-blue-700" />
        )}
      </button>
    </form>
  );
};

export default MessageInput;
