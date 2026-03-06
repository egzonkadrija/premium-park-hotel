import { Link } from 'react-router-dom'
import { bookingHref, featuredExperiences, homeStats, roomItems, testimonials } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Premium Park Hotel',
  title: 'Premium Park Hotel',
  description:
    'Një hotel me karakter, i ndërtuar për qetësi, komoditet dhe një përvojë më të rafinuar të qëndrimit në qytet.',
  image: '/images/scraped/hero-candidate-1.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Shfleto Dhomat', to: '/services' },
}

const featuredRooms = roomItems.slice(0, 3)

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
              eyebrow="Qëndrim me identitet"
              title="Rreth Hotelit"
              description="I vendosur pranë zemrës së Prizrenit, hoteli ndërthur materialet e ngrohta, shërbimin e kujdesshëm dhe një prani urbane që ndihet premium pa qenë e rënduar."
            />
            <div className="signature-actions">
              <Link to="/about" className="btn btn-outline-dark">
                Rreth Hotelit
              </Link>
              <Link to="/contact" className="text-link">
                Planifiko qëndrimin
              </Link>
            </div>
          </div>
          <div className="signature-media">
            <img src="/images/scraped/hero.jpg" alt="Premium Park Hotel exterior" />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Suita & Dhomat"
          title="Dhomat & Akomodimi"
          description="Zgjedhje të kuruara për mysafirë biznesi, çifte dhe qëndrime më të gjata, me fokus te materiali, ndriçimi dhe funksioni."
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
                <h3>{room.title}</h3>
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
          eyebrow="Jetesë & Evente"
          title="Restaurant & Bar"
          description="Qëndrimi në hotel nuk përfundon te dhoma; ai vazhdon në mbrëmje, takime dhe kohë cilësore brenda ambienteve."
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
          eyebrow="Pamje e Kuruar"
          title="Galeria Jone"
          align="center"
        />
        <div className="mosaic-grid">
          <img className="span-2" src="/images/scraped/gallery-1.jpg" alt="Gallery interior one" />
          <img src="/images/scraped/restaurant-bar-3.jpg" alt="Terrace lounge" />
          <img src="/images/scraped/gallery-3.jpg" alt="Relax area" />
          <img src="/images/scraped/service-conference.jpg" alt="Conference room" />
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
            eyebrow="Zëri i Mysafirëve"
            title="Pershtypje"
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
            <p className="section-eyebrow">Rezervime & Kontakt</p>
            <h2>Na Kontaktoni</h2>
            <p>
              Rezervo direkt, na telefono ose dërgo një kërkesë për qëndrim, event apo informacion shtesë.
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
