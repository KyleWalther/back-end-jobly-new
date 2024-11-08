"use strict";

const app = require("./app");
const { PORT } = require("./config");
const cors = require("cors");  // Import the CORS middleware

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:3000",    // Local dev
      "https://front-end-jobly.onrender.com",  // Production (Render)
    ];

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// Use CORS middleware with your options
app.use(cors(corsOptions));

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
