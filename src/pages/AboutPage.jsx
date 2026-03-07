import { Link } from 'react-router-dom'
import { bookingHref, servicePillars } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Rreth Nesh',
  title: 'Rreth Premium Park Hotel',
  description:
    'Një hotel urban në zemër të Prizrenit, i krijuar për rehati, qetësi dhe mikpritje të menduar në çdo detaj.',
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
            <img className="tall" src="/images/scraped/about-left-new.jpg" alt="Premium Park lounge" />
            <img src="/images/scraped/room-6.jpg" alt="Apartment room" />
            <img src="/images/scraped/restaurant-slider-3.jpg" alt="Restaurant interior" />
            <img className="wide" src="/images/scraped/gallery-5.jpg" alt="Conference facility" />
          </div>
          <div className="about-story">
            <SectionIntro
              eyebrow="Rreth Hotelit"
              title="Rreth Premium Park Hotel"
              description="Premium Park Hotel në Prizren, Kosovë ju ofron një vendndodhje unike për të shijuar qytetin. Në një ndërtesë elegante në qendër të Prizrenit, hoteli është rezultat i një vizioni të qartë për shërbim cilësor dhe standarde të reja mikpritjeje."
            />
            <div className="about-story-body">
              <p className="body-copy">
                Për ta bërë qëndrimin tuaj sa më të rehatshëm dhe për t&apos;ju bërë të ndiheni si në shtëpi, me kënaqësi ju ofrojmë një numër të madh shërbimesh.
              </p>
              <p className="body-copy">
                45 dhomat dhe 3 suitat e hotelit janë të pajisura plotësisht për të plotësuar nevojat e mysafirëve që udhëtojnë për biznes apo për pushime. Mikpritja dhe shërbimet e menduara deri në detajet më të vogla ju bëjnë të ndiheni të mirëpritur gjatë gjithë qëndrimit.
              </p>
              <p className="body-copy">
                Dhomat janë unike në çdo hollësi dhe të pajisura me mobilje të rehatshme e tërheqëse. Çdo dhomë është projektuar për të ofruar një eksperiencë relaksuese dhe autentike udhëtimi, të shoqëruar me finesë dhe kujdes personal.
              </p>
            </div>
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
          title="Pse të na zgjidhni"
          description="Tre arsye që përcaktojnë ritmin e qëndrimit dhe identitetin e hotelit."
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
            <strong>Qendër</strong>
            <span>Pranë Prizrenit historik</span>
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
