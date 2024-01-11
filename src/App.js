import React, { createContext, useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import About from './comp 1/About'
import Contact from './comp 1/contact'
import NewsAPI from './comp 1/NewsAPI'


{
  return (<MyContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
      <Routes>
        <Route element={<About />} path="about" />
        <Route element={<Contact />} path="contact" />
        <Route element={<NewsAPI />} path='newsapi' />
      </Routes>
    </BrowserRouter>
  </MyContext.Provider>)
}




function MainMenu() {
  return (

    <>
      <div>
        <Link to='/about'><Button>About</Button></Link>
        <Link to='account'><Button>Account</Button></Link>
        <Link to='/newsapi'><Button>NewsAPI</Button></Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}
