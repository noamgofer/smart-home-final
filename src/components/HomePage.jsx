import React,{useState} from 'react'
//import { smartHomeContext } from '../contextAPI'
import { Link } from 'react-router-dom'
import Room from './Room'
import RoomPage from './RoomPage'

export default function HomePage(props) {

  return (
    <div>
      <div className='roomIcons' >
        {props.roomList.map((val,index)=>{
        return <Room key={index}
         index={index} val={val} name={val.name} color={val.color} items={val.items} />        
    })}</div>

    <br /><br /><br />
        
       <Link to="addroom"><button className='plus'>+</button></Link> 
    </div>
  )
}
