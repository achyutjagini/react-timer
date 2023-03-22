 /*
 The code you provided uses the useRef hook to create a mutable variable
  that can be used to store a value that persists across re-renders. The 
  value stored in a ref can be updated without triggering a re-render.

In the code you provided, intervalId is declared as a ref using the useRef
 hook, and is initialized to null. The handleClickStart function sets the 
 current value of the intervalId ref to the ID of a new interval timer 
 created with window.setInterval. The handleClickStop function clears 
 the interval timer using the ID stored in the current value of the 
 intervalId ref and sets it back to null.

Using a ref in this way is a valid approach for managing a value 
that needs to persist across re-renders but does not need to be stored
 in state. It is useful for managing mutable values that do not 
 affect the rendering of a component.

It is worth noting that using a ref to manage a value that is 
intended to be used in rendering is generally not recommended,
 as it can result in unexpected behavior and bugs. In such cases,
it is better to use state to manage the value, as changes to state
will trigger a re-render and ensure that the view is updated correctly.
*/
   // store interval id as ref
  const intervalId = useRef(null);

  const handleClickStart = () => {
    // update current value of the ref
    // does not trigger a rerender
    intervalId.current = window.setInterval(() => {
        // ...
    }, 1000);
  };

  const handleClickStop = () => {
    // If the timer is already stopped, do nothing
    if (intervalId.current === null) {
      return;
    }

    clearInterval(intervalId.current);
    // clear current value of the ref
    // does not trigger a rerender
    intervalId.current = null;
  };
/*
So far, we are controlling the interval based on user actions: clicking the
“Start” or “Stop” buttons will cause the timer to start or stop.

However, there’s anther case to consider: what if the component unmounts
when the timer is running? If we don’t clear the timer, it would 
continue to run in the browser memory, even if it’s no longer 
used in the UI - we would have a memory leak*/


useEffect(() =>{
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
      }
    }
, []);


const handleClickStart = () => {
  intervalId.current = window.setInterval(() => {
    setTimeRemaining(new Date(timeRemaining.getTime() - 1000));
  }, 1000);
};