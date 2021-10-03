const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Task = require("./Tasks");

const Project = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    delivery_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

Project.hasMany(Task, { foreignKey: "projectid", sourceKey: "id" });
Task.belongsTo(Project, { foreignKey: "projectid", sourceKey: "id" });

module.exports = Project;
