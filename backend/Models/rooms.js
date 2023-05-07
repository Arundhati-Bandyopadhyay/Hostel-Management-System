const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Rooms = sequelize.define('room', {
    roomNo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

  chair:{
    type: Sequelize.INTEGER,
        allowNull: true,
  },
  table:{
    type: Sequelize.INTEGER,
        allowNull: false,
  },
  bed:{
    type: Sequelize.INTEGER,
        allowNull: false,
  },
  wardrobe:{
    type: Sequelize.INTEGER,
        allowNull: false,
  },
  light:{
    type: Sequelize.INTEGER,
        allowNull: false,
  },
  fan:{
    type: Sequelize.INTEGER,
        allowNull: false,
  },
  
});

module.exports = Rooms;