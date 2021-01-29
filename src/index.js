
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Score() {
  const [value, setvalue] = React.useState(true)

  function inc() {
    setvalue((preVal) => preVal+1);

  }

  function dec() {
    setvalue((preVal) => preVal-1);

  }
  return (
    <div >
    <h1>socore:</h1>
        <button onClick={inc}>Add +</button>
        <div>{value}</div>
        <button onClick={dec}>Subtract -</button>

    </div>
  )

}

ReactDOM.render(
  <Score/>,
  document.querySelector('#root')
)