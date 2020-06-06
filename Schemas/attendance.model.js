const mongoose=require('mongoose');

const Attendance=mongoose.Schema({
    company: {
        type: String,
        
    
        require:'required'
        
     
    },
    date:{
        type:String,
        require:'required'
    }
    ,
    time:{
        type:String,
        require:'required'
    }
    ,
    attendance:{
        type:Array,
     
    },
    
    
   
});

mongoose.model("Attendance",Attendance);