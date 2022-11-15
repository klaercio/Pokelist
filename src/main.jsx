import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import './index.css'
import Details from './Pages/details';
import Home from './Pages/home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

