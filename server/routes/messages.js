import express from "express";
import { sendMessage, receiveMessage } from "../controllers/messages.js";
import authorization from "../middlewares/authorization.js";

const router = express.Router();

router.get("/receive/:id", authorization, receiveMessage);
router.post("/send/:id", authorization, sendMessage);

export default router;
