import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Nikhil' age='20' />
      <Card user='sherr' age='40' />
      <Card user='kunal' age='19' />
    </div>
  )
}

export default App