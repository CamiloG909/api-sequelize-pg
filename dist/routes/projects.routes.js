"use strict";

const {
  Router
} = require("express");

const router = Router();

const {
  getProjects,
  createProject,
  getProject,
  deleteProject,
  editProject
} = require("../controllers/projects.controller");

router.route("/").get(getProjects).post(createProject);
router.route("/:id").get(getProject).delete(deleteProject).put(editProject);
module.exports = router;