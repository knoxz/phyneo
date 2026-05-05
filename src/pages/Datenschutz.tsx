import { PageHero } from "../components/PageHero";

export function Datenschutz() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Datenschutzerklärung"
        italicWord="Datenschutz"
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Datenschutz" }]}
      />

      <section className="container-edit pb-32">
        <div className="max-w-3xl space-y-10">
          <Section title="Verantwortlicher">
            <p>
              Katharina Anders<br />
              Rustwiese 7, 38723 Seesen<br />
              Telefon: <a href="tel:053819812030" className="link-underline">05381-9812030</a>
            </p>
          </Section>

          <Section title="Arten der verarbeiteten Daten">
            <ul className="list-disc pl-5 space-y-1">
              <li>Bestandsdaten (z. B. Namen, Adressen)</li>
              <li>Kontaktdaten</li>
              <li>Inhaltsdaten</li>
              <li>Nutzungsdaten</li>
              <li>Meta- und Kommunikationsdaten</li>
            </ul>
          </Section>

          <Section title="Zentrale Regelungsbereiche">
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong className="text-ink">Gesundheitsdienstleistungen</strong> – Verarbeitung von
                Patientendaten einschließlich besonderer Kategorien gemäß DSGVO Art. 9.
              </li>
              <li>
                <strong className="text-ink">Therapeutische Leistungen & Coaching</strong> –
                Klientendaten mit Einwilligung für sensitive Informationen.
              </li>
              <li>
                <strong className="text-ink">Registrierung</strong> – Nutzerkonto-Verwaltung mit
                IP-Speicherung für 7 Tage.
              </li>
              <li>
                <strong className="text-ink">Analytik</strong> – Bei Einsatz von Webanalyse-Tools mit
                aktivierter IP-Anonymisierung; personenbezogene Daten werden nach 14 Monaten gelöscht.
              </li>
              <li>
                <strong className="text-ink">Externe Dienste</strong> – Soweit eingebunden: YouTube,
                Google Fonts, ReCaptcha, Google Maps.
              </li>
              <li>
                <strong className="text-ink">Soziale Medien</strong> – Facebook, Instagram, LinkedIn –
                mit Hinweisen auf Datenverarbeitung außerhalb der EU.
              </li>
              <li>
                <strong className="text-ink">Cookies & Tracking</strong> – Akismet (Spamprüfung)
                sowie temporäre und permanente Cookies.
              </li>
              <li>
                <strong className="text-ink">Datenlöschung</strong> – Orientierung an gesetzlichen
                Aufbewahrungspflichten (Deutschland: 10 Jahre für Handelsunterlagen).
              </li>
            </ol>
          </Section>

          <Section title="Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu jederzeit an{" "}
              <a href="mailto:post@phyneo.de" className="link-underline text-ink">post@phyneo.de</a>.
            </p>
          </Section>

          <p className="text-xs text-ink-muted">
            Diese Datenschutzerklärung wird im Rahmen des Website-Relaunches aktualisiert und
            DSGVO-konform fortgeschrieben.
          </p>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        className="font-display text-2xl text-ink mb-4"
        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
      >
        {title}
      </h2>
      <div className="text-ink-soft leading-relaxed space-y-2">{children}</div>
    </div>
  );
}
