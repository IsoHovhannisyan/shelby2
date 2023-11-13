
import { useState } from 'react';
import '../css/rooms.css';

export function Rooms({rooms, setRooms, bookingPageLabel}) {
  const [cursor, setCursor] = useState('pointer');

  const onChangeInput = ()=>{
    if(rooms>1){
      setRooms(+rooms-1);
      setCursor('pointer');
    }else{
      setCursor('not-allowed');
    }
  }

  return (
    <div className='Rooms'>
      <div>{bookingPageLabel[0]?.rooms}</div>
      <div className='btnNumbers'>
        <div onClick={onChangeInput} className='prev'><i class="fa-solid fa-minus" style={{cursor}}></i></div>
        <span>{rooms}</span>
        <div onClick={()=> setRooms(+rooms + 1)} className='next'><i class="fa-solid fa-plus"></i></div>
      </div>
    </div>
  )
}
