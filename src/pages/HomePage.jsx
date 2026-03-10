import { Link } from 'react-router-dom'
import { bookingHref, featuredExperiences, homeStats, roomItems, testimonials } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Premium Park Hotel',
  title: 'Shkelqesi ne Mikpritje!',
  pageTitle: 'Premium Park Hotel',
  description:
    'Dhoma te qeta, ambient i rafinuar dhe mikpritje e kujdesshme per udhetime biznesi, fundjava dhe qendrime te zgjatura.',
  image: '/images/scraped/hero-candidate-1.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Shfleto Dhomat', to: '/services' },
}

const featuredRooms = [
  {
    ...roomItems[0],
    homeTitle: 'Dhome Dyshe',
  },
  {
    ...roomItems[2],
    homeTitle: 'Dhome Dopio Deluxe',
  },
  {
    ...roomItems[5],
    homeTitle: 'Apartament me Nje Dhome Gjumi',
  },
]

export default function HomePage() {
  return (
    <SiteShell hero={hero} home>
      <section className="stats-band">
        <div className="stats-shell">
          {homeStats.map((item) => (
            <article className="stat-card" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="signature-grid">
          <div className="signature-copy">
            <SectionIntro
              title="Rreth Premium Park Hotel"
              description="Premium Park Hotel nderthur rehati, materiale te ngrohta dhe nje ritem te qete qendrimi, vetem pak minuta nga qendra e Prizrenit."
            />
            <div className="signature-actions">
              <Link to="/about" className="btn btn-outline-dark">
                Rreth Nesh
              </Link>
              <Link to="/contact" className="text-link">
                Na kontaktoni
              </Link>
            </div>
          </div>
          <div className="signature-media">
            <img src="/images/scraped/about-left-new.jpg" alt="Premium Park Hotel lounge" />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          title="Lista E Sherbimeve"
          titleNoWrap
          description="Tre kategori te zgjedhura per te treguar rehatine, hapesiren dhe karakterin e qendrimit ne Premium Park."
          align="center"
        />
        <div className="luxury-card-grid luxury-card-grid-3">
          {featuredRooms.map((room) => (
            <article className="media-card room-card" key={room.id}>
              <img src={room.image} alt={room.title} />
              <div className="media-card-body">
                <p className="card-meta">
                  <span>{room.guests}</span>
                  <span>{room.size}</span>
                </p>
                <h3>{room.homeTitle}</h3>
                <p>{room.summary}</p>
                <div className="card-actions">
                  <Link to={`/services#${room.id}`} className="text-link">
                    Shiko detajet
                  </Link>
                  <a href={bookingHref} target="_blank" rel="noreferrer" className="btn btn-outline-dark">
                    Rezervo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          title="Restaurant"
          description="Restoranti, bari dhe ambientet funksionale e zgjasin qendrimin ne nje ritem me social, me te qete dhe me te plote."
          align="center"
        />
        <div className="luxury-card-grid luxury-card-grid-2">
          {featuredExperiences.map((item) => (
            <article className="feature-panel" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="feature-panel-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to={item.to} className="text-link">
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          title="Pamja Jone"
          description="Disa fragmente nga dhomat, restoranti dhe atmosfera qe formon identitetin e hotelit."
          align="center"
        />
        <div className="mosaic-grid">
          <img className="span-2" src="/images/scraped/hero.jpg" alt="Premium Park Hotel exterior sign" />
          <img src="/images/scraped/room-6.jpg" alt="Apartment room" />
          <img src="/images/scraped/restaurant-bar-3.jpg" alt="Restaurant lounge" />
          <img src="/images/scraped/gallery-5.jpg" alt="Conference room" />
          <img className="span-2" src="/images/scraped/restaurant-slider-4.jpg" alt="Restaurant interior" />
          <img src="/images/scraped/gallery-2.jpg" alt="Premium Park Hotel interior detail" />
        </div>
        <div className="section-tail">
          <Link to="/gallery" className="btn btn-outline-dark">
            Shiko Galerine
          </Link>
        </div>
      </section>

      <section className="testimonial-band">
        <div className="section">
          <SectionIntro
            title="Mysafiret Thone"
            description="Qetesia, sherbimi dhe rehatia jane arsyet qe permenden me shpesh nga mysafiret tane."
            align="center"
          />
          <div className="luxury-card-grid luxury-card-grid-3">
            {testimonials.map((item) => (
              <article className="quote-card" key={item.name}>
                <p>{item.text}</p>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="closing-banner">
          <div>
            <p className="section-eyebrow">Rezervime</p>
            <h2>Planifikoni nje eksperience te paharrueshme sot!</h2>
            <p>Rezervo direkt ose dergo nje kerkese per dhoma, evente dhe cdo informacion shtese.</p>
          </div>
          <div className="closing-banner-actions">
            <a href={bookingHref} target="_blank" rel="noreferrer" className="btn btn-primary">
              Rezervo Direkt
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Na Kontaktoni
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
