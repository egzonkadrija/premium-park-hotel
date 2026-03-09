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
  title: 'Restauranti yne ekskluziv',
  pageTitle: 'Restaurant - Premium Park Hotel',
  description:
    'Ambient i rafinuar, drite e ngrohte dhe nje pervoje e menduar per darka, biseda dhe mbremje te qeta.',
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
              title="Miresevini"
              description="Restoranti dhe bari jane projektuar si vazhdim natyral i qendrimit: nje vend per darke, bisede, takim apo nje mbremje me te qete."
            />
            <p className="body-copy">
              Materialet e pasura, ndricimi i bute dhe ritmi i qete i ambientit krijojne nje pervoje qe ndihet e kujdesshme nga hyrja deri te tavolina.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Pervoja"
          title="Nje vend per darke, mikpritje dhe evente"
          description="Nga darkat e qeta deri te eventet private, restoranti ruan te njejtin ton elegant dhe te ngrohte."
        />
        <div className="luxury-card-grid luxury-card-grid-2">
          <article className="pillar-card">
            <h3>Darka & Mikpritje</h3>
            <p>Nje atmosfere me intime per mysafiret qe kerkojne rehati vizuale, ritem te qete dhe sherbim te kujdesshem.</p>
          </article>
          <article className="pillar-card">
            <h3>Evente Private</h3>
            <p>Darka pune, evente private dhe rezervime te kuruara ne nje ambient me identitet te forte premium.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Pamje"
          title="Pamja e Restaurantit"
          description="Nje lexim vizual i ambienteve, tavolinave dhe materialeve qe formojne karakterin e ketij hapesire."
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
            eyebrow="Mysafiret"
            title="Pershtypjet e mysafireve"
            description="Vleresimet me te shpeshta lidhen me atmosferen, qetesine dhe ndjesine e nje sherbimi te kujdesshem."
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
              Rezervo tavoline
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
