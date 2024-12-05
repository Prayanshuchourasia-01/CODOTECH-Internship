
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Home/Home';
import Contact from './Contact/Contact';
import AboutUS from './AboutUs/AboutUS';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import TrendingPage from './TrendingPage/TrendingPage';


function App() {
  return (
<>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/products' element={<Product/>}/>
  <Route path='/about' element={<AboutUS/>}/>
  <Route path='/contact' element={<Contact/>} />
  <Route path='/cart' element={<Cart/>}/>
</Routes>
</>
  );
}

export default App;


