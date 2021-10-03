const express = require("express");
const { json } = require("express");
const app = express();

const morgan = require("morgan");

// Importing routes
const projectsRoutes = require("./routes/projects.routes");
const tasksRoutes = require("./routes/tasks.routes");

// Middlewares
app.use(morgan("dev"));
app.use(json());

// Routes
app.use("/api/projects", projectsRoutes);
app.use("/api/tasks", tasksRoutes);

module.exports = app;
