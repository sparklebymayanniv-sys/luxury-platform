"use client"

type GalleryItem = {
  title: string
  image: string
}

export default function Home() {
  const services = [
    "Black and Grey",
    "Realism",
    "Custom Tattoos",
    "Portrait Work",
    "Piercing",
    "Cover Ups",
    "Paintings",
    "Polynesian Tribal",
  ]

  const gallery: GalleryItem[] = [
    { title: "Blindfold Cherub", image: "/portfolio/blindfold-cherub-realism-tattoo.jpg" },
    { title: "Dog Portrait", image: "/portfolio/dog-portrait-realism-tattoo.jpg" },
    { title: "Joker Realism", image: "/portfolio/joker-realism-tattoo.jpg" },
    { title: "Rose Hand", image: "/portfolio/rose-hand-tattoo.jpg" },
    { title: "Script Eye Sleeve", image: "/portfolio/script-eye-sleeve-realism-tattoo-2.jpg" },
    { title: "Cherry Blossom", image: "/portfolio/tattoo-cherry-blossom-collarbone-fine-line.jpg" },
    { title: "Clown Girl Hand", image: "/portfolio/tattoo-clown-girl-hand-chicano.jpg" },
    { title: "Skull Portrait Shoulder", image: "/portfolio/tattoo-realism-skull-portrait-shoulder.jpg" },
    { title: "Spartan Warrior", image: "/portfolio/tattoo-spartan-warrior-forearm-realism.jpg" },
    { title: "Theater Mask Hand", image: "/portfolio/theater-mask-hand-tattoo.jpg" },
    { title: "Turtle Floral Leg", image: "/portfolio/turtle-floral-leg-tattoo.jpg" },
    { title: "Wolf Shoulder", image: "/portfolio/wolf-shoulder-realism-tattoo.jpg" },
  ]

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "15px 16px",
    borderRadius: 12,
    border: "1px solid rgba(127, 220, 255, 0.22)",
    background: "rgba(6, 12, 18, 0.92)",
    color: "#f4f7fb",
    outline: "none",
    fontSize: "1rem",
    boxSizing: "border-box",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 8,
    color: "#c4d7e8",
    fontWeight: 800,
    fontSize: "0.92rem",
    letterSpacing: 0.3,
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "clamp(2.7rem, 5.8vw, 5.6rem)",
    lineHeight: 0.9,
    margin: "0 0 20px",
    textTransform: "uppercase",
    fontWeight: 950,
    letterSpacing: -2,
  }

  const buttonPrimary: React.CSSProperties = {
    display: "inline-block",
    padding: "15px 24px",
    background: "#7fdcff",
    color: "#06101a",
    textDecoration: "none",
    borderRadius: 12,
    fontWeight: 950,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 28px rgba(127, 220, 255, 0.18)",
  }

  const buttonGhost: React.CSSProperties = {
    display: "inline-block",
    padding: "15px 24px",
    color: "#f4f7fb",
    textDecoration: "none",
    borderRadius: 12,
    fontWeight: 850,
    border: "1px solid rgba(127, 220, 255, 0.25)",
    background: "rgba(127, 220, 255, 0.05)",
  }

  return (
    <main
      style={{
        background: "#04070b",
        color: "#f4f7fb",
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          background: "rgba(4, 7, 11, 0.86)",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              textDecoration: "none",
              color: "#f4f7fb",
            }}
          >
            <img
              src="/branding/blue_diamond_logo.png"
              alt="Blue Diamond Tattoo Studio logo"
              style={{ height: 52, width: "auto", objectFit: "contain" }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 950,
                  textTransform: "uppercase",
                  letterSpacing: 1.4,
                  color: "#7fdcff",
                  fontSize: "0.78rem",
                }}
              >
                Blue Diamond Tattoo Studio
              </p>
              <p style={{ margin: "4px 0 0", color: "#9fb3c6", fontSize: "0.9rem" }}>
                4 Park St, Attleboro MA
              </p>
            </div>
          </a>

          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#work" style={buttonGhost}>Work</a>
            <a href="#artist" style={buttonGhost}>Artist</a>
            <a href="#book" style={buttonPrimary}>Book Now</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
          background:
            "radial-gradient(circle at 12% 0%, rgba(127, 220, 255, 0.24), rgba(0,0,0,0) 34%), radial-gradient(circle at 86% 12%, rgba(24, 91, 154, 0.22), rgba(0,0,0,0) 28%), linear-gradient(180deg, #08121d 0%, #04070b 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "70px 20px 84px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#7fdcff",
                letterSpacing: 2.4,
                fontWeight: 950,
                marginBottom: 18,
                fontSize: "0.86rem",
                textTransform: "uppercase",
              }}
            >
              Tattoo studio in Attleboro Massachusetts
            </p>

            <h1
              style={{
                fontSize: "clamp(4rem, 9vw, 8.2rem)",
                lineHeight: 0.86,
                margin: "0 0 26px",
                fontWeight: 950,
                letterSpacing: -4,
                textTransform: "uppercase",
              }}
            >
              Real Ink.
              <br />
              Real Art.
              <br />
              Blue Diamond.
            </h1>

            <p
              style={{
                maxWidth: 660,
                fontSize: "1.08rem",
                lineHeight: 1.85,
                color: "#bfd1df",
                marginBottom: 30,
              }}
            >
              Custom tattoos, realism, black and grey work, piercing, paintings, and original art in Attleboro MA. Built for people who want the piece to feel personal, clean, and worth wearing.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 20 }}>
              <a href="#book" style={buttonPrimary}>Schedule Appointment</a>
              <a href="#work" style={buttonGhost}>View Portfolio</a>
              <a
                href="tel:15084551948"
                style={buttonGhost}
              >
                Call Studio
              </a>
            </div>

            <p style={{ color: "#8ea3b7", fontSize: "0.95rem", margin: 0 }}>
              Walk ins welcome. Appointments recommended. Call (508) 455 1948.
            </p>
          </div>

          <div
            style={{
              borderRadius: 28,
              minHeight: 420,
              background:
                "linear-gradient(135deg, rgba(127,220,255,0.20), rgba(8,18,29,0.94) 42%, #05080d 100%)",
              border: "1px solid rgba(127, 220, 255, 0.19)",
              boxShadow: "0 28px 90px rgba(0,0,0,0.42), inset 0 1px 0 rgba(255,255,255,0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 32,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 18,
                border: "1px solid rgba(127, 220, 255, 0.12)",
                borderRadius: 22,
              }}
            />
            <img
              src="/branding/blue_diamond_logo.png"
              alt="Blue Diamond Tattoo Studio"
              style={{
                width: "100%",
                maxWidth: 500,
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 2,
              }}
            />
          </div>
        </div>
      </section>

      <section
        id="artist"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 38,
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: 530,
              borderRadius: 28,
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(127, 220, 255, 0.16)",
              background: "#08111a",
              boxShadow: "0 24px 70px rgba(0,0,0,0.32)",
            }}
          >
            <img
              src="/diego/diego-tattoo-artist-working.jpg"
              alt="Diego tattoo artist working at Blue Diamond Tattoo Studio"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,7,11,0.03) 0%, rgba(4,7,11,0.28) 42%, rgba(4,7,11,0.92) 100%)",
              }}
            />
            <div style={{ position: "absolute", left: 26, right: 26, bottom: 26 }}>
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#7fdcff",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontWeight: 950,
                  fontSize: "0.78rem",
                }}
              >
                Owner and artist
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                  lineHeight: 0.92,
                  textTransform: "uppercase",
                  fontWeight: 950,
                }}
              >
                Diego
              </h2>
            </div>
          </div>

          <div>
            <p
              style={{
                color: "#7fdcff",
                fontWeight: 950,
                textTransform: "uppercase",
                letterSpacing: 2.2,
                marginBottom: 12,
              }}
            >
              Custom tattoo work with an artist first approach
            </p>

            <h2 style={sectionTitleStyle}>
              Clean work.
              <br />
              Real presence.
            </h2>

            <p style={{ color: "#bfd1df", lineHeight: 1.85, maxWidth: 650, marginBottom: 18 }}>
              Blue Diamond is built around art, patience, and work that carries weight. Bring a reference, a story, a symbol, or a rough idea. The studio helps shape it into a piece that fits the body and the person wearing it.
            </p>

            <p style={{ color: "#bfd1df", lineHeight: 1.85, maxWidth: 650, marginBottom: 28 }}>
              The shop works with realism, black and grey, portraits, custom designs, cover ups, piercing, paintings, and visual art.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#book" style={buttonPrimary}>Start Your Request</a>
              <a
                href="https://www.instagram.com/bluediamond.tattoo_studio"
                target="_blank"
                rel="noreferrer"
                style={buttonGhost}
              >
                View Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "90px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
          background:
            "linear-gradient(180deg, rgba(127, 220, 255, 0.035), rgba(0,0,0,0))",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p
            style={{
              color: "#7fdcff",
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Services
          </p>

          <h2 style={sectionTitleStyle}>
            Tattoos.
            <br />
            Piercing.
            <br />
            Original art.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
              marginTop: 34,
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                style={{
                  minHeight: 142,
                  padding: 22,
                  borderRadius: 20,
                  border: "1px solid rgba(127, 220, 255, 0.16)",
                  background:
                    "linear-gradient(135deg, rgba(127,220,255,0.08), rgba(8,14,21,0.94) 45%, #05080d 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  fontWeight: 950,
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.035)",
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p
            style={{
              color: "#7fdcff",
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Portfolio
          </p>

          <h2 style={sectionTitleStyle}>Work from the shop.</h2>

          <p style={{ color: "#bfd1df", maxWidth: 760, lineHeight: 1.8, marginBottom: 34 }}>
            Real tattoos from Blue Diamond Tattoo Studio. Every piece has its own energy, placement, and story.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
              gap: 18,
            }}
          >
            {gallery.map((item) => (
              <article
                key={item.title}
                style={{
                  minHeight: 355,
                  borderRadius: 22,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(127, 220, 255, 0.14)",
                  background: "#08111a",
                  boxShadow: "0 18px 42px rgba(0,0,0,0.28)",
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} tattoo at Blue Diamond Tattoo Studio`}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(4,7,11,0.04) 0%, rgba(4,7,11,0.12) 42%, rgba(4,7,11,0.86) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 20,
                    right: 20,
                    bottom: 20,
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 7px",
                      color: "#7fdcff",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      fontWeight: 950,
                      fontSize: "0.72rem",
                    }}
                  >
                    Blue Diamond work
                  </p>
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: 950,
                      textTransform: "uppercase",
                      lineHeight: 1,
                      fontSize: "1.35rem",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="book"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
          background:
            "radial-gradient(circle at top, rgba(127,220,255,0.13), rgba(0,0,0,0) 44%)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <p
              style={{
                color: "#7fdcff",
                fontWeight: 950,
                textTransform: "uppercase",
                letterSpacing: 2.2,
                marginBottom: 12,
              }}
            >
              Appointment request
            </p>

            <h2 style={{ ...sectionTitleStyle, textAlign: "center" }}>
              Tell us what you want.
            </h2>

            <p
              style={{
                color: "#bfd1df",
                lineHeight: 1.8,
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              Send the idea, placement, size, and budget. The studio will review the request and reach out.
            </p>
          </div>

          <form
            action="https://formsubmit.co/Bluediamondtattoo617@gmail.com"
            method="POST"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              background:
                "linear-gradient(135deg, rgba(127,220,255,0.07), rgba(6,12,18,0.96) 42%, #05080d 100%)",
              border: "1px solid rgba(127, 220, 255, 0.19)",
              borderRadius: 26,
              padding: 26,
              boxShadow: "0 24px 80px rgba(0,0,0,0.34)",
            }}
          >
            <input type="hidden" name="_subject" value="New Tattoo Booking Request" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://bluediamondtattoostudio.com/thank-you"
            />

            <div>
              <label style={labelStyle}>Name</label>
              <input type="text" name="name" placeholder="Your name" style={inputStyle} required />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" name="email" placeholder="Your email" style={inputStyle} required />
            </div>

            <div>
              <label style={labelStyle}>Phone</label>
              <input type="tel" name="phone" placeholder="Your phone number" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Preferred Date</label>
              <input type="date" name="preferredDate" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Service</label>
              <select name="service" style={inputStyle} defaultValue="">
                <option value="" disabled>Choose service</option>
                <option value="Tattoo with Diego">Tattoo with Diego</option>
                <option value="Piercing">Piercing</option>
                <option value="Consultation">Consultation</option>
                <option value="Custom Design">Custom Design</option>
                <option value="Cover Up">Cover Up</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Placement</label>
              <input type="text" name="placement" placeholder="Arm, hand, chest" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Approximate Size</label>
              <input type="text" name="size" placeholder="Small, medium, sleeve" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Budget</label>
              <input type="text" name="budget" placeholder="Your budget" style={inputStyle} />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Tattoo Idea</label>
              <textarea
                name="idea"
                placeholder="Tell the shop what you want, where you want it, and any details that matter."
                style={{ ...inputStyle, minHeight: 150, resize: "vertical" }}
                required
              />
            </div>

            <div style={{ gridColumn: "1 / -1", textAlign: "center", marginTop: 8 }}>
              <button type="submit" style={{ ...buttonPrimary, fontSize: "1rem" }}>
                Send Appointment Request
              </button>
            </div>

            <p
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                margin: 0,
                color: "#8ea3b7",
                fontSize: "0.92rem",
              }}
            >
              After sending, you will be taken to a confirmation page.
            </p>
          </form>
        </div>
      </section>

      <section
        style={{
          padding: "86px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p
            style={{
              color: "#7fdcff",
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Local tattoo studio
          </p>

          <h2 style={sectionTitleStyle}>
            Serving Attleboro
            <br />
            and nearby cities.
          </h2>

          <p style={{ color: "#bfd1df", maxWidth: 780, lineHeight: 1.8, marginBottom: 26 }}>
            Blue Diamond Tattoo Studio is located at 4 Park St in Attleboro MA. The studio serves clients from Attleboro, North Attleborough, Mansfield, Taunton, Pawtucket, Providence, Boston, and surrounding Massachusetts and Rhode Island areas.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 14,
            }}
          >
            {["Attleboro MA", "North Attleborough MA", "Mansfield MA", "Taunton MA", "Pawtucket RI", "Providence RI", "Boston MA", "Rhode Island area"].map((city) => (
              <div
                key={city}
                style={{
                  padding: "18px 16px",
                  borderRadius: 18,
                  border: "1px solid rgba(127, 220, 255, 0.15)",
                  background: "rgba(127, 220, 255, 0.045)",
                  color: "#d9e9f4",
                  fontWeight: 850,
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "44px 20px",
          background:
            "linear-gradient(90deg, rgba(127,220,255,0.22), rgba(24,91,154,0.13))",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 6px",
                color: "#06101a",
                fontWeight: 950,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Sunday piercing special
            </p>
            <p style={{ margin: 0, color: "#092236", fontWeight: 750 }}>
              Buy one piercing and get one piercing thirty dollars off on Sundays.
            </p>
          </div>

          <a
            href="tel:15084551948"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#06101a",
              color: "#f4f7fb",
              textDecoration: "none",
              borderRadius: 12,
              fontWeight: 950,
            }}
          >
            Call for Details
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "92px 20px",
          borderBottom: "1px solid rgba(127, 220, 255, 0.13)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <img
            src="/branding/blue_diamond_logo.png"
            alt="Blue Diamond Tattoo Studio logo"
            loading="lazy"
            style={{
              height: 72,
              width: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />

          <p
            style={{
              color: "#7fdcff",
              fontWeight: 950,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Ready to get tattooed
          </p>

          <h2 style={{ ...sectionTitleStyle, textAlign: "center" }}>
            Pull up to Blue Diamond.
          </h2>

          <p
            style={{
              color: "#bfd1df",
              lineHeight: 1.85,
              maxWidth: 760,
              margin: "0 auto 28px",
            }}
          >
            Call the studio, send a booking request, or visit the shop with your idea.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:15084551948" style={buttonPrimary}>Call Studio</a>
            <a
              href="https://maps.google.com/?q=4+Park+St+Attleboro+MA+02703"
              style={buttonGhost}
            >
              Get Directions
            </a>
            <a
              href="https://www.instagram.com/bluediamond.tattoo_studio"
              target="_blank"
              rel="noreferrer"
              style={buttonGhost}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "34px 20px", background: "#030509" }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            color: "#8ea3b7",
            fontSize: "0.95rem",
          }}
        >
          <span>Blue Diamond Tattoo Studio</span>
          <span>4 Park St, Attleboro MA 02703</span>
          <span>(508) 455 1948</span>
          <span>Bluediamondtattoo617@gmail.com</span>
        </div>
      </footer>
    </main>
  )
}