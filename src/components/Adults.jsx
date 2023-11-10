import {useState} from 'react'

export function Adults({adults, setAdults}) {
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
      <div>Adults</div>
      <div className='btnNumbers'>
        <span onClick={onChangeInput} className='prev' style={{cursor}}>-</span>
        <span>{adults}</span>
        <span onClick={()=> setAdults(+adults + 1)} className='next'>+</span>
      </div>
    </div>
  )
}
