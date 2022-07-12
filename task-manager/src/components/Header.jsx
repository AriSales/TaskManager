import React, { useContext } from 'react';
import Moon from '../icons/moon.svg';
import Sun from '../icons/sun.svg';
import AppContext from '../context/AppContext';
import '../CSS/Style.scss';

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(AppContext);
  const theme = darkTheme ? 'dark' : 'light';
  const classes = `header ${theme}`;

  return (
    <div className={ classes }>
      <button type='button' onClick={() => (setDarkTheme(!darkTheme))} >
        {
          !darkTheme
          ? <img
              src={ Moon }
              alt='Change to dark'
            />
          : <img
              src={ Sun }
              style={
                {filter: 'invert(77%) sepia(30%) saturate(7500%) hue-rotate(335deg) brightness(104%) contrast(98%)'}
              }
              alt='Change to white'
            />
        }
      </button>
    </div>
  )
}
