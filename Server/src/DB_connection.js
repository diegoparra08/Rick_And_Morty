const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DB_URL } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');


// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty cuando la DB es local no deploy
// `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`, //trae la info de forma mas segura.
const sequelize = new Sequelize(
   DB_URL, { 
      logging: false,
      native: false 
   });


//ejecutar la función de los modelos.
UserModel(sequelize);

FavoriteModel(sequelize);

// Relacion de modelos
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'UserFavorite', timestamps: false})
Favorite.belongsToMany(User, {through: 'UserFavorite', timestamps: false});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
