
import { useState, useEffect, useRef } from 'react'
import '../css/searchcity.css';

export function SearchCity({cities, selectedCity, setSelectedCity,bookingPageLabel}) {

  const [dropDown, setDropDown] = useState(false);
  const bookingRef = useRef(null);

  useEffect(()=>{
    window.addEventListener("mousedown", handleClickOutSide);
  }, []);

  const handleClickOutSide = (e)=>{
    try{
      if(!bookingRef.current.contains(e.target)) setDropDown(false);
    }catch{

    }
  }

  const onChangeInput = (e) => {
    setSelectedCity(e.target.value);
    if(selectedCity.length > 1){
      setDropDown(true);
    }else {
      setDropDown(false);
    }
  }

  const handleClickListItem = (name) => {
    setDropDown(false);
    setSelectedCity(name);
  }

  return (
    <div className='SearchCity' ref={bookingRef}>
      <div className='searchBar'>
          <i className='fa-solid fa-hotel mr-2'></i>

          <input type="search" className=' Search'
            value={selectedCity}
            onChange={onChangeInput}
            onClick={()=> setDropDown(true)}
            placeholder={bookingPageLabel[0]?.inputPlaceholder}
          />
      </div>
      {
        dropDown &&
        <ul>
          {
            cities
            .filter(el=> el.name.toLowerCase().includes(selectedCity.toLowerCase()))
            .map(el => <li key={el.id} onClick={()=> handleClickListItem(el.name)}>
              <i className='fa-solid fa-location-dot'></i> {el.name}
            </li>)
          }
      </ul>
      }
    </div>
  )
}
