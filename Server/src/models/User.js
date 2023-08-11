const { DataTypes } = require('sequelize');

 const UserModel = (sequelize) => {
   sequelize.define('User', {
      id:{ 
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false,
         autoIncrement: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false, 
         unique: true,
         isEmail:true
      },
      password: {
         type: DataTypes.STRING,
         allowNull:false,
         // set(val){this.setDataValue("password",bcryptjs.hashSync(val))
         // this},
         // get(){return null}
         //El códio arriba, cifra la constraseña para que se envie de forma mas segura
      }
   }, { timestamps: false });
};

module.exports = UserModel;