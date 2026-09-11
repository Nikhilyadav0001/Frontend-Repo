import React from 'react'

const App = () => {

  const user = {
    username: 'Nikhil',
    age: 20,
    city: 'Gurugram'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usr = JSON.parse(localStorage.getItem('user'))

  //localStorage.removeItem('user')
  //localStorage.clear()
  console.log(usr.username);
  return (
    <div>App</div>
  )
}

export default App