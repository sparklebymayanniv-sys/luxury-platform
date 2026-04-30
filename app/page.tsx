export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030508",
        color: "#dbe7f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: 620 }}>
        <img
          src="/branding/blue_diamond_logo.png"
          alt="Blue Diamond Tattoo Studio"
          style={{
            height: 90,
            width: "auto",
            margin: "0 auto 28px",
            display: "block",
          }}
        />

        <p
          style={{
            color: "#7fdcff",
            textTransform: "uppercase",
            letterSpacing: 2.4,
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Blue Diamond Tattoo Studio
        </p>

        <h1
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5rem)",
            lineHeight: 1,
            fontWeight: 700,
            margin: "0 0 22px",
          }}
        >
          Website under construction.
        </h1>

        <p
          style={{
            color: "#9fb3c8",
            lineHeight: 1.8,
            fontSize: "1.05rem",
            marginBottom: 28,
          }}
        >
          We are updating the site. For appointments, call the studio or message
          us on Instagram.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:15084551948"
            style={{
              padding: "14px 24px",
              background: "#7fdcff",
              color: "#06101a",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 850,
            }}
          >
            Call Studio
          </a>

          <a
            href="https://www.instagram.com/bluediamond.tattoo_studio"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 24px",
              border: "1px solid rgba(127,220,255,0.26)",
              color: "#dbe7f0",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 850,
            }}
          >
            Instagram
          </a>
        </div>
      </div>
    </main>
  )
}