'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.User, {foreignKey : "authorId", onDelete : "cascade", onUpdate : "cascade"})
      Item.hasMany(models.Ingredient, { foreignKey:"itemId", onDelete : "cascade", onUpdate : "cascade", hooks:true})
      Item.belongsTo(models.Category, { foreignKey:"categoryId", onDelete : "cascade", onUpdate : "cascade"})
      // define association here
    }
  }
  Item.init({
    name:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Name is required"},
        notEmpty : { msg : "Name is required"}
      }
    },
    description:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Description is required"},
        notEmpty : { msg : "Description is required"}
      }
    },
    price: {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : { msg : "Price is required"},
        notEmpty : { msg : "Price is required"}
      }
    },
    imgUrl:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Image Url is required"},
        notEmpty : { msg : "Image Url is required"}
      }
    },
    authorId:  {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : { msg : "Author is required"},
        notEmpty : { msg : "Author is required"}
      }
    },
    categoryId:  {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : { msg : "Category is required"},
        notEmpty : { msg : "Category is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};