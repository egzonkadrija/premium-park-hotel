import { Link } from 'react-router-dom'
import { bookingHref, contactChannels, nearbyHighlights } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Lokacioni',
  title: 'Prane qendres se Prizrenit',
  description:
    'Premium Park Hotel ju vendos afer qendres historike, pikave kryesore te qytetit dhe ritmit urban te Prizrenit, duke ruajtur qetesine e nevojshme per qendrim, biznes dhe evente.',
  image: '/images/scraped/location-hero.jpg',
  primaryCta: { label: 'Hap Drejtimin', href: contactChannels.mapsHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

const quickFacts = [
  { value: 'Qender', label: 'Prizreni historik prane jush' },
  { value: 'Maps', label: 'Drejtim i lehte per mberritje' },
  { value: '24/7', label: 'Kontakt per orientim dhe ndihme' },
  { value: 'Parkim', label: 'Qasje komode per mysafiret' },
]

const arrivalNotes = [
  {
    title: 'Kontakt i drejtperdrejte',
    text: 'Ekipi ju ndihmon me orientim, rezervime dhe cdo kerkese praktike para ose gjate qendrimit.',
  },
]

export default function LocationPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <div className="facts-band location-facts-band">
          {quickFacts.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="location-layout">
          <div className="map-card">
            <iframe
              title="Harta e Premium Park Hotel"
              className="map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Premium+Park+Hotel+Prizren&output=embed"
            />
          </div>
          <div className="arrival-card">
            <SectionIntro
              eyebrow="Arritja"
              title="Adresa & drejtimi"
              description="Premium Park Hotel ndodhet ne Rr. Tirana P.n., Prizren 20000, ne nje pozicion qe lidh qendren e qytetit me nje hyrje te qete dhe praktike."
            />
            <div className="arrival-note-list">
              {arrivalNotes.map((item) => (
                <article className="arrival-note" key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="arrival-links">
              <a href={contactChannels.mapsHref} target="_blank" rel="noreferrer" className="text-link">
                Hap ne Google Maps
              </a>
              <a href={`mailto:${contactChannels.email}`} className="text-link">
                {contactChannels.email}
              </a>
              <a href="tel:+38329222444" className="text-link">
                {contactChannels.phones[0]}
              </a>
              <a href="tel:+38343504504" className="text-link">
                {contactChannels.phones[1]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Prane jush"
          title="Prizreni rreth hotelit"
          description="Disa pika qe e bejne qendrimin me te lehte per mysafiret qe duan te njohin qytetin, te ecin ne qender ose te organizojne nje dite me ritmin e Prizrenit."
        />
        <div className="luxury-card-grid luxury-card-grid-3">
          {nearbyHighlights.map((item) => (
            <article className="pillar-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="closing-banner">
          <div>
            <p className="section-eyebrow">Planifikoni mberritjen</p>
            <h2>Rezervoni ose kerkoni informacion</h2>
            <p>
              Per rezervime, orientim dhe pyetje praktike rreth mberritjes, ekipi i Premium Park mbetet i
              disponueshem ne cdo hap.
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
