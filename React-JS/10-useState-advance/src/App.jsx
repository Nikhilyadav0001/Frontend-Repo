import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  const [first, setfirst] = useState({ name: "Nikhil", age: 20 })

  // object update
  const changeName = () => {
    setfirst(prev => ({ ...prev, name: prev.name + "1", age: prev.age + 1 }))
    console.log(first)
  }

  //batch updates
  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>


      <h1>{first.name}</h1>
      <h1>{first.age}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
  )
}

export default App