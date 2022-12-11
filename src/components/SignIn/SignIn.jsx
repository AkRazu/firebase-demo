import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import glogo from '../images/google.png'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom"

const provider = new GoogleAuthProvider();


const SignIn = () => {
    const navigate = useNavigate()
    const [user,setUser] = useState({});
    const handelGoogle = ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUser(user);
    console.log(user);
    // ...
  }).catch((error) => {
    console.error(error);
  });
    }
  return (
    <div className="w-25 mx-auto my-5 shadow-sm p-4 rounded-sm">
        <h1 className="text-center">Log In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <div className="d-flex justify-content-center my-4">
        <span>Need an account? </span>
        <Link to='/SignUp' >SIGN UP</Link>
      </div>
      <hr />
      <div>
        {
            user.uid ? navigate('/home'):<button onClick={handelGoogle} className="w-100 btn btn-outline-primary text-bold">
            <span>
                <img style={{width : '30px'}} src={glogo} alt="" />
            </span>
            Login with Google</button>
        }
      </div>
    </div>
  );
};

export default SignIn;
