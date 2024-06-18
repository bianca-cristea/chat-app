import express from "express";
import authorization from "../middlewares/authorization.js";
import { getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/", authorization, getUsers);

export default router;
