const CustomError = require('../errors');
const User = require('../user_model');

const createNewUser = async (req, res)=>{
    const {name, birthday, phone, email,
      password, passwordConfirm, zipCode,
      street,number,neighbourhood,city
     } =  req.body;

     if(!name){
        throw new CustomError.NotFoundError('Please provide name');
     }
 
     if(!birthday){
        throw new CustomError.NotFoundError('Please provide birthday');
     }
 
     if(!phone){
        throw new CustomError.NotFoundError('Please provide phone');
     }
 
     if(!email){
        throw new CustomError.NotFoundError('Please provide email');
     }
 
     if(!password){
        throw new CustomError.NotFoundError('Please provide password');
     }
 
     if(!passwordConfirm){
        throw new CustomError.NotFoundError('Please provide passwordConfirm');
     }
 
     if(!zipCode){
        throw new CustomError.NotFoundError('Please provide zipCode');
     }
 
     if(!street){
        throw new CustomError.NotFoundError('Please provide street');
     }
 
     if(!number){
        throw new CustomError.NotFoundError('Please provide number');
     }
 
     if(!city){
        throw new CustomError.NotFoundError('Please provide city');
     }
 
     if(!neighbourhood){
        throw new CustomError.NotFoundError('Please provide neighbourhood');
     }

        if(password !== passwordConfirm){
            throw new CustomError.BadRequestError('Passwords do not match');
        }

        const user = await User.create({name, birthday, phone, email,
            password, passwordConfirm,zipcode: zipCode,street,number,neighbourhood,city});

        res.status(200).json({
            user });
}


const getUserViaId = async (req, res)=>{
    const {id} = req.params;

    if(!id){
        throw new CustomError.NotFoundError('Please provide id');
    }

    const user = await User.findById({_id:id});

    if(!user){
        throw new CustomError.NotFoundError(`No user with id : ${id}`);
    }

    res.status(200).json({user});

}

const listUsers = async (req, res)=>{
    let {limit, offset} = req.query;

    limit = parseInt(limit) || 10;
    offset = parseInt(offset)|| 0;

    const users = await User.find().skip(offset).limit(limit);


    res.status(200).json({limit,offset,total: users.length, items: users});

}

module.exports={createNewUser,getUserViaId,listUsers}