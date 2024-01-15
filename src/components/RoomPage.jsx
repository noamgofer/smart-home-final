import React,{useState} from 'react'
import RoomItems from './RoomItems';
import { Link, useParams } from 'react-router-dom';
import ItemIcon from './ItemIcon';


export default function RoomPage(props) {
    const [showItemselect,setShowItemSelect]=useState(false)
    const { roomIndex } = useParams();
    const index = parseInt(roomIndex);
    const selectedRoom = props.roomList[index];

    
    const showAddItem=()=>{
    setShowItemSelect(!showItemselect)  
    }


  return (
    <div >
     <div className='roomInfoDiv' >
     <h2 className='roomInfo'>Room Name: {selectedRoom.name}</h2>
     <h2 className='roomInfo'>{selectedRoom.type}</h2>
     </div>
     <hr />

     <div className='itemIcons' >
     {selectedRoom.items.map((val,index)=>{
    return <ItemIcon key={index} index={index} val={val}
   />        
})}

     </div>
     <button className='addItemBtn' onClick={showAddItem}>add item</button>
     {showItemselect && <RoomItems 
     
     setItemList={(newItemList) => {
      const updatedRoomList = [...props.roomList];
      updatedRoomList[index].items = newItemList;
      props.setRoomList(updatedRoomList);
    }}
    setRoomList={props.setRoomList}
    itemList={selectedRoom.items} 
    item={props.item}
    setItem={props.setItem}
    roomType={props.roomType}
     />}
     <Link to='/'><span class="material-symbols-outlined">home</span></Link>


    </div>
   
  )
}
