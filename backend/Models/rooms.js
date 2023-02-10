const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Rooms = sequelize.define('room', {
    roomNo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
  
});

module.exports = Rooms;