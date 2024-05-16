import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  //create a token (userId is the payload=info embedded in the token)
  //JWT_SECRET is the key to sign the token

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  //we set the token in cookie
  res.cookie("token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateToken;
