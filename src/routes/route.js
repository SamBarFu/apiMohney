const express = require("express");
const router = express.Router();
const connection = require("../db");

//controllers
const userController = require("../controllers/userController");
const incomeController = require("../controllers/incomeController");
const egressController =  require("../controllers/egressController");

//users
router.get('/api/v1/users', userController.index);
router.get('/api/v1/user/:id', userController.show);
router.post('/api/v1/user', userController.create);
router.put('/api/v1/user/:id', userController.update);
router.delete('/api/v1/user/:id', userController.delete);

//incomes
router.get('/api/v1/incomes', incomeController.index);
router.get('/api/v1/income/:id', incomeController.show);
router.post('/api/v1/income/:id', incomeController.create);
router.put('/api/v1/income/:id', incomeController.update);
router.delete('/api/v1/income/:id', incomeController.delete);

//egresss
router.get('/api/v1/egresses', egressController.index);
router.get('/api/v1/egress/:id', egressController.show);
router.post('/api/v1/egress/:id', egressController.create);
router.put('/api/v1/egress/:id', egressController.update);
router.delete('/api/v1/egress/:id', egressController.delete);

module.exports = router;