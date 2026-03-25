import React, { useEffect, useRef, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
    ampm: "",
   
  });
  const [isPause,setIsPause]=useState(false);
  const timerRef=useRef();

  const updateClock = () => {
      const now = new Date();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;
      hours = String(hours).padStart(2, "0");

      setTime({ hours, minutes, seconds, ampm });
    };

  
    useEffect(()=>{
if(!isPause){
  timerRef.current=setInterval(()=>{
    updateClock()
  },1000)

  return ()=>clearInterval(timerRef.current)
}
    },[isPause])
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "monospace",
        marginTop: "50px",
        color: "#222",
      }}
    >
  
      <h1>
        {time.hours}:{time.minutes}:{time.seconds} {time.ampm}
      </h1>
      <button
        onClick={() => setIsPause((prev) => !prev)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "1px solid #ccc",
          background: isPause ? "#f56565" : "#48bb78",
          color: "white",
        }}
      >
        {isPause ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default DigitalClock;
