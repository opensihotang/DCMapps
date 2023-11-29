const { User } = require("../models")
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class UserController { 
    static async postUser(req, res, next){
        const {username, email, password, role, phoneNumber, address} = req.body
        console.log(req.body);
        try{
            const newUser = await User.create({
                username, email, password, role : "staff", phoneNumber, address
            })
            res.status(201).json({
                username : newUser.username,
                email : newUser.email,
                role : newUser.role,
                phoneNumber : newUser.phoneNumber,
                address : newUser.address
            })
        } catch (err){
            next(err)
        }
    }

    static async handleLogin(req, res, next){
        try {
            const {email, password} = req.body
            // console.log(req.body);
            const user = await User.findOne({
                where : {
                    email 
                }
            })
            if(!user){
                throw { name : "Invalid Login" }
            }

            const isValidPassword = comparePassword(password, user.password)
            if(!isValidPassword){
                throw { name : "Invalid Login" }
            }

            //generate JWT
            const accessToken = signToken({
                id : user.id,
                email : user.email
            })
            res.status(200).json(
                accessToken
            )
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async getUsers(req, res, next){
        try {
            const users = await User.findAll()
            res.status(200).json({
                users
            })
        } catch (err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
    }

    static async getUserById(req, res, next){
        try {
            const {id} = req.params
            const user = await User.findByPk(id)
            if (!user){
                throw { name : "Not Found"}
            } else {
                    res.status(200).json({
                        user
                    })
            }
        } catch (err){
            next(err)
        }
    }

    static async deleteUser(req, res, next){
        try {
            const {id} = req.params
            const deletedUser = await User.destroy({
                where : {
                    id : +id
                }
            })
            if(!deletedUser){
                throw {name : "User not found"}
            } else {
                res.status(200).json({
                    message : `User with id : ${id}, succes to delete`
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController