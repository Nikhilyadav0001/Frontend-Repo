import React from 'react'
import Card from './componemt/card'
import Navbar from './componemt/Navbar'


const name = 'nikhil'
const App = () => {
  return (
    <div>
      <Navbar />
      'hi i am {name}'
      <br />
      <Card />
      <br />
      <Navbar />
      <br />
      <Card />
      <br />
      <Card />
    </div >
  )
}

export default App

// here  we have created a simple component in react 