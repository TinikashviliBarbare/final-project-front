import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {

  try {

    console.log(req.body);

    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password
    ) {
      return res.status(400).json({
        message:"Fill all fields"
      });
    }

    const exist =
    await User.findOne({
      email
    });

    if(exist){

      return res.status(400).json({
        message:"User exists"
      });

    }

    const user =
    await User.create({
      firstName,
      lastName,
      email,
      password
    });

    res.status(201).json(user);

  }

  catch(err){

    console.log(err);

    res.status(500).json({
      error:err.message
    });

  }

});

export default router;