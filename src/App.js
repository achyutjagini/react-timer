//flow
//there is a h1 tag showing time remaining
//there is 3 buttons-start,stop,reset

//time-state variable
import { useState } from "react";

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
let [timeRemaining,setTime]=useState(fiveMinutes)

/*
setInterval(()=>
{
setTime(new Date(timeRemaining.getTime()-1000))
},1000)
*/

return(
<div>
<h1>{formatDate(timeRemaining)}</h1>
<button>Start</button>
<button>Stop</button>
<button>Reset</button>
</div>
)
}
