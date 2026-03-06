import { Link } from 'react-router-dom'
import { bookingHref, servicePillars } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Rreth Nesh',
  title: 'Rreth Hotelit',
  description:
    'Premium Park Hotel është krijuar për mysafirë që kërkojnë më shumë se një akomodim: qetësi, materialitet, pozicion dhe shërbim të menduar në detaj.',
  image: '/images/scraped/hero.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Shiko Dhomat', to: '/services' },
}

export default function AboutPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <div className="about-editorial-grid">
          <div className="about-mosaic">
            <img className="tall" src="/images/scraped/service-spa.jpg" alt="Hotel detail one" />
            <img src="/images/scraped/room-6.jpg" alt="Apartment room" />
            <img src="/images/scraped/restaurant-07.jpg" alt="Hotel interior atmosphere" />
            <img className="wide" src="/images/scraped/service-conference.jpg" alt="Conference facility" />
          </div>
          <div className="about-story">
            <SectionIntro
              eyebrow="Historia e Qendrimit"
              title="Premium Park Hotel"
              description="Në qendër të Prizrenit, Premium Park Hotel krijon një përvojë urbane që ndihet e rafinuar dhe e qetë njëkohësisht. Hapësirat janë projektuar për të mbajtur ritmin e qytetit pranë, por jo brenda dhomës suaj."
            />
            <p className="body-copy">
              Me 45 dhoma dhe 3 suita, hoteli është konceptuar për të përmbushur pritjet e mysafirëve që udhëtojnë për biznes, për evente apo për një qëndrim më personal në qytet.
            </p>
            <div className="about-story-actions">
              <Link to="/contact" className="btn btn-outline-dark">
                Kërko Informacion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Pse Premium Park"
          title="Pse Ne"
        />
        <div className="luxury-card-grid luxury-card-grid-3">
          {servicePillars.map((item) => (
            <article className="pillar-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="facts-band">
          <article>
            <strong>45</strong>
            <span>Dhoma</span>
          </article>
          <article>
            <strong>3</strong>
            <span>Suita</span>
          </article>
          <article>
            <strong>Qender</strong>
            <span>Prane Prizrenit Historik</span>
          </article>
          <article>
            <strong>Biznes</strong>
            <span>Takime & Evente</span>
          </article>
        </div>
      </section>
    </SiteShell>
  )
}
