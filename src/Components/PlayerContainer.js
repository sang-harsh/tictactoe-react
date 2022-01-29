import React from 'react';

function PlayerContainer({playerNo}) {
  console.log(playerNo);
  return (
    <div className='player-container'>
    <p>THis is play No {playerNo}</p>
    </div>
  )
}
export default PlayerContainer;
