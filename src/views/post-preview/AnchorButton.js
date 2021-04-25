import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

export const AnchorButton = (props) => {

  const { threadData, setThreadData, index } = props;

  const handleStopButton = (e) => {
    console.log(e);
    console.log(threadData);
    threadData[index - 1].positionX = e.x; // e.screenX
    threadData[index - 1].positionY = e.y;
    console.log(threadData);
    // setThreadData([threadData]);
  }

  return (
    <>
      <Draggable
        defaultPosition={{ x: -550, y: 200 }}
        position={null}
        onStop={handleStopButton}
      >
        <div id="anchor" className="anchor">
          <div><b>{index}</b></div>
        </div>
      </Draggable>
    </>
  )

}
