export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 10%, rgba(127,220,255,0.14), transparent 38%), #030508",
        color: "#dbe7f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <img
          src="/branding/blue_diamond_logo.png"
          alt="Blue Diamond Tattoo Studio"
          style={{
            height: 86,
            width: "auto",
            display: "block",
            margin: "0 auto 26px",
          }}
        />

        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 2.4,
            color: "#7fdcff",
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Request sent
        </p>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.2rem)",
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "0.01em",
            margin: "0 0 24px",
          }}
        >
          We got it.
        </h1>

        <p
          style={{
            color: "#9fb3c8",
            lineHeight: 1.8,
            marginBottom: 32,
            fontSize: "1.05rem",
          }}
        >
          The shop will review your request and reach out. If it is urgent, call
          the studio directly.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              background: "#7fdcff",
              color: "#06101a",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 850,
            }}
          >
            Back Home
          </a>

          <a
            href="tel:15084551948"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              border: "1px solid rgba(127,220,255,0.26)",
              color: "#dbe7f0",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 850,
              background: "rgba(127,220,255,0.055)",
            }}
          >
            Call Studio
          </a>
        </div>
      </div>
    </main>
  )
}