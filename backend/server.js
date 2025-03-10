const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { createJob } = require("./controllers/jobController");
const router = require("./routes/jobRoutes");
const Job = require("./models/Job");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();
app.use(
   cors({
       origin: "*",
       credentials: true, // Allow sending cookies & headers
       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow all methods
       allowedHeaders: ["Content-Type", "Authorization"], // Allow headers
   })
// cors()
);

// Middleware
app.use(express.json());

// Handle Preflight Requests (Fix)
app.options("*", cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs",require("./routes/jobRoutes"))
// app.get("/",(req,res)=>{
//     return res.send("hello");
// })

// app.post("/api/jobs", async (req, res) => {
//     try {   
//       console.log("Received job data:", req.body);
  
//       const { title, description, company, location, salary } = req.body;
//       if (!title || !description || !company || !location) {
//         return res.status(400).json({ message: "All fields except salary are required" });
//       }
  
//       const newJob = new Job({ title, description, company, location, salary });
//       await newJob.save();
//       res.status(201).json({ message: "Job posted successfully", job: newJob });
//     } catch (error) {
//       console.error("Error saving job:", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));













// const express = require('express');
// const connectDB = require('./config/db');
// require('dotenv').config();

// const app = express();
// connectDB(); // Connect to MongoDB

// app.use(express.json());

// app.listen(5000, () => console.log('Server running on port 5000'));

// // mandeidra18
// //8y23NmIZVS4EOS7P