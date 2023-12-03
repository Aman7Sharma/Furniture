import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/about" element={<About/>} ></Route>
                <Route path="/products" element={<Product/>} ></Route>
                <Route path="/contact" element={<Contact/>} ></Route>
            </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
