const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {

      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING(30),
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: true,
      },
      species: {
         type: DataTypes.STRING(30),
         allowNull: false,
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      image: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
   }, { timestamps: false });
};
