import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
