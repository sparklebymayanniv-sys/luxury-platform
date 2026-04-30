export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#05070b",
        color: "#f4f7fb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 600 }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#7fdcff",
            fontWeight: 800,
            marginBottom: 16,
          }}
        >
          Request Sent
        </p>

        <h1
          style={{
            fontSize: "2.8rem",
            fontWeight: 900,
            marginBottom: 20,
          }}
        >
          We got your request.
        </h1>

        <p
          style={{
            color: "#b7c7d5",
            lineHeight: 1.7,
            marginBottom: 30,
          }}
        >
          The shop will review your idea and reach out soon.  
          If it’s urgent, feel free to call directly.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 26px",
            background: "#7fdcff",
            color: "#07111b",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: 900,
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  )
}