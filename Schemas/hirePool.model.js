const mongoose=require('mongoose');

const HirePool=mongoose.Schema({
    driverId: {
        type: String,
        require:'required'
        
    },
    vahicleId:{
        type:String,
        require:'required'
    },
    vahicleType:{
        type:String,
        require:'required'
    },
    company:{
        type:String,
        require:'required'
    },
    position:{
        type:String,
        require:'required'
    },
    status: {
        type: String,
        
    
        require:'required'
        
     
    }
    
   
    
   
});

mongoose.model("HirePool",HirePool);