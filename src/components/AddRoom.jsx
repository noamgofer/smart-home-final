import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function AddRoom(props) {
 

  const addRoomInfoToList=()=>{
    const temp={
        type:props.roomType,
        name:props.roomName,
        color:props.roomColor,
        items:[]
        
    }
    if(props.roomName.length===0
      ||props.roomType.length===0
      ||props.roomColor.length===0)
      {alert("all inputs must to be filled")}
    else{
    return props.setRoomList([...props.roomList,temp])
  }}

  return (
    <div className='addRoomPage'>
 <select onChange={(e)=>props.setRoomType(e.target.value)}>
    <option selected disabled>Choose Room Type</option>
    <option >Living Room</option>
    <option >Bathroom/Toilet</option>
    <option >Bedroom</option>
 </select>
 <br />

 <input type="text" placeholder='enter name' maxLength={9} onChange={(e)=>props.setRoomName(e.target.value)} />
 <br />
<select onChange={(e)=>props.setRoomColor(e.target.value)}>
    <option selected disabled>Choose Color</option>
    <option value={"#75C2F6"}  style={{backgroundColor:"#75C2F6"}} >blue</option>
    <option value={"#FF9B9B"} style={{backgroundColor:"#FF9B9B"}} >red</option>
    <option value={"#C8E4B2"} style={{backgroundColor:"#C8E4B2"}}>green</option>
    <option value={"#FFE17B"} style={{backgroundColor:"#FFE17B"}}>yellows</option>
    <option value={"#F9E0BB"} style={{backgroundColor:"#F9E0BB"}}>vintage</option>
    <option value={"#526D82"} style={{backgroundColor:"#526D82",color:"white"}}>dark</option>
 </select>
 <br />

 <Link to='/'><button className='addRoomBtn' onClick={addRoomInfoToList}>Add Room</button></Link>


    </div>
  )
}
