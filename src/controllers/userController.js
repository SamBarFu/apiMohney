/* const sequelize = require('../db.js'); */
const User = require('../models/user');

module.exports = {
    index: async (req, res) => {

        const users = await User.findAll();
        res.json(users);

    }, 
    show: async (req, res) => {

        const {id} = req.params;
        const user = await User.findByPk(id);

        if(user === null){
            console.log('Not found');
            res.json('Not found');
        }else{
            res.json(user);
        }
    },
    create: async (req, res) => {

        const user = await User.build(req.body);

        user.save().then(()=>{
            res.json('user created successfully :)');
        }).catch((error)=>{
            console.log('error:', error);
            res.json('error');
        });        
    },
    update: async (req, res) => {

        const {id} = req.params; 
        const {firstName, lastName, email, password} = req.body;
        const user = await User.findByPk(id);

        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;

        user.save().then(()=>{
            res.json('user updated successfully :)');
        }).catch((error)=>{
            console.log('error:', error);
            res.json('error');
        });
    }, 
    delete: async (req, res) => {
        res.json('Method: delete');
    }, 
}