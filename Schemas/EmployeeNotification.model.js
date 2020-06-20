const mongoose=require('mongoose');

const EmployeeNotification=mongoose.Schema({
    body:{
        type:String,
    
    },
    company: {
        
        
     
    },
    rideId:{
        type: String,
       
        required: true,
    },
    
    type: {
        type: String,
      
        
     
    },
  
    isActive: {
        type: String,
        
        required: true,
        
     
    }


    
});

mongoose.model("EmployeeNotification",EmployeeNotification);