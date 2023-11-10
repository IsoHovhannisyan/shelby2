import React, { useState } from 'react'
import '../css/ourratings.css';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

export function OurRatings({ourRatings, homePageLabel}) {

  const [counter, setCounter] = useState(false);


  return (
    <div className='ourRatings'>
      <h2 className='whiteHeading'>{homePageLabel[0]?.label}</h2>

        <div className='container'>
        {
            ourRatings.map(el => <div key={el.id} className='Ratings'>
                <ScrollTrigger onEnter={()=> setCounter(true)}>
                  {counter && <CountUp className='rating' start={0} end={el.rating} duration={5} />}
                </ScrollTrigger>
                <div className='title'>{el.title}</div>
                <div className='descr'>{el.descr}</div>
            </div>)
        }
    </div>
    </div>
  )
}
