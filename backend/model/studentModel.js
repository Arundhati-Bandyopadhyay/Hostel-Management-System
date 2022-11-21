const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/
module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        isUnique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      roomNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["Male", "Female", "Others"],
      },
      stream: {
        type: DataTypes.STRING,
      },
      roll: {
        type: DataTypes.INTEGER,
      },
      year: {
        type: DataTypes.STRING,
      },
      session_from: { type: DataTypes.STRING, allowNull: true },
      session_to: { type: DataTypes.STRING, allowNull: true },

      
      phoneNo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validator: function(v) {
                return phoneValidationRegex.test(v); 
            },
        }
    },
      gurdianName: {
        type: DataTypes.STRING,
      },
       
      gurdianphone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        validator: function(v) {
            return phoneValidationRegex.test(v); 
        },
    }
},

      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
    },

    {
      sequelize,
      modelName: "Student", // We need to choose the model name
    }
  );

  return User;
};
 