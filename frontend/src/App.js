import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Orders from './components/orders.components';
import Signin from './components/signin.components';
import Signup from './components/signup.components';
import Navbar from './components/navbar.components';

function App() {
  const persistentUserData = localStorage.getItem('user-data')
  // const [user, setLoginUser] = React.useState(null);
  const [user, setLoginUser] = React.useState(persistentUserData);
  console.log("user", user)
  async function login(user = null) {
    setLoginUser(user);
  }
  
  async function logout() {
    // setLoginUser(JSON.parse(localStorage.getItem("no")))
    localStorage.removeItem('user-data')
    setLoginUser(null)
    // setLoginUser(input)
  }
  return (
    <div>
      {/* <Orders /> */}
      <Router>
        <Navbar props={logout}/>
        <Routes>
          {/* <Route index element={<Orders/>}/> */}
          <Route index element={user ? <Orders/> :  <Signin Signin = {login}/>} /> 
          <Route exact path="/orders" element={<Orders user = {user}/>}/>
          <Route exact path="/signin" element={<Signin Signin = {login}/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;