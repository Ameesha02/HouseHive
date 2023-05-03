import React,{useState} from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css"
import { Link } from 'react-router-dom';
import Signup from './Signup.js';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick =(event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu-flex'
      >
        <MenuRoundedIcon/>
     <AccountCircleRoundedIcon/>
      </div>
     {!showPopup && <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{".MuiPaper-root":{borderRadius:"1rem",
        // marginTop:"0.5rem",
        // paddingTop:"0rem"
        marginTop:"1rem",
        minWidth:"200px",
        boxShadow:"0 1px 2px rgb(000/8%), 0 4px 12px rgb(0 0 0 / 5%);"}}}
      >
        <MenuItem className='menu-items' onClick={openPopup}>Sign Up</MenuItem>
     <Link to="/Login" style={{ textDecoration: 'none', color: 'inherit' }}> <MenuItem  className='menu-items'   onClick={handleClose}> Login</MenuItem></Link> 
    
      <div style={{height:"1px",backgroundColor:"var(--grey)",width:"100%" }}/>
        <MenuItem className='menu-items' onClick={handleClose}>HouseHive Your Home</MenuItem>
        <MenuItem className='menu-items' onClick={handleClose}>Host an Experince</MenuItem>
        <MenuItem  className='menu-items' onClick={handleClose}>Help</MenuItem>
      </Menu>}

      {showPopup && <Signup />
          }
          {showPopup &&   <CloseIcon className="closeicon"   onClick={openPopup} />
          }
    </div>
  );
}