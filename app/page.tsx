export default function Home() {
  return (
    <main className="holding-page">
      <div className="ink-cloud ink-one" />
      <div className="ink-cloud ink-two" />

      <section className="holding-card">
        <img
          src="/branding/blue_diamond_logo.png"
          alt="Blue Diamond Tattoo Studio"
          className="holding-logo"
        />

        <p className="holding-kicker">Blue Diamond Tattoo Studio</p>

        <h1 className="ink-title">
          Site’s not ready.
          <br />
          We are.
        </h1>

        <p className="holding-copy">
          Tattoos, piercing, paintings, and custom work in Attleboro MA.
        </p>

        <div className="holding-actions">
          <a href="tel:15084551948">Call Studio</a>

          <a
            href="https://www.instagram.com/bluediamond.tattoo_studio"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://maps.google.com/?q=4+Park+St+Attleboro+MA+02703"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
      </section>
    </main>
  )
}