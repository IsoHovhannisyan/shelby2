import React from 'react'
import '../css/hottours.css';

export function HotTours({hotTours, homePageLabel}) {
    
  return (
    <div>
      <h2 className='whiteHeading'>{homePageLabel[0]?.label}</h2>
      <div className='hotTours'>
        <div className=' container'>
        {
            hotTours.map(el => <div className='tour' key={el.id}>
                <div className='img'><img src={`https://shelby-backend-services.vercel.app/${el.image}`} alt="" /></div>
                <div className='font-bold px-4'>{el.title}</div>
                <div className=' text-gray-400 text-[.9rem]'>{el.descr}</div>
                <button className='btn'><span></span>{el.btn_text}</button>
            </div>)
        }
    </div>
    </div>
  </div>
  )
}
