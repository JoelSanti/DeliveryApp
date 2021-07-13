const {mongoose} = require('../mongo')
const {Schema,model} = mongoose;

const ProductoSchema = new Schema({
    nombre: {type: String, unique: true},
    descripcion: String,
    fotos: Array,
    precios: [
        {
            precio: Number,
            idRestaurante: {type: Schema.Types.ObjectId, ref: 'Restaurante' }
        }
    ],
    tipoComida: {type: Schema.Types.ObjectId, ref: 'Categoria' }
})

module.exports = mongoose.model('Producto',ProductoSchema);