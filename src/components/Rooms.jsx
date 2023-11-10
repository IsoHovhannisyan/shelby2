import React from 'react'
import { useState } from 'react';

export function Rooms({rooms, setRooms}) {
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
    <div className='Adults'>
      <div>Rooms</div>
      <div className='btnNumbers'>
        <span onClick={onChangeInput} className='prev' style={{cursor}}>-</span>
        <span>{rooms}</span>
        <span onClick={()=> setRooms(+rooms + 1)} className='next'>+</span>
      </div>
    </div>
  )
}
