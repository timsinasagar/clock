import React, { useState, useEffect } from "react";

export default function Clock() {
  //declare and initilize states
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  //Update counter
  function update_count() {
    setCount(count + 1);
  }

  //do something when the state changes
  useEffect(() => {
    // Method 1
    // setInterval(function, milliseconds)
    let timerID = setInterval(update_count, 1000);

    // Method 2
    // let timerID = setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);

    // Clear timer every second
    return () => clearInterval(timerID);
  });

  //Update time
  function update_time() {
    setTime(new Date());
  }

  //Side effect of time
  useEffect(() => {
    //Set the time interval of 1 sec
    let timerID = setInterval(update_time, 1000);
    // Clear timer every second
    return () => clearInterval(timerID);
  });

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}
