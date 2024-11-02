'use client'

'use client'

import './globals.css'
import React from 'react'
import Home from '@/components/pages/Home';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Contact from '@/components/pages/contact';
import About from '@/components/pages/About';
import Services from '@/components/pages/Services';

const page = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />}></Route>
      </Routes>
    </MemoryRouter>
  )
}
export default page;