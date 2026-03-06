import { contactChannels, nearbyHighlights } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Lokacioni',
  title: 'Lokacioni',
  description:
    'Premium Park Hotel vendos mysafirin pranë qendrës, por ruan qetësinë e nevojshme për qëndrim, biznes dhe evente.',
  image: '/images/scraped/restaurant-bar-3.jpg',
  primaryCta: { label: 'Hap Drejtimin', href: contactChannels.mapsHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

export default function LocationPage() {
  return (
    <SiteShell hero={hero}>
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
              title="Adresa"
              description={contactChannels.address}
            />
            <div className="arrival-links">
              <a href={contactChannels.mapsHref} target="_blank" rel="noreferrer" className="text-link">
                Hap në Google Maps
              </a>
              <a href={`mailto:${contactChannels.email}`} className="text-link">
                {contactChannels.email}
              </a>
              <a href="tel:+38329222444" className="text-link">
                {contactChannels.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow="Prane Jush"
          title="Prizreni"
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
    </SiteShell>
  )
}
