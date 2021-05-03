/* const sequilize = require('sequelize'); */
const Egress = require('../models/egress');

module.exports = {
    index: async (req, res)=>{
        res.json('get all egresses');
    },
    show: async (req, res)=>{
        res.json('show egress');
    },
    create: async (req, res)=>{
        res.json('create egress');
    },
    update: async (req, res)=>{
        res.json('update egress');
    },
    delete: async (req, res)=>{
        res.json('delete egress');
    }
}