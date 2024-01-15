import React from 'react'

export default function RoomItems(props) {
          
    const addItemToRoomItemList=()=>{      
    if(props.itemList.length<5 && props.item!=-1) return(
            props.setItemList([...props.itemList,props.item])            
    )}
    
    
         return (
            <div className='addItemDiv'>
             <select onChange={(e) => props.setItem(e.target.value)}>
                <option selected disabled>Choose Item</option>
                {props.roomType === 'Bathroom/Toilet' && <option value={"Boiler"}>Boiler</option>}
                <option value={"Light"}>Light</option>
                <option value={"A.C"}>A.C</option>
                {!props.itemList.includes('Music') && <option value={"Music"}>Music</option>}
            </select>
            <br />
            <button className='addItemToRoomBtn' onClick={addItemToRoomItemList}>Add Item To Room</button>
            </div>
         )
       }
       


