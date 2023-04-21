
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';


export default function Header() {
  const { user, isAuthenticated } = useSelector(state => state.user);
  // const [profileToggle, setProfileToggle] = useState(false);
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", animation: "slide-in-left 1s ease-out" }}>
        <Link to='/'><img style={{ width: "85px", height: "75px", marginRight: "1rem" }} src="/icon.png" alt="Instagram Logo" /></Link>
      </div>
      {isAuthenticated && <div style={{ display: "flex", alignItems: "center", animation: "slide-in-right 10s ease-out", }}>
        <SearchBox />
      </div>}
    </nav>
  )
}