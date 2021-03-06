const express=require('express');
const path=require('path')
const connection=require('./Schemas');
const mongoose=require('mongoose');
const multer = require("multer");
var cors = require('cors');
//init App
const app=express();
const stripe = require('stripe')('sk_test_QEldKe5DUQ57tb2UffkBtBmO00zOoCPvnq');

app.use(express.json());
app.use(cors())
//connecting to DB 

// app.path('views',path.join(__dirname,'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
//Home Route






var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')









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
 const Company=mongoose.model("Company")
 const Earning=mongoose.model("Earning")
 const Email=mongoose.model("Email")
 const Expense=mongoose.model("Expense")
 const JobApplication=mongoose.model("JobApplication")




 app.post('/uploadCv',function(req, res) {
    try{
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
 
       return res.status(200).json({"link":req.file.path}).send();
 
     })
    }
    catch(err)
    {
        return res.status(500).send();
    }
     
    

});

app.post("/fetchFile", (req, res) => {

    
   

    var address = path.join(__dirname, "./"+req.body.address);

    const pdf2base64 = require('pdf-to-base64');
    pdf2base64(address)
        .then(
            (response) => {
                res.json({
                    status:'Success',
                    result:response,
                    
                    
                });
              
            }
        )
        .catch(
            (error) => {
                res.json({
                    status:'Failure',
                    
                    
                    
                }); //Exepection error....
            }
        )






  });
 app.post("/fetchImage", (req, res) => {

    
   

    var image1 = path.join(__dirname, "./"+req.body.address);

  var base64Img = require('base64-img');
  var imageData1 = base64Img.base64Sync(image1);
//   var base64Data = imageData1.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
//   var img = Buffer.from(base64Data, 'base64');

  res.writeHead(200, {
    'Content-Type': 'image/png',
    // 'Content-Length': img.length
  });
  res.end(imageData1);






  });
 app.get("/fetch", (req, res) => {
     
// console.log(req.body.location)
return res.status(200).sendFile(path.join(__dirname, "./public/uploads/1594916582030-Midterm-Answer sheet for PCS.pdf"));
   
  });

 app.post('/uploadImage',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }

      return res.status(200).json({"link":req.file.path}).send();

    })

});

app.post('/getAllVehicleLocation',(req,res)=>
{ 
    
   
   HirePool.find({}, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              record=record.map(function (value) {return {location: value.position} })
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllBranchesLocation',(req,res)=>
{ 
    
   
   Company.find({ parent : req.body.parent }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              record=record.map(function (value) {return {location: value.CompanyHeadOffice, name:value.CompanyName,email:value.CompanyEmail} })
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllBranches',(req,res)=>
{ 
    
   
   Company.find({ parent : req.body.parent }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              record=record.map(function (value) {return {company_name: value.CompanyName} })
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllJobApplications',(req,res)=>
{ 
    let company=req.body.company
    //  company="Elite Bus Service Islamabad"
   
   JobApplication.find({ company : company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllEmails',(req,res)=>
{ 
    
   
   Email.find({ company : req.body.company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllRoutes',(req,res)=>
{ 
    
   
   Route.find({ company : req.body.company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllVahicles',(req,res)=>
{ 
    
   
   Vahicle.find({ company : req.body.company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllExpenses',(req,res)=>
{ 
    
   
   Expense.find({ company : req.body.company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       result:record,
                       
                       
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
app.post('/getAllBookings',(req,res)=>
{ 
    
   
   Booking.find({ company : req.body.company }, function (err, record) {
  
     
      
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
app.post('/getAllEarnings',(req,res)=>
{ 
    
   
   Earning.find({ company : req.body.company }, function (err, record) {
  
     
      
       if(!err)
       {
            
            if(record != null)
            {
              
                
               
                   res.json({
                       status:'Success',
                       earnings:record,
                       
                       
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
 app.post('/getEarnings',(req,res)=>
 { 
     
    
    Earning.find({ id : req.body.id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        earnings:record,
                        
                        
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
 app.post('/getTicketPurchaseHistory',(req,res)=>
 { 
     
    
    Ticket.find({ cust_id : req.body.id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        ticketHistory:record,
                        
                        
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
 app.post('/getTicketPurchaseHistory',(req,res)=>
 { 
     
    
    Ticket.find({ cust_id : req.body.id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        ticketHistory:record,
                        
                        
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

 app.post('/getBookingHistory',(req,res)=>
 { 
     
    
    Booking.find({ cust_id : req.body.id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        BookingHistory:record,
                        
                        
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
  app.post('/getChildCompanyInfo',(req,res)=>
  { 
     
     Company.findOne({ CompanyName : req.body.company,parent:req.body.parent }, function (err, record) {
    
       
        
         if(!err)
         {
              
              if(record != null)
              {
                
                  
                 
                     res.json({
                         status:'Success',
                         result:record,
                         
                         
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
  app.post('/getCompanyInfo',(req,res)=>
 { 
    
    Company.findOne({ CompanyName : req.body.company }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        result:record,
                        
                        
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
  app.post('/getRouteDetails',(req,res)=>
 { 
    
    Route.findOne({ _id : req.body.routeId }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        details:record,
                        
                        
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
 app.post('/getBookingStatus',(req,res)=>
 { 
    
    Booking.findOne({ ride_id : req.body.ride_id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        result:record.status,
                        
                        
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
 app.post('/getCustomerDetails',(req,res)=>
 { 
    
    users.findOne({ email : req.body.id }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        driverName:record.name,
                        phone:record.phone
                        
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
 app.post('/getDriverDetails',(req,res)=>
 { 
    
    Employee.findOne({ id : req.body.id,company: req.body.company }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        driverName:record.name,
                        phone:record.phone
                        
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
 app.post('/getDriverstatus',(req,res)=>
 { 

    HirePool.findOne({ driverId : req.body.driverId,company: req.body.company }, function (err, record) {
   

       
        if(!err)
        {
             
             if(record != null)
             {
                 let result={};
                 result["vahicleId"]=record["vahicleId"]
                 result["vahicleType"]=record["vahicleType"]
                 result["position"]=record["position"]
                 result["status"]=record["status"]
                
                    res.json({
                        status:'Success',
                        result:result
                        
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
 app.post('/getVahicleDetails',(req,res)=>
 { 
     
    Vahicle.findOne({ number : req.body.number,company: req.body.company }, function (err, record) {
   
        
       
        if(!err)
        {
           
             
             if(record != null)
             {
                
                    res.json({
                        status:'Success',
                        v_details:record
                        
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
 app.post('/getActiveBookings',(req,res)=>
 { 
    Booking.findOne({ cust_id : req.body.cust_id,company: req.body.company }, function (err, record) {
   

       
        if(!err)
        {
             
             if(record != null)
             {
                
                    res.json({
                        status:'Success'
                        
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
 app.post('/getAllNotification',(req,res)=>
{ 
    

  if(req.body.sender!=="customer")
  {
  
    EmployeeNotification.find({
        $or: [
            {
            $and: [

            { 'type': "Ride Invitation" },
            { 'isActive': "Yes" }]
            },
            { 'to': req.body.id },
            { 'to':"All" },
            { 'to': "All Drivers" }
          ]
    }, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            res.json({
                status:'Success',
                result:result
            });
         
        }
      }); 
  }
  else
  {
    EmployeeNotification.find({
        
          to:req.body.email
    }, function(err, result) {
        if (err) {
          res.send(err);
        } else {
            res.json({
                status:'Success',
                result:result
            });
         
        }
      });
  }

    
    });


    app.post('/updateCompanyInfo',(req,res)=>
    { 
        
      console.log(req.body.CompanyName)
      
      Company.findOneAndUpdate({CompanyName:req.body.pervName } , {
        CompanyName:  req.body.CompanyName,
           CompanyEmail:  req.body.CompanyEmail,
           CompanyPhone:  req.body.CompanyPhone,
           CompanyMotto:  req.body.CompanyMotto,
           CompanyInfo:  req.body.CompanyInfo,
           
        },   
       function(err, result) {
            if (err) {
                
              res.json({
                
                  status:'Failure'
                 
              });
            } else {
               
                if(result)
                {
                    res.json({
                        status:'Success'
                        
                       
                    });
                }
                else{
                    res.json({
                
                        status:'Failure'
                       
                    });
                }
                
             
            }
          }); 
        
        });
    
    app.post('/updateEmployeeInfo',(req,res)=>
    { 
        
      
      
      Employee.findOneAndUpdate({_id:req.body._id } , {
           name:  req.body.name,
           password:  req.body.password,
           email:  req.body.email,
           auth:  req.body.auth,
           status:  req.body.status,
           job_id:  req.body.job_id,
        },   
       function(err, result) {
            if (err) {
                
              res.json({
                
                  status:'Failure'
                 
              });
            } else {
               
                res.json({
                    status:'Success'
                    
                   
                });
             
            }
          }); 
        
        });

          

          app.post('/updateEarning',(req,res)=>
          { 
              
            
            
            Earning.findOneAndUpdate({_id:req.body._id } , {
                 status:  req.body.status},   
             function(err, result) {
                  if (err) {
                      
                    res.json({
                      
                        status:'Failure'
                       
                    });
                  } else {
                     
                      res.json({
                          status:'Success'
                         
                         
                      });
                   
                  }
                }); });
      app.post('/setDriverlocation',(req,res)=>
      { 
          
        
        
        Booking.findOneAndUpdate({ride_id:req.body.rideId } , {
             cords:  req.body.cords},   
         function(err, result) {
              if (err) {
                  
                res.json({
                  
                    status:'Failure'
                   
                });
              } else {
                 
                  res.json({
                      status:'Success',
                      bookingStatus:result.status
                     
                  });
               
              }
            }); });
      app.post('/updateHirePoolStatus',(req,res)=>
      { 
          
        
        
        HirePool.findOneAndUpdate({driverId:req.body.driverId , company : req.body.company} , { status:  req.body.status},   
         function(err, result) {
              if (err) {
                  
                res.json({
                    status:'Failure'
                   
                });
              } else {
                  res.json({
                      status:'Success'
                     
                  });
               
              }
            }); });

            app.post('/updateBookingStatus',(req,res)=>
            { 
                
              
              
              Booking.findOneAndUpdate({driverId:req.body.driverId , company : req.body.company} , { status:  req.body.status},   
               function(err, result) {
                    if (err) {
                        
                      res.json({
                          status:'Failure'
                         
                      });
                    } else {
                        res.json({
                            status:'Success'
                           
                        });
                     
                    }
                  }); });
            app.post('/finishBooking',(req,res)=>
            { 
                
              let sender=req.body.sender;
              if(req.body.status==="cancel")
              {
                req.body.status="cancel("+sender+")"
              }
              Booking.findOneAndUpdate({ride_id:req.body.ride_id , company : req.body.company} , { status:  req.body.status},   
               function(err, result) {
                    if (err) {
                      res.json({
                          status:'Failure'
                         
                      });
                    } else {
                        res.json({
                            status:'Success'
                           
                        });
                     
                    }
                  }); });
      app.post('/updateNotificationStatus',(req,res)=>
      { 
          
        
        
        EmployeeNotification.findOneAndUpdate({rideId:req.body.rideId } , {company:req.body.company, isActive:  req.body.status},   
         function(err, result) {
              if (err) {
                
                res.json({
                    status:'Failure'
                   
                });
              } else {
                  res.json({
                      status:'Success'
                     
                  });
               
              }
            }); });
          

            app.post('/addBooking',(req,res)=>
            { const booking=new Booking();
           
           
           if(req.body.sender==="customer")
           {
              
               booking.company=req.body.company
               booking.ride_id=booking._id.toString(),
               booking.cust_id=req.body.cust_id,
               booking.to=req.body.to,
               booking.date=req.body.date,
               booking.time=req.body.time,
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
                  console.log(error)
                    res.setHeader('Content-Type', 'text/json');
                    res.json({
                        status:'Failure'
                       
                
                    });
                    });
                   }
                   else{
           
                      
                                    Booking.findOneAndUpdate({ride_id:req.body.ride_id} , { driverId:  req.body.driverId,company:req.body.company,vahicleId:  req.body.vahicleId,cords:  req.body.cords, status:"booked"  },   
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
           
 app.post('/addExpense',(req,res)=>
 { 
     const expense=new Expense();

    expense.company=req.body.company
    expense.id=expense._id.toString(),
    expense.type=req.body.type,
    expense.date=req.body.date,
   
    expense.time=req.body.time,
    expense.amount=req.body.amount,
    expense.status=req.body.status,
    expense.emp_id=req.body.emp_id,
    expense.details=req.body.details
    expense.vh_id="nil";
    expense.expense_info=req.body.expense_info;
if(req.body.type==="maintinance")
{
   
   
   
    
    
    expense.vh_id=req.body.vh_id;
   
}
   
   
    expense.save().then(resultCode => {
         res.json({

             status:'Success'
           
            
     
         });
     }).catch(function(error) {
       console.log(error)
         res.setHeader('Content-Type', 'text/json');
         res.json({
             status:'Failure'
            
     
         });
         
      
     
     
     });

    });
 app.post('/sendRideInvitation',(req,res)=>
{ const notification=new EmployeeNotification();
    
    notification.company=req.body.company;
    notification.body=req.body.body;
   
    
    notification.to_add=req.body.to_loc;
    notification.from_add=req.body.from_loc;
    notification.to=req.body.to;
    notification.from=req.body.from;
    
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
    
    app.post('/getDriverlocation',(req,res)=>
{
    
    Booking.findOne({ ride_id : req.body.rideId }, function (err, record) {
   

       
        if(!err)
        {
             
             if(record != null)
             {
                
                    res.json({
                        status:'Success',
                        driverId:record.driverId,
                        vahicleId:record.vahicleId,
                        company:record.company,
                        bookingStatus:record.status,

                        cords:record.cords
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
 

app.post('/getTicketEarnings',(req,res)=>
{
    
    Ticket.find({ company : req.body.company }, function (err, record) {
   

       
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
                     ticket.company=req.body.company;
                     ticket.cust_id=req.body.cust_id;
                     ticket.cust_contact=req.body.cust_contact;
                     ticket.cust_cnic=req.body.cust_cnic;
                     
                     ticket.to=req.body.to;
                     ticket.from=req.body.from;
                     ticket.date=req.body.date;
                     ticket.time=req.body.time;
                    ticket.routeId=req.body.id
                    ticket.price=req.body.price
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

app.post('/getAllJobs',(req,res)=>
{
    Career.find({ }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
                
                 
                
                    res.json({
                        status:'Success',
                        result:record,
                        
                        
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
app.post('/postJob',(req,res)=>
{
    const career=new Career();
    career.id=career._id.toString();
    career.title=req.body.data.title;
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





   
    res.json({
        status:'Success'
       

    });

});

app.post('/sendEmail',(req,res)=>
{
    let d=new Date();

    const email=new Email();
    email.company=req.body.company;
    email.subject=req.body.subject;
    email.body=req.body.body;
    email.to=req.body.to;
    email.name=req.body.name;
    email.from=req.body.from;
    email.date=d.getMonth()+1 +"/"+d.getDay()+"/"+d.getFullYear();;
    email.time=d.getHours() +":"+d.getMinutes()+":"+d.getSeconds();;

    
   
    email.save().then(resultCode => {
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





   ;
    

});

app.post('/getAllCompanies',(req,res)=>
{
    
    Company.find({ }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
                record=record.map(function (value) {return {company_name: value.CompanyName} })
                 
                
                    res.json({
                        status:'Success',
                        result:record,
                        
                        
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
app.post('/getAllCustomers',(req,res)=>
{
    

    
   
  
        



    users.find({ status : "active" }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        users:record,
                        
                        
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
app.post('/getAllEmployee',(req,res)=>
{
    

    
   
  
        



    Employee.find({ company : req.body.company }, function (err, record) {
   
      
       
        if(!err)
        {
             
             if(record != null)
             {
               
                 
                
                    res.json({
                        status:'Success',
                        employee:record,
                        
                        
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

app.post('/updateHash',(req,res)=>
{
    let sha256 = require("sha256")
    let d=new Date();
    let hash=sha256(req.body.id+d.getMinutes()+d.getSeconds()+Math.floor(Math.random() * 97570)); 

    Employee.findOneAndUpdate({id:req.body.id,company:req.body.company } , {
        hash:  hash,
       
     },   
    function(err, result) {
         if (err) {
             
           res.json({
             
               status:'Failure'
              
           });
         } else {
            
             res.json({
                 status:'Success',
                 hash:hash
                 
                
             });
          
         }
       }); 







});
app.post('/addEmployee',(req,res)=>
{
    let d=new Date();
let auth="";
let hash=""
if(req.body.job_id === "owner")
{
    auth="owner"
    var sha256 = require("sha256")
hash=sha256(req.body.name+req.body.password+Math.floor(Math.random() * 97570)); 
}

    const employee=new Employee();
    employee.company=req.body.company;
    employee.name=req.body.name;
    employee.dp=req.body.dp;
    employee.email=req.body.email;
    employee.hash=hash;
    employee.password=req.body.password;
    employee.status=req.body.status;
    employee.id=employee._id.toString();
    employee.job_id=req.body.job_id;
    employee.phone=req.body.phone;
    employee.auth=auth;
    employee.cnic=req.body.id;
    employee.gender=req.body.gender;
    employee.address=req.body.address;
    employee.education=req.body.education;
    employee.experience=req.body.experience;
    employee.joining_date=d.getMonth()+1 +"/"+d.getDay()+"/"+d.getFullYear();;

    
   
    employee.save().then(resultCode => {
        res.json({
            status:'Success',
            id:employee._id.toString()
           
    
        });
    }).catch(function(error) {
        console.log(error);
        res.setHeader('Content-Type', 'text/json');
        res.json({
            status:'Failure'
           
    
        });
        });





   ;
    res.json({
        status:'Success',
        id:employee._id.toString()
       

    });

});


//Adding company
app.post('/registerCompany',(req,res)=>
{
    
    let d=new Date();
    const company=new Company();
    company.ownerName=req.body.ownerName;
    company.ownerEmail=req.body.ownerEmail;
    company.ownerPass=req.body.ownerPass;
    company.ownerId=req.body.ownerId;
    company.ownerPhone=req.body.ownerPhone;
    company.CompanyInfo=req.body.CompanyInfo;
    company.CompanyMotto=req.body.CompanyMotto;
    company.parent=req.body.parent;
    company.CompanyLogo=req.body.CompanyLogo;
    company.CompanyName=req.body.CompanyName;
    company.CompanyEmail=req.body.CompanyEmail;
    company.CompanyEmployee=req.body.CompanyEmployee;
    company.experience=req.body.experience;
    company.CompanyPhone=req.body.CompanyPhone;
    company.CompanyHeadOffice=req.body.CompanyHeadOffice;
    company.registerDate=d.getMonth()+1 +"/"+d.getDate()+"/"+d.getFullYear();
    
   
    company.save().then(resultCode => {
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

app.post('/apply',(req,res)=>
{
    let d=new Date()
    console.log(req.body)
  
    const application=new JobApplication();
    application.company=req.body.company;
    application.cand_name=req.body.cand_name;
    application.cand_email=req.body.cand_email;
    application.cand_phone=req.body.cand_phone;
    application.cand_cv_link=req.body.cand_cv_link;
    application.job_id=req.body.job_id;
    application.date=d.getMonth()+1 +"/"+d.getDay()+"/"+d.getFullYear();;
    application.time=d.getHours() +":"+d.getMinutes()+":"+d.getSeconds();;
   
    
    application.save().then(resultCode => {
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



//SignUp Route
app.post('/signup',(req,res)=>
{
    
  
    const person=new users();
    person.name=req.body.name;
    person.email=req.body. email;
    person.password=req.body.password;
    person.subscription=[{"first":1},{"frst":1},{"irst":1}];
   
    person.save().then(resultCode => {
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

app.post('/validateCompanyInfo',(req,res)=>
{
    
    console.log(req.body)
if(req.body.type=="CompanyName")
{
    Company.findOne({ CompanyName: req.body.value }, function (err, record) {
   

       
        if(!err)
        {
          
             if(record != null)
             {
                res.json({
                    status:'Success'
                   
                });
               
             }
             else{
                res.json({
                    status:'Sorry we could not find any account on this hash!'

                });
             }
   
        }else{
            console.log("Something went wrong");
            res.json({
                status:'Something went wrong'
               
        
            });
        }
            });

}
    
 
    
   
   
   
   
    

});
app.post('/autherizeCompanyRegistration',(req,res)=>
{

    
  Employee.findOne({ hash: req.body.hash, company:req.body.company,job_id:"owner" }, function (err, record) {
   

       
            if(!err)
            {
              
                 if(record != null)
                 {
                     
                    res.json({
                        status:'Success',
                        ownerID:record.id
                       
                    });
                   
                 }
                 else{
                    res.json({
                        status:'Sorry we could not find any account on this hash!'

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

app.post('/signin',(req,res)=>
{

  let email=req.body. email;
   let password=req.body.password;
   let collection=users;
   if(req.body.sender==="customer")
   {
    collection=users
   }else{
    collection=Employee

   }
  collection.findOne({ email: email }, function (err, record) {
   

       
            if(!err)
            {
              
                 if(record != null)
                 {
                     if(req.body.password=== record.password)
                     {
                         let temp={
                             "id":record["id"],
                         "name":record["name"],
                         "email":record["email"],
                         "phone":record["phone"],
                         "status":record["status"],
                        };
                         
if(req.body.sender!=="customer")
{

  
    temp["job_id"]=record["job_id"];
    temp["company"]=record["company"];
    temp["hash"]=record["hash"];
}
                         






                        res.json({
                            status:'Success',
                            record:temp
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