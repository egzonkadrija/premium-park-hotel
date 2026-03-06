import { Link } from 'react-router-dom'
import { bookingHref, testimonials } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Restoranti & Bar',
  title: 'Restauranti yne ekskluziv',
  description:
    'Interier me karakter, dritë e butë dhe një ambient që e vazhdon përvojën e hotelit përtej dhomës.',
  image: '/images/scraped/restaurant-slider-4.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

export default function RestaurantPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <div className="feature-split">
          <div className="feature-split-media">
            <img src="/images/scraped/restaurant-slider-1.jpg" alt="Restaurant seating" />
          </div>
          <div className="feature-split-copy">
            <SectionIntro
              eyebrow="Atmosfera"
              title="Miresevini"
              description="Restoranti dhe bari janë projektuar si vazhdim natyral i qëndrimit: një vend për darkë, bisedë, takim apo një mbrëmje më të qetë."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="luxury-card-grid luxury-card-grid-2">
          <article className="pillar-card">
            <h3>Darka & Mikpritje</h3>
            <p>Një ton më intim për mysafirët që kërkojnë rehati vizuale dhe shërbim të kujdesshëm.</p>
          </article>
          <article className="pillar-card">
            <h3>Evente Private</h3>
            <p>Konferenca, darka pune apo evente të kuruara në një ambient me identitet të fortë premium.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="gallery-strip">
          <img src="/images/scraped/restaurant-slider-2.jpg" alt="Restaurant angle one" />
          <img src="/images/scraped/restaurant-bar-5.jpg" alt="Restaurant angle two" />
          <img src="/images/scraped/restaurant-bar-3.jpg" alt="Restaurant angle three" />
        </div>
      </section>

      <section className="testimonial-band">
        <div className="section">
          <SectionIntro
            eyebrow="Përshtypje"
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
          <div className="section-tail">
            <Link to="/contact" className="btn btn-secondary">
              Rezervo tavolinë ose event
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
