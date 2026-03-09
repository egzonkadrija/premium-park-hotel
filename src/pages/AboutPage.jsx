import { Link } from 'react-router-dom'
import { bookingHref, servicePillars } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Rreth Nesh',
  title: 'Rreth Nesh',
  pageTitle: 'Rreth Nesh - Premium Park Hotel',
  description:
    'Nje hotel urban ne zemer te Prizrenit, i krijuar per rehati, qetesi dhe mikpritje te menduar ne cdo detaj.',
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
              description="Premium Park Hotel ne Prizren, Kosove ju ofron nje vendndodhje unike per te shijuar qytetin. Ne nje ndertese elegante ne qender te Prizrenit, hoteli eshte rezultat i nje vizioni te qarte per sherbim cilesor dhe standarde te reja mikpritjeje."
            />
            <div className="about-story-body">
              <p className="body-copy">
                Per ta bere qendrimin tuaj sa me te rehatshem dhe per t&apos;ju bere te ndiheni si ne shtepi, me kenaqesi ju ofrojme nje numer te madh sherbimesh.
              </p>
              <p className="body-copy">
                45 dhomat dhe 3 suitat e hotelit jane te pajisura plotesisht per te plotesuar nevojat e mysafireve qe udhetojne per biznes apo per pushime. Mikpritja dhe sherbimet e menduara deri ne detajet me te vogla ju bejne te ndiheni te mirepritur gjate gjithe qendrimit.
              </p>
              <p className="body-copy">
                Dhomat jane unike ne cdo hollesi dhe te pajisura me mobilje te rehatshme e terheqese. Cdo dhome eshte projektuar per te ofruar nje eksperience relaksuese dhe autentike udhetimi, te shoqeruar me finese dhe kujdes personal.
              </p>
            </div>
            <div className="about-story-actions">
              <Link to="/contact" className="btn btn-outline-dark">
                Kerko Informacion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Pse Premium Park"
          title="Jeni ne kerkim te rehatiske, qetesise dhe lokacionit te perkryer ne Prizren?"
          description="Tre arsye qe percaktojne ritmin e qendrimit dhe identitetin e hotelit."
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
            <span>Prane Prizrenit historik</span>
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
