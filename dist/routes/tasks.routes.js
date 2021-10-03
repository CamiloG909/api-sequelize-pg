"use strict";

const {
  Router
} = require("express");

const router = Router();

const {
  getTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getTaskByProject
} = require("../controllers/tasks.controller");

router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
router.get("/project/:id", getTaskByProject);
module.exports = router;