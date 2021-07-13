const {mongoose} = require('../mongo')
const {Schema,model} = mongoose;

const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const RestauranteSchema = new Schema({
    nombre: String,
    email: {type: String, unique: true},
    contraseña: {type: String, select: false},
    descripcion: String,
    locales: [
        {
            direccion: {
                calle: String,
                ciudad: String,
                lat: String,
                long:String
            },
            telefonos:[
                {
                    celular: String
                }
            ],
            foto: Array
        }
    ]
})

RestauranteSchema.pre('save', function (next) {
    if(!this.isModified('contraseña')) return next();

    bcrypt.genSalt(10, (err,salt) => {
        if (err) return next(err)

        bcrypt.hash(this.contraseña, salt, null, (err,hash) => {
            if(err) return next(err);

            this.contraseña = hash;
            next();
        })
    })
});

RestauranteSchema.methods.comparePassword =  (candidatePassword,truePassword,cb) => {
    bcrypt.compare(candidatePassword, truePassword, (err,isMatch) => {
        cb(err,isMatch)
    })
};

module.exports = mongoose.model('Restaurante', RestauranteSchema)