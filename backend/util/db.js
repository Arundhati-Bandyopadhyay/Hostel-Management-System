const Sequelize = require('sequelize');


  const sequelize = new Sequelize('hosteldb', 'sqluser', 'Arundhati@58', {
    dialect: 'mysql',
    host: 'localhost'
  });
  
  sequelize.authenticate().then(()=>{
      console.log('Connection has been established successfully.');
  }).catch((err)=>{
      console.log(err);
  })
  



module.exports = sequelize;
