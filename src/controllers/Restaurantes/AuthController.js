const {mongoose} = require('../../mongo');
const Restaurante = require('../../models/RestauranteModel');
const service = require('../../services/services');

const registro = async (req, res) => {
    const {
        nombre,
        email,
        contraseña,
        locales,
     } = req.body;
     if(nombre && email && contraseña && locales) {
        await Restaurante.findOne({email: email}, (err,restaurante) =>{
            if(err){
                return res.status(500).json({
                    message: 'Algo salio mal, intente mas tarde'
                });
            }
            if(restaurante){
                return res.status(400).json({
                    message: 'Ya existe un usuario con el mismo email'
                });
            }
            if(!restaurante){
                const restaurante = new Restaurante({
                    nombre: nombre,
                    email: email,
                    contraseña: contraseña,
                    locales: locales,
                });
                restaurante.save((err) => {
                    if(err) res.status(500).send({message: `Error al crear el restaurante: ${err}`});
                    return res.status(201).send({message: 'Restaurante creado',token: service.createToken(restaurante)});
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
        email,
        contraseña,
     } = req.body;
    await Restaurante.findOne({ email: email}, (err, restaurante) => {
        //Si falla la busqueda
        if(err) return res.status(500).send({message: `Error1: ${err}`})
        //Si no encuentra ningun restaurante
        if(!restaurante) return res.status(404).send({message: 'Restaurante no encontrado'})
        
        return restaurante.comparePassword( req.body.contraseña,restaurante.contraseña, (err,isMatch) => {
            //Si se produce un error
            if (err) return res.status(500).send({message: `Error2: ${err}`})
            //Si no coincide la contraseña con el email ingresado
            if(!isMatch) return res.status(404).send({message: 'Contraseña incorrecta '})
            //Si los datos ingresados son correctos
            if(isMatch) {
                req.restaurante = restaurante;
                return res.status(200).send({
                    message: 'Inicio de sesión exitoso',
                    token: service.createToken(restaurante)
                })
            };
        })
    }).select('_id email contraseña');
}

module.exports = {
    registro,
    login
}