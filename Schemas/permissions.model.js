const mongoose=require('mongoose');

const Permission=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    jobid:{
        type:String,
        require:'required'
    },
    permissions: {
        type: Array,
        
    
       
        
     
    }
    
   
});

mongoose.model("Permission",Permission);