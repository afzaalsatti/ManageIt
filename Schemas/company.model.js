const mongoose=require('mongoose');

const Company=mongoose.Schema({
    parent:{
        type:String,
        require:'required'
    }
    ,ownerId: {
        type: String,
        
     
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
        type:String,
        require:'required'
    },
    CompanyInfo:{
        type:String,
        require:'required'
    },
    CompanyMotto:{
        type:String,
        require:'required'
    },
    registerDate:{
        type:String,
        require:'required'
    },
    CompanyLogo:{
        type:String,
        require:'required'
    },
    


});

mongoose.model("Company",Company);