const {mongoose} = require('../mongo')
const {Schema,model} = mongoose;

const CategoriaSchema = new Schema({
    nombre: String,
    foto: String,
    tipoComida: {
        type: String,
        enum: ['MARINA','ORIENTAL','COMIDA RAPIDA','PARRILLAS']
    }
});

module.exports = model('Categoria',CategoriaSchema);
