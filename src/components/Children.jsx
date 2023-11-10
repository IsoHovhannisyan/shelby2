import React from 'react'
import { useState } from 'react';

export function Children({children, setChildren}) {
  const [cursor, setCursor] = useState('pointer');

  const onChangeInput = ()=>{
    if(children>0){
      setChildren(+children-1);
      setCursor('pointer');
    }else{
      setCursor('not-allowed');
    }
  }

  // if(children > 0) setCursor('pointer');

  return (
    <div className='Adults'>
      <div>children</div>
      <div className='btnNumbers'>
        <span onClick={onChangeInput} className='prev' style={{cursor}}>-</span>
        <span>{children}</span>
        <span onClick={()=> setChildren(+children + 1)} className='next'>+</span>
      </div>
    </div>
  )
}
