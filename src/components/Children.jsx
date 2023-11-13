import '../css/children.css';
import { useState } from 'react';

export function Children({children, setChildren, bookingPageLabel}) {
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
    <div className='Children'>
      <div>{bookingPageLabel[0]?.children}</div>
      <div className='btnNumbers'>
        <div onClick={onChangeInput} className='prev'><i class="fa-solid fa-minus" style={{cursor}}></i></div>
        <span>{children}</span>
        <div onClick={()=> setChildren(+children + 1)} className='next'><i class="fa-solid fa-plus"></i></div>
      </div>
    </div>
  )
}
