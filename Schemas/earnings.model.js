const mongoose=require('mongoose');

const Earning=mongoose.Schema({


id:{
        type:String,
        require:"required"

    },
    time:{
        type:String,
        require:'required'
    },
    date: {
        type: String,
        lowercase: true,
        required: true,
        
     
    },

    status:{
        type:String,
        require:'required'
    },
    rideId:{
        type:String
    },
    type:{
        type:String,
        require:'required'
    },
    amount:{
        type:String,
        require:'required'
    }
});

mongoose.model("Earning",Earning);