import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Header() {
  const { theme, setTheme } = useContext(AppContext);

  return (
      <button 
        type='button'
        onClick={() => theme === 'white' ? setTheme('dark') : setTheme('white')}>
        {theme}
      </button>
  )
}
