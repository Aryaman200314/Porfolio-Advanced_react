import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Myself from './Components/MySelf/Myself'

function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <Navbar />
      <Myself/>
    </div>
  )
}

export default App