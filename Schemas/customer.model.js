const mongoose=require('mongoose');

const Customer=mongoose.Schema({
    name:{
        type:String,
        require:'required'
    },
    
    email: {
        type: String,
        lowercase: true,
        required: true,
        
        // validate: {
        //     isAsync: true,
        //     validator: function(value, isValid) {
        //         const self = this;
        //         return self.constructor.findOne({ email: value })
        //         .exec(function(err, user){
        //             if(err){
        //                 throw err;
        //             }
        //             else if(user) {
        //                 if(self.id === user.id) {  // if finding and saving then it's valid even for existing email
        //                     return isValid(true);
        //                 }
        //                 return isValid(false);  
        //             }
        //             else{
        //                 return isValid(true);
        //             }

        //         })
        //     },
        //     message:  'The email address is already taken!'
        // },
    },
    password:{
        type:String,
        require:'required'
    },
    phone:{
        type:String,
        require:'required'
    },
    subscription:{
        type:Array

    },
});

mongoose.model("Customer",Customer);