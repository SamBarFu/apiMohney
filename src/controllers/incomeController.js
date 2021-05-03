/*const sequilize = require('../db.js');*/
const income = require('../models/income');

module.exports = {
    index: async (req, res) => {
        res.json('get all incomes');
    },
    show: async (req, res) => {
        res.json('show income');
    },
    create: async (req, res) => {
        res.json('create income');
    },
    update: async (req, res) => {
        res.json('update income');
    }, 
    delete: async (req, res) => {
        res.json('delete income');
    }
}