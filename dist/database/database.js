"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("apisequelize", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
  port: 8081,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
module.exports = sequelize;