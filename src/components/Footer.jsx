import { Link } from 'react-router-dom';
import '../css/footer.css';

export function Footer({ footer }) {

    const infoData = footer[0]?.info.split('&'); 
    const linksData = footer[0]?.links.split('&');

    return (
        <div className='Footer'>
            <div className='info'>
                <Link to='/'>
                    <img src='/images/logo.png' alt='logo' />
                </Link>
                
                <div className='content'>{infoData && infoData[0]}</div>
            </div>

            <div className='support'>
                <p> <i className='fa-solid fa-phone'></i> {infoData && infoData[1]} </p>
                <p> <i className='fa-solid fa-envelope'></i> {infoData && infoData[2]} </p>
                <p> <i className='fa-solid fa-location-dot'></i> {infoData && infoData[3]} </p>
            </div>

            <div className="links">
                <h3>{footer[0] && footer[0].heading}</h3>
                <Link to='/booking'>{linksData && linksData[0]}</Link>
            </div>
        </div>
    )
}

