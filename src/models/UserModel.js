const {mongoose} = require('../mongo')
const {Schema,model} = mongoose;

const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const UserSchema = new Schema({
    usuario: {type: String, unique: true, lowercase:true},
    contraseña: {type: String, select: false},
    nombre: String,
    apellidos: String,
    contacto: {
        direcciones:[
            {
                calle: String,
                ciudad: String,
                lat: String,
                long: String
            }
        ],
        telefonos:[
            {
                celular: String
            }
        ],
    },
    email: {type: String, unique: true},
    sexo: {
        type: String,
        enum: ['M','F']
    },
    fotoPerfil: String,
    fechaNacimiento: Date,
    fechaCreacion: {type: Date, default: Date.now()},
    tarjetasCredito: [
        {
            tarjeta: String,
            fechaVencimiento: String,
            cvv: String,
            tipo: String
        }
    ]
})

UserSchema.pre('save', function (next) {
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

UserSchema.methods.comparePassword = function (candidatePassword,cb){
    bcrypt.compare(candidatePassword, this.contraseña, (err,isMatch) => {
        cb(err,isMatch)
    })
};

UserSchema.methods.gravatar = function (size = 200) {
    if(!this.email) return `https://gravatar.com/avatar/?s${size}&d=retro`

    const md5 = crypto.createHash('md5').update(this.email).digest('hex');
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
}

module.exports = model('User',UserSchema)

/* const user = new User({
    name: 'Piero',
    lastName: 'Pozo'
})

user.save()
    .then(resp => {
        console.log(resp)
    })
    .catch
    (err => {
        console.log(err)
    })
 */