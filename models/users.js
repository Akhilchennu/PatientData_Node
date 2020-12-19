const mongoose=require('../db/mongoose.js');
const validator=require('validator');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isAlpha(value)){
                throw new error('name should be only aplhabets')
            }
        }
    },
    age:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isNumeric(value)){
                throw new error('Age is invalid')
            }
        }
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    phonenumber:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new error('phone number is invalid')
            }
        }
    },
    patientid:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isNumeric(value)){
                throw new error('Id is invalid')
            }
        }
    }
 });

const userModel=mongoose.model('User',userSchema);

module.exports=userModel;
