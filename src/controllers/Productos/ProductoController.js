const {mongoose} = require('../../mongo');
const Producto = require('../../models/ProductoModel');

const All = async (req,res) => {
    const restauranteId = req.restaurante;
}
const Show = async (req,res) => {
    console.log('Show');
}
const Create = async (req,res) => {
    console.log('Create');
}
const Update = async (req,res) => {
    console.log('Update');
}
const Delete = async (req,res) => {
    console.log('Delete');
}

module.exports = {
    All,
    Show,
    Create,
    Update,
    Delete
}