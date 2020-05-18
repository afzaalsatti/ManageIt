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















const users=mongoose.model("Users");
const Employee=mongoose.model("Employee");


app.get('/add',(req,res)=>
{
res.json("hello");
});
app.post('/addEmployee',(req,res)=>
{

    const employee=new Employee();
    employee.company=req.body.company;
    employee.name=req.body.name;
    employee.email=req.body.email;
    employee.password=req.body.password;

    employee.id=req.body.id;
    employee.job_id=req.body.job_id;
    employee.gender=req.body.gender;
    employee.address=req.body.address;
    employee.education=req.body.education;
    employee.experience=req.body.experience;

    
   
    employee.save().then(resultCode => {
        res.json('Success');
    }).catch(function(error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/json');
        res.json({
            status:'Failure'
           
    
        });
        });





    console.log(req.body);
    res.json({
        status:'Success'
       

    });

});

//SignUp Route
app.post('/signup',(req,res)=>
{
    
  
    const person=new users();
    person.name=req.body.name;
    person.email=req.body. email;
    person.password=req.body.password;
    person.subscription=[{"first":1},{"frst":1},{"irst":1}];
   
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

//<<<<<<<<<<<<<<<<<<<<<<<<----------------------------------------------------------->>>>>>>>>>>>>>>>>>>>
/**
 * We can use it to make separate Collections
 * 
 * mongoose.connect('mongodb://localhost:27017/tutorialkart');
 
// get reference to database
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
    
    // define Schema
    var BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    var book1 = new Book({ name: 'Introduction to Mongoose', price: 10, quantity: 25 });
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
    
});
 */