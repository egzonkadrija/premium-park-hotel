import { useEffect, useState } from 'react'
import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'My Profile', to: '/about' },
  { label: 'Rooms', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Restaurant', to: '/testimonials' },
  { label: 'Map & Recommendation', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

const amenities = [
  { title: 'Mengjes i bollshem gourmet', image: '/images/scraped/service-breakfast.jpg' },
  { title: 'Spa & mireqenie', image: '/images/scraped/service-restaurant.jpg' },
  { title: 'Salla konferencash premium', image: '/images/scraped/service-spa.jpg' },
  { title: 'Parkim i siguruar', image: '/images/scraped/service-conference.jpg' },
  { title: 'Restorant i rafinuar', image: '/images/scraped/service-breakfast.jpg' },
  { title: 'WiFi falas me shpejtesi te larte', image: '/images/scraped/service-parking.jpg' },
  { title: 'Bar me atmosfere elegante', image: '/images/scraped/gallery-1.jpg' },
  { title: 'Ambiente pa duhan', image: '/images/scraped/service-nonsmoking.jpg' },
]

const galleryItems = [
  { title: 'Lounge Ekskluziv', image: '/images/scraped/gallery-1.jpg' },
  { title: 'Interier Bashkekohor', image: '/images/scraped/gallery-2.jpg' },
  { title: 'Kend Relaksi', image: '/images/scraped/gallery-3.jpg' },
  { title: 'Oaz Ujor', image: '/images/scraped/gallery-4.jpg' },
  { title: 'Salla Konferencash', image: '/images/scraped/gallery-5.jpg' },
  { title: 'Suita Presidenciale', image: '/images/scraped/gallery-6.jpg' },
]

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const roomItems = amenities.map((item) => ({ title: item.title, id: slugify(item.title) }))

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
  return (
    <nav className="topbar">
      <Link to="/" className="brand" aria-label="Premium Park Hotel home">
        <img src="/images/scraped/logo.png" alt="Premium Park Hotel" className="top-logo" />
      </Link>
      <div className="menu" role="navigation" aria-label="Main menu">
        {navItems.map((item) => {
          if (item.to === '/services') {
            return (
              <div className="menu-item has-submenu" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
                <div className="submenu rooms-submenu">
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
              <div className="menu-item has-submenu" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
                  end={item.to === '/'}
                >
                  {item.label}
                </NavLink>
                <div className="submenu">
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
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
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

function AboutSection() {
  return (
    <section className="section about">
      <div className="about-grid">
        <div
          className="about-media"
          style={{ backgroundImage: "url('/images/scraped/about-left.jpg')" }}
        />
        <div className="about-copy">
          <h2>Elegance e Qete ne Zemer te Prizrenit</h2>
          <p>
            Premium Park Hotel ne Prizren, Kosove, ju mirepret me nje pervoje qe nderthur
            rehati moderne me hijeshine klasike te qytetit. I vendosur ne nje ndertese elegante
            ne qender te Prizrenit, hoteli mishron nje vizion te qarte per sherbim te shkelqyer
            dhe standarde te larta te mikpritjes bashkekohore.
          </p>
          <Link className="btn btn-dark" to="/services">
            Shihni sherbimet
          </Link>
        </div>
        <div
          className="about-media"
          style={{ backgroundImage: "url('/images/scraped/about-right.jpg')" }}
        />
      </div>
    </section>
  )
}

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
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
    }, 3500)

    return () => clearInterval(timer)
  }, [direction])

  return (
    <section className="section services">
      <div className="section-head">
        <h2>Sherbime te Perzgjedhura per Rehati te Persosur</h2>
      </div>
      <div className="services-slider-viewport">
        <div
          className="services-slider-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          aria-live="polite"
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
    <section className="cta-band">
      <div className="cta-overlay" />
      <div className="cta-content">
        <h2>Rezervoni Sot dhe Perjetoni Elegancen qe Mbetet ne Kujtese</h2>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img src="/images/scraped/logo.png" alt="Premium Park Hotel" className="footer-logo" />
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
      </main>
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <SiteHeader title="Profili Yne" />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <SiteHeader title="Komoditetet" />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}

function GalleryPage() {
  return (
    <>
      <SiteHeader title="Galeri Elegance" />
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
      <SiteHeader title="Pershtypje" />
      <main>
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}

function LocationPage() {
  return (
    <>
      <SiteHeader title="Destinacioni" />
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
