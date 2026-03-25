import React, { useEffect, useState } from 'react'

const DigitalClock = () => {

    const [time,setTime]=useState(new Date());
    const [randomPass,setRandomPass]=useState("")


    const pattern = /[A-Za-z0-9]/;

  const generatePassword = () => {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    while (result.length < 8) {
      const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
      if (pattern.test(randomChar)) {
        result += randomChar;
      } 
    }
    setRandomPass(result);
  };

  useEffect(() => {
 
    generatePassword();

    const timers = setInterval(generatePassword, 10000);

    return () => clearInterval(timers);
  }, []);
    
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>clearInterval(timer)
    },[])
  let hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')
  const ampm = hours > 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 



  return (
    <div>
        {hours}:{minutes}:{seconds} {ampm}
        <h3>{randomPass}</h3>
     
    </div>
  )
}

export default DigitalClock
