const {mongoose} = require('../../mongo');
const User = require('../../models/UserModel');
const service = require('../../services/services');

const registro = async (req, res) => {
    const {
        usuario,
        contraseña,
        nombre,
        apellidos,
        contacto,
        email,
        sexo,
        fotoPer,
        fechaNacimiento,
    } = req.body;
    if(
        usuario &&
        contraseña &&
        nombre &&
        apellidos &&
        email &&
        sexo &&
        fechaNacimiento
    ) {
        await User.findOne({email: email}, (err,user) =>{
            if(err){
                return res.status(500).json({
                    message: 'Algo salio mal, intente mas tarde'
                });
            }
            if(user){
                return res.status(400).json({
                    message: 'Ya existe un usuario con el mismo email'
                });
            }
            if(!user){
                const nuevoUsuario = new User({
                    usuario : usuario,
                    contraseña : contraseña,
                    nombre : nombre,
                    apellidos : apellidos,
                    contacto : contacto,
                    email : email,
                    sexo : sexo,
                    fotoPer : fotoPer,
                    fechaNacimiento : fechaNacimiento,
                });
                nuevoUsuario.save((err) => {
                    if(err) res.status(500).send({message: `Error al crear el usuario: ${err}`});
                    return res.status(201).send({message: 'Registro exitoso',token: service.createToken(nuevoUsuario)});
                });
            }
        })
    }
    else{
        return res.status(400).send({message: `Datos incompletos ${req.body}`   })
    }
}

const login = async (req, res) =>{
    const {
        usuario,
        contraseña,
     } = req.body;
    if( usuario && contraseña ){
        await User.findOne({ usuario: usuario}, (err, user) => {
            //Si falla la busqueda
            if(err) return res.status(500).send({message: `Error1: ${err}`})
            //Si no encuentra ningun restaurante
            if(!user) return res.status(404).send({message: 'Usuario no encontrado'})
            console.log(user.contraseña)
            
            return user.comparePassword( req.body.contraseña, (err,isMatch) => {
                //Si se produce un error
                if (err) return res.status(500).send({message: `Error2: ${err}`})
                //Si no coincide la contraseña con el email ingresado
                if(!isMatch) return res.status(404).send({message: 'Contraseña incorrecta '})
                //Si los datos ingresados son correctos
                if(isMatch) {
                    req.user = user;
                    return res.status(200).send({
                        message: 'Inicio de sesión exitoso',
                        token: service.createToken(user)
                    })
                };
            })
        }).select('_id usuario contraseña');
    }
    else{
        return res.status(400).send({message: `Datos incompletos ${JSON.stringify(req.body)}`   })
    }
}

module.exports = {
    registro,
    login
}