const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

// Helper to set cookie
const setTokenCookie = (res, token) => {
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // true in production
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  };
  res.cookie("token", token, cookieOptions);
};

// Get current user
const getUser = async (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "No token, unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) throw new Error("User not found");

    res.json({ user });
  } catch (err) {
    // Clear cookie if invalid/expired
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      expires: new Date(0),
      path: "/",
    });
    res.status(401).json({ msg: "Unauthorized", error: err.message });
  }
};

// Register & auto-login
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    setTokenCookie(res, token);

    res.status(201).json({ msg: "User registered & logged in successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

// Login user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ msg: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    setTokenCookie(res, token);

    res.status(200).json({ msg: `Welcome back, ${user.name.split(" ")[0]}!`, user });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Logout user
const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      expires: new Date(0),
      path: "/",
    });
    res.status(200).json({ msg: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

module.exports = { register, login, getUser, logout };
