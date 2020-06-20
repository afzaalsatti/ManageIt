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
const Career=mongoose.model("Career");
const Vahicle=mongoose.model("Vahicle");
 const Attendance=mongoose.model("Attendance");
 const Route=mongoose.model("Route");
 const Ticket=mongoose.model("Ticket");
 const HirePool=mongoose.model("HirePool")
 const Booking=mongoose.model("Booking")
 const EmployeeNotification=mongoose.model("EmployeeNotification")

 app.post('/getAllNotification',(req,res)=>
{ 
    
  
  
    EmployeeNotification.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            res.json({
                status:'Success',
                result:result
            });
         
        }
      }); });
    
    
    

 app.post('/addBooking',(req,res)=>
 { const booking=new Booking();

if(req.body.sender==="cutomer")
{
   
    booking.company=req.body.company
    booking.ride_id=booking._id.toString(),
    booking.cust_id=req.body.cust_id,
    booking.to=req.body.to,
    booking.from=req.body.from,
    booking.distance=req.body.distance,
    booking.fare=req.body.fare,
    booking.driverId=req.body.driverId,
    booking.vahicleId=req.body.vahicleId,
    booking.cords=req.body.cords,
    booking.rating=req.body.rating,
    booking.status=req.body.status
    
    
     

   
   
    booking.save().then(resultCode => {
         res.json({

             status:'Success',
             id:booking._id.toString()
            
     
         });
     }).catch(function(error) {
         console.log(error);
         res.setHeader('Content-Type', 'text/json');
         res.json({
             status:'Failure'
            
     
         });
         });
        }
        else{

            
                         Booking.findOneAndUpdate({ride_id:req.body.ride_id} , { driverId:  req.body.driverId,vahicleId:  req.body.driverId,cords:  req.body.cords, status:"Booked"  },   
                            function(err,record) {  
                             if (record==null) {  
                                res.json({
                                    status:'Failure'
                                   
                            
                                });
                             return;  
                             }  
                            
                        
                              
                             res.json({
                               status:'Success'
                              
                       
                           });
                             });  
                   
                       
                    
           
               
                  




        }
     
     
     });

 app.post('/sendRideInvitation',(req,res)=>
{ const notification=new EmployeeNotification();
    notification.company=req.body.company;
    notification.body=req.body.body;
   
    
   
    
   
    
    notification.type=req.body.type;
    notification.isActive=req.body.isActive;
    notification.rideId=req.body.rideId;
  
  
    notification.save().then(resultCode => {
        res.json({
            status:'Success'
           
    
        });
    }).catch(function(error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/json');
        res.json({
            status:'Failure'
           
    
        });
        });
    
    
    });

app.post('/getTickets',(req,res)=>
{
    
    Route.find({ to : req.body.to,  from:req.body.from,  dep_date : req.body.dept_date }, function (err, record) {
   

       
        if(!err)
        {
             
             if(record != null)
             {
                
                    res.json({
                        status:'Success',
                        result:record
                    });
                 
                
               
             }
             else{
                res.json({
                    status:'Failure'
                });
             }
   
        }else{
            console.log("Something went wrong");
            res.json({
                status:'Failure'
               
        
            });
        }
            });

});
 


app.post('/updateRouteSeats',(req,res)=>
{

    
    const ticket=new Ticket();
    let seats;

    Route.findOne({ _id: req.body.id }, function (err, record) {
   

       
        if(!err)
        {
             
             if(record != null)
             {
                 seats=record.booked_seats;
                 Route.findOneAndUpdate({_id:req.body.id} , { booked_seats:  req.body.booked_seats },   
                    function(err,record) {  
                     if (record==null) {  
                        res.json({
                            status:'Failure'
                           
                    
                        });
                     return;  
                     }  
                     ticket.cust_id=req.body.cust_id;
                     ticket.cust_contact=req.body.cust_contact;
                     ticket.to=req.body.to;
                     ticket.from=req.body.from;
                     ticket.date=req.body.date;
                     ticket.time=req.body.time;
                    ticket.routeId=req.body.id
                    ticket.routeId=req.body.id
                    ticket.quantity=req.body.tickets;
                    ticket.save().then(resultCode => {
                        //  res.status(200).json({ status:'Success' });
                       res.json({
                           status:'Success'
                          
                   
                       });
                   }).catch(function(error) {


                    // Route.findOneAndUpdate({_id:req.body.id} , { booked_seats:  seats },   
                    //     function(err,record) {  
                    //      if (record==null) {  
                    //         res.json({
                    //             status:'Failure'
                               
                        
                    //         });
                    //      return;  
                    //      }  
                    //      res.json({
                    //        status:'Success'
                          
                   
                    //    });
                    //      });  




                       
                       
                       res.json({
                           status:'Failure'
                          
                   
                       });
                       });
                     res.json({
                       status:'Success'
                      
               
                   });
                     });  
           
               
             }
             else{
                res.json({
                    status:'Failure'

                });
             }
   
        }else{
            console.log("Something went wrong");
            res.json({
                status:'Failure'
               
        
            });
        }
            });



         
       
    
    
    
        
         }); 


    




app.post('/addRoute',(req,res)=>
{

    const route=new Route();
route.company=req.body.data["company"];
route.fare=req.body.data["fare"];
route.title=req.body.data["title"];
route.email=req.body.data["email"];

route.from=req.body.data["from"];
route.to=req.body.data["to"];
route.dep_time=req.body.data["dtime"];
route.dep_date=req.body.data["ddate"];

route.arv_time=req.body.data["company"];

route.arv_date=req.body.data["company"];


route.vh_id=req.body.data["vh_id"];
route.driver_id=req.body.data["driver_id"];
route.booked_seats="";
route.active=true;
route.save().then(resultCode => {
    res.json({
        status:'Success'
       

    });
}).catch(function(error) {
    console.log(error);
    res.setHeader('Content-Type', 'text/json');
    res.json({
        status:'Failure'
       

    });
    });


});
app.post('/addAttendence',(req,res)=>
{
    const attendanceObj=new Attendance();

    let attendence=[];

    Attendance.findOne({company:req.body.company, date:req.body.date}   , 
    function(err,record) {  
     if (record==null) {  
        attendanceObj.company=req.body.company;
        attendanceObj.date=req.body.date;
        
        attendanceObj.attendence=req.body.attendence;
        
        attendanceObj.save().then(resultCode => {
            res.json({
                status:'Success'
               
        
            });
        }).catch(function(error) {
            console.log(error);
            res.setHeader('Content-Type', 'text/json');
            res.json({
                status:'Failure'
               
        
            });
            });
     return;  
     }  

     attendence=record.attendance;
    
     attendence.push(req.body.attendance)
     console.log(attendence)
     Attendance.findOneAndUpdate({company:req.body.company, date:req.body.date} , { attendance:  attendence },   
         function(err,record) {  
          if (record==null) {  
             res.json({
                 status:'Failure'
                
         
             });
          return;  
          }  
          res.json({
            status:'Success'
           
    
        });
          });  




    
     });  

    // users.findOneAndUpdate({name:"Afzaal Satti", password:"123"} , { name:  "Afzaal Shoukat" },   
    //     function(err,record) {  
    //      if (record==null) {  
    //         res.json({
    //             status:'Failure'
               
        
    //         });
    //      return;  
    //      }  
    //      res.send({data:"Record has been Updated..!!"+record});  
    //      });  
        

    // const Attendence=new Attendence();
    // Attendence.findByIdAndUpdate(req.body.company, {


        
    //     name:  req.body.name, address: req.body.address, contact: req.body.contact,email:req.body.email
    
    
    
    // },   
    //     function(err) {  
    //      if (err) {  
    //      res.send(err);  
    //      return;  
    //      }  
    //      res.send({data:"Record has been Updated..!!"});  
    //      });  


});

app.post('/addNewVahicle',(req,res)=>
{    
const vahicle=new Vahicle();

    vahicle.company=req.body.company;
    vahicle.owner=req.body.owner;
    vahicle.price=req.body.price;
    vahicle.payment_status=req.body.payment_status;
    vahicle.number=req.body.number;
    vahicle.vah_model=req.body.vah_model;
    vahicle.entry_date=req.body.entry_date;
    vahicle.entry_time=req.body.entry_time;
    vahicle.brand=req.body.brand;
    vahicle.color=req.body.color;
    vahicle.buyer_emp_id=req.body.buyer_emp_id;
    vahicle.reg_year=req.body.reg_year;
    vahicle.type=req.body.type;
    vahicle.save().then(resultCode => {
        res.json({
            status:'Success'
           
    
        });
    }).catch(function(error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/json');
        res.json({
            status:'Failure'
           
    
        });
        });

});

app.post('/postJob',(req,res)=>
{
    const career=new Career();
    career.contactEmail=req.body.data.contactEmail;
    career.company_name=req.body.data.company_name;
    career.type=req.body.data.type;
    career.location=req.body.data.branch;
    career.branch=req.body.data.branch;
    career.salary=req.body.data.salary;
    career.expireDate=req.body.data.expireDate;
    career.postDate=req.body.data.postDate;
    career.requirements=req.body.data.requirements;
    career.responsibiities=req.body.data.responsibiities;

    
  career.save().then(resultCode => {
    
    res.json({
        status:'Success'
       

    });
}).catch(function(error) {
    console.log(error);
    res.setHeader('Content-Type', 'text/json');
    res.json({
        status:'Failure'
       

    });
    });
});

app.post('/addDriverToHirePool',(req,res)=>
{

    const hire_pool=new HirePool();
    hire_pool.company=req.body.company;
    hire_pool.driverId=req.body.driverId;
    hire_pool.vahicleId=req.body.vahicleId;
    hire_pool.vahicleType=req.body.vahicleType;

    hire_pool.position=req.body.position;
    hire_pool.status=req.body.status;
    

    
   
    hire_pool.save().then(resultCode => {
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
    employee.joining_date=req.body.joining_date;

    
   
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