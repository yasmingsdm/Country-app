import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {FaRegMoon} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Pages/Main';
import Learn from './Pages/Learn';
import Country from './Pages/Country';
import Practice from './Pages/Practice';
import Error from './Pages/Error';
import Favorite from './Pages/Favorite';
import Loading from './Pages/Loading';


function App() {
  const [style, setStyle] = useState("light");
  const changeStyle =()=> {    
      if(style==='light'){
        setStyle("dark")
      } else { setStyle('light')}
        ;
  }
  return (
    <div className={style}>
          <BrowserRouter>
          <nav>
            <ul>
                <NavLink to='./learn'>Learn</NavLink>
                <NavLink to='./practice'>Practice</NavLink>
                <NavLink to='./favorite'>Favorites</NavLink>
                <button onClick={changeStyle}><FaRegMoon/></button>
            </ul>
        </nav>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/learn' element={<Learn />}/>
          <Route path='/:country' element={<Country/>}/>
          <Route path='/practice' element={<Practice />}/>
          <Route path='/favorite' element = {<Favorite/>}/>
          <Route path='/loading' element={<Loading/>}/>
          <Route path='/*' element={<Error />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
