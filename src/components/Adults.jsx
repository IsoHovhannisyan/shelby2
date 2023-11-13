import {useState} from 'react';
import '../css/adults.css';

export function Adults({adults, setAdults, bookingPageLabel}) {
  const [cursor, setCursor] = useState('pointer');

  const onChangeInput = ()=>{
    if(adults>1){
      setAdults(+adults-1);
      setCursor('pointer');
    }else{
      setCursor('not-allowed');
    }
  }

  return (
    <div className='Adults'>
      <div>{bookingPageLabel[0]?.adults}</div>
      <div className='btnNumbers'>
        <div onClick={onChangeInput} className='prev'><i class="fa-solid fa-minus" style={{cursor}}></i></div>
        <span>{adults}</span>
        <div onClick={()=> setAdults(+adults + 1)} className='next'><i class="fa-solid fa-plus"></i></div>
      </div>
    </div>
  )
}
