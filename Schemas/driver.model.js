const mongoose=require('mongoose');

const Driver=mongoose.Schema({
    company:{
        type:String,
        require:"required"

    },
    name:{
        type:String,
        require:'required'
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        
     
    },

    id:{
        type:String,
        require:'required'
    },
    address:{
        type:String,
        require:'required'
    },
    gender:{
        type:String,
        require:'required'
    },
    location:{
        type:String,
        require:'required'
    },
   
    password:{
        type:String,
        require:'required'
    }
});

mongoose.model("Employee",Employee);