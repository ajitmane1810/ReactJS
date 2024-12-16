import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'

//Layout.js for in the website same comp. are contant this not change
//ex.navbar,footer 

export const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
