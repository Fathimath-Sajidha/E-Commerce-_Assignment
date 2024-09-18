import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function RootLayout() {
  return (
    <div>
      <NavBar/>
     <main>
     <Outlet/>
     </main>
     <Footer/>
    </div>
  )
}

export default RootLayout