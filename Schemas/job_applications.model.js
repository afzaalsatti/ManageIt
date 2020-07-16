const mongoose=require('mongoose');

const JobApplication=mongoose.Schema({
   
    company: {
        type: String,
        
    
        require:'required'
        
     
    }, 
    job_id: {
        type: String,
        
    
        require:'required'
        
     
    },
    date: {
        type: String,
        
    
        require:'required'
        
     
    },
    time: {
        type: String,
        
    
        require:'required'
        
     
    },
    cand_email:{
        type:String,
        require:'required'
    }
    ,
    cand_name:{
        type:String,
        require:'required'
    }
    ,
    cand_phone:{
        type:String,
        require:'required'
     
    },
    cand_cv_link:{
        type:String,
        require:'required'
     
    }

    
    
   
});


mongoose.model("JobApplication",JobApplication);