const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const StudentComplaint = sequelize.define('studentcomplaint', {
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  complaint: {
        type: Sequelize.STRING,
                allowNull: true,
  },
  
});

module.exports = StudentComplaint;