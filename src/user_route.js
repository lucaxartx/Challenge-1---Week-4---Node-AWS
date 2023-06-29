const express = require('express');
const router = express.Router();
const {createNewUser,getUserViaId,listUsers,updateUser,deleteUser}=require('./user_controller')


router.post('/users',createNewUser);
router.get('/users/:id',getUserViaId);
router.get('/users',listUsers);
router.patch('/users/:id',updateUser);
router.delete('/users/:id',deleteUser);


module.exports = router;
