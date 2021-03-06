import React, { useEffect, useState } from 'react'

function Digital() {

    const [ clockState, setClockState ] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, [])

  return (
    <div className='digitalClock'>
        <h2>{clockState}</h2>
    </div>
  )
}

export default Digital