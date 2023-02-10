const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
const Sequelize = require('sequelize');
const sequelize = require("../util/db")

//onst db = require("./db");

const Student =sequelize.define('student', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    isUnique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.ENUM,
    values: ["Male", "Female", "Others"],
  },
  stream: {
    type: Sequelize.STRING,
  },
  roll: {
    type: Sequelize.INTEGER,
  },
  year: {
    type: Sequelize.STRING,
  },
  session_from: { type: Sequelize.STRING, allowNull: true },
  session_to: { type: Sequelize.STRING, allowNull: true },

  phoneNo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      validator: function (v) {
        return phoneValidationRegex.test(v);
      },
    },
  },
  gurdianName: {
    type: Sequelize.STRING,
  },

  gurdianphone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      validator: function (v) {
        return phoneValidationRegex.test(v);
      },
    },
  },
  
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pincode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  roomNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Student;
