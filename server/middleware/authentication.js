const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models")

const authentication = async function(req, res, next){
    try {
        const { access_token } = req.headers
        console.log(access_token);

        if(!access_token) {
            throw { name : "unauthenticated"}
        }
        const decoded = verifyToken(access_token)

        const findUser = await User.findOne({
            where : {
                id : decoded.id,
                email : decoded.email
            }
        })
        if(!findUser){
            throw { name : "unauthenticated" }
        }
        req.user = {
            id : findUser.id,
            username : findUser.username,
            role : findUser.role
        }
    } catch (err) {
        console.log(err);
        next(err)

    } next()
}

module.exports = authentication