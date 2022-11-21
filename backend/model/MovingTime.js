module.exports = (sequelize, DataTypes, Model) => {
   // class User extends Model {}

    const User = sequelize.define("MovingTime", {
       //id:{type: DataTypes.STRING, allowNull: false,primaryKey: true},
        MoveOut_Time:{
        type: DataTypes.STRING, allowNull: true
        },
        MoveIn_Time:{
        type: DataTypes.STRING, allowNull: true
            },
         movement_location:{
              type: DataTypes.STRING, allowNull:true
                  },
      });
      return User;

    }


   