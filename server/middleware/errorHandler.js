const errorHandler = (err, req, res, next) => {
    let status = 500
    let message = "Internal Server Error"

    switch (err.name) {
        case "SequelizeValidationError" :
             status = 400
             message = {
                // name : "Validation Error",
                errors : err.errors.map(el => el.message)
            }
            break;
        case "SequelizeUniqueConstraintError" :
            status = 400
            message = {
                errors : err.errors.map(el => el.message)
            }
            break;
        case "Invalid Login" :
            status = 401
            message = "Invalid Login"
            break;
        case "Not Found" :
            status = 404
            message = "Data Not Found"
            break;  
        case "Forbidden" :
            status = 403
            message = "Unauthorized"
        default:
            break;
    }
    res.status(status).json({message})
}

module.exports = errorHandler