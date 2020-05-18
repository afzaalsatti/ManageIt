const mongoose=require('mongoose');

const Vahicle=mongoose.Schema({
    
    number:{
        type:String,
        require:'required'
    },
    model: {
        type: String,
        lowercase: true,
        required: true,
        
     
    },

    make:{
        type:String,
        require:'required'
    }
    ,
    company:{
        type:String,
        require:'required'
    }
});

mongoose.model("Vahicle",Vahicle);