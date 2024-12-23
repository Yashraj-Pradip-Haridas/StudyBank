require("dotenv").config()
const express = require("express")
const app =  express();
const port = process.env.PORT||5000
const mongoose = require('mongoose');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const File = require('./Model/FileSchema'); // Import the File model
const fs = require('fs');
const path = require('path');
const cors = require('cors')
app.use(cors());
app.use(express.json());

const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// app.use(express.urlencoded({}))


// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


  // Set up multer for file handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage });

  // File upload route to Cloudinary and save URL in MongoDB
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
  
      // Create a new file document in MongoDB with the Cloudinary URL
      const newFile = new File({
        url: result.secure_url, // Cloudinary file URL
        date:req.body.date,
        year:req.body.year,
        course: req.body.course
      });
  
      // Save the file document in MongoDB
      await newFile.save();
  
      res.json({
        message: 'File uploaded and saved successfully!',
        // fileUrl: result.secure_url // Send back the Cloudinary URL
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file');
    }
  });
  
// app.get("/listing", (req,res)=>{

// })

app.get("/", (req,res)=>{
    res.send("server is working successfully")
})

app.listen(port, ()=>{
    console.log("Server listening at port 3000")
})