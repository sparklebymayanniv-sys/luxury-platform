"use client"

type GalleryItem = {
  title: string
  image: string
}

export default function Home() {
  const services = [
    "Black & Grey",
    "Realism",
    "Custom Pieces",
    "Portrait Work",
    "Piercing",
    "Cover-Ups",
    "Paintings",
    "Polynesian / Tribal",
  ]

  const gallery: GalleryItem[] = [
    {
      title: "Blindfold Cherub",
      image: "/portfolio/blindfold-cherub-realism-tattoo.jpg",
    },
    {
      title: "Dog Portrait",
      image: "/portfolio/dog-portrait-realism-tattoo.jpg",
    },
    {
      title: "Joker Realism",
      image: "/portfolio/joker-realism-tattoo.jpg",
    },
    {
      title: "Rose Hand",
      image: "/portfolio/rose-hand-tattoo.jpg",
    },
    {
      title: "Script Eye Sleeve",
      image: "/portfolio/script-eye-sleeve-realism-tattoo-2.jpg",
    },
    {
      title: "Cherry Blossom",
      image: "/portfolio/tattoo-cherry-blossom-collarbone-fine-line.jpg",
    },
    {
      title: "Clown Girl Hand",
      image: "/portfolio/tattoo-clown-girl-hand-chicano.jpg",
    },
    {
      title: "Skull Portrait Shoulder",
      image: "/portfolio/tattoo-realism-skull-portrait-shoulder.jpg",
    },
    {
      title: "Spartan Warrior",
      image: "/portfolio/tattoo-spartan-warrior-forearm-realism.jpg",
    },
    {
      title: "Theater Mask Hand",
      image: "/portfolio/theater-mask-hand-tattoo.jpg",
    },
    {
      title: "Turtle Floral Leg",
      image: "/portfolio/turtle-floral-leg-tattoo.jpg",
    },
    {
      title: "Wolf Shoulder",
      image: "/portfolio/wolf-shoulder-realism-tattoo.jpg",
    },
  ]

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid rgba(99,207,255,0.25)",
    background: "#0d131a",
    color: "#f4f7fb",
    outline: "none",
    fontSize: "1rem",
    boxSizing: "border-box",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 8,
    color: "#b8c7d6",
    fontWeight: 700,
    fontSize: "0.95rem",
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "clamp(2.6rem, 5vw, 4.6rem)",
    lineHeight: 0.95,
    margin: "0 0 16px",
    textTransform: "uppercase",
    fontWeight: 900,
    letterSpacing: -1,
  }

  const cardStyle = (blue: boolean): React.CSSProperties => ({
    background: blue
      ? "linear-gradient(135deg, rgba(99,207,255,0.18), rgba(10,18,28,0.96) 38%, #090d12 100%)"
      : "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(10,18,28,0.96) 35%, #090c10 100%)",
    border: "1px solid rgba(99,207,255,0.16)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px rgba(0,0,0,0.12)",
  })

  return (
    <main
      style={{
        background: "#05070b",
        color: "#f4f7fb",
        fontFamily: "Arial, Helvetica, sans-serif",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(5,7,11,0.82)",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img
              src="/branding/blue_diamond_logo.png"
              alt="Blue Diamond Tattoo Studio"
              style={{
                height: 54,
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
            <div>
              <p
                style={{
                  margin: 0,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: 1.6,
                  color: "#7fdcff",
                  fontSize: "0.78rem",
                }}
              >
                Blue Diamond Tattoo Studio
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  color: "#9cb2c6",
                  fontSize: "0.9rem",
                }}
              >
                Tattoos • Piercings • Paintings • Attleboro, MA
              </p>
            </div>
          </div>

          <nav style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#gallery"
              style={{
                color: "#f4f7fb",
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: 10,
                border: "1px solid rgba(99,207,255,0.22)",
                background: "rgba(99,207,255,0.05)",
              }}
            >
              Portfolio
            </a>
            <a
              href="#about"
              style={{
                color: "#f4f7fb",
                textDecoration: "none",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: 10,
                border: "1px solid rgba(99,207,255,0.22)",
                background: "rgba(99,207,255,0.05)",
              }}
            >
              About
            </a>
            <a
              href="#book"
              style={{
                color: "#07111b",
                textDecoration: "none",
                fontWeight: 800,
                padding: "12px 18px",
                borderRadius: 10,
                background: "#7fdcff",
                boxShadow: "0 0 20px rgba(127,220,255,0.18)",
              }}
            >
              Schedule Appointment
            </a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(90deg, rgba(99,207,255,0.18), rgba(99,207,255,0.05))",
          borderBottom: "1px solid rgba(99,207,255,0.16)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            color: "#d8ecf6",
            fontSize: "0.92rem",
            fontWeight: 600,
          }}
        >
          <span>Attleboro, MA</span>
          <span>Walk-Ins Welcome</span>
          <span>Call Now: (508) 455-1948</span>
        </div>
      </section>

      <section
        style={{
          borderBottom: "1px solid rgba(99,207,255,0.12)",
          background:
            "radial-gradient(circle at top left, rgba(99,207,255,0.20), rgba(0,0,0,0) 28%), radial-gradient(circle at bottom right, rgba(29,95,157,0.16), rgba(0,0,0,0) 22%), linear-gradient(180deg, #07111b 0%, #05070b 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "42px 20px 76px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 34,
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  color: "#7fdcff",
                  letterSpacing: 2,
                  fontWeight: 800,
                  marginBottom: 16,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                }}
              >
                Blue Diamond Tattoo Studio • Attleboro, MA
              </p>

              <h1
                style={{
                  fontSize: "clamp(3.4rem, 8vw, 7rem)",
                  lineHeight: 0.9,
                  margin: "0 0 24px",
                  fontWeight: 900,
                  letterSpacing: -3,
                  textTransform: "uppercase",
                }}
              >
                Blue
                <br />
                Diamond.
                <br />
                Real Ink.
                <br />
                Real Art.
              </h1>

              <p
                style={{
                  maxWidth: 680,
                  fontSize: "1.08rem",
                  lineHeight: 1.8,
                  color: "#b7c7d5",
                  marginBottom: 32,
                }}
              >
                If you want clean work, custom pieces, and a shop that really
                cares about the art, pull up to Blue Diamond. Tattoos,
                piercings, paintings, and custom work — all in one place.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 18,
                }}
              >
                <a
                  href="#book"
                  style={{
                    display: "inline-block",
                    padding: "16px 28px",
                    background: "#7fdcff",
                    color: "#07111b",
                    textDecoration: "none",
                    borderRadius: 10,
                    fontWeight: 900,
                    boxShadow: "0 0 22px rgba(127,220,255,0.18)",
                  }}
                >
                  Schedule Appointment
                </a>

                <a
                  href="#gallery"
                  style={{
                    display: "inline-block",
                    padding: "16px 28px",
                    border: "1px solid rgba(99,207,255,0.26)",
                    color: "#f4f7fb",
                    textDecoration: "none",
                    borderRadius: 10,
                    fontWeight: 800,
                    background: "rgba(99,207,255,0.04)",
                  }}
                >
                  View Work
                </a>

                <a
                  href="https://www.instagram.com/bluediamond.tattoo_studio?igsh=MXVkNzdpN3d5Znh6Zg=="
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "16px 28px",
                    border: "1px solid rgba(99,207,255,0.26)",
                    color: "#f4f7fb",
                    textDecoration: "none",
                    borderRadius: 10,
                    fontWeight: 800,
                    background: "rgba(99,207,255,0.04)",
                  }}
                >
                  Instagram
                </a>
              </div>

              <p style={{ color: "#8ea3b7", fontSize: "0.95rem", margin: 0 }}>
                Walk-ins welcome • Appointments recommended • Open until 9 PM
              </p>
            </div>

            <div
              style={{
                minHeight: 340,
                borderRadius: 24,
                ...cardStyle(true),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 30,
              }}
            >
              <img
                src="/branding/blue_diamond_logo.png"
                alt="Blue Diamond Tattoo Studio logo"
                style={{
                  width: "100%",
                  maxWidth: 520,
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid rgba(99,207,255,0.12)" }}>
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "22px 20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 14,
          }}
        >
          {[
            "Walk-Ins Welcome",
            "Open Until 9 PM",
            "Custom Work",
            "Piercings + Art",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "linear-gradient(180deg, #09111a 0%, #060b11 100%)",
                border: "1px solid rgba(99,207,255,0.16)",
                borderRadius: 14,
                padding: "18px 14px",
                textAlign: "center",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: 0.6,
                color: "#f4f7fb",
                fontSize: "0.92rem",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px rgba(0,0,0,0.2)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 34,
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: 500,
              borderRadius: 24,
              ...cardStyle(false),
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              src="/diego/diego-tattoo-artist-working.jpg"
              alt="Diego owner and artist at Blue Diamond Tattoo Studio"
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
                  "linear-gradient(180deg, rgba(4,7,11,0.06) 0%, rgba(4,7,11,0.35) 45%, rgba(4,7,11,0.92) 100%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: 28,
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#7fdcff",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontWeight: 800,
                  fontSize: "0.8rem",
                }}
              >
                Owner • Artist
              </p>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "2.2rem",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                Diego
              </h3>
              <p style={{ margin: 0, color: "#b3c6d6", lineHeight: 1.7 }}>
                Tattoos, paintings, black & grey, custom ideas, and real love
                for art.
              </p>
            </div>
          </div>

          <div>
            <p
              style={{
                color: "#7fdcff",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 2,
                marginBottom: 10,
              }}
            >
              Meet Diego
            </p>

            <h2 style={sectionTitleStyle}>
              Art first.
              <br />
              Always.
            </h2>

            <p
              style={{
                color: "#b7c7d5",
                lineHeight: 1.85,
                maxWidth: 620,
                marginBottom: 18,
              }}
            >
              Diego is the owner of Blue Diamond and an artist who brings that
              same love for art into everything he does — from tattoos to
              paintings to custom pieces made with real attention and care.
            </p>

            <p
              style={{
                color: "#b7c7d5",
                lineHeight: 1.85,
                maxWidth: 620,
                marginBottom: 30,
              }}
            >
              If you’ve got an idea, bring it in. If you want something custom,
              let’s talk about it and build it the right way.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#gallery"
                style={{
                  display: "inline-block",
                  padding: "16px 28px",
                  background: "#7fdcff",
                  color: "#07111b",
                  textDecoration: "none",
                  borderRadius: 10,
                  fontWeight: 900,
                }}
              >
                View the Work
              </a>

              <a
                href="#book"
                style={{
                  display: "inline-block",
                  padding: "16px 28px",
                  border: "1px solid rgba(99,207,255,0.26)",
                  color: "#f4f7fb",
                  textDecoration: "none",
                  borderRadius: 10,
                  fontWeight: 800,
                }}
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <h2 style={sectionTitleStyle}>
            Tattoos. Piercings.
            <br />
            Art on every level.
          </h2>

          <p
            style={{
              color: "#b7c7d5",
              maxWidth: 760,
              lineHeight: 1.8,
              marginBottom: 34,
            }}
          >
            Bring your idea, your reference, or come in with nothing but a
            concept.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 18,
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                style={{
                  background: "rgba(127,220,255,0.04)",
                  border: "1px solid rgba(99,207,255,0.16)",
                  borderRadius: 18,
                  padding: 22,
                  minHeight: 132,
                  display: "flex",
                  alignItems: "flex-end",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
        }}
      >
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <h2 style={sectionTitleStyle}>Work from the shop.</h2>

          <p
            style={{
              color: "#b7c7d5",
              maxWidth: 760,
              lineHeight: 1.8,
              marginBottom: 34,
            }}
          >
            Real tattoos. Different pieces. Different energies. All done at Blue
            Diamond.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
            }}
          >
            {gallery.map((item, index) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  ...cardStyle(index % 2 === 0),
                  position: "relative",
                  minHeight: 340,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
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
                      "linear-gradient(180deg, rgba(4,7,11,0.10) 0%, rgba(4,7,11,0.18) 30%, rgba(4,7,11,0.88) 100%)",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    height: 340,
                    padding: 22,
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: "0 0 8px",
                        color: "#7fdcff",
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        fontWeight: 800,
                        fontSize: "0.78rem",
                      }}
                    >
                      Portfolio
                    </p>
                    <h3
                      style={{
                        margin: 0,
                        fontWeight: 900,
                        textTransform: "uppercase",
                        lineHeight: 1,
                        fontSize: "1.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="book"
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
          background:
            "radial-gradient(circle at top, rgba(127,220,255,0.10), rgba(0,0,0,0) 45%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#7fdcff",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Schedule Appointment
          </p>

          <h2
            style={{
              ...sectionTitleStyle,
              textAlign: "center",
            }}
          >
            Bring your idea in.
          </h2>

          <p
            style={{
              color: "#b7c7d5",
              lineHeight: 1.8,
              maxWidth: 760,
              margin: "0 auto 34px",
              textAlign: "center",
            }}
          >
            Fill this out, send your references, and let the shop know what
            you’re trying to get done.
          </p>

          <form
            action="https://formsubmit.co/Bluediamondtattoo617@gmail.com"
            method="POST"
            encType="multipart/form-data"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              background: "rgba(127,220,255,0.03)",
              border: "1px solid rgba(99,207,255,0.18)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <input
              type="hidden"
              name="_subject"
              value="New Tattoo Booking Request"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/" />

            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                style={inputStyle}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                style={inputStyle}
                required
              />
            </div>

            <div>
              <label style={labelStyle}>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Preferred Date</label>
              <input type="date" name="preferredDate" style={inputStyle} />
            </div>

            <div>
              <label style={labelStyle}>Service</label>
              <select name="service" style={inputStyle} defaultValue="">
                <option value="" disabled>
                  Choose service
                </option>
                <option value="Tattoo with Diego">Tattoo with Diego</option>
                <option value="Piercing">Piercing</option>
                <option value="Consultation">Consultation</option>
                <option value="Custom Design">Custom Design</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Placement</label>
              <input
                type="text"
                name="placement"
                placeholder="Arm, hand, chest..."
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Approximate Size</label>
              <input
                type="text"
                name="size"
                placeholder="Small, medium, sleeve..."
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Budget</label>
              <input
                type="text"
                name="budget"
                placeholder="Your budget"
                style={inputStyle}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Tattoo Idea</label>
              <textarea
                name="idea"
                placeholder="Tell the shop what you want to get done..."
                style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
              />
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Upload References</label>

              <label
                htmlFor="reference-upload"
                style={{
                  display: "inline-block",
                  padding: "14px 20px",
                  borderRadius: 10,
                  border: "1px solid rgba(99,207,255,0.25)",
                  background: "rgba(127,220,255,0.06)",
                  color: "#f4f7fb",
                  fontWeight: 800,
                  cursor: "pointer",
                  marginBottom: 12,
                }}
              >
                Choose Reference Images
              </label>

              <input
                id="reference-upload"
                type="file"
                name="attachment"
                multiple
                accept="image/*"
                style={{
                  display: "block",
                  color: "#b8c7d6",
                  fontSize: "0.95rem",
                }}
              />

              <p
                style={{
                  margin: "10px 0 0",
                  color: "#8ea3b7",
                  fontSize: "0.9rem",
                }}
              >
                Please upload up to 3 clear reference images.
              </p>
            </div>

            <div
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              <button
                type="submit"
                style={{
                  padding: "16px 30px",
                  borderRadius: 10,
                  border: "none",
                  background: "#7fdcff",
                  color: "#07111b",
                  fontWeight: 900,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 0 22px rgba(127,220,255,0.16)",
                }}
              >
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
              Booking email: Bluediamondtattoo617@gmail.com
            </p>
          </form>
        </div>
      </section>

      <section
        style={{
          padding: "36px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
          background:
            "linear-gradient(90deg, rgba(127,220,255,0.22), rgba(29,95,157,0.12))",
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
                color: "#07111b",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Sunday Piercing Deal
            </p>
            <p style={{ margin: 0, color: "#0a2233", fontWeight: 700 }}>
              Buy one piercing, get one $30 off on Sundays.
            </p>
          </div>

          <a
            href="tel:15084551948"
            style={{
              display: "inline-block",
              padding: "14px 24px",
              background: "#07111b",
              color: "#f4f7fb",
              textDecoration: "none",
              borderRadius: 10,
              fontWeight: 900,
            }}
          >
            Call for Details
          </a>
        </div>
      </section>

      <section
        style={{
          padding: "96px 20px",
          borderBottom: "1px solid rgba(99,207,255,0.12)",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <img
            src="/branding/blue_diamond_logo.png"
            alt="Blue Diamond Tattoo Studio"
            style={{
              height: 70,
              width: "auto",
              display: "block",
              margin: "0 auto 18px",
            }}
          />

          <p
            style={{
              color: "#7fdcff",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            Ready to Get Tattooed?
          </p>

          <h2 style={sectionTitleStyle}>Pull up to Blue Diamond.</h2>

          <p
            style={{
              color: "#b7c7d5",
              lineHeight: 1.85,
              maxWidth: 760,
              margin: "0 auto 28px",
            }}
          >
            Call the shop, stop by, or come in with your idea and let’s talk
            about it.
          </p>

          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            <a
              href="tel:15084551948"
              style={{
                display: "inline-block",
                padding: "16px 28px",
                background: "#7fdcff",
                color: "#07111b",
                textDecoration: "none",
                borderRadius: 10,
                fontWeight: 900,
              }}
            >
              Call the Studio
            </a>

            <a
              href="https://maps.google.com/?q=4+Park+St+Attleboro+MA+02703"
              style={{
                display: "inline-block",
                padding: "16px 28px",
                border: "1px solid rgba(99,207,255,0.26)",
                color: "#f4f7fb",
                textDecoration: "none",
                borderRadius: 10,
                fontWeight: 800,
              }}
            >
              Get Directions
            </a>

            <a
              href="https://www.instagram.com/bluediamond.tattoo_studio?igsh=MXVkNzdpN3d5Znh6Zg=="
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                padding: "16px 28px",
                border: "1px solid rgba(99,207,255,0.26)",
                color: "#f4f7fb",
                textDecoration: "none",
                borderRadius: 10,
                fontWeight: 800,
              }}
            >
              Instagram
            </a>
          </div>

          <p style={{ color: "#8ea3b7", margin: 0 }}>
            4 Park St, Attleboro, MA 02703 • (508) 455-1948 •
            Bluediamondtattoo617@gmail.com
          </p>
        </div>
      </section>

      <footer style={{ padding: "34px 20px", background: "#040609" }}>
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
          <span>4 Park St, Attleboro, MA 02703</span>
          <span>(508) 455-1948</span>
          <span>Bluediamondtattoo617@gmail.com</span>
        </div>
      </footer>
    </main>
  )
}