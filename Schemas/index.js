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
const Employee=require('./employee.model')
const Career=require('./career.model')
const Vahicle=require('./vahicle.model')

//const Company=require('./company.model')
const Attendance=require('./attendance.model')
const Booking=require('./booking.model')

const Permissions=require('./permissions.model')
const Ride=require('./ride.model')
const Route=require('./route.model')
const Ticket=require('./Ticket.model')
const HirePool=require('./hirePool.model')
const EmployeeNotification=require('./EmployeeNotification.model')
const Earning=require('./earnings.model')
const Company=require('./company.model')
const Email=require('./email.model')
const Expense=require('./expense.model')
const JobApplication=require('./job_applications.model')