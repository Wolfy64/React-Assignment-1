import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <h1>{props.userName}</h1>
      <p>
        Magna in id aliqua quis dolore. Laboris in proident irure ex aute elit elit fugiat anim dolore minim sunt.
      </p>
      <p>
        Magna in id aliqua quis dolore. Laboris in proident irure ex aute elit elit fugiat anim dolore minim sunt.
      </p>
    </div>
  )
}

export default userOutput;