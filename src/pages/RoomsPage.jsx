import { Link, useLocation } from 'react-router-dom'
import { bookingHref, roomItems } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Dhomat',
  title: 'Suita & Dhoma',
  description:
    'Nga dhomat dyshe deri te apartamenti, secila kategori është menduar për rehati, qetësi dhe një qëndrim me standard të lartë.',
  image: '/images/scraped/room-2.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

export default function RoomsPage() {
  const location = useLocation()
  const activeId = location.hash.replace('#', '')
  const activeRoom = roomItems.find((room) => room.id === activeId) ?? roomItems[0]

  return (
    <SiteShell hero={hero}>
      <section className="section">
        <SectionIntro
          eyebrow="Koleksioni i Dhomave"
          title="Zgjidhni dhomën që i përshtatet qëndrimit tuaj"
          description="Secila kategori ruan të njëjtin standard rehatie dhe shërbimi, me nivele të ndryshme hapësire, privatësie dhe karakteri."
        />
        <div className="luxury-card-grid luxury-card-grid-3">
          {roomItems.map((room) => (
            <article className={`media-card room-card${activeRoom.id === room.id ? ' is-active' : ''}`} key={room.id}>
              <img src={room.image} alt={room.displayTitle} />
              <div className="media-card-body">
                <p className="card-meta">
                  <span>{room.guests}</span>
                  <span>{room.size}</span>
                </p>
                <h3>{room.displayTitle}</h3>
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

      <section className="section room-detail-section" id={activeRoom.id}>
        <div className="room-detail-layout">
          <div className="room-detail-media">
            <img src={activeRoom.image} alt={activeRoom.displayTitle} />
          </div>
          <div className="room-detail-copy">
            <SectionIntro
              eyebrow="Detajet e dhomës"
              title={activeRoom.displayTitle}
              description={activeRoom.description}
            />
            <div className="detail-meta">
              <span>{activeRoom.guests}</span>
              <span>{activeRoom.size}</span>
            </div>
            <ul className="amenity-list">
              {activeRoom.amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={bookingHref} target="_blank" rel="noreferrer" className="btn btn-primary">
                Rezervo këtë dhomë
              </a>
              <Link to="/contact" className="text-link">
                Kërko informacion shtesë
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
