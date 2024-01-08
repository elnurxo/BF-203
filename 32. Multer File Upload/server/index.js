const express = require("express");
const app = express();
const port = 7070;
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const fs = require("fs");
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const lzutf8 = require('lzutf8');
app.use(cors());
app.use(bodyParser.json());

//static db
const arr = [];

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFolder = "./uploads/";
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder);
    }
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + path.extname(file.originalname));
  },
});

// File validation function
function fileFilter(req, file, cb) {
  const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Invalid file type");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }

  cb(null, true);
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB file size limit
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//users post request
app.post("/users", upload.single("imageFile"), (req, res) => {
  try {
    const username = req.body.username;
    // Check if a file was provided in the request
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    // Read the profile picture file
    const profilePictureData = fs.readFileSync(req.file.path, {
      encoding: "base64",
    });

    // const compressedData = lzutf8.compress(profilePictureData, { outputEncoding: 'Base64' });
    // Delete the uploaded file as it's already read
    fs.unlinkSync(req.file.path);

    const newUser = {
      username: username,
      profilePicture: profilePictureData,
    };

    arr.push(newUser);
    res.send({
      message: "File uploaded successfully!",
      data: newUser,
    });
  } catch (error) {
    console.error(error);

    // Handle specific file upload errors
    if (error.code === "LIMIT_FILE_TYPES") {
      return res
        .status(400)
        .json({ message: "Invalid file type. Allowed types: JPEG, PNG, MP4" });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/users',(req,res)=>{
  res.send({users: arr});
})

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
