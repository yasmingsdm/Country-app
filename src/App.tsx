import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Pages/Main';
import Learn from './Pages/Learn';
import Country from './Pages/Country';
import Practice from './Pages/Practice';
import Error from './Pages/Error';


function App() {
  return (
    <div className="app">
          <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/learn' element={<Learn />}/>
          <Route path='/country' element={<Country/>}/>
          <Route path='/practice' element={<Practice />}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
