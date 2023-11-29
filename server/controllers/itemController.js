const { Item, Ingredient, Category, User, sequelize } = require("../models");

class ItemController {
  static async postItem(req, res, next) {
    const { name, description, price, imgUrl, categoryId, ingredient } =
      req.body;
    // console.log(req.user, "ini testtt");
    console.log(req.body);
    console.log(ingredient);
    const trx = await sequelize.transaction();
    try {
      const newItem = await Item.create(
        { name, description, price, imgUrl, authorId: req.user.id, categoryId },
        { transaction: trx }
      );

      await Ingredient.bulkCreate(
        ingredient.map((ingredientName) => ({
          name: ingredientName,
          itemId: newItem.id,
        })),
        { transaction: trx }
      );
      await trx.commit();
      res.status(201).json({ newItem });
    } catch (err) {
      next(err);
      console.log(err);
      await trx.rollback();
    }
  }

  static async getItemList(req, res, next) {
    try {
      const Items = await Item.findAll({
        include: [Category, User],
        order: [["id", "ASC"]],
      });
      res.status(200).json(Items);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      console.log(id);
      const item = await Item.findByPk(id, {
        include: [User, Category],
      });
      if (!item) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json(item);
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const {
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
        ingredients,
      } = req.body;
      // console.log(req.body);
      const [updatedItem] = await Item.update(
        { name, description, price, imgUrl, authorId, categoryId, ingredients },
        { where: { id } }
      );

      if (!updatedItem) {
        throw { name: "Not Found" };
      }
      res.status(200).json({
        message: `Item with id : ${id}, has been updated`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteItemById(req, res, next) {
    try {
      const { id } = req.params;
      const deletedItem = await Item.destroy({
        where: {
          id: id,
        },
      });
      if (!deletedItem) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json({
          message: `Item with id : ${id}, succes to delete`,
        });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async postCategory(req, res, next) {
    const { name } = req.body;
    try {
      const newCategory = await Category.create({
        name,
      });
      res.status(201).json({
        newCategory,
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async getCategoryList(req, res, next) {
    try {
      const categories = await Category.findAll();
      // console.log(categories);
      res.status(200).json(categories);
    } catch (err) {
      next(err);
      console.log(err, "ini error kategori");
    }
  }

  static async getCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      //   console.log(id);
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json({
          category,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async updateCategory(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      // console.log(req.body);
      const [updatedCategory] = await Category.update(
        { name },
        { where: { id } }
      );

      if (!updatedCategory) {
        throw { name: "Not Found" };
      }
      res.status(200).json({
        message: `Category with id : ${id}, has been updated`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const deletedCategory = await Category.destroy({
        where: {
          id: id,
        },
      });
      if (!deletedCategory) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json({
          message: `Category with id : ${id}, succes to delete`,
        });
      }
    } catch (err) {
      next(err);
    }
  }

  static async getCustomerItemList(req, res, next) {
    try {
      const Items = await Item.findAll({
        include: [Category, User, Ingredient],
        order: [["id", "ASC"]],
      });
      res.status(200).json(Items);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async getCustomerItemById(req, res, next) {
    try {
      const { id } = req.params;
      // console.log(id);
      const item = await Item.findByPk(id, {
        include: [User, Category, Ingredient],
      });
      if (!item) {
        throw { name: "Not Found" };
      } else {
        res.status(200).json(item);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ItemController;
