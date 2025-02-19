import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home'
import './styles/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts/:id' element={<Post/>}/>
        <Route path='/posts' element={<Post/>}/>
        <Route path='/redirect' element={<Redirect/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
