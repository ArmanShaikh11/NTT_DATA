import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, email, company, jobTitle } = req.body || {};

    if (!fullName || !email || !company || !jobTitle) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Prevent duplicate registrations
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already registered." });
    }

    const user = await User.create({ fullName, email, company, jobTitle });
    return res.status(201).json({
      message: "Registration successful",
      user: { id: user._id, fullName: user.fullName, email: user.email },
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
