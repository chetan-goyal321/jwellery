import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from "./ErrorPage";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Testimonials from './components/Testimonials';
import ImageGrid from './components/ImageGrid';

const App = () => {
  return (
    <Router>
      {/* <Nav /> */}
      <Header/>
      <HeroSection/>
      <ImageGrid/>
      <Testimonials/>
      <Footer />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
      </Routes>
      
    </Router>
  );
};

export default App;
