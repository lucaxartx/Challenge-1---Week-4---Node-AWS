const express = require('express');
const router = express.Router();
const {createUser,getUserViaId}=require('./user_controller')


router.post('/users',createUser);
router.get('/users/:id',getUserbyId);



module.exports = router;
