import './App.css'

function App() {
  const navItems = [
    { label: 'Kreu', href: '#home' },
    { label: 'Profili Ynë', href: '#about' },
    { label: 'Komoditetet', href: '#services' },
    { label: 'Galeri Elegance', href: '#gallery' },
    { label: 'Përshtypje', href: '#testimonials' },
    { label: 'Destinacioni', href: '#location' },
    { label: 'Na Kontaktoni', href: '#contact' },
  ]

  const amenities = [
    { title: 'Mëngjes i bollshëm gourmet', image: '/images/scraped/service-breakfast.jpg' },
    { title: 'Restorant i rafinuar', image: '/images/scraped/service-restaurant.jpg' },
    { title: 'Spa & mirëqenie', image: '/images/scraped/service-spa.jpg' },
    { title: 'Salla konferencash premium', image: '/images/scraped/service-conference.jpg' },
    { title: 'Parkim i siguruar', image: '/images/scraped/service-parking.jpg' },
    { title: 'Ambiente pa duhan', image: '/images/scraped/service-nonsmoking.jpg' },
    { title: 'WiFi falas me shpejtësi të lartë', image: '/images/scraped/service-wifi.jpg' },
    { title: 'Bar me atmosferë elegante', image: '/images/scraped/service-bar.jpg' },
  ]

  const galleryItems = [
    { title: 'Suita Presidenciale', image: '/images/scraped/gallery-1.jpg' },
    { title: 'Interier Bashkëkohor', image: '/images/scraped/gallery-2.jpg' },
    { title: 'Kënd Relaksi', image: '/images/scraped/gallery-3.jpg' },
    { title: 'Panoramë Qyteti', image: '/images/scraped/gallery-4.jpg' },
    { title: 'Lounge Ekskluziv', image: '/images/scraped/gallery-5.jpg' },
    { title: 'Oaz Ujor', image: '/images/scraped/gallery-6.jpg' },
  ]

  const testimonials = [
    {
      name: 'Arben',
      text: 'Mikpritje e përkryer dhe shërbim me finesë gjatë çdo momenti të qëndrimit tonë.',
    },
    {
      name: 'Vesa',
      text: 'Dhomat ishin elegante, ambienti tepër i qetë dhe stafi i kujdesshëm në çdo detaj.',
    },
    {
      name: 'Blerim',
      text: 'Vendndodhje ideale në Prizren dhe standard i lartë cilësie që ndihet kudo.',
    },
  ]

  return (
    <div className="site">
      <header id="home" className="hero">
        <div className="hero-overlay" />
        <nav className="topbar">
          <div className="brand">Premium Park Hotel</div>
          <div className="menu">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="menu-btn">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-content">
          <h1>Elegancë dhe Mikpritje</h1>
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
        </div>
      </header>

      <main>
        <section id="about" className="section about">
          <div className="about-grid">
            <div
              className="about-media"
              style={{ backgroundImage: "url('/images/scraped/about-left.jpg')" }}
            />
            <div className="about-copy">
              <h2>Elegancë e Qetë në Zemër të Prizrenit</h2>
              <p>
                Premium Park Hotel në Prizren, Kosovë, ju mirëpret me një përvojë që ndërthur
                rehatinë moderne me hijeshinë klasike të qytetit. I vendosur në një ndërtesë elegante
                në qendër të Prizrenit, hoteli mishëron një vizion të qartë për shërbim të shkëlqyer
                dhe standarde të larta të mikpritjes bashkëkohore.
              </p>
              <a className="btn btn-dark" href="#services">
                Shihni shërbimet
              </a>
            </div>
            <div
              className="about-media"
              style={{ backgroundImage: "url('/images/scraped/about-right.jpg')" }}
            />
          </div>
        </section>

        <section id="services" className="section services">
          <div className="section-head">
            <h2>Shërbime të Përzgjedhura për Rehati të Përsosur</h2>
          </div>
          <div className="services-grid">
            {amenities.map((item) => (
              <article className="service-card" key={item.title}>
                <div className="service-image" style={{ backgroundImage: `url('${item.image}')` }} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section-head">
            <h2>Momente nga Ambientet Tona</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-tile" style={{ backgroundImage: `url('${item.image}')` }} key={item.title}>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section testimonials">
          <div className="section-head">
            <h2>Zëri i Mysafirëve Tanë</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="stars">★★★★★</div>
                <p>{item.text}</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="cta-band">
          <div className="cta-overlay" />
          <div className="cta-content">
            <h2>Rezervoni Sot dhe Përjetoni Elegancën që Mbetet në Kujtesë</h2>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div>
            <img src="/images/scraped/logo.png" alt="Premium Park Hotel" className="footer-logo" />
            <p>Rr. Ibrahim Rugova, Prizren</p>
            <p>Kosovë</p>
          </div>
          <div>
            <h3>Navigim</h3>
            <p>Kreu</p>
            <p>Profili Ynë</p>
            <p>Komoditetet</p>
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
    </div>
  )
}

export default App
