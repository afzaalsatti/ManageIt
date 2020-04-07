import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from '../../history'
import {Link as ReactLink} from 'react-router-dom'
import Particles from 'react-particles-js';
import UserSession from '../../UserSession'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        Manage-It
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mainDiv:
  {
background:'linear-gradient(to right, rgb(203,52,181),rgb(68,166,187))',

  },
}));
function register()
{
    
  
   
   let fName=  document.getElementById("firstName").value ;
   let lName=document.getElementById("lastName").value;
   let email=document.getElementById("email").value ;
   let pass=document.getElementById("password").value ;


     const data={
    "name":fName+" "+lName,
    "email":email,
    "password":pass
  }
   
    const options={
        method:"POST",
        headers:{
            'Content-type':"application/json"

        },
        body:JSON.stringify(data)
    }
    fetch("/signup",options).then(response=>{
        return response.json();
  }).then(data=>{
      let status=data.status;
      console.log(status)

      if(status==='Success')
      {

        history.push('/signin');
      
       // history.push("");
      }else{
        window.alert("OOH No")
      }
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data.status);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
        
    

    
   
}
export default function SignUp() {
  const classes = useStyles();
 
  return (
   
    <div  >
    
    <Container  component="main" maxWidth="xs">
    
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
           
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              < ReactLink to="/signin">
                Already have an account? Sign in
              </ReactLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
     
    </Container>
  
        
      </div>
   
  );
}