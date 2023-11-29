'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredient.belongsTo(models.Item, { foreignKey : "itemId", onDelete : "cascade", onUpdate : "cascade", hooks:true})
      // define association here
    }
  }
  Ingredient.init({
    itemId:  {
      type : DataTypes.INTEGER,
      allowNull : false,
      validate : {
        notNull : { msg : "Item is required"},
        notEmpty : { msg : "Item is required"}
      }
    },
    name:  {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : { msg : "Name is required"},
        notEmpty : { msg : "Name is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};