import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      color: '#e11d48',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      color: '#2563eb',
      tag: 'Undecided'
    },
    {
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
      color: '#059669',
      tag: 'Loyal'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App