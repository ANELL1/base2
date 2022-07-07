const jwt = require ('jsonwebtoken')

const jsonwebtoken =(email,password)=>{
    const payload = {
        email,
        password
    }

    return jwt.sign(
        payload,'shh'
    )
}
module.exports = {
    jsonwebtoken
}