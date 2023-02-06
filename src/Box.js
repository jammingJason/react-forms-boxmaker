import React from 'react';
import './Box.css';

const Box = ({ height, width, color, id }) => {
  // alert(height);

  const removeItem = (idx) => {
    const item = document.getElementById(idx);
    item.remove();
  };
  return (
    <div
      className="App Box-div"
      id={id}
      style={{
        textAlign: 'right',
        background: color,
        position: 'absolute',
        left: '45%',
        top: 250,
        height: height,
        width: width,
      }}
    >
      <button
        className="Box-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Box;
