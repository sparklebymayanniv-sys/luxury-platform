"use client"

type GalleryItem = {
  title: string
  image: string
}

export default function Home() {
  const specialties = [
    "Realism",
    "Black and Grey",
    "Portrait Work",
    "Tattoos",
    "Cover Ups",
    "Piercing",
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
    borderRadius: 14,
    border: "1px solid rgba(127,220,255,0.24)",
    background: "rgba(4,10,16,0.94)",
    color: "#dbe7f0",
    outline: "none",
    fontSize: "1rem",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 8,
    color: "#b9cce0",
    fontWeight: 700,
    fontSize: "0.92rem",
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "clamp(2.5rem, 5.6vw, 5.4rem)",
    lineHeight: 0.98,
    margin: "0 0 20px",
    fontWeight: 700,
    letterSpacing: "0.01em",
    color: "#dbe7f0",
  }

  const buttonPrimary: React.CSSProperties = {
    display: "inline-block",
    padding: "15px 24px",
    background: "#7fdcff",
    color: "#06101a",
    textDecoration: "none",
    borderRadius: 999,
    fontWeight: 850,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(127,220,255,0.20)",
  }

  const buttonGhost: React.CSSProperties = {
    display: "inline-block",
    padding: "15px 24px",
    color: "#dbe7f0",
    textDecoration: "none",
    borderRadius: 999,
    fontWeight: 750,
    border: "1px solid rgba(127,220,255,0.25)",
    background: "rgba(127,220,255,0.055)",
  }

  const phoneLinkStyle: React.CSSProperties = {
    color: "#7fdcff",
    textDecoration: "none",
    fontWeight: 800,
  }

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at 16% 0%, rgba(127,220,255,0.13), rgba(0,0,0,0) 34%), radial-gradient(circle at 86% 8%, rgba(35,96,160,0.13), rgba(0,0,0,0) 30%), #030508",
        color: "#dbe7f0",
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
        overflow: "visible",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 9999,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          background: "rgba(3,5,8,0.91)",
          borderBottom: "1px solid rgba(127,220,255,0.14)",
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
              color: "#dbe7f0",
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
                  fontWeight: 850,
                  textTransform: "uppercase",
                  letterSpacing: 1.5,
                  color: "#7fdcff",
                  fontSize: "0.78rem",
                }}
              >
                Blue Diamond Tattoo Studio
              </p>
              <p style={{ margin: "4px 0 0", color: "#8fa7bb", fontSize: "0.9rem" }}>
                Attleboro MA
              </p>
            </div>
          </a>

          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <a href="#artist" style={buttonGhost}>Artist</a>
            <a href="#work" style={buttonGhost}>Work</a>
            <a href="#book" style={buttonPrimary}>Book Now</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(127,220,255,0.14)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,5,8,0.10), #030508 96%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1320,
            margin: "0 auto",
            padding: "58px 20px 72px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 42,
            alignItems: "center",
          }}
        >
          <div className="softOpen delayOne">
            <p
              style={{
                color: "#7fdcff",
                letterSpacing: 2.3,
                fontWeight: 800,
                marginBottom: 18,
                fontSize: "0.84rem",
                textTransform: "uppercase",
              }}
            >
              Tattoo studio in Attleboro Massachusetts
            </p>

            <h1
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7.2rem)",
                lineHeight: 1.02,
                margin: "0 0 26px",
                fontWeight: 700,
                letterSpacing: "0.01em",
                color: "#dbe7f0",
              }}
            >
              Real ink.
              <br />
              No pressure.
            </h1>

            <p
              style={{
                maxWidth: 620,
                fontSize: "1.16rem",
                lineHeight: 1.75,
                color: "#9fb3c8",
                marginBottom: 30,
              }}
            >
              Bring what you want.
              <br />
              We make it yours.
            </p>

            <p
              style={{
                maxWidth: 680,
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#9fb3c8",
                marginBottom: 30,
              }}
            >
              Tattoos, realism, black and grey work, piercing, paintings, and
              original art. Bring a reference, bring an idea, or bring something
              you have seen before.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 22 }}>
              <a href="#book" style={buttonPrimary}>Schedule Appointment</a>
              <a href="#work" style={buttonGhost}>View Work</a>
              <a href="tel:15084551948" style={buttonGhost}>Call Studio</a>
            </div>

            <p style={{ color: "#8ea3b7", fontSize: "0.95rem", margin: 0 }}>
              Walk ins welcome. Appointments recommended.{" "}
              <a href="tel:15084551948" style={phoneLinkStyle}>
                (508) 455 1948
              </a>
            </p>
          </div>

          <div
            className="softOpen delayTwo"
            style={{
              borderRadius: 34,
              minHeight: 410,
              background:
                "linear-gradient(135deg, rgba(127,220,255,0.17), rgba(7,18,30,0.96) 38%, #04070b 100%)",
              border: "1px solid rgba(127,220,255,0.20)",
              boxShadow:
                "0 36px 110px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 34,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 360,
                height: 360,
                borderRadius: "50%",
                background: "rgba(127,220,255,0.09)",
                filter: "blur(42px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 18,
                border: "1px solid rgba(127,220,255,0.13)",
                borderRadius: 26,
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
        style={{
          padding: "24px 20px",
          borderBottom: "1px solid rgba(127,220,255,0.12)",
          background: "rgba(127,220,255,0.032)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {specialties.map((item) => (
            <span
              key={item}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid rgba(127,220,255,0.18)",
                background: "rgba(4,10,16,0.72)",
                color: "#cfd8e3",
                fontWeight: 750,
                fontSize: "0.9rem",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section
        id="artist"
        className="softOpen delayThree"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(127,220,255,0.13)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: 520,
              borderRadius: 34,
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(127,220,255,0.16)",
              background: "#08111a",
              boxShadow: "0 28px 90px rgba(0,0,0,0.40)",
            }}
          >
            <img
              src="/diego/diego-tattoo-artist-working.jpg"
              alt="Diego tattoo artist working at Blue Diamond Tattoo Studio"
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
                  "linear-gradient(180deg, rgba(4,7,11,0.04) 0%, rgba(4,7,11,0.30) 42%, rgba(4,7,11,0.94) 100%)",
              }}
            />
            <div style={{ position: "absolute", left: 28, right: 28, bottom: 28 }}>
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#7fdcff",
                  textTransform: "uppercase",
                  letterSpacing: 2.2,
                  fontWeight: 850,
                  fontSize: "0.78rem",
                }}
              >
                Owner and artist
              </p>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
                  lineHeight: 0.96,
                  fontWeight: 700,
                  color: "#dbe7f0",
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
                fontWeight: 850,
                textTransform: "uppercase",
                letterSpacing: 2.2,
                marginBottom: 12,
              }}
            >
              About Diego
            </p>

            <h2 style={sectionTitleStyle}>
              Art first.
              <br />
              Always.
            </h2>

            <p style={{ color: "#9fb3c8", lineHeight: 1.85, maxWidth: 650, marginBottom: 18 }}>
              Diego built Blue Diamond around art first. Tattoos, paintings,
              custom pieces, black and grey work, realism, and ideas people bring
              to the chair all live in the same place here.
            </p>

            <p style={{ color: "#9fb3c8", lineHeight: 1.85, maxWidth: 650, marginBottom: 28 }}>
              Bring a reference, bring an idea, or bring something you already
              like. The shop draws with you and turns it into something that
              feels like yours.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#work" style={buttonPrimary}>View the Work</a>
              <a href="#book" style={buttonGhost}>Schedule Appointment</a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="softOpen delayFour"
        style={{
          padding: "86px 20px",
          borderBottom: "1px solid rgba(127,220,255,0.13)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p
            style={{
              color: "#7fdcff",
              fontWeight: 850,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Portfolio
          </p>

          <h2 style={sectionTitleStyle}>
            Work from
            <br />
            the shop.
          </h2>

          <p style={{ color: "#9fb3c8", maxWidth: 760, lineHeight: 1.8, marginBottom: 34 }}>
            Real tattoos from Blue Diamond Tattoo Studio. Different pieces,
            different styles, different stories.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
            }}
          >
            {gallery.map((item, index) => (
              <article
                key={item.title}
                style={{
                  minHeight: index === 0 || index === 2 ? 390 : 330,
                  borderRadius: 26,
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid rgba(127,220,255,0.14)",
                  background: "#08111a",
                  boxShadow: "0 20px 48px rgba(0,0,0,0.30)",
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
                      "linear-gradient(180deg, rgba(4,7,11,0.02) 0%, rgba(4,7,11,0.10) 42%, rgba(4,7,11,0.88) 100%)",
                  }}
                />
                <div style={{ position: "absolute", left: 20, right: 20, bottom: 20 }}>
                  <p
                    style={{
                      margin: "0 0 7px",
                      color: "#7fdcff",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      fontWeight: 850,
                      fontSize: "0.72rem",
                    }}
                  >
                    Blue Diamond work
                  </p>
                  <h3
                    style={{
                      margin: 0,
                      fontWeight: 700,
                      lineHeight: 1,
                      fontSize: "1.35rem",
                      color: "#dbe7f0",
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
          padding: "86px 20px",
          borderBottom: "1px solid rgba(127,220,255,0.13)",
          background:
            "radial-gradient(circle at top, rgba(127,220,255,0.12), rgba(0,0,0,0) 44%)",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <p
              style={{
                color: "#7fdcff",
                fontWeight: 850,
                textTransform: "uppercase",
                letterSpacing: 2.2,
                marginBottom: 12,
              }}
            >
              Appointment request
            </p>

            <h2 style={{ ...sectionTitleStyle, textAlign: "center" }}>
              Tell us what
              <br />
              you want.
            </h2>

            <p
              style={{
                color: "#9fb3c8",
                lineHeight: 1.8,
                maxWidth: 760,
                margin: "0 auto",
              }}
            >
              Send the idea, placement, size, and budget. The studio will review
              the request and reach out.
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
                "linear-gradient(135deg, rgba(127,220,255,0.07), rgba(5,12,19,0.98) 44%, #04070b 100%)",
              border: "1px solid rgba(127,220,255,0.20)",
              borderRadius: 30,
              padding: 24,
              boxShadow: "0 28px 90px rgba(0,0,0,0.38)",
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
                style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
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
          padding: "44px 20px",
          background:
            "linear-gradient(90deg, rgba(127,220,255,0.14), rgba(24,91,154,0.09), rgba(127,220,255,0.05))",
          borderBottom: "1px solid rgba(127,220,255,0.13)",
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
                color: "#7fdcff",
                fontWeight: 850,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Sunday piercing special
            </p>
            <p style={{ margin: 0, color: "#cfd8e3", fontWeight: 650 }}>
              Buy one piercing and get one piercing thirty dollars off on Sundays.
            </p>
          </div>

          <a
            href="tel:15084551948"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              background: "#06101a",
              color: "#dbe7f0",
              textDecoration: "none",
              borderRadius: 999,
              fontWeight: 850,
              border: "1px solid rgba(127,220,255,0.18)",
            }}
          >
            Call for Details
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "86px 20px",
          borderBottom: "1px solid rgba(127,220,255,0.13)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <img
            src="/branding/blue_diamond_logo.png"
            alt="Blue Diamond Tattoo Studio logo"
            loading="lazy"
            style={{
              height: 74,
              width: "auto",
              display: "block",
              margin: "0 auto 20px",
            }}
          />

          <p
            style={{
              color: "#7fdcff",
              fontWeight: 850,
              textTransform: "uppercase",
              letterSpacing: 2.2,
              marginBottom: 12,
            }}
          >
            Ready to get tattooed
          </p>

          <h2 style={{ ...sectionTitleStyle, textAlign: "center" }}>
            Pull up to
            <br />
            Blue Diamond.
          </h2>

          <p
            style={{
              color: "#9fb3c8",
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

      <footer style={{ padding: "34px 20px", background: "#020407" }}>
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
          <a href="tel:15084551948" style={phoneLinkStyle}>
            (508) 455 1948
          </a>
          <span>Bluediamondtattoo617@gmail.com</span>
        </div>
      </footer>
    </main>
  )
}