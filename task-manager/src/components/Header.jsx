import React, { useContext } from 'react';
import Moon from '../icons/moon.svg';
import Sun from '../icons/sun.svg';
import AppContext from '../context/AppContext';
import '../CSS/Style.scss';

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  return (
    <div>
      <button type='button' onClick={() => (setDarkTheme(!darkTheme))} >
        {
          darkTheme
          ? <img
              src={ Moon }
              alt='Change to dark'
            />
          : <img
              src={ Sun }
              style={
                {filter: "invert(98%) sepia(3%) saturate(633%) hue-rotate(241deg) brightness(120%) contrast(100%)"}
              }
              alt='Change to white'
            />
        }
      </button>
    </div>
  )
}
