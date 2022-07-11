import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import Header from './components/Header';
import './CSS/Style.css'


function App() {
  const { darkTheme } = useContext(AppContext);
  const theme = darkTheme ? 'light' : 'dark';
  const classes = `theme ${theme}`;

  return (
      <div className={ classes }>
        <Header />
      </div>
  )
}

export default App
