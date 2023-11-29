'use strict';
const { hashPassword } = require("../helpers/bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Item, {foreignKey : "authorId", onDelete : "cascade", onUpdate : "cascade"})
      // define association here
    }
  }
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Username is required"},
        notEmpty : { msg : "Username is required"}
      }
    },

    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : { msg : "Email must be unique"},
      validate : {
        isEmail : { msg : "Input valid email"},
        notNull : { msg : "Email is required"},
        notEmpty : { msg : "Email is required"}
      }
    },

    password:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Password is required"},
        notEmpty : { msg : "Password is required"}
      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};