import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Charity from './components/Charity';
import FanCard from './components/FanCard';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Navbar from './components/NavBar';
import CardPage from './pages/CardPage';
import CongratulationPage from './pages/CongratulationPage';
import MeetAndGreet from './pages/MeetAndGreet';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckOutPage';
import AddressRequest from './pages/AddressRequest';
import TourDates from './pages/TourDates';
import Ticket from './components/Ticket';
import La from './components/tickets/La';
import Ld from "./components/tickets/Ld"
import Ny from "./components/tickets/Ny"
import Cg from "./components/tickets/Cg"
import Ba from "./components/tickets/Ba"
import Be from "./components/tickets/Be"
import Pa from "./components/tickets/Pa"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/fancard" element={<FanCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cardpage" element={<CardPage />} />
        <Route path="/congratulation" element={<CongratulationPage />} />
        <Route path="/meetandgreet" element={<MeetAndGreet />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/addressrequest" element={<AddressRequest />} />
        <Route path="/tourdates" element={<TourDates />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/tickets/la" element={<La />} />
        <Route path="/tickets/ny" element={<Ny />} />
        <Route path="/tickets/cg" element={<Cg />} />
        <Route path="/tickets/pa" element={<Pa />} />
        <Route path="/tickets/be" element={<Be />} />
        <Route path="/tickets/ld" element={<Ld />} />
        <Route path="/tickets/ba" element={<Ba />} />
      </Routes>
    </Router>
  );
}

export default App;
