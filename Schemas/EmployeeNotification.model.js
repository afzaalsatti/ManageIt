const mongoose=require('mongoose');

const Notification=mongoose.Schema({
    body:{
        type:String,
        require:'required'
    },
    company_name: {
        type: String,
       
        required: true,
        
     
    },
    to: {
        type: String,
        
        
        
     
    },
    type: {
        type: String,
      
        
     
    },
    date: {
        type: String,
        
        required: true,
        
     
    },
    isActive: {
        type: String,
        
        required: true,
        
     
    }


    
});

mongoose.model("Notification",Notification);