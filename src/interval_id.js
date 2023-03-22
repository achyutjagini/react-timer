/*This code block defines a React functional component that uses the useState
hook to store the ID of an interval timer. The handleClickStart function
starts the timer by calling window.setInterval, and then updates the 
state variable with the new ID using the setIntervalId function. The 
handleClickStop function clears the interval timer using clearInterval
 and sets the state variable back to null using setIntervalId.

By storing the interval ID in state, the component can keep track of
the current state of the timer and update the UI accordingly. For
example, you might use the state variable to disable or enable buttons
that start or stop the timer depending on whether the 
timer is currently running or stopped.

Note that the use of useState and setIntervalId triggers a 
rerender of the component whenever the state variable changes. 
This ensures that the UI is always up to date with the current
state of the component.

*/

/*
window.setInterval is a method in the browser's JavaScript API that allows
you to repeatedly execute a function at a fixed interval. It takes two '
arguments: the first argument is the function that you want to execute, and
the second argument is the time interval in milliseconds between each
execution of the function.

For example, if you want to execute a function called updateCount 
every 1 second, you can use setInterval as follows:


const intervalId = window.setInterval(updateCount, 1000);
In this example, updateCount is the name of the function you want to
 execute every second, and 1000 is the time interval in milliseconds 
(i.e., 1 second). The setInterval method returns an ID number that
 identifies the interval timer. You can use this ID number to stop 
the interval timer using the clearInterval method.

window.clearInterval(intervalId);
This method is often used in web applications to perform periodic updates,
animations, or other tasks that need to be performed at regular intervals.
However, it's important to use it with care, as running too many intervals
or setting intervals too frequently can have performance
 implications and impact the user experience.*/

// store interval id in state
const [intervalId, setIntervalId] = useState<number|null>(null);


  const handleClickStart = () => {
    const intervalId = window.setInterval(() => {
        // ...
    }, 1000);

    // update the state variable when we have a new id
    // would cause a rerender
    setIntervalId(intervalId);
  };

  const handleClickStop = () => {
    // If the timer is already stopped, do nothing
    if (intervalId === null) {
      return;
    }

    clearInterval(intervalId);
    // update the state variable to null once we
    // cleared the interval
    // would cause a rerender
    setIntervalId(null);
  };
