const express = require("express");
const userController = require("../controllers/userController");
const authentication = require("../middleware/authentication");
const itemController = require("../controllers/itemController");
const router = express.Router()

router.post("/login", userController.handleLogin)
router.get("/pub/items", itemController.getCustomerItemList)
router.get("/pub/items/:id", itemController.getCustomerItemById)


router.use(authentication) 
router.post("/register", userController.postUser)

router.post("/items", itemController.postItem)
router.get("/items", itemController.getItemList)
router.get("/items/:id", itemController.getItemById)
router.put("/items/:id", itemController.updateItem)
router.delete("/items/:id", itemController.deleteItemById)

router.post("/categories", itemController.postCategory)
router.get("/categories", itemController.getCategoryList)
router.get("/categories/:id", itemController.getCategoryById)
router.put("/categories/:id", itemController.updateCategory)
router.delete("/categories/:id", itemController.deleteCategoryById)






module.exports = router