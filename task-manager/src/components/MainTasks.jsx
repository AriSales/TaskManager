import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Edit from '../icons/edit.svg'
import Save from '../icons/save.svg'
import Cancel from '../icons/cancel.svg'
import '../CSS/Style.scss';

export default function MainTasks(props) {
  const { darkTheme } = useContext(AppContext);
  const { index } = props;
  const [mainTask, setMainTask] = useState('');
  const [saveTask, setTask] = useState(`Main Task ${index}`);
  const [inputMTState, setInputMTState] = useState(false);
  const [time, setTime] = useState('');
  const theme = darkTheme ? 'dark' : 'light';
  const classes = `main ${theme}`;
  const newTime = new Date().toLocaleTimeString();

  return (
    <div className={ classes }>
      {inputMTState 
      ? (
        <div className='controlMTStation' >
          <div>
            <input 
              type='text' 
              maxLength="25" onChange={({target : { value }}) => setMainTask(value)} 
              placeholder='change your main task'
            />
          </div>
          <button type='button' onClick={() => {
              setTask(mainTask); setInputMTState(!inputMTState); setTime(`${newTime}`);
            }}>
              <img
                src={ Save }
                alt='Save Button' 
                style={
                  {filter: 'invert(77%) sepia(30%) saturate(7500%) hue-rotate(335deg) brightness(104%) contrast(98%)'}
                }
              />
          </button>
          <button type='button' onClick={() => {
                setInputMTState(!inputMTState);
              }}>
                <img
                  src={ Cancel }
                  alt='Save Button'
                  style={
                    {filter: 'invert(34%) sepia(81%) saturate(5800%) hue-rotate(340deg) brightness(70%) contrast(132%)'}
                  }
                />
          </button>
        </div>
      )
    : (
      <div className='mainTask' >
        <button type='button' onClick={() => setInputMTState(!inputMTState)}>
          <img 
            src={ Edit }
            alt='Edit Button'
            style={
              {filter: 'invert(33%) sepia(53%) saturate(6869%) hue-rotate(351deg) brightness(96%) contrast(103%)'}
            }
          />
        </button>
        <p>{`${saveTask}.`}</p>
        <p className='currentTime' >{`#${time}`}</p>
      </div>
    )}
    </div>
  )
}
