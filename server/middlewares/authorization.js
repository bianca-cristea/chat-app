import jwt from "jsonwebtoken";
import User from "../models/user.js";

const authorization = async (req, res, next) => {
  try {
    //extragere token din cookie
    const token = req.cookies.token;

    if (!token)
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });

    //se decodifica tokenul utilizand cheia secreta si se verifica daca tokenul e valid sau a expirat
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });

    //cauta in baza de date utilizatorul id-ului extras din decoded
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }

    //userul autentificat la momentul actual
    //ne asiguram ca informatiile despre utilizator sunt disponibile global in cadrul cererii
    req.user = user;

    next();
  } catch (error) {
    console.log("Error in authorization middleware");
    return res.status(500).json({
      error: "Server error",
    });
  }
};

export default authorization;
