import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import glogo from "../images/google.png";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handelEmail = (event) => {
    setEmail(event.target.value);
    // if (/^\S+@\S+\.\S+$/.test(event)) {
    //   setEmail(event.target.value);
    // } else {
    //   setEmail("Invalid email");
    // }
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const signuphandel = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('User Created');
        navigate('/home')
      })
      .catch((error) => {
        toast.error(error,{id:'error'})
        // ..
      });
    console.log(email);
  };
  return (
    <div className="w-25 mx-auto my-5 shadow-sm p-4 rounded-sm">
      <h1 className="text-center">Sign Up</h1>
      <Form onSubmit={signuphandel}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handelEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handelPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <div className="d-flex justify-content-center my-4">
        <span>Need an account? </span>
        <Link to="/SignIn">Login</Link>
      </div>
      <hr />
      <div>
        {user.uid ? (
          navigate("/home")
        ) : (
          <button
            onClick={handelGoogle}
            className="w-100 btn btn-outline-primary text-bold"
          >
            <span>
              <img style={{ width: "30px" }} src={glogo} alt="" />
            </span>
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default SignUp;
