const mongoose=require('mongoose');

const Ticket=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    cust_id:{
        type:String,
        require:'required'
    },
    cust_email:{
        type:String,
        require:'required'
    },
    to: {
        type: String,
        
    
        require:'required'
        
     
    }
    ,from: {
        type: String,
        
        
        require:'required'
        
     
    },
    date:{
        type:String,
        require:'required'

    },
    time:{
        type:String

    },
    
    fare: {
        type: String,
      
       
        require:'required'
        
     
    },
    driverId:{
        type: String,
      
        
        require:'required'

    },
    vahicleId:{
        type: String,
      
        
        

    },
   
    
   
});

mongoose.model("Ticket",Ticket);