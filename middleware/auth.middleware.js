import jwt from "jsonwebtoken";
import User from "../model/user.model.js"; // Assuming this is your user model

export const authenticateUser = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    // Check if token is present in the header and in the correct format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    const token = authHeader.split(" ")[1];

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user in the database and attach it to the request object (optional)
        const user = await User.findById(decoded.id).select("-password"); // Assuming you don't want the password

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user; // Attach the user data to the request object

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        // Check if it's an expired token error
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token expired, please log in again" });
        }
        return res.status(401).json({ message: "Invalid token, authorization denied" });
    }
};
