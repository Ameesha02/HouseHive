import { useState } from 'react';
import './App.css';

import {list,list2} from "./assets/cards-list"

import {  Routes, Route } from 'react-router-dom';
import Login from './component/Header/Login';


// function App() {
//   const[selectedFilter,setSelectedFilter]=useState(0);
//   return (
//     <div className="App">
       
      
      
  

// <Routes>

//     <Route path="/" element={<Header/>}/>
//     <Route path="/" element={<Filter
//       selectedFilter={selectedFilter}
//       setSelectedFilter={setSelectedFilter}/>}/>
//     <Route path="/OnClick" element={<Login/>}/>
//     <Route path="/" element={selectedFilter==0 ? <Cards list={list}/> :<Cards list={list2}/>}/>
//     <Route path="/" element={<Footer/>}/>

// </Routes>
//     </div>
//   );
// }

// export default App;
import MainPage from './MainPage';
import Signup from './component/Header/Signup';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          list={list}
          list2={list2}
        />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
     
        <Route path="/content" element={<KeyboardArrowUpIcon />} />
      </Routes>
    </div>
  );
}

export default App;