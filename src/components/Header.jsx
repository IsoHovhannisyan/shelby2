import { useEffect, useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
// import { SelectLanguage } from './SelectLanguage';
import '../css/header.css';

export function Header({ navbar }) {
  
    const navigate = useNavigate();
    const [scrollDown, setScrollDown] = useState(false);
    const [showMenu, setShowMenu] =useState(false);

    
    useEffect(() => {
        window.addEventListener('scroll', onScrollWindow);
    }, [])

    const onScrollWindow = () => {
        if (window.scrollY > 750) setScrollDown(true);
        else setScrollDown(false);
    }
  
    
    return (
        <div className={ scrollDown ? 'Header bg-color' : 'Header' }>

            <div className='fa-solid fa-bars' id='menu-bar' onClick={()=>setShowMenu(!showMenu)}></div>

            <div className="left">
                <div className='logo' onClick={() => navigate('/') } >
                    <img src='./images/logo.png' alt='logo' />
                </div>
                <nav className={showMenu? "navbar active": 'navbar'}>
                    {
                        navbar.map(el => (
                            <Link key={el.id} to={el.route} className='Link'> 
                                {el.title}
                            </Link>
                        ))
                    }
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
                   

            </div>
        </div>
    )
}
