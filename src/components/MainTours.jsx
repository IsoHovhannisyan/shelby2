import React from 'react'
import '../css/maintours.css';

export function MainTours({mainTours, homePageLabel}) {
  return (
    <div className='mainTours'>
        <h2 className='whiteHeading'>{homePageLabel[0]?.label}</h2>
        <div className='container'>
            {   
                mainTours.map(el => <div key={el.id}  style={{ backgroundImage: `url('https://shelby-backend-services.vercel.app/${el.image}')` }} className=' w-[60%] h-[200px] bg-cover bg-no-repeat bg-center'></div>)
            }
        </div>
    </div>
  )
}
