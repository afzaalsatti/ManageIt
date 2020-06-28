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
    cust_cnic:{
        type:String,
        require:'required'
    },
    cust_contact:{
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
    quantity: {
        type: String,
      
       
        require:'required'
        
     
    },
    routeId: {
        type: String,
      
       
        require:'required'
        
     
    }
   
    
   
});

mongoose.model("Ticket",Ticket);