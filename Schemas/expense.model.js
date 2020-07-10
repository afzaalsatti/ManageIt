const mongoose=require('mongoose');

const Expense=mongoose.Schema({
   
    company: {
        type: String,
        
    
        require:'required'
        
     
    }, id: {
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
    emp_id:{
        type:String,
        require:'required'
     
    },
    details:{
        type:String,
        require:'required'
     
    },
    amount:{
        type:String,
        require:'required'
     
    },
    status:{
        type:String,
        require:'required'
     
    },
    vah_num:{
        type:String
        
     
    },
    type:{
        type:String,
        require:'required'
     
    },
    expense_info:{
        type:String
     
    },

    
    
   
});

mongoose.model("Expense",Expense);