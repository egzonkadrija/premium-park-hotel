import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RoomsPage from './pages/RoomsPage'
import GalleryPage from './pages/GalleryPage'
import RestaurantPage from './pages/RestaurantPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'
import RouteScrollManager from './components/RouteScrollManager'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <RouteScrollManager />
      <div className="site-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<RoomsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<RestaurantPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
