import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const router = express.Router();


// 🟢 REGISTER
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "User exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 🟢 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;