const mongoose=require('mongoose');

const Employee=mongoose.Schema({
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
    job_id:{
        type:String,
        require:'required'
    },
    gender:{
        type:String,
        require:'required'
    },

    education:{
        type:Array,
        require:'required'
    },
    experience:{
        type:Array,
        require:'required'
    },
    password:{
        type:String,
        require:'required'
    },
    
    joining_date:{
        type:String,
       
    },
    status:{
        type:String,
        require:'required'

    }
});

mongoose.model("Employee",Employee);