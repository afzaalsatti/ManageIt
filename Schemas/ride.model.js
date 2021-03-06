const mongoose=require('mongoose');

const Ride=mongoose.Schema({
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
    fare: {
        type: String,
      
       
        require:'required'
        
     
    },
    driverId:{
        type: String,
      
        
        require:'required'

    },
    date:{
        type:String,
        require:'required'

    },
    time:{
        type:String,
        require:'required'

    },
    vahicleId:{
        type: String,
      
        
        

    },
    cords:{
        type: Array,
      
        
        require:'required'

    },
    rating:{
        type: Number,
      
        
        require:'required'

    },
    
   
});

mongoose.model("Ride",Ride);