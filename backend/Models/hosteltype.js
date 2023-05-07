const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Hostel = sequelize.define('hosteltypes', {
    hosteltype: {
        type: Sequelize.ENUM,
        values: ["GIRLS","BOYS"]
        
      },

 
});

module.exports = Hostel;