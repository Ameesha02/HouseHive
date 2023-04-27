import React from 'react'
import "./index.css"
import logo from "../../assets/logo/long-logo.png"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ProfileMenu from "./ProfileMenu.js"
import SimpleBottomNavigation from "./BottomNav.js"
import Mobile from "../Mobile"
const Header = () => {
  return (
    <div className='navbar'>
       <img src={logo} alt="" className='navbar-logo'/>
      <div className="search-bar">
        <div className='search-bar-text'>Any where</div>
        <div className='search-bar-text'>Any week</div>
        <div className='search-bar-text2'>Add Guests</div>
        <div className="search-icon-div">
        <SearchRoundedIcon  className='search-icon'/></div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">Airbnb Your Home</div>
        <div className="airbnb-your-home"><LanguageRoundedIcon sz={{fontSize:"0.9rem"}}/></div>
        <div className="profile-div">  <ProfileMenu/></div>
        {/* <Mobile/> */}
      </div> 
    
      <SimpleBottomNavigation/>
   
    </div>
  )
}

export default Header
