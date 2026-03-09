import { bookingHref, galleryCollections } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Galeria',
  title: 'Galeria Jone',
  pageTitle: 'Galeria - Premium Park Hotel',
  description:
    'Pamje te kuruara nga dhomat, restoranti, spa-ja dhe sallat e konferencave per te treguar hotelin si pervoje te plote.',
  image: '/images/scraped/gallery-2.jpg',
  primaryCta: { label: 'Rezervo Tani', href: bookingHref },
  secondaryCta: { label: 'Na Kontaktoni', to: '/contact' },
}

export default function GalleryPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <div className="gallery-anchor-shell">
          <SectionIntro
            eyebrow="Koleksionet"
            title="Galeria Jone"
            description="Zgjidhni nje kategori per te pare pamjet me perfaqesuese te hotelit."
            align="center"
          />
          <div className="gallery-anchor-nav">
            {galleryCollections.map((collection) => (
              <a key={collection.id} href={`#${collection.id}`}>
                {collection.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {galleryCollections.map((collection) => (
        <section className="section gallery-collection" id={collection.id} key={collection.id}>
          <SectionIntro eyebrow="Koleksion" title={collection.title} description={collection.description} />
          <div className="gallery-editorial-grid">
            {collection.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${collection.title} ${index + 1}`}
                className={index === 0 || index === 3 ? 'featured' : ''}
              />
            ))}
          </div>
        </section>
      ))}
    </SiteShell>
  )
}
