import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const navItems = [
  { label: 'Kreu', to: '/' },
  { label: 'Rreth Nesh', to: '/about' },
  { label: 'Dhomat', to: '/services' },
  { label: 'Galeria', to: '/gallery' },
  { label: 'Restoranti', to: '/testimonials' },
  { label: 'Lokacioni', to: '/location' },
  { label: 'Kontakti', to: '/contact' },
]

const amenities = [
  { title: 'Dhome Dyshe', image: '/images/scraped/room-1.jpg' },
  { title: 'Dhome Dyshe e Madhe', image: '/images/scraped/room-2.jpg' },
  { title: 'Dhome Dopio Deluxe', image: '/images/scraped/room-3.jpg' },
  { title: 'Dhome Treshe Klasike', image: '/images/scraped/room-4.jpg' },
  { title: 'Dhome Treshe Deluxe', image: '/images/scraped/room-5.jpg' },
  { title: 'Apartament me Nje Dhome Gjumi', image: '/images/scraped/room-6.jpg' },
]

const galleryItems = [
  { title: 'Lounge Ekskluziv', image: '/images/scraped/restaurant-bar-3.jpg' },
  { title: 'Interier Bashkekohor', image: '/images/scraped/gallery-2.jpg' },
  { title: 'Kend Relaksi', image: '/images/scraped/gallery-3.jpg' },
  { title: 'Oaz Ujor', image: '/images/scraped/gallery-4.jpg' },
  { title: 'Salla Konferencash', image: '/images/scraped/gallery-5.jpg' },
  { title: 'Suita Presidenciale', image: '/images/scraped/gallery-6.jpg' },
]

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const roomItems = amenities.map((item) => ({ title: item.title, id: slugify(item.title) }))
const restaurantSlides = [
  { title: 'Ambient Restoranti 1', image: '/images/scraped/restaurant-slider-1.jpg' },
  { title: 'Ambient Restoranti 2', image: '/images/scraped/restaurant-slider-2.jpg' },
  { title: 'Ambient Restoranti 3', image: '/images/scraped/restaurant-slider-3.jpg' },
  { title: 'Ambient Restoranti 4', image: '/images/scraped/restaurant-slider-4.jpg' },
]

const testimonials = [
  {
    name: 'Arben',
    text: 'Mikpritje e perkryer dhe sherbim me finese gjate cdo momenti te qendrimit tone.',
  },
  {
    name: 'Vesa',
    text: 'Dhomat ishin elegante, ambienti teper i qete dhe stafi i kujdesshem ne cdo detaj.',
  },
  {
    name: 'Blerim',
    text: 'Vendndodhje ideale ne Prizren dhe standard i larte cilesie qe ndihet kudo.',
  },
]

function TopNav() {
  const location = useLocation()
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    setOpenSubmenu(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubmenu(null)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  return (
    <nav className="topbar" ref={navRef}>
      <Link to="/" className="brand" aria-label="Premium Park Hotel home">
        <img src="/images/scraped/source-logo.png" alt="Premium Park Hotel" className="top-logo" />
      </Link>
      <div className="menu" role="navigation" aria-label="Main menu">
        {navItems.map((item) => {
          if (item.to === '/services') {
            return (
              <div
                className={`menu-item has-submenu${openSubmenu === 'services' ? ' open' : ''}`}
                key={item.to}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
                <button
                  type="button"
                  className="submenu-toggle"
                  aria-label="Hap nennavigimin e dhomave"
                  aria-haspopup="true"
                  aria-expanded={openSubmenu === 'services'}
                  aria-controls="rooms-submenu"
                  onClick={() => setOpenSubmenu(openSubmenu === 'services' ? null : 'services')}
                >
                  â–¾
                </button>
                <div className="submenu rooms-submenu" id="rooms-submenu">
                  {roomItems.map((room) => (
                    <Link
                      key={room.id}
                      to={`/services#${room.id}`}
                      className="submenu-link rooms-submenu-link"
                    >
                      {room.title}
                    </Link>
                  ))}
                </div>
              </div>
            )
          }

          if (item.to === '/gallery') {
            return (
              <div
                className={`menu-item has-submenu${openSubmenu === 'gallery' ? ' open' : ''}`}
                key={item.to}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
                <button
                  type="button"
                  className="submenu-toggle"
                  aria-label="Hap nennavigimin e galerise"
                  aria-haspopup="true"
                  aria-expanded={openSubmenu === 'gallery'}
                  aria-controls="gallery-submenu"
                  onClick={() => setOpenSubmenu(openSubmenu === 'gallery' ? null : 'gallery')}
                >
                  â–¾
                </button>
                <div className="submenu" id="gallery-submenu">
                  {galleryItems.map((gallery) => (
                    <Link
                      key={gallery.title}
                      to={`/gallery#${slugify(gallery.title)}`}
                      className="submenu-link"
                      aria-label={gallery.title}
                      title={gallery.title}
                    >
                      <img src={gallery.image} alt={gallery.title} className="submenu-thumb" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          }

          return (
            <div className="menu-item" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            </div>
          )
        })}
      </div>
      <div className="top-social">
        <a
          href="https://www.instagram.com/premiumparkhotel/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="top-social-icon"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5zm8.94 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/pparkhotel"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="top-social-icon"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.5 22v-8h2.8l.42-3.2H13.5V8.76c0-.93.27-1.56 1.62-1.56h1.73V4.35A23.6 23.6 0 0 0 14.33 4c-2.5 0-4.2 1.5-4.2 4.35v2.45H7.3V14h2.83v8h3.37z" />
          </svg>
        </a>
      </div>
    </nav>
  )
}

function SiteHeader({ title, showBooking = false }) {
  return (
    <header className="hero">
      <div className="hero-overlay" />
      <TopNav />
      <div className="hero-content">
        <h1>{title}</h1>
        {showBooking ? (
          <div className="hero-actions">
            <a
              href="https://www.booking.com/hotel/xk/premium-park.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaJMBiAEBmAExuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKwq-68BsACAdICJDUxYmQ3MTQxLWI3ZjUtNDc4MC04NzhjLTE2ZDI4OGZhOWUyZNgCBeACAQ&ucfs=1&arphpl=1&chal_t=1772684931357&force_referer=https%3A%2F%2Fpremiumparkhotel.com%2F#RD537394207"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Rezervo Tani
            </a>
          </div>
        ) : null}
      </div>
    </header>
  )
}

function AboutSection({ isFull = false }) {
  const title = isFull ? 'Rreth nesh' : 'Elegance ne Prizren'

  return (
    <section className={`section about${isFull ? ' about-full' : ''}`}>
      <div className="about-grid">
        <div
          className="about-media"
          style={{ backgroundImage: "url('/images/scraped/about-left-exact.png')" }}
        />
        <div
          className="about-media"
          style={{ backgroundImage: "url('/images/scraped/about-left.jpg')" }}
        />
        <div
          className="about-media"
          style={{ backgroundImage: "url('/images/scraped/about-right.jpg')" }}
        />
        {isFull ? (
          <div
            className="about-media"
            style={{ backgroundImage: "url('/images/scraped/about-left-new.jpg')" }}
          />
        ) : null}
        {isFull ? (
          <div
            className="about-media"
            style={{ backgroundImage: "url('/images/scraped/gallery-1.jpg')" }}
          />
        ) : null}
        <div className="about-copy">
          <h2>{title}</h2>
          {isFull ? (
            <>
              <p>
                Premium Park Hotel është një hotel elegant i vendosur në zemër të Prizrenit, i
                krijuar për të ofruar një përvojë mikpritjeje të nivelit të lartë. Me arkitekturë
                moderne, ambient të rafinuar dhe shërbim të kujdesshëm në çdo detaj, hoteli
                garanton rehati dhe cilësi për çdo mysafir.
              </p>
              <p>
                Me <strong>45 dhoma dhe 3 suita të dizajnuara me elegancë</strong>, çdo hapësirë
                është e pajisur për të ofruar komoditet maksimal dhe një atmosferë relaksuese,
                duke e bërë qëndrimin ideal si për udhëtime biznesi ashtu edhe për pushime.
              </p>
            </>
          ) : (
            <p>
              Premium Park Hotel ne Prizren, Kosove, ju mirepret me nje pervoje qe nderthur
              rehati moderne me hijeshine klasike te qytetit. I vendosur ne nje ndertese elegante
              ne qender te Prizrenit, hoteli mishron nje vizion te qarte per sherbim te shkelqyer
              dhe standarde te larta te mikpritjes bashkekohore.
            </p>
          )}
          {!isFull ? (
            <Link className="btn btn-dark" to="/services">
              Shihni sherbimet
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isServicesPaused, setIsServicesPaused] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion || isServicesPaused) return undefined

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        const lastIndex = amenities.length - 1

        if (currentIndex === lastIndex) {
          setDirection(-1)
          return currentIndex - 1
        }

        if (currentIndex === 0 && direction === -1) {
          setDirection(1)
          return currentIndex + 1
        }

        return currentIndex + direction
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [direction, prefersReducedMotion, isServicesPaused])

  return (
    <section className="section services">
      <div className="section-head">
        <h2>Sherbime te Perzgjedhura per Rehati te Persosur</h2>
      </div>
      <div
        className="services-slider-viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label="Slider i dhomave"
        onMouseEnter={() => setIsServicesPaused(true)}
        onMouseLeave={() => setIsServicesPaused(false)}
        onFocusCapture={() => setIsServicesPaused(true)}
        onBlurCapture={() => setIsServicesPaused(false)}
      >
        <div
          className="services-slider-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="off"
        >
          {amenities.map((item) => (
            <article id={slugify(item.title)} className="service-slide" key={item.title}>
              <div className="service-card">
                <div className="service-image" style={{ backgroundImage: `url('${item.image}')` }} />
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RestaurantSliderSection() {
  const [restaurantIndex, setRestaurantIndex] = useState(0)
  const [restaurantDirection, setRestaurantDirection] = useState(1)
  const [isRestaurantPaused, setIsRestaurantPaused] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion || isRestaurantPaused) return undefined

    const timer = setInterval(() => {
      setRestaurantIndex((currentIndex) => {
        const lastIndex = restaurantSlides.length - 1

        if (currentIndex === lastIndex) {
          setRestaurantDirection(-1)
          return currentIndex - 1
        }

        if (currentIndex === 0 && restaurantDirection === -1) {
          setRestaurantDirection(1)
          return currentIndex + 1
        }

        return currentIndex + restaurantDirection
      })
    }, 3500)

    return () => clearInterval(timer)
  }, [restaurantDirection, prefersReducedMotion, isRestaurantPaused])

  return (
    <section className="section restaurant-section">
      <div className="restaurant-slider-wrap">
        <h3 className="restaurant-slider-title">Restoranti</h3>
        <div
          className="restaurant-slider-viewport"
          role="region"
          aria-roledescription="carousel"
          aria-label="Slider i restorantit"
          onMouseEnter={() => setIsRestaurantPaused(true)}
          onMouseLeave={() => setIsRestaurantPaused(false)}
          onFocusCapture={() => setIsRestaurantPaused(true)}
          onBlurCapture={() => setIsRestaurantPaused(false)}
        >
          <div
            className="restaurant-slider-track"
            style={{ transform: `translateX(-${restaurantIndex * 100}%)` }}
            aria-live="off"
          >
            {restaurantSlides.map((item) => (
              <div className="restaurant-slide" key={item.image}>
                <div className="restaurant-card">
                  <div className="restaurant-slide-image" style={{ backgroundImage: `url('${item.image}')` }} />
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RoomsDetailSection() {
  const location = useLocation()
  const roomId = location.hash.replace('#', '')
  const selectedRoom = amenities.find((room) => slugify(room.title) === roomId) ?? amenities[0]

  return (
    <section className="section rooms-detail">
      <div className="section-head">
        <h2>Dhomat Tona</h2>
      </div>
      <article id={slugify(selectedRoom.title)} className="room-detail-card">
        <div className="room-detail-image" style={{ backgroundImage: `url('${selectedRoom.image}')` }} />
        <h3>{selectedRoom.title}</h3>
      </article>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="section gallery">
      <div className="section-head">
        <h2>Momente nga Ambientet Tona</h2>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div
            id={slugify(item.title)}
            className="gallery-tile"
            style={{ backgroundImage: `url('${item.image}')` }}
            key={item.title}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="section-head">
        <h2>Zeri i Mysafireve Tane</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div className="stars">*****</div>
            <p>{item.text}</p>
            <strong>{item.name}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="section location-section">
      <div className="section-head">
        <h2>Lokacioni</h2>
      </div>
      <div className="location-map-card">
        <div className="location-map-frame-wrap">
          <iframe
            title="Harta e Premium Park Hotel"
            className="location-map-frame"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Premium+Park+Hotel+Prizren&output=embed"
          />
          <a
            className="location-map-hitbox"
            href="https://www.google.com/maps/dir/?api=1&destination=Premium+Park+Hotel+Prizren"
            target="_blank"
            rel="noreferrer"
            aria-label="Hap drejtimin ne Google Maps"
          />
        </div>
        <div className="location-map-copy">
          <h3>Premium Park Hotel</h3>
          <p>Rr. Tirana P.n., Prizren 20000, Kosove</p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Premium+Park+Hotel+Prizren"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Hap drejtimin
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src="/images/scraped/source-logo.png" alt="Premium Park Hotel" className="footer-logo" />
          <p>Rr. Ibrahim Rugova, Prizren</p>
          <p>Kosove</p>
        </div>
        <div>
          <h3>Navigim</h3>
          {navItems.map((item) => (
            <p key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </p>
          ))}
        </div>
        <div>
          <h3>Kontakt</h3>
          <p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rr.+Tirana+P.n.+Prizren+20000"
              target="_blank"
              rel="noreferrer"
            >
              Rr. Tirana P.n. Prizren 20000
            </a>
          </p>
          <div className="call-buttons">
            <a href="tel:+38329222444" className="call-btn">+383 29 222 444</a>
            <a href="tel:+38343504504" className="call-btn">+383 43 504 504</a>
          </div>
          <div className="social-links">
            <a
              href="https://www.instagram.com/premiumparkhotel/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5zm8.94 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/pparkhotel"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.8l.42-3.2H13.5V8.76c0-.93.27-1.56 1.62-1.56h1.73V4.35A23.6 23.6 0 0 0 14.33 4c-2.5 0-4.2 1.5-4.2 4.35v2.45H7.3V14h2.83v8h3.37z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <>
      <SiteHeader title="Elegance dhe Mikpritje" showBooking />
      <main>
        <AboutSection />
        <ServicesSection />
        <RestaurantSliderSection />
      </main>
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <SiteHeader title="Rreth Nesh" />
      <main>
        <AboutSection isFull />
      </main>
      <Footer />
    </>
  )
}

function ServicesPage() {
  const location = useLocation()
  const roomId = location.hash.replace('#', '')
  const hasSelectedRoom = roomItems.some((room) => room.id === roomId)

  return (
    <>
      <SiteHeader title="Dhomat" />
      <main>
        {hasSelectedRoom ? <RoomsDetailSection /> : <ServicesSection />}
      </main>
      <Footer />
    </>
  )
}

function GalleryPage() {
  return (
    <>
      <SiteHeader title="Galeria" />
      <main>
        <GallerySection />
      </main>
      <Footer />
    </>
  )
}

function TestimonialsPage() {
  return (
    <>
      <SiteHeader title="Restoranti" />
      <main>
        <RestaurantSliderSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}

function LocationPage() {
  return (
    <>
      <SiteHeader title="Lokacioni" />
      <main>
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}

function ContactPage() {
  return (
    <>
      <SiteHeader title="Na Kontaktoni" />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

