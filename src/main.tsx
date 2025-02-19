import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home'
import './styles/global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Posts } from './components/Posts'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts/>}/> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<div>Oi</div>}/>
        </Route>
        <Route path='/posts' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
