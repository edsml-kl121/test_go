import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [register, setRegister] = useState(false);
  const [refreshData, setRefreshData] = useState(false)
  const [addNewUser, setAddNewUser] = useState(false)
  const [user, setUser] = useState({First_name: "", Last_name: "", Password: "", Email: "", User_type: "USER"})
  
  useEffect(() => {
    // getAllOrders();
    console.log(user.First_name)
    console.log(user.Last_name)
    console.log(user)
  }, [])
  //refreshes the page
  if(refreshData){
    setRefreshData(false);
    console.log(user.First_name)
    // getAllOrders();
  } 

  //creates a new user
  function AddNewUser(){
    setAddNewUser(false)
    var url = "http://localhost:5000/users/signup"
    axios.post(url, {
        "First_name": user.First_name,
        "Last_name": user.Last_name,
        "Password": user.Password,
        "Email": user.Email,
        "User_type": user.User_type
        // "price": parseFloat(newSignUp.price)
    }).then(response => {
        if(response.status == 200){
            setRefreshData(true)
        }
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {user.First_name = event.target.value}}
                  // onChange={(event) => {newSignUp.First_name = event.target.value}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event) => {user.Last_name = event.target.value}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {user.Email = event.target.value}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => {user.Password = event.target.value}}
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => AddNewUser()}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

// import React , {useState, useEffect} from 'react'
// import axios from "axios";
// import {Button, Form, Container, Modal } from 'react-bootstrap'
// export default function Register() {
//   const [register, setRegister] = useState(false);
//   const [refreshData, setRefreshData] = useState(false)
//   const [addNewUser, setAddNewUser] = useState(false)
//   const [user, setUser] = useState({First_name: "", Last_name: "", Password: "", Email: "", User_type: "USER"})

//   useEffect(() => {
//     // getAllOrders();
//     console.log(user.First_name)
//     console.log(user.Last_name)
//     console.log(user)
//   }, [])
//   //refreshes the page
//   if(refreshData){
//     setRefreshData(false);
//     console.log(user.First_name)
//     // getAllOrders();
//   } 

//   //creates a new order
//   function AddNewUser(){
//     setAddNewUser(false)
//     var url = "http://localhost:5000/users/signup"
//     axios.post(url, {
//         "First_name": user.First_name,
//         "Last_name": user.Last_name,
//         "Password": user.Password,
//         "Email": user.Email,
//         "User_type": user.User_type
//         // "price": parseFloat(newSignUp.price)
//     }).then(response => {
//         if(response.status == 200){
//             setRefreshData(true)
//         }
//     })
//   }
//   const handleChange = e => {
//     const {name, value} = e.target
//     setUser({...user, [name]: value})
//   }
//   return (
//     <>
//         <Form.Group>
//             <Form.Label >First name</Form.Label>
//             <Form.Control onChange={(event) => {user.First_name = event.target.value}}/>
//             <Form.Label>Last name</Form.Label>
//             <Form.Control onChange={(event) => {user.Last_name = event.target.value}}/>
//             <Form.Label >Email</Form.Label>
//             <Form.Control onChange={(event) => {user.Email = event.target.value}}/>
//             <Form.Label >Password</Form.Label>
//             <Form.Control onChange={(event) => {user.Password = event.target.value}}/>
//         </Form.Group>
//     <Button onClick={() => AddNewUser()}>Add</Button>
//     </>
//   )
// }