import {useState,useEffect} from 'react'

export function Checkout({checkout, setCheckout}) {
  const [minValue, setMinValue] = useState('');

  useEffect(()=> {
      const today = new Date().toISOString().split('T')[0];
      setMinValue(today);
  },[])

return (
  <div>
      <input type="date" min={minValue} value={checkout} onChange={(e)=> setCheckout(e.target.value)}/>
  </div>
)
}
