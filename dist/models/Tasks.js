"use strict";

const Sequelize = require("sequelize");

const sequelize = require("../database/database");

const Task = sequelize.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT
  },
  done: {
    type: Sequelize.INTEGER
  },
  projectid: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
module.exports = Task;