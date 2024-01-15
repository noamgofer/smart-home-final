import React,{useState}from 'react'
import RoomPage from './RoomPage'
//import { smartHomeContext } from './contextAPI';

import { Link } from 'react-router-dom'

export default function Room(props) {
//    const myContext = useContext(smartHomeContext)S

 const iconColor=props.color
    



  return (
    <div> 
        <Link to={`/roompage/${props.index}/${props.name}`} ><button className='roomIcon' style={{backgroundColor:iconColor}}>{props.val.name}</button></Link>
    </div>
  )
}
