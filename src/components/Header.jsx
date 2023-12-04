import { useEffect, useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import {SelectLanguage} from '../components/SelectLanguage';
import '../css/header.css';

export function Header({ navbar, currentLanguage }) {
  
    const navigate = useNavigate();
    const [scrollDown, setScrollDown] = useState(false);
    const [showMenu, setShowMenu] =useState(false);
    const booking = navbar[0]?.title;

    
    useEffect(() => {
        window.addEventListener('scroll', onScrollWindow);
    }, [])

    const onScrollWindow = () => {
        if (window.scrollY > 750) setScrollDown(true);
        else setScrollDown(false);
    }
  
    
    return (
        <div className={ scrollDown ? 'Header bg-color' : 'Header' }>

            <div className='fa-solid fa-bars' id={scrollDown ? 'menu-bar-color': 'menu-bar'} onClick={()=>setShowMenu(!showMenu)}></div>

            <div className="left">
                <div className='logo cursor-pointer' onClick={() => navigate('/') } >
                    <img src='./images/logo.png' alt='logo' />
                </div>
                <nav className={showMenu? "navbar active": 'navbar'}>
                    <Link to='/booking' className='Link'>
                        {booking}
                        <span className='span'></span> 
                    </Link>
                </nav>
            </div>
            <div className="right">
                    
                    <i className='fa-solid fa-phone'></i>
                    <a className='infoTel' href='tel:555 6785'>Call Us: 555 67855</a>

                    <span className='separator'> | </span>    
                  
                    <a href="https://www.facebook.com/shelby.cjsco" target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>

                    <a href="https://twitter.com/" target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>

                    <a href="https://www.pinterest.com/" target='_blank' rel='noreferrer'>
                        <i className='fa-brands fa-pinterest'></i>
                    </a>

                    <div>
                        <SelectLanguage currentLanguage={currentLanguage} />
                    </div>
                    
                    
            </div>
        </div>
    )
}
