const mongoose=require('mongoose');

const EmployeeNotification=mongoose.Schema({
    to_add:{
        type:String,
    
    },
    from_add:{
        type:String,
    
    },
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
        
     
    },
    
     from: {
        type: String,
        
        required: true,
        
     
    },
     to: {
        type: String,
        
       
        
     
    }


    
});

mongoose.model("EmployeeNotification",EmployeeNotification);