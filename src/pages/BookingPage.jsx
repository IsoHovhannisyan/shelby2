import {useEffect, useState, useRef} from 'react';
import axios from '../axios';
import '../css/bookingpage.css';
import { SearchCity } from '../components/SearchCity';
import { Checkin } from '../components/Checkin';
import { Checkout } from '../components/Checkout';
import { Adults } from '../components/Adults';
import { Children } from '../components/Children';
import { Rooms } from '../components/Rooms';
import { ChildAge } from '../components/ChildAge';
import { Tour } from '../components/Tour';


export function BookingPage({}) {

  const [currentLanguage, setCurrentLanguage] = useState('am');
  const [dropDown, setDropDown] = useState(false);
  const [personDropDown, setPersonDropDown] = useState(false);
  const controlCheckPersonRef = useRef(null);
  const [cities, setCities] = useState([]);
  const [bookingPageLabel, setBookingPageLabel] = useState({});
  const [tours, setTours] = useState([]);
  const [adults, setAdults] = useState('1');
  const [rooms, setRooms] = useState('1');
  const [children, setChildren] = useState('0');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [childrenAge, setChildrenAge] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [tableShow, setTableShow] = useState(true);
  const [result, setResult] = useState({});


  useEffect(()=> {
    loadingData();
    window.scrollTo(0,0);
    window.addEventListener('mousedown', handleClickOutSide);
    // setCurrentLanguage(localStorage.getItem('shelby-Language'));
  },[currentLanguage]);

  useEffect(()=>{
    let arr = Array(+children).fill('1');
    setChildrenAge(arr);
  },[children]);

  async function loadingData(){
    const citiesData = await axios.get(`city?lang=${currentLanguage}`);
    setCities(citiesData.data);

    const bookingPageLabelData = await axios.get(`booking_page_label?lang=${currentLanguage}`);
    setBookingPageLabel(bookingPageLabelData.data);

    // if(sessionStorage.getItem('shelbyBookingPage')){
    //   loadDataInSessionStorage();
    // }
  }

  const handleClickOutSide = (e)=> {
    try{
      if(!controlCheckPersonRef.current.contains(e.target)) setDropDown(false);
    }catch{

    }
  }

  const closeTableHandler =()=>{
    sessionStorage.clear();
    setTableShow(false);
    setCheckin('');
    setSelectedCity('');
    setCheckin('');
    setCheckout('');
    setRooms('1');
    setAdults('1');
    setChildren('0');
  }

  const submitSearchPackages = async()=>{
    if(!selectedCity || !checkin || !checkout) {
      return alert('bolory petq e lracac linen');
    }

    const childageArr = document.querySelectorAll('.childage-container .cildeAge');
    const ages = [];

    for(let i = 0;i< childageArr.length; i++){
      if(childageArr[i].value === '')
      return alert('nsheq tariqy');

      ages.push(childageArr[i].value);
    }

    const toursData = await axios.get(`tour/city?lang=${currentLanguage}&city=${selectedCity}`);
    setTours(toursData.data);

    setResult({
      selectedCity,
      checkin,
      checkout,
      rooms,
      adults,
      children,
      childageArr: JSON.stringify(ages)
    })

    sessionStorage.setItem('shelbyBookingPage', JSON.stringify({
      selectedCity,
      checkin,
      checkout,
      rooms,
      adults,
      children,
      childageArr: JSON.stringify(ages)
    }))

    setTableShow(true);
  }



  return (
    <div className='booking'>
      <div className='header_background'></div>
      <div className="search">
        <div className="check-city">
          <SearchCity 
            cities={cities} 
            setCities={setCities} 
            selectedCity={selectedCity} 
            setSelectedCity={setSelectedCity}
            bookingPageLabel={bookingPageLabel}
          />
        </div>
        <div className="check-date">
          <Checkin checkin={checkin} setCheckin={setCheckin}  />
          <Checkout checkout={checkout} setCheckout={setCheckout}/>
        </div>
        <div className="check-person" ref={controlCheckPersonRef} onClick={()=> setDropDown(true)}>
          
          <div className='title'>
            <span>{adults}</span> {bookingPageLabel[0]?.adults}
          </div>

          <div className='circle'></div>

          <div className='title'>
            <span>{rooms}</span>{bookingPageLabel[0]?.rooms}
          </div>

          <div className='circle'></div>

          <div className='title'>
            <span>{children}</span> {bookingPageLabel[0]?.children}
          </div>
          <div className={dropDown ? 'controlCheckPerson activeCheckPerson': 'controlCheckPerson'}>
            <div className='left'>
              <Adults adults={adults} setAdults={setAdults} bookingPageLabel={bookingPageLabel}/>
              <Rooms rooms={rooms} setRooms={setRooms} bookingPageLabel={bookingPageLabel}/>
              <Children children={children} setChildren={setChildren} bookingPageLabel={bookingPageLabel}/>
            </div>

            {
              children > 0 && <div className='childage-container'>
                {childrenAge.map((_,index)=> <ChildAge key={index} bookingPageLabel={bookingPageLabel} />)}
              </div>
            }
          </div>

        </div>
        <button onClick={submitSearchPackages} className='btn'><span></span>Search</button>
      </div>
      {
        tableShow && 
        <div>
          <i className='fa-solid fa-xmark closeTable' onClick={closeTableHandler}></i>
          
          <div className='tours'>
              <table>
                <thead>
                  <tr>
                    {
                      bookingPageLabel && bookingPageLabel[0]?.table_headings?.split('/')
                      .map((el,index) => <th key={index}>{el}</th>)
                    }
                  </tr>
                </thead>
                <tbody className=' tours_body'>
                  {
                    tours.map((tour, index) => <Tour 
                    tour={tour}
                    result={result}
                    index={index}
                    />)
                  }
                </tbody>
              </table>
          </div>
        </div>
      }
    </div>
  )
}
