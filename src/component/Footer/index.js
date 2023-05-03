import React ,{useState}from 'react'
import "./index.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom"
import Content from './content.js';

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
 <div className="footer">
     
 {  !showPopup && <div className="footer-left" >
        <ul>
        © 2023 HouseHive,Inc
     <li>Privacy</li> 
     <li>Terms</li>
     <li>Sitemap</li>
     <li>Company details</li>
     <li>Destinations</li>
        </ul></div>}
        {  !showPopup && <div className="footer-right">
          <ul><li>  English (IN)</li>
           <li>  ₹ INR</li>
           <li>  Support & resources</li>
         
          <KeyboardArrowUpIcon  onClick={openPopup} />
          
           </ul> 
</div>}
{showPopup && <Content />
          }
          {showPopup &&   <KeyboardArrowDownIcon  onClick={openPopup} />
          }
    </div>
   
    </div>
  )
}

export default Footer
