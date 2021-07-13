const mongoose = require('mongoose');
const password = require('./config')
const connectionString = `mongodb+srv://piero:Hwufcpam@cluster0.l2lmm.mongodb.net/deliveryApp?retryWrites=true&w=majority`
const {Schema} = mongoose;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then( () => {
        console.log('Base de Datos conectado');
    }).catch( err => {
        console.log(err)
    })

module.exports = {
    mongoose
}
 