import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';
 
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full  flex justify-between fixed z-10 items-center bg-white dark:bg-slate-800 sm:px-8 px-4 py-4 border-b border-b-[#000000]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain dark:invert' />
        </Link>

        <Link to="/create-post" className='font-inter font-medium bg-[#6469FF] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='pt-[100px]  px-4 py-8 w-full bg-[#F9FAFE] dark:bg-slate-800 dark:text-[#F9FAFE] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App