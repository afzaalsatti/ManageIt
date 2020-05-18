const mongoose=require('mongoose');

const Company=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    id:{
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
    distance: {
        type: String,
        
       
     
    },
    ticketPrice: {
        type: String,
      
       
        require:'required'
        
     
    },
    bookingPrice:{
        type: String,
      
        
        require:'required'

    }
    
   
});

mongoose.model("Company",Company);