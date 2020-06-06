const mongoose=require('mongoose');

const Vahicle=mongoose.Schema({

  
    owner:{
        type:String,
        require:'required'
    },
    company:{
        type:String,
        require:'required'
    },

    price:{
        type:String,
      
    },
    payment_status:{
        type:String,
        
    },

   type:{
        type:String,
        require:'required'
    },
    
    number:{
        type:String,
        require:'required'
    },
    vah_model: {
        type: String,
        
        required: true,
        
     
    },
    entry_date:{
        type:String,
        require:'required'
    },
    entry_time:{
        type:String,
        require:'required'
    },

    brand:{
        type:String,
        require:'required'
    },
    color:{
        type:String,
        require:'required'
    }
    ,
    buyer_emp_id:{
        type:String,
        require:'required'
    },
    reg_year:{
        type:String,
        require:'required'
    },
});

mongoose.model("Vahicle",Vahicle);