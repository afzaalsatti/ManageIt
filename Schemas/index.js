const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/admin",{useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
    if(!err){
        console.log("Succsess");
    }
    else
    {
        console.log("Error");
    }

});
const User=require('./login.model')