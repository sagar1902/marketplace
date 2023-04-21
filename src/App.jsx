
import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Navbar/Header';
import SpinLoader from './components/Layouts/SpinLoader';
import PrivateRoute from './Routes/PrivateRoute';
import Home from './components/Home/Home';
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Footer from './components/Layouts/Footer';
function App() {

  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <>
      <Header />
      <div className="container" style={{marginTop:'100px', marginBottom:"65px"}}>
        <Suspense fallback={<SpinLoader/>}>
          <Routes>
            <Route path="/" element={
              // <PrivateRoute>
                <Home />
              // </PrivateRoute>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/reset_password" element={<p>you forgot me</p>}/>
          </Routes>
        </Suspense>
      </div>
      <Footer/>
    </>
  )
  //////////////////////
  // const [imageUrl, setImageUrl] = useState('');
  // return (
  //   <div>
  //     {imageUrl && <img src={imageUrl} alt="Image" style={{'width':'50%'}}/>}
  //   </div>
  // );
}

export default App;