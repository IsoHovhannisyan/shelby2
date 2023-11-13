import React from 'react'
import '../css/hottours.css';
import { Link } from 'react-router-dom';

export function HotTours({hotTours, homePageLabel}) {
    
  return (
    <div>
      <h2 className='whiteHeading'>{homePageLabel[0]?.label}</h2>
      <div className='HotTours'>
        <div className='container'>
        {
            hotTours.map(el => <div className='tour' key={el.id}>
                <div className='img'><img src={`https://shelby-backend-services.vercel.app/${el.image}`} alt="" /></div>
                <div className='title'>{el.title}</div>
                <div className='descr'>{el.descr}</div>
                <Link to='/booking'><button className='btn'><span></span>{el.btn_text}</button></Link>
            </div>)
        }
    </div>
    </div>
  </div>
  )
}
