import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../config/webpack.dev'
import {mongoose} from './mongo'

const app = express();
/*
app.get('/',(request, response ) => {
    response.send('<h1>Hola Mundo</h1>')
})
*/
const port_number = process.env.PORT || 3001

//Middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.json());

//Routes
app.use('/api/', require('./routes/routes'));

//Iniciando el Servidor 
app.listen(port_number, () => {
    console.log(`Server running on port ${port_number}`);
})