const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");

// Serve static files from the "public" folder
app.use(express.static("public"));

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});
// Add a route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// Add a route to return a list of file names in the "uploads" folder
app.get("/files", (req, res) => {
  fs.readdir("./public/uploads", (err, files) => {
    if (err) {
      res.send("Error reading files");
    } else {
      res.json(files);
    }
  });
});

// Add a route to download a file
app.get("/download/:filename", (req, res) => {
  const filename = req.params.filename;
  res.download(`./public/uploads/${filename}`, (err) => {
    if (err) {
      res.send("Error downloading file");
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
