import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const onlineUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(onlineUsers);
  } catch (error) {
    console.log("Error in getUsers controller");
    res.status(500).json({ error: "Server error" });
  }
};
