import './App.css'
import Home from './components/home/home';
import Menu from './components/menu/Menu';
import Favorito from './components/favorite/Favorito';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorito" element={<Favorito/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
