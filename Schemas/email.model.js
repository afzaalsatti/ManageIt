const mongoose=require('mongoose');

const Email=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    subject:{
        type:String,
        require:'required'
    },
    to:{
        type:String,
        
    },
    from:{
        type:String,
        
    },
    body: {
        type: String,
        
    
        require:'required'
        
     
    },
    date:{
        type: String,
        
    
        require:'required'
    }
    ,
    time:{
        type: String,
        
    
        require:'required'
    }
    

   
    
 
    
    
   
});

mongoose.model("Email",Email);