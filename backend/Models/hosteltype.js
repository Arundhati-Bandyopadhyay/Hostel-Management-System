const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Hostel = sequelize.define('hosteltype', {
  hostelType: {
    type: Sequelize.ENUM,
    values: ["Girls", "Boys"],
  },
  
});

module.exports = Hostel;