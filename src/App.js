//flow
//there is a h1 tag showing time remaining
//there is 3 buttons-start,stop,reset

//time-state variable
import { useState ,useEffect,useRef} from "react";

export default function App()
{


const formatDate=(fiveMinutes)=>
{
const minutes=fiveMinutes.getMinutes()
const seconds=fiveMinutes.getSeconds()

//console.log(`${minutes}:${seconds}`)
const paddedseconds=seconds.toString().padStart(2,'0')
//console.log(`${minutes}:${paddedseconds}`)
return `${minutes}:${paddedseconds}`
}

const fiveMinutes=new Date(0,0,0,0,5)
let [timeRemaining,setTimeRemaining]=useState(fiveMinutes)
const intervalId = useRef(null);

const handleClickStart = () => {
    // update current value of the ref
    // does not trigger a rerender
    if(intervalId.current!==null)
    {
        return;
    }
    intervalId.current = window.setInterval(() => {
    setTimeRemaining((prevTimeRemaining)=>new Date(prevTimeRemaining.getTime()-1000))

    }, 1000);
  };

  const handleClickStop = () => {
    // If the timer is already stopped, do nothing
    if (intervalId.current === null) {
      return;
    }
   // The clearInterval() function is used to stop the execution
   // of the function that was set to be executed using setInterval()
   
    clearInterval(intervalId.current);
    intervalId.current = null;
  };


  const handleReset = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
    }
    setTimeRemaining(fiveMinutes);
  };

  useEffect(() => {
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
    };
  }, []);


/*
setInterval(()=>
{
setTime(new Date(timeRemaining.getTime()-1000))
},1000)
*/

return(
<div>
<h1>{formatDate(timeRemaining)}</h1>
<button onClick={handleClickStart}>Start</button>
<button onClick={handleClickStop}>Stop</button>
<button onClick={handleReset}>Reset</button>
</div>
)
}
