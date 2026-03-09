import { bookingHref, contactChannels } from '../content/siteContent'
import { SectionIntro, SiteShell } from '../components/SiteShell'

const hero = {
  eyebrow: 'Kontakti',
  title: 'Kontaktoni',
  pageTitle: 'Kontakt - Premium Park Hotel',
  description:
    'Na shkruani per qendrime, evente dhe cdo pyetje praktike, ose kontaktoni direkt per nje rezervim me te shpejte.',
  image: '/images/scraped/hero-candidate-3.jpg',
  primaryCta: { label: 'Rezervo Direkt', href: bookingHref },
  secondaryCta: { label: 'Telefono', href: 'tel:+38329222444' },
}

export default function ContactPage() {
  return (
    <SiteShell hero={hero}>
      <section className="section">
        <SectionIntro
          eyebrow="Informacion"
          title="Informacion"
          description="Tre menyra te drejtperdrejta per te na gjetur: lokacioni, emaili dhe telefoni."
          align="center"
        />
        <div className="contact-card-grid">
          <a className="contact-action-card" href={contactChannels.mapsHref} target="_blank" rel="noreferrer">
            <strong>Lokacioni</strong>
            <span>{contactChannels.address}</span>
          </a>
          <a className="contact-action-card" href={`mailto:${contactChannels.email}`}>
            <strong>Email</strong>
            <span>{contactChannels.email}</span>
          </a>
          <a className="contact-action-card" href="tel:+38329222444">
            <strong>Telefon</strong>
            <span>{contactChannels.phones.join(' / ')}</span>
          </a>
        </div>
      </section>

      <section className="section">
        <div className="contact-layout">
          <div className="contact-copy-panel">
            <SectionIntro
              eyebrow="Na shkruani"
              title="Ju na tregoni. Ne degjojme."
              description="Per evente, pyetje operative ose kerkesa shtese, forma me poshte mbetet kanali me i qarte per komunikim."
            />
            <p className="body-copy">
              Nese preferoni kontakt te menjehershem, mund te telefononi ose te rezervoni direkt ne cdo kohe.
            </p>
            <div className="contact-side-cta">
              <a href={bookingHref} target="_blank" rel="noreferrer" className="btn btn-primary">
                Rezervo Direkt
              </a>
              <a href="tel:+38329222444" className="text-link">
                {contactChannels.phones[0]}
              </a>
            </div>
          </div>
          <form className="contact-form-card" onSubmit={(event) => event.preventDefault()}>
            <input type="text" placeholder="Emri" aria-label="Emri" />
            <input type="email" placeholder="Email" aria-label="Email" />
            <input type="text" placeholder="Subjekti" aria-label="Subjekti" />
            <textarea placeholder="Mesazhi" aria-label="Mesazhi" rows={6} />
            <button type="submit" className="btn btn-primary">
              Dergo Kerkesen
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  )
}
