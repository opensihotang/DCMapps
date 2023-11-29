const bycript = require("bcryptjs")
const SALT = bycript.genSaltSync(10)

const hashPassword = (plainPassword) => {
    return bycript.hashSync(plainPassword, SALT)
}

//Compare password
const comparePassword = (plainPassword, hashedPassword) => {
    return bycript.compareSync(plainPassword, hashedPassword)
}

module.exports = { hashPassword, comparePassword }