const mongoose=require('mongoose');

const Route=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    title:{
        type:String,
        require:'required'
    },
    email:{
        type:String,
        
    },
    to: {
        type: String,
        
    
        require:'required'
        
     
    }
    ,from: {
        type: String,
        
        
        require:'required'
        
     
    },

    dep_time: {
        type: String,
        require:'required'
        
       
     
    },
    arv_time:{
        type: String
    },
    arv_date:{
        type: String
     
    },
    dep_date: {
        type: String,
        require:'required'
        
       
     
    },
    distance: {
        type: String,
        
       
     
    },
    fare: {
        type: String,
      
       
        require:'required'
        
     
    },
    vh_id:{
        type: String,
      
        
        require:'required'

    },
    driver_id:{
        type: String,
      
        
        require:'required'

    }
    
   
});

mongoose.model("Route",Route);