const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const studentapplications = sequelize.define('studentapplications', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  applications:{
    type: Sequelize.STRING,
    
  },
  
});

module.exports = studentapplications;