import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import './App.css'
import Header from './components/Header';

function App() {
  const { theme } = useContext(AppContext);

  return (
      <div className="App">
        <Header />
      </div>
  )
}

export default App
