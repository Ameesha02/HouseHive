import { useState } from 'react';
import './App.css';
import Cards from './component/Cards';
import Filter from './component/Filter';
import Header from './component/Header';
import {list,list2} from "./assets/cards-list"

function App() {
  const[selectedFilter,setSelectedFilter]=useState(0);
  return (
    <div className="App">
      <Header/> 
      <Filter
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}/>
      
      {selectedFilter==0 ? <Cards list={list}/> :<Cards list={list2}/>}
    </div>
  );
}

export default App;
