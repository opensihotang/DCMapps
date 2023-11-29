'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Item, { foreignKey:"categoryId", onDelete : "cascade", onUpdate : "cascade"})
      // define association here
    }
  }
  Category.init({
    name:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Category is required"},
        notEmpty : { msg : "Category is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};