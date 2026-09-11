import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }
  function decreaseNum() {
    setNum(num - 1)
  }
  function jump5Num() {
    setNum(num + 5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5Num}>Increas by 5</button>
    </div>
    /*
      =======================================================
      React Hooks Overview & Explanation:
      =======================================================
      React Hooks are special functions introduced in React 16.8 
      that allow you to use state and other React features in 
      functional components without writing a class component.

      Key React Hooks:
      1. useState:
         - Manages local component state.
         - Returns the current state value and a function to update it.
         - Example: const [num, setNum] = useState(0)

      2. useEffect:
         - Handles side effects like data fetching, subscriptions, 
           or manually changing the DOM.
         - Runs after renders.

      3. useContext:
         - Allows sharing data/state across components without 
           passing props down manually at every level (prop drilling).

      4. useRef:
         - Accesses DOM elements directly or keeps a mutable value 
           that persists across renders without causing a re-render.

      5. useReducer:
         - An alternative to useState for managing complex state logic 
           using action types and reducer functions.

      6. useMemo & useCallback:
         - Optimization hooks used to cache/memoize values (useMemo) 
           or functions (useCallback) to prevent unnecessary recalculations.

      Rules of Hooks:
      - Only call Hooks at the top level (never inside loops, conditions, or nested functions).
      - Only call Hooks from React Function Components or Custom Hooks.
    */
  )
}

export default App