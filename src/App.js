
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from './components/Title';
import { useState } from 'react';
import HomePage from './components/HomePage';
import AddRoom from './components/AddRoom';
import Room from './components/Room';
import { smartHomeContext } from './contextAPI';
import RoomPage from './components/RoomPage';

function App() {

  const [roomList,setRoomList]=useState([])
  const [item,setItem]=useState("")
  const [itemList,setItemlist]=useState([])
  const [roomType,setRoomType]=useState("")
  const [roomName,setRoomName]=useState("")
  const [roomColor,setRoomColor]=useState("")

  


  

  return (
    <div className="App">
     
     <Title/>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage       
      roomList={roomList}
      roomName={roomName}
      roomColor={roomColor}
/>}/>


      <Route path='/addroom' element={<AddRoom 
      roomList={roomList}
       setRoomList={setRoomList}
       roomType={roomType}
       setRoomType={setRoomType}
       roomName={roomName}
       setRoomName={setRoomName}
       roomColor={roomColor}
       setRoomColor={setRoomColor}
       itemList={itemList}
       />}/>


      <Route path='/room' element={<Room
      item={item}
      setItem={setItem}
      roomList={roomList}
      />}/>


      <Route path='/roompage/:roomIndex/:name' element={<RoomPage
        roomList={roomList}
        setRoomList={setRoomList}
        setItemList={setItemlist}
        itemList={itemList}
        item={item}
        setItem={setItem} 
        roomType={roomType}
        />}/>
        

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
