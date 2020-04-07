const express=require('express');
const path=require('path')
const connection=require('./Schemas');
const mongoose=require('mongoose');
//init App
const app=express();

app.use(express.json());

//connecting to DB 

// app.path('views',path.join(__dirname,'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
//Home Route

app.get('/abc',(req,res)=>
{
res.json("hello");
});

const users=mongoose.model("Users");
//SignUp Route
app.post('/signup',(req,res)=>
{
    
  
    const person=new users();
    person.name=req.body.name;
    person.email=req.body. email;
    person.password=req.body.password;
   
    person.save().then(resultCode => {
        res.json('Success');
    }).catch(function(error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/json');
        res.json({
            status:'Failure'
           
    
        });
        });


        users.find((err,doc)=>{
            if(!err)
            {
                console.log(doc);
                res.setHeader('Content-Type', 'text/json');
                res.json({
                    status:'Success'
                   
            
                });
            
            }else{
                console.log("Something went wrong");
                res.json({
                    status:'Failure'
                   
            
                });
            }
                });
    
   
   
   
   
    

});
app.post('/signin',(req,res)=>
{

  let email=req.body. email;
   let password=req.body.password;
   
   users.findOne({ email: email }, function (err, record) {
   

       
            if(!err)
            {
                 console.log(record);
                 if(record != null)
                 {
                     if(req.body.password=== record.password)
                     {
                        res.json({
                            status:'Success'
                        });
                     }  else{
                        res.json({
                            status:'Invalid Password'
    
                        });
                    }
                   
                 }
                 else{
                    res.json({
                        status:'Sorry we could not find any account on this email!'

                    });
                 }
       
            }else{
                console.log("Something went wrong");
                res.json({
                    status:'Something went wrong'
                   
            
                });
            }
                });
    
   
   
   
   
    

});
//port number
const port=5000;
//Start Server
app.listen(5000,()=> console.log('server started on port 5000'))