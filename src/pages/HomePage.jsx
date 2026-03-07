import { Link } from 'react-router-dom'
import { bookingHref, featuredExperiences, homeStats, roomItems, testimonials } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Premium Park Hotel',
  title: 'Qëndrim premium në zemër të Prizrenit',
  description:
    'Dhoma të qeta, ambient i rafinuar dhe mikpritje e kujdesshme për udhëtime biznesi, fundjava dhe qëndrime të zgjatura.',
  image: '/images/scraped/hero-candidate-1.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Shfleto Dhomat', to: '/services' },
}

const featuredRooms = [
  {
    ...roomItems[0],
    homeTitle: 'Dhomë Dyshe',
  },
  {
    ...roomItems[2],
    homeTitle: 'Dhomë Dopio Deluxe',
  },
  {
    ...roomItems[5],
    homeTitle: 'Apartament me Një Dhomë Gjumi',
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
              eyebrow="Rreth Hotelit"
              title="Mikpritje e qetë me karakter urban."
              description="Premium Park Hotel ndërthur rehati, materiale të ngrohta dhe një ritëm të qetë qëndrimi, vetëm pak minuta nga qendra e Prizrenit."
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
          eyebrow="Dhomat"
          title="Suita & Dhoma"
          description="Tre kategori të zgjedhura për të treguar rehatinë, hapësirën dhe karakterin e qëndrimit në Premium Park."
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
          eyebrow="Restoranti & Eventet"
          title="Përvoja vazhdon përtej dhomës."
          description="Restoranti, bari dhe ambientet funksionale e zgjasin qëndrimin në një ritëm më social, më të qetë dhe më të plotë."
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
          eyebrow="Galeria"
          title="Pamje nga Premium Park"
          description="Disa fragmente nga dhomat, restoranti dhe atmosfera që formon identitetin e hotelit."
          align="center"
        />
        <div className="mosaic-grid">
          <img className="span-2" src="/images/scraped/hero.jpg" alt="Premium Park Hotel exterior sign" />
          <img src="/images/scraped/room-6.jpg" alt="Apartment room" />
          <img src="/images/scraped/restaurant-bar-3.jpg" alt="Restaurant lounge" />
          <img src="/images/scraped/gallery-5.jpg" alt="Conference room" />
          <img className="span-2" src="/images/scraped/restaurant-slider-4.jpg" alt="Restaurant interior" />
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
            eyebrow="Mysafirët"
            title="Përshtypjet e mysafirëve"
            description="Qetësia, shërbimi dhe rehatia janë arsyet që përmenden më shpesh nga mysafirët tanë."
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
            <h2>Planifikoni qëndrimin tuaj</h2>
            <p>
              Rezervo direkt ose dërgo një kërkesë për dhoma, evente dhe çdo informacion shtesë.
            </p>
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
