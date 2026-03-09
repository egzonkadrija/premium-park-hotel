import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { bookingHref, contactChannels, navItems, socialLinks } from '../content/siteContent'

function SocialLinks({ light = false }) {
  return (
    <div className={`top-social${light ? ' is-light' : ''}`}>
      <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.75a4 4 0 0 0-4 4v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5zm8.94 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" />
        </svg>
      </a>
      <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13.5 22v-8h2.8l.42-3.2H13.5V8.76c0-.93.27-1.56 1.62-1.56h1.73V4.35A23.6 23.6 0 0 0 14.33 4c-2.5 0-4.2 1.5-4.2 4.35v2.45H7.3V14h2.83v8h3.37z" />
        </svg>
      </a>
    </div>
  )
}

function TopNav({ transparent }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navClass = transparent && !scrolled ? 'topbar topbar-transparent' : 'topbar'

  return (
    <nav className={`${navClass}${menuOpen ? ' is-menu-open' : ''}`} aria-label="Main navigation">
      <Link to="/" className="brand" aria-label="Premium Park Hotel home">
        <img src="/images/scraped/source-logo.png" alt="Premium Park Hotel" className="top-logo" />
      </Link>
      <button
        type="button"
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div id="mobile-menu" className={`menu${menuOpen ? ' is-open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `menu-btn${isActive ? ' active' : ''}`}
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="menu-overlay-actions">
          <a href={bookingHref} target="_blank" rel="noreferrer" className="nav-book-btn">
            Rezervo
          </a>
          <SocialLinks light={transparent && !scrolled} />
        </div>
      </div>
      <div className="topbar-actions">
        <a href={bookingHref} target="_blank" rel="noreferrer" className="nav-book-btn">
          Rezervo
        </a>
        <SocialLinks light={transparent && !scrolled} />
      </div>
    </nav>
  )
}

function PageHero({ hero, home }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(120deg, rgba(13, 10, 8, 0.76), rgba(18, 14, 11, 0.48)), url('${hero.image}')`,
  }

  return (
    <header className={`page-hero${home ? ' is-home' : ''}`} style={backgroundStyle}>
      <TopNav transparent={home} />
      <div className="page-hero-inner">
        {hero.eyebrow ? <p className="hero-eyebrow">{hero.eyebrow}</p> : null}
        <h1>{hero.title}</h1>
        {hero.description ? <p className="hero-description">{hero.description}</p> : null}
        <div className="hero-cta-row">
          {hero.primaryCta ? (
            hero.primaryCta.href ? (
              <a href={hero.primaryCta.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                {hero.primaryCta.label}
              </a>
            ) : (
              <Link to={hero.primaryCta.to} className="btn btn-primary">
                {hero.primaryCta.label}
              </Link>
            )
          ) : null}
          {hero.secondaryCta ? (
            hero.secondaryCta.href ? (
              <a href={hero.secondaryCta.href} target="_blank" rel="noreferrer" className="btn btn-secondary">
                {hero.secondaryCta.label}
              </a>
            ) : (
              <Link to={hero.secondaryCta.to} className="btn btn-secondary">
                {hero.secondaryCta.label}
              </Link>
            )
          ) : null}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-brand">
          <img src="/images/scraped/source-logo.png" alt="Premium Park Hotel" className="footer-logo" />
          <p>Qëndrim premium urban në zemër të Prizrenit, i krijuar për rehati, estetikë dhe mikpritje të rafinuar.</p>
        </div>
        <div className="footer-links">
          <h3>Navigim</h3>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h3>Kontakt</h3>
          <a href={contactChannels.mapsHref} target="_blank" rel="noreferrer">
            {contactChannels.address}
          </a>
          <a href={`mailto:${contactChannels.email}`}>{contactChannels.email}</a>
          <a href="tel:+38329222444">{contactChannels.phones[0]}</a>
          <a href="tel:+38343504504">{contactChannels.phones[1]}</a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

function MobileBookingBar() {
  return (
    <div className="mobile-booking-bar">
      <a href={bookingHref} target="_blank" rel="noreferrer">
        Rezervo
      </a>
      <a href="tel:+38329222444">Telefono</a>
      <Link to="/contact">Kontakt</Link>
    </div>
  )
}

export function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export function SiteShell({ hero, home = false, children }) {
  const location = useLocation()

  useEffect(() => {
    document.title = hero.pageTitle ?? `${hero.title} - Premium Park Hotel`
  }, [hero.pageTitle, hero.title])

  return (
    <>
      <PageHero hero={hero} home={home || location.pathname === '/'} />
      <main className="page-main">{children}</main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}
