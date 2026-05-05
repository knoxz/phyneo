import { PageHero } from "../components/PageHero";

export function Impressum() {
  return (
    <>
      <PageHero
        kicker="Rechtliches"
        title="Impressum"
        breadcrumbs={[{ label: "Phyneo", href: "/" }, { label: "Impressum" }]}
      />

      <section className="container-edit pb-32">
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 max-w-4xl">
          <Block label="Anbieter">
            <address className="not-italic text-ink leading-relaxed">
              Katharina Anders<br />
              Phyneo<br />
              Rustwiese 7<br />
              38723 Seesen
            </address>
          </Block>
          <Block label="Kontakt">
            <ul className="space-y-1 text-ink">
              <li>Telefon: <a href="tel:053819812030" className="link-underline">053819812030</a></li>
              <li>Telefax: 053819812036</li>
              <li>E-Mail: <a href="mailto:post@phyneo.de" className="link-underline">post@phyneo.de</a></li>
            </ul>
          </Block>
          <Block label="Berufsbezeichnung">
            <p className="text-ink">Physiotherapeutin, Heilpraktikerin (verliehen in Niedersachsen)</p>
            <p className="mt-2 text-sm text-ink-muted">
              Maßgebliche Gesetze: Masseur- und Physiotherapeutengesetz (MPhG 1994), Heilpraktikergesetz
            </p>
          </Block>
          <Block label="Aufsicht (Heilpraktiker)">
            <p className="text-ink">
              Gesundheitsamt Salzgitter-Bad<br />
              Paracelsusstr. 1-9<br />
              38259 Salzgitter-Bad
            </p>
          </Block>
          <Block label="Berufshaftpflicht">
            <p className="text-ink">
              Die Continentale<br />
              Rathenaustraße 9<br />
              30159 Hannover<br />
              <span className="text-sm text-ink-muted">Geltungsbereich: Deutschland</span>
            </p>
          </Block>
          <Block label="Umsatzsteuer">
            <p className="text-ink">Befreit nach § 4 Nr. 14 UStG</p>
          </Block>
          <Block label="Haftungshinweis">
            <p className="text-sm text-ink-soft leading-relaxed">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich. Es gelten die Standard-Haftungsausschlüsse zu Inhalten, Links und
              Urheberrecht gemäß TMG.
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="col-span-12 md:col-span-6">
      <p className="label mb-3">{label}</p>
      {children}
    </div>
  );
}
