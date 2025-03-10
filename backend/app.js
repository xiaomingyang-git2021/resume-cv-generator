const express = require("express");
const app = express();

// 忽略 favicon.ico 请求
app.get("/favicon.ico", (req, res) => res.status(204).end());

// middleware
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("AI Resume/CV Generator Backend");
});

module.exports = app;
