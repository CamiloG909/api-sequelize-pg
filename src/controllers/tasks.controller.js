const tasksController = {};

const Task = require("../models/Tasks");

tasksController.createTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  const response = await Task.create(
    {
      name,
      done,
      projectid,
    },
    {
      fields: ["name", "done", "projectid"],
    }
  );

  res.json(response);
};

tasksController.getTasks = async (req, res) => {
  const response = await Task.findAll({
    order: [["id", "DESC"]],
  });

  res.json({
    data: response,
  });
};

tasksController.getTask = async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(task);
};

tasksController.updateTask = async (req, res) => {
  const { name, done, projectid } = req.body;

  const id = req.params.id;

  const response = await Task.findOne({
    attributes: ["name", "done", "projectid"],
    where: id,
  });

  const updatedTask = await Task.update(
    {
      name,
      done,
      projectid,
    },
    { where: id }
  );

  res.json({
    message: "Deleted",
  });
};

tasksController.deleteTask = async (req, res) => {
  await Task.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json({
    message: "Deleted successfully",
  });
};

tasksController.getTaskByProject = async (req, res) => {
  const response = await Task.findAll({
    where: {
      projectid: req.params.id,
    },
  });

  res.json(response);
};

module.exports = tasksController;
