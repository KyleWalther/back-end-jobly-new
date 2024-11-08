"use strict";

const app = require("./app");
const { PORT } = require("./config");
const cors = require("cors");  // Import the CORS middleware

// Define the CORS options
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3000",  // Local development
      "https://front-end-jobly.onrender.com",  // Deployed frontend on Render
    ];

    // Check if the request's origin is in the allowedOrigins list
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// Apply CORS middleware with your options
app.use(cors(corsOptions));

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
