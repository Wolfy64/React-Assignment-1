import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const style = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px',
  }

  return(
    <div className="UserInput" >
      {props.children}
      <input
        style={style}
        type="text"
        onChange={props.changed}
        value={props.userName} />
    </div>
  )
}

export default userInput;