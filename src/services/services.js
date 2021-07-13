const jwt = require('jwt-simple');
const moment = require('moment');

const {SECRET_TOKEN} = require('../config');

function createToken(actor){
    const payload = {
        sub: actor._id,
        iat: moment()._id,
        exp: moment().add(1,'days').unix()
    };

    return jwt.encode(payload,SECRET_TOKEN);
}

function decodeToken(token){
    const decoded = new Promise((resolve,reject) => {
        try{
            const payload = jwt.decode(token,SECRET_TOKEN);
            if(payload.exp <= moment().unix()){
                reject({
                    status: 401,
                    message: 'Token expired'
                })
            }
            resolve(payload.sub)
        }
        catch(err) {
            reject({
                status: 500,
                message: `Token Invalido ${err}`
            })
        }
    })
    return decoded
}

module.exports = {
    createToken,
    decodeToken
}