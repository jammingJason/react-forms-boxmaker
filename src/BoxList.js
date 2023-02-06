import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
//
const BoxList = () => {
  const [boxData, setBoxData] = useState([
    {
      height: 150,
      width: 150,
      color: '#e8cfcf',
    },
  ]);

  const createBox = (newBox) => {
    console.log(newBox);
    setBoxData((boxData) => {
      return [...boxData, { ...newBox }];
    });
  };
  return (
    <>
      {boxData.map((box, idx) => {
        return (
          <Box
            id={idx}
            key={idx}
            position="absolute"
            color={box.color}
            width={parseInt(box.width)}
            height={parseInt(box.height)}
          />
        );
      })}
      <hr />
      <NewBoxForm createBox={createBox} />
    </>
  );
};

export default BoxList;
