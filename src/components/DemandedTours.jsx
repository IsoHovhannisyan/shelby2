import '../css/demandedtours.css'
import { Link } from 'react-router-dom';

export function DemandedTours({demandedTours}) {
    return (
        <div className='DemandedTours'>
            {
                demandedTours.map(el => (
                    <div key={el.id} className='item'>
                        <div className='content'>
                            <h2>{el.title}</h2>
                            <p>{el.descr}</p>
                            <Link to='/booking'><button className='btn z-0'><span></span>{el.btn_text}</button></Link>
                        </div>

                        <div className='image'>
                            <img src={`https://shelby-backend-services.vercel.app/${el.image}`} alt='DemandedTours' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}