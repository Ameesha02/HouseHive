
import React from 'react'
// import list from "./assets/content-list.js"
import {list} from "../../assets/content-list"
import "./index.css"
const Content = () => {
  return (
    <div className='Content'>
      {list.map((index,i)=>(
       <div key={i}
        // style={{width:"22%"}} 
        className="child-div"> <h1>{index.h1}</h1>
       <ul>
        {index.point.map((point,k)=>{
            return (
              <li key={k}>{point}</li>
            )
        })}
       </ul>
     </div>
      ))}
    </div>
  )
}

export default Content

