const mongoose=require('mongoose');

const Company=mongoose.Schema({
    ownerName:{
        type:String,
        require:'required'
    },
    ownerEmail: {
        type: String,
        lowercase: true,
        required: true,
        require:'required'
        
     
    }
    ,ownerId: {
        type: String,
        
        required: true,
        require:'required'
        
     
    },
    ownerPhone: {
        type: String,
        
        required: true,
        require:'required'
        
     
    },
    ownerPass: {
        type: String,
      
        required: true,
        require:'required'
        
     
    },
    CompanyName:{
        type:String,
        require:'required'
    },
    CompanyEmail:{
        type:String,
        require:'required'
    },
    CompanyPhone:{
        type:String,
        require:'required'
    },
    CompanyHeadOffice:{
        type:String,
        require:'required'
    },
    CompanyEmployee:{
        type:Number,
        require:'required'
    },
});

mongoose.model("Company",Company);