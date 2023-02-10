const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/;
const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const Admin = sequelize.define("admin",{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
        }
  },
  password: {
    type: Sequelize.STRING,
  },
  phoneNo: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      validator: function (v) {
        return phoneValidationRegex.test(v);
      },
    },
  },
});

module.exports = Admin;
