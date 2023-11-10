import React from 'react'
import { useState, useEffect } from 'react'

export function Checkin({checkin, setCheckin }) {
    const [minValue, setMinValue] = useState('');

    useEffect(()=> {
        const today = new Date().toISOString().split('T')[0];
        setMinValue(today);
    },[])

  return (
    <div>
        <input type="date" min={minValue} value={checkin} onChange={(e)=> setCheckin(e.target.value)}/>
    </div>
  )
}
