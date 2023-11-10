import React from 'react'
import { Link } from 'react-router-dom'

export function Tour({result, tour,index}) {

  console.log(tour);

  return (
     <tr>
        <td>{index+1}</td>
        <td>{tour.name}</td>
        <td>{tour.city}</td>
        <td>{tour.hotel}</td>
        <td>{tour.transport_depart}</td>
        <td>{tour.transport_arrive}</td>
        <td>{tour.price}</td>
        <Link className='btn' to={`/booking/${tour.id}?checkin=${result.checkin}&checkout=${result.checkout}&rooms=${result.rooms}&adults=${result.adults}&children=${result.children}`}><span></span>{tour.btn_text}</Link>
        </tr>
  )
}
