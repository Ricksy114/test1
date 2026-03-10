"use client";
import { useState } from "react";

const tiers = [
  {
    tier: "I",
    br: "1.0 – 2.3",
    era: "Pre-WWII / Early WWII",
    color: "#8fbc5a",
    accent: "#b8e07a",
    description:
      "The birthplace of armored warfare. These early tanks defined the doctrine that would shape every battle to come. Light armor, small calibers — but do not underestimate them.",
    tanks: [
      {
        name: "Pz.Kpfw. II",
        nation: "🇩🇪 Germany",
        role: "Light Tank",
        armor: "14mm",
        gun: "20mm KwK 30",
        speed: "40 km/h",
        tip: "Use your speed and autocannon to shred open-top vehicles and flank heavier targets.",
        img: "🐾",
      },
      {
        name: "T-26",
        nation: "🇷🇺 USSR",
        role: "Light Tank",
        armor: "15mm",
        gun: "45mm 20K",
        speed: "30 km/h",
        tip: "Excellent gun for its tier. Aim for crew compartments and ammo racks.",
        img: "⭐",
      },
      {
        name: "M2A4",
        nation: "🇺🇸 USA",
        role: "Light Tank",
        armor: "25mm",
        gun: "37mm M5",
        speed: "42 km/h",
        tip: "Fast and reliable. Flanking is your best strategy at this tier.",
        img: "🦅",
      },
      {
        name: "Chi-Ha",
        nation: "🇯🇵 Japan",
        role: "Medium Tank",
        armor: "25mm",
        gun: "57mm Type 97",
        speed: "38 km/h",
        tip: "Low-velocity gun but effective at close range. Stay mobile.",
        img: "⛩️",
      },
    ],
  },
  {
    tier: "II",
    br: "2.3 – 3.7",
    era: "Mid WWII",
    color: "#d4a830",
    accent: "#f0c84a",
    description:
      "The war is escalating. Tanks grow thicker skins and harder punches. Flanking, fire discipline, and knowing your ammo types separate survivors from statistics.",
    tanks: [
      {
        name: "Pz.Kpfw. IV F1",
        nation: "🇩🇪 Germany",
        role: "Medium Tank",
        armor: "50mm",
        gun: "75mm KwK 37 (short)",
        speed: "42 km/h",
        tip: "Use HEAT rounds against heavier armor. Ideal for urban close-quarters.",
        img: "🐾",
      },
      {
        name: "T-34 (1940)",
        nation: "🇷🇺 USSR",
        role: "Medium Tank",
        armor: "45mm (sloped)",
        gun: "76mm L-11",
        speed: "54 km/h",
        tip: "Sloped armor gives effective protection beyond raw numbers. Charge and confuse.",
        img: "⭐",
      },
      {
        name: "M3 Stuart",
        nation: "🇺🇸 USA",
        role: "Light Tank",
        armor: "38mm",
        gun: "37mm M6",
        speed: "58 km/h",
        tip: "One of the fastest tanks at its BR. Scout, flank, cap points.",
        img: "🦅",
      },
      {
        name: "Valentine Mk I",
        nation: "🇬🇧 UK",
        role: "Infantry Tank",
        armor: "60mm",
        gun: "40mm QF 2-pdr",
        speed: "24 km/h",
        tip: "Excellent armor for tier but painfully slow. Snipe from cover.",
        img: "🦁",
      },
    ],
  },
  {
    tier: "III",
    br: "3.7 – 5.3",
    era: "Late WWII",
    color: "#c0693a",
    accent: "#e8884a",
    description:
      "The decisive battles. Tiger, Sherman, T-34/85, Churchill — iconic machines clash across Europe and the Pacific. Every shot can be your last. Positioning is survival.",
    tanks: [
      {
        name: "Tiger H1",
        nation: "🇩🇪 Germany",
        role: "Heavy Tank",
        armor: "100mm",
        gun: "88mm KwK 36",
        speed: "38 km/h",
        tip: "Angle your hull slightly to maximize effective armor. One-shot most enemies frontally.",
        img: "🐾",
      },
      {
        name: "T-34-85",
        nation: "🇷🇺 USSR",
        role: "Medium Tank",
        armor: "45mm (sloped)",
        gun: "85mm ZiS-S-53",
        speed: "54 km/h",
        tip: "Versatile and deadly. Can go hull-down effectively. Aim for driver port on Tigers.",
        img: "⭐",
      },
      {
        name: "M4A3E8 Sherman",
        nation: "🇺🇸 USA",
        role: "Medium Tank",
        armor: "63mm",
        gun: "76mm M1A2",
        speed: "42 km/h",
        tip: "HVAP rounds will penetrate nearly anything at this tier. Wide APHE spread.",
        img: "🦅",
      },
      {
        name: "Panther D",
        nation: "🇩🇪 Germany",
        role: "Medium Tank",
        armor: "80mm (sloped)",
        gun: "75mm KwK 42",
        speed: "44 km/h",
        tip: "Long-range sniper par excellence. Keep distance and punish enemies.",
        img: "🐾",
      },
    ],
  },
  {
    tier: "IV",
    br: "5.3 – 7.0",
    era: "End of WWII / Early Cold War",
    color: "#5a7db5",
    accent: "#7aaae0",
    description:
      "Cold War doctrine meets WWII steel. Stabilizers, APDS, and composite armor begin to appear. The battlefield is faster, deadlier, and more unforgiving than ever.",
    tanks: [
      {
        name: "IS-2",
        nation: "🇷🇺 USSR",
        role: "Heavy Tank",
        armor: "120mm",
        gun: "122mm D-25T",
        speed: "37 km/h",
        tip: "Reload is long — make every shot count. One hit often ends the fight.",
        img: "⭐",
      },
      {
        name: "Pershing M26",
        nation: "🇺🇸 USA",
        role: "Medium Tank",
        armor: "102mm",
        gun: "90mm M3",
        speed: "40 km/h",
        tip: "Well-rounded and competitive. Use HVAP to punch through thick armor.",
        img: "🦅",
      },
      {
        name: "Centurion Mk.1",
        nation: "🇬🇧 UK",
        role: "Medium Tank",
        armor: "76mm",
        gun: "17-pdr QF",
        speed: "35 km/h",
        tip: "The 17-pdr shreds. Hull-down behind ridgelines and destroy anything that peeks.",
        img: "🦁",
      },
      {
        name: "Tiger II (H)",
        nation: "🇩🇪 Germany",
        role: "Heavy Tank",
        armor: "185mm",
        gun: "88mm KwK 43",
        speed: "38 km/h",
        tip: "Near-impenetrable frontal armor. Defend chokepoints and make enemies regret advancing.",
        img: "🐾",
      },
    ],
  },
  {
    tier: "V",
    br: "7.0 – 8.3",
    era: "Cold War MBTs",
    color: "#9b5db5",
    accent: "#c880e8",
    description:
      "The age of the Main Battle Tank. Stabilizers, laser rangefinders, night vision, and composite armor transform warfare. A single misstep ends your game instantly.",
    tanks: [
      {
        name: "T-54 (1951)",
        nation: "🇷🇺 USSR",
        role: "MBT",
        armor: "200mm (sloped)",
        gun: "100mm D-10T2S",
        speed: "48 km/h",
        tip: "Angled effectively, the T-54 bounces nearly everything. Extremely lethal gun.",
        img: "⭐",
      },
      {
        name: "M60",
        nation: "🇺🇸 USA",
        role: "MBT",
        armor: "120mm",
        gun: "105mm M68",
        speed: "48 km/h",
        tip: "Hull-down is essential. The turret is strong; the lower plate is not.",
        img: "🦅",
      },
      {
        name: "Leopard 1",
        nation: "🇩🇪 Germany",
        role: "MBT",
        armor: "70mm",
        gun: "105mm L7A3",
        speed: "65 km/h",
        tip: "Speed IS your armor. Never stop moving. First shot wins — you won't survive a hit.",
        img: "🐾",
      },
      {
        name: "Chieftain Mk.3",
        nation: "🇬🇧 UK",
        role: "MBT",
        armor: "388mm (mantlet)",
        gun: "120mm L11A5",
        speed: "43 km/h",
        tip: "The most powerful gun at this tier. Find a ridge, go hull-down, dominate.",
        img: "🦁",
      },
    ],
  },
];

export default function WarThunderPage() {
  const [activeTier, setActiveTier] = useState(0);
  const [activeTank, setActiveTank] = useState(null);

  const tier = tiers[activeTier];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0d0d0d",
      fontFamily: "'Courier New', monospace",
      color: "#e8dcc8",
      overflowX: "hidden",
    }}>
      {/* Noise texture overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundSize: "200px",
      }} />

      {/* Header */}
      <header style={{
        position: "relative", zIndex: 10,
        borderBottom: "2px solid #333",
        padding: "28px 40px 20px",
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        background: "linear-gradient(180deg, #111 0%, #0d0d0d 100%)",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "#666", marginBottom: "6px", textTransform: "uppercase" }}>
            Field Manual · Armored Vehicles
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            fontFamily: "'Georgia', serif",
            fontWeight: "bold",
            margin: 0,
            letterSpacing: "2px",
            color: "#e8dcc8",
            lineHeight: 1,
          }}>
            WAR THUNDER
            <span style={{ color: tier.color, marginLeft: "16px" }}>TANK TIERS</span>
          </h1>
          <div style={{ fontSize: "12px", color: "#555", marginTop: "8px", letterSpacing: "3px" }}>
            GROUND FORCES ENCYCLOPEDIA — BR 1.0 TO 8.3
          </div>
        </div>
        <div style={{
          textAlign: "right", fontSize: "11px", color: "#444",
          lineHeight: "1.8", letterSpacing: "1px",
        }}>
          <div>CLASSIFICATION: UNCLASSIFIED</div>
          <div>DOCUMENT: WT-TANKS-001</div>
          <div style={{ color: tier.accent }}>● TIER {tier.tier} ACTIVE</div>
        </div>
      </header>

      {/* Tier Navigation */}
      <nav style={{
        position: "relative", zIndex: 10,
        display: "flex", gap: "0",
        borderBottom: "1px solid #222",
        overflowX: "auto",
      }}>
        {tiers.map((t, i) => (
          <button
            key={i}
            onClick={() => { setActiveTier(i); setActiveTank(null); }}
            style={{
              flex: "1 0 auto",
              padding: "16px 20px",
              background: activeTier === i ? t.color + "22" : "transparent",
              border: "none",
              borderBottom: activeTier === i ? `3px solid ${t.color}` : "3px solid transparent",
              borderRight: "1px solid #1a1a1a",
              color: activeTier === i ? t.accent : "#555",
              cursor: "pointer",
              fontFamily: "'Courier New', monospace",
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "18px", display: "block", marginBottom: "4px" }}>
              TIER {t.tier}
            </span>
            <span style={{ fontSize: "10px", opacity: 0.7 }}>{t.br}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Tier Header */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto",
          gap: "24px", alignItems: "start", marginBottom: "40px",
          paddingBottom: "32px",
          borderBottom: `1px solid ${tier.color}33`,
        }}>
          <div>
            <div style={{
              display: "inline-block",
              background: tier.color + "22",
              border: `1px solid ${tier.color}44`,
              color: tier.accent,
              fontSize: "11px", letterSpacing: "4px",
              padding: "6px 14px", marginBottom: "16px",
              textTransform: "uppercase",
            }}>
              {tier.era}
            </div>
            <p style={{
              fontSize: "16px", lineHeight: "1.8",
              color: "#aaa", maxWidth: "600px", margin: 0,
              fontStyle: "italic",
            }}>
              {tier.description}
            </p>
          </div>
          <div style={{
            textAlign: "center",
            padding: "24px 32px",
            border: `1px solid ${tier.color}44`,
            background: tier.color + "11",
          }}>
            <div style={{ fontSize: "72px", fontFamily: "'Georgia', serif", color: tier.color, lineHeight: 1 }}>
              {tier.tier}
            </div>
            <div style={{ fontSize: "10px", color: "#555", letterSpacing: "3px", marginTop: "8px" }}>
              TIER RATING
            </div>
            <div style={{ fontSize: "14px", color: tier.accent, marginTop: "8px", letterSpacing: "1px" }}>
              BR {tier.br}
            </div>
          </div>
        </div>

        {/* Tank Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}>
          {tier.tanks.map((tank, i) => (
            <div
              key={i}
              onClick={() => setActiveTank(activeTank === i ? null : i)}
              style={{
                border: activeTank === i ? `1px solid ${tier.color}` : "1px solid #222",
                background: activeTank === i ? tier.color + "14" : "#111",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: "40px", height: "40px",
                borderLeft: `1px solid ${tier.color}44`,
                borderBottom: `1px solid ${tier.color}44`,
              }} />

              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{tank.img}</div>
              <div style={{ fontSize: "10px", color: "#555", letterSpacing: "3px", marginBottom: "6px" }}>
                {tank.role.toUpperCase()}
              </div>
              <h3 style={{
                margin: "0 0 6px",
                fontSize: "18px",
                fontFamily: "'Georgia', serif",
                color: activeTank === i ? tier.accent : "#e8dcc8",
                letterSpacing: "1px",
              }}>
                {tank.name}
              </h3>
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "16px", letterSpacing: "1px" }}>
                {tank.nation}
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                {[
                  { label: "ARMOR", val: tank.armor },
                  { label: "SPEED", val: tank.speed },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: "#0a0a0a",
                    padding: "8px 10px",
                    border: "1px solid #1a1a1a",
                  }}>
                    <div style={{ fontSize: "9px", color: "#444", letterSpacing: "2px" }}>{stat.label}</div>
                    <div style={{ fontSize: "13px", color: tier.color, marginTop: "2px" }}>{stat.val}</div>
                  </div>
                ))}
              </div>

              <div style={{
                background: "#0a0a0a",
                padding: "8px 10px",
                border: "1px solid #1a1a1a",
                marginBottom: "16px",
              }}>
                <div style={{ fontSize: "9px", color: "#444", letterSpacing: "2px" }}>MAIN GUN</div>
                <div style={{ fontSize: "12px", color: "#ccc", marginTop: "2px" }}>{tank.gun}</div>
              </div>

              {/* Expandable Tip */}
              <div style={{
                overflow: "hidden",
                maxHeight: activeTank === i ? "120px" : "0",
                transition: "max-height 0.3s ease",
              }}>
                <div style={{
                  paddingTop: "16px",
                  borderTop: `1px solid ${tier.color}33`,
                  fontSize: "12px",
                  color: "#888",
                  lineHeight: "1.7",
                  fontStyle: "italic",
                }}>
                  <span style={{ color: tier.accent, fontStyle: "normal", letterSpacing: "2px", fontSize: "10px" }}>
                    ▶ COMMANDER'S TIP
                  </span>
                  <br />
                  {tank.tip}
                </div>
              </div>

              <div style={{
                fontSize: "10px",
                color: activeTank === i ? tier.color : "#333",
                letterSpacing: "2px",
                marginTop: "12px",
                transition: "color 0.2s",
              }}>
                {activeTank === i ? "▲ COLLAPSE" : "▼ EXPAND"}
              </div>
            </div>
          ))}
        </div>

        {/* Tier Progress Bar */}
        <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #1a1a1a" }}>
          <div style={{ fontSize: "10px", color: "#444", letterSpacing: "3px", marginBottom: "16px" }}>
            TIER PROGRESSION PATH
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
            {tiers.map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  onClick={() => { setActiveTier(i); setActiveTank(null); }}
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "50%",
                    background: i <= activeTier ? t.color : "#1a1a1a",
                    border: i === activeTier ? `2px solid ${t.accent}` : "2px solid #222",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontFamily: "'Georgia', serif",
                    color: i <= activeTier ? "#000" : "#333",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    flexShrink: 0,
                    fontWeight: "bold",
                  }}
                >
                  {t.tier}
                </div>
                {i < tiers.length - 1 && (
                  <div style={{
                    flex: 1, height: "2px",
                    background: i < activeTier ? tiers[i + 1].color : "#1a1a1a",
                    transition: "background 0.3s",
                  }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: "8px" }}>
            {tiers.map((t, i) => (
              <div key={i} style={{ flex: 1, fontSize: "9px", color: "#444", letterSpacing: "1px" }}>
                {t.br}
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <footer style={{
          marginTop: "64px",
          paddingTop: "24px",
          borderTop: "1px solid #1a1a1a",
          display: "flex", justifyContent: "space-between",
          fontSize: "10px", color: "#333", letterSpacing: "2px",
        }}>
          <span>WAR THUNDER GROUND FORCES GUIDE</span>
          <span>TIERS I — V · BR 1.0 – 8.3</span>
          <span>CLICK TANKS TO EXPAND TIPS</span>
        </footer>
      </main>
    </div>
  );
}
