const express = require('express');
const router = express.Router();
const {createUser}=require('./user_controller')
router.post('/users',createUser);






module.exports = router;
