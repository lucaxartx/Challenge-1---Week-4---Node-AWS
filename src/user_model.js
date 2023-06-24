const mongoose = require('mongoose');
const validator = require('validator'); 


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        length: 3
    },
    phone: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,

    },
    street : {
        type: String,
        required: true,
        length: 6
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please enter a valid email',
          },
    },
    zipcode :{
        type: String,
        required: true,
        length: 2
    },
    number : {
        type: String,
        required: true,
        length: 2
    },
    city:{
            type: String,
            required: true,
    },
    neighbourhood:{
            type: String,
            required: true,
            length: 7
    },
});


module.exports = mongoose.model('User', UserSchema);