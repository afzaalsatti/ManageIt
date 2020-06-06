const mongoose=require('mongoose');

const Career=mongoose.Schema({
    title:{
        type:String,
        require:'required'
    },
    company_name: {
        type: String,
       
        required: true,
        
     
    },
    location: {
        type: String,
        
        
        
     
    },
    branch: {
        type: String,
      
        
     
    },
    contactEmail: {
        type: String,
        
        required: true,
        
     
    },
    postDate: {
        type: String,
        
        required: true,
        
     
    },
    expireDate: {
        type: String,
        
        required: true,
        
     
    },

    salary:{
        type:String,
        require:'required'
    },
    type:{
        type:String,
        require:'required'
    },
    requirements:{
        type:String,
        require:'required'
    },
    responsibiities:{
        type:String,
        require:'required'
    },

    
});

mongoose.model("Career",Career);