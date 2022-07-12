import React, { useState } from 'react';
import '../CSS/Style.scss';
import MainTasks from './MainTasks';

export default function TaskCenter() {
  const [mainTaskIndex, setMainTaskIndex] = useState([0]);

  return (
    <div>
      {mainTaskIndex.map((MT) => <MainTasks index={ MT } />)}
      <button
        type='button'
        onClick={() => {setMainTaskIndex([...mainTaskIndex, mainTaskIndex.length])}}
      >
        adicionar Main Task
      </button>

    </div>
  )
}
