import React from 'react'
import { About, Skills, Footer, Header, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

function App() {
  return (
   <div className='app'>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Footer/>
   </div>
  )
}

export default App
