
const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/ 
module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        validator: function(v) {
            return phoneValidationRegex.test(v); 
        },
    }
}
    },
    {
      sequelize,
      modelName: "AdminTableDb", // We need to choose the model name
    }
  );
  return User;
};
