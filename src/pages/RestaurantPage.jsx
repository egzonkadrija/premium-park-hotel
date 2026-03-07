import { Link } from 'react-router-dom'
import { bookingHref, testimonials } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const restaurantImages = [
  '/images/scraped/restaurant-gallery/restaurant-1.jpg',
  '/images/scraped/restaurant-gallery/restaurant-2.jpg',
  '/images/scraped/restaurant-gallery/restaurant-3.jpg',
  '/images/scraped/restaurant-gallery/restaurant-4.jpg',
  '/images/scraped/restaurant-gallery/restaurant-5.jpg',
]

const hero = {
  eyebrow: 'Restoranti & Bar',
  title: 'Restoranti & Bari',
  description:
    'Ambient i rafinuar, dritë e ngrohtë dhe një përvojë e menduar për darka, biseda dhe mbrëmje të qeta.',
  image: restaurantImages[3],
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

export default function RestaurantPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <div className="feature-split">
          <div className="feature-split-media">
            <img src={restaurantImages[1]} alt="Restaurant seating" />
          </div>
          <div className="feature-split-copy">
            <SectionIntro
              eyebrow="Atmosfera"
              title="Mirësevini"
              description="Restoranti dhe bari janë projektuar si vazhdim natyral i qëndrimit: një vend për darkë, bisedë, takim apo një mbrëmje më të qetë."
            />
            <p className="body-copy">
              Materialet e pasura, ndriçimi i butë dhe ritmi i qetë i ambientit krijojnë një përvojë që ndihet e kujdesshme nga hyrja deri te tavolina.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Përvoja"
          title="Një vend për darkë, mikpritje dhe evente"
          description="Nga darkat e qeta deri te eventet private, restoranti ruan të njëjtin ton elegant dhe të ngrohtë."
        />
        <div className="luxury-card-grid luxury-card-grid-2">
          <article className="pillar-card">
            <h3>Darka & Mikpritje</h3>
            <p>Një atmosferë më intime për mysafirët që kërkojnë rehati vizuale, ritëm të qetë dhe shërbim të kujdesshëm.</p>
          </article>
          <article className="pillar-card">
            <h3>Evente Private</h3>
            <p>Darka pune, evente private dhe rezervime të kuruara në një ambient me identitet të fortë premium.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Pamje"
          title="Fragmente nga restoranti dhe bari"
          description="Një lexim vizual i ambienteve, tavolinave dhe materialeve që formojnë karakterin e këtij hapësire."
          align="center"
        />
        <div className="gallery-strip">
          <img src={restaurantImages[0]} alt="Restaurant gallery one" />
          <img src={restaurantImages[2]} alt="Restaurant gallery two" />
          <img src={restaurantImages[4]} alt="Restaurant gallery three" />
        </div>
      </section>

      <section className="testimonial-band">
        <div className="section">
          <SectionIntro
            eyebrow="Mysafirët"
            title="Përshtypjet e mysafirëve"
            description="Vlerësimet më të shpeshta lidhen me atmosferën, qetësinë dhe ndjesinë e një shërbimi të kujdesshëm."
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
              Rezervo tavolinë
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
