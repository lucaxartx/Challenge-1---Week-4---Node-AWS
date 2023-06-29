const express = require('express');
const router = express.Router();
const {createNewUser,getUserViaId,listUsers}=require('./user_controller')


router.post('/users',createNewUser);
router.get('/users/:id',getUserViaId);
router.get('/users',listUsers);


module.exports = router;
