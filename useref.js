/*useRef is a built-in React hook that returns a mutable ref object. A 
ref object is a way to hold a value that persists across re-renders
without triggering a re-render.

The useRef hook is commonly used to:

Hold a reference to a DOM element or component instance, which can
be used to interact with or manipulate the component in some way.
Hold a mutable value that persists across re-renders, but does
not need to be stored in state.

When you call useRef(initialValue), it returns a ref object with a 
current property that is initialized to the provided initialValue.
You can update the value of the ref object by assigning a new value 
to its current property, without triggering a re-render.

Here is an example of using useRef to hold a 
reference to a DOM element:

If inputRef is null or undefined, then inputRef.current?.focus() 
will not be called, because the ?. operator will short-circuit the
function call if inputRef.current is null or undefined.

In this case, if inputRef.current is null, then the 
focus() method will not be called, and there will be no error.

*/

//typescript one
//.tsx extension
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    // focus the input element
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
}




import { useRef } from 'react';

import "./styles.css";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // focus the input element
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
}

/*
In this example, inputRef is initialized using useRef with an initial 
value of null. The ref attribute is passed to the input element,
which assigns the inputRef ref object to the element. When the
handleButtonClick function is called, it uses the current property
of the inputRef ref object to focus the input element, without 
triggering a re-render.

Here is an example of using useRef to hold a mutable value that persists across re-renders:
*/

import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  const handleButtonClick = () => {
    // increment the count value without triggering a re-render
    countRef.current++;
    console.log(`count: ${countRef.current}`);
  };

  return (
    <div>
      <p>Count: {count}</p>/this stays as zero
      <button onClick={handleButtonClick}>Increment count</button>
    </div>
  );
}
/*
In this example, countRef is initialized using useRef with
an initial value of 0. The useEffect hook is used to update the
current value of countRef to the current value of count whenever 
count changes. The handleButtonClick function increments the current
value of countRef without triggering a re-render, and logs the new
value to the console. The count state variable is used to render
the current value of count in the component's view.
*/

import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleButtonClick = () => {
    // increment the count value without triggering a re-render
    countRef.current++;
    console.log(`count: ${countRef.current}`);
    setCount(countRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increment count</button>
    </div>
  );
}






