const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Movement = sequelize.define('movement', {
 
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  MoveOut_Time:{
    type: Sequelize.STRING, allowNull: true
    },
  MoveIn_Time:{
    type: Sequelize.STRING, allowNull: true
        },
  movement_location:{
          type: Sequelize.STRING, allowNull:true
              },
});

module.exports = Movement;