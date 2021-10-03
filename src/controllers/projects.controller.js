const projectsController = {};

const Project = require("../models/Projects");

projectsController.getProjects = async (req, res) => {
  const projects = await Project.findAll();
  res.json({
    data: projects,
  });
};

projectsController.createProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;

  try {
    const newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate,
      },
      {
        fields: ["name", "priority", "description", "deliverydate"],
      }
    );

    if (newProject) {
      res.json({
        message: "Project created successfully",
        data: newProject,
      });
    }
  } catch (e) {
    res.json({
      message: "Error",
    });
  }
};

projectsController.getProject = async (req, res) => {
  const project = await Project.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.json(project);
};

projectsController.deleteProject = async (req, res) => {
  const response = await Project.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json({
    message: "Deleted successfully",
    count: response,
  });
};

projectsController.editProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;

  const project = await Project.findAll({
    attributes: ["id", "name", "priority", "description", "deliverydate"],
    where: {
      id: req.params.id,
    },
  });
  // Actualizar
  if (project.length > 0) {
    project.forEach(async (e) => {
      await e.update({
        name,
        priority,
        description,
        deliverydate,
      });
    });
  }

  return res.json({
    message: "Project updated successfully",
    data: project,
  });
};

module.exports = projectsController;
