import React, { useState } from 'react'

export default function ItemIcon(props) {
    const [flag,setFlag]=useState(false)
 
    const toggleBtn=()=>{
            setFlag(!flag)
        }
  return (
    <div>
       
        <div className='itemIconDiv'>
            <button className='itemIcon' onClick={toggleBtn} 
            style={{border: flag ? "4px solid red" : "4px solid green" ,
            color:flag ?"red" : "green" }}
            >{props.val}</button>
            

        </div>
    </div>
  )
}
