import { useState, useEffect } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import axios from '../axios';
import '../css/tourdetail.css'

export default function TourDetailPage({currentLanguage}) {

    const [tour, setTour] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const [SearchParams] = useSearchParams();

    
    useEffect(()=> {
        window.scroll(0,0)
        loadingTour();
    },[])

    const loadingTour = async()=>{
        const tourdata = await axios.get('tour/' + id);
        setTour(tourdata.data);
    }

  return (

    <div>
    <div className='header_background'></div>
    <div className='Tour'>
    <button className=' btn z-0  ' onClick={()=> navigate(-1)}><span></span>Go Back</button>
        <div className='tourDetail'>
        <div className='Left'>
            <div className='Head'>Search Data</div>
            <div>Tour Name</div>
            <div>Tour City</div>
            <div>Tour Hotel</div>
            <div>Transport Depart</div>
            <div>Transport Arrive</div>
            <div>Check in-Date</div>
            <div>Check out-Date</div>
            <div>Room</div>
            <div>Adult</div>
            <div>Children</div>
            <div>Price</div>
        </div>
        <div className=' Right'>
            <div className='Head'>Search Result</div>
            <div>{tour.name}</div>
            <div>{tour.city}</div>
            <div>{tour.hotel}</div>
            <div>{tour.transport_depart}</div>
            <div>{tour.transport_arrive}</div>
            <div>{SearchParams.get('checkin')}</div>
            <div>{SearchParams.get('checkout')}</div>
            <div>{SearchParams.get('rooms')}</div>
            <div>{SearchParams.get('adults')}</div>
            <div>{SearchParams.get('children')}</div>
            <div>{tour.price}$</div>

        </div>
    </div>
    </div>
    </div>
  )
}
