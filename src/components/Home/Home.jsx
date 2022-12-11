import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import logo from '../images/profile.png'
const Home = () => {
    const [user ,setUser] = useState({});
    // const [userImg ,setUserImg] = useState({});
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const userName = user;
              setUser(userName);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
    return (
        <div className='my-4'>
            <div className=''>
                <div className='d-flex justify-content-center'>
                    <img className='w-25 rounded-pill border border-3 shadow-sm'  src={user.photoURL} alt="" />
                </div>
                <div className='container text-center my-4'>
                    <h1>Hi !! {user.displayName}.</h1>
                    <small>{user.email}</small>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eaque sunt commodi harum voluptas est repudiandae. Velit tenetur perspiciatis ducimus quod quam repellat ut ratione! Dignissimos earum nesciunt sint voluptatem?</p>
                    <a href="">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default Home;