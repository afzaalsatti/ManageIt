const mongoose=require('mongoose');

const Booking=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    ride_id:{
        type:String,
        require:'required'
    },
    cust_id:{
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
        type:String,
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
    status:{
        type: String,
      
        
        require:'required'

    },
   
});

mongoose.model("Booking",Booking);