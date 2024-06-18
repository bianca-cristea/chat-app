import Conversation from "../models/conversation.js";
import Message from "../models/message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import multer from "multer";

const upload = multer();

export const sendMessage = [
  upload.single("file"),
  async (req, res) => {
    try {
      const { id: recipientId } = req.params;
      const senderId = req.user._id;

      if (!recipientId || !senderId) {
        return res
          .status(400)
          .json({ error: "Recipient and sender IDs are required" });
      }

      let message;
      let messageType;

      if (req.file) {
        message = req.file.buffer.toString("base64");
        messageType = "file";
      } else if (req.body.content) {
        message = req.body.content;
        messageType = "text";
      } else {
        return res.status(400).json({ error: "Content is required" });
      }

      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, recipientId] },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, recipientId],
        });
      }

      const newMessage = new Message({
        senderId,
        recipientId,
        message,
        messageType,
      });

      conversation.messages.push(newMessage._id);

      await Promise.all([conversation.save(), newMessage.save()]);

      const receiverSocketId = getReceiverSocketId(recipientId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("newMessage", newMessage);
      }

      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Server error" });
    }
  },
];

export const receiveMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in receiveMessage controller ", error.message);
    res.status(500).json({
      error: "Server error",
    });
  }
};
