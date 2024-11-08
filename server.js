"use strict";

const app = require("./app");
const { PORT } = require("./config");
const cors = require("cors");  // Import the CORS middleware

// Configure CORS to allow your frontend's origin
const corsOptions = {
  origin: "https://front-end-jobly.onrender.com",  // Allow this origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Use CORS middleware with your options
app.use(cors(corsOptions));

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
