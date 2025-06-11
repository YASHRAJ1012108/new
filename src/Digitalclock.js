import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [date, setdate] = useState(new Date());

  useEffect(() => {
    // Set interval to update time every second
    setInterval(() => {setdate(new Date())},1000)},[])
    

    // Cleanup function to clear the interval on unmount
    return (
        <>
        <h1>Local TIme String-{date.toLocaleTimeString()}</h1>
        <h1>Hour{date.getHours()}: Minutes{date.getMinutes()} :second-{date.getSeconds()}</h1>
        </>
    ) 
}

export default DigitalClock;
