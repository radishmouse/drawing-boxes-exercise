import React from 'react';

function printMessage() {
  console.log("Hello from the box!");
}

const Box = (props) => {
  return (
    <div className="box">
      {props.message}
      <button onClick={printMessage}>click me</button>
    </div>
  )
}

export default Box;