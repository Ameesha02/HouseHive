import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.css"
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
 const[flag,setFlag]=React.useState(true);
const handleClick=()=>{
  setFlag(!flag);
}
  return (
    <div className='bottom-nav'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore"  onClick={handleClick}   icon={<RestoreIcon variant="contained"/>} 
          sx={{ '&.Mui-selected': { color: 'var(--theme)' } }}/>
        <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />}   sx={{ '&.Mui-selected': { color: 'var(--theme)' } }}/>
        <BottomNavigationAction label="Login" icon={<LocationOnIcon />}   sx={{ '&.Mui-selected': { color: 'var(--theme)'} }}/>
      </BottomNavigation>
    </div>
  );
}