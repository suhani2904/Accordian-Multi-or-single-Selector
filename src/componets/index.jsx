import React, { useState } from "react"
import data from './data'
import './style.css'
function Accordian(){
  const [selected , setselected] = useState(null);
  const [enable , setenable] = useState(false)
  const [multi , setmulti] = useState([])
  const singleselector = (getid)=>{
    setselected(getid)
  }
  const multiselector = (getid) => {
    let cpy = [...multi]
    const findid = cpy.indexOf(getid)
    if(findid === -1){
      cpy.push(getid)
    }
    else{
      cpy.splice(findid , 1)
    }
    setmulti(cpy)
  }
  return <div className = "wrapper">
    <button onClick={()=> setenable(!enable)}>enable Multi selection</button>
    <div className="accordian">
      {
        data && data.length>0 ?
        data.map((data) => (
          <div className="item">
          <div className="title" onClick={enable ?  () => multiselector(data.id) : () =>singleselector(data.id)}>
            <h3>
              {data.question}
            </h3>
            <span>+</span>
            </div>
            {
              selected === data.id || multi.indexOf(data.id) !== -1 ? 
              <div className="answer">
                {data.answer}
                </div>
                : null 
    }
   
            </div>
        ))
         : <div> no data </div>
      }
    </div>
  </div>
}
export default Accordian