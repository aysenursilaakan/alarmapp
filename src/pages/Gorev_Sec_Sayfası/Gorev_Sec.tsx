import { useState, CSSProperties } from "react";

const GOREVLER = [
  {
    key: "hicbiri",
    label: "Hiçbiri",
    alt: null,
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="30" stroke="#5a7a9a" strokeWidth="6" fill="none" />
        <line x1="16" y1="56" x2="56" y2="16" stroke="#5a7a9a" strokeWidth="6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "matematik",
    label: "Matematik",
    alt: null,
    icon: (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {["+", "−", "×", "="].map((sym, i) => (
          <div
            key={i}
            style={{
              width: 44,
              height: 44,
              borderRadius: 8,
              backgroundColor: i === 3 ? "#e05c3a" : "#d0d5dd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
              color: i === 3 ? "#fff" : "#333",
            }}
          >
            {sym}
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "yeniden_yaz",
    label: "Yeniden yaz",
    alt: null,
    icon: (
      <div style={{ position: "relative", width: 100, height: 60 }}>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: "#e8ecf2",
            borderRadius: 8,
            padding: "6px 14px",
            fontSize: 26,
            fontWeight: 900,
            color: "#222",
            letterSpacing: 1,
          }}
        >
          ABC
        </div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        >
          <rect
            x="4"
            y="20"
            width="28"
            height="10"
            rx="3"
            transform="rotate(-35 4 20)"
            fill="#f0a830"
          />
          <polygon points="2,34 8,28 14,34" fill="#e05c3a" />
          <rect
            x="26"
            y="4"
            width="10"
            height="8"
            rx="2"
            transform="rotate(-35 26 4)"
            fill="#ccc"
          />
        </svg>
      </div>
    ),
  },
  {
    key: "adim",
    label: "Adım",
    alt: null,
    icon: (
      <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
        <ellipse cx="28" cy="42" rx="22" ry="11" fill="#e05c3a" />
        <ellipse cx="20" cy="36" rx="10" ry="7" fill="#f5f0e8" />
        <ellipse cx="54" cy="30" rx="22" ry="11" fill="#e8a030" transform="rotate(-15 54 30)" />
        <ellipse cx="48" cy="24" rx="10" ry="7" fill="#f5f0e8" transform="rotate(-15 48 24)" />
      </svg>
    ),
  },
  {
    key: "kodlari_tara",
    label: "Kodları tara",
    alt: "Kayıtlı kodlar",
    icon: (
      <div style={{ position: "relative", width: 120, height: 70 }}>
        <div
          style={{
            width: 120,
            height: 65,
            borderRadius: 8,
            background: "linear-gradient(135deg, #f4a0b0 60%, #e07090 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", gap: 3, padding: "10px 12px", height: "100%" }}>
            {[4, 2, 5, 2, 3, 5, 2, 4, 2, 5, 3, 2, 4].map((w, i) => (
              <div
                key={i}
                style={{
                  width: w,
                  height: "100%",
                  backgroundColor: i % 3 === 0 ? "#222" : "#555",
                  borderRadius: 1,
                }}
              />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 3,
              backgroundColor: "#cc0000",
              opacity: 0.8,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -4,
            right: -6,
            fontSize: 22,
          }}
        >
          👑
        </div>
      </div>
    ),
  },
];

const GorevSec = () => {
  const [selected, setSelected] = useState("kodlari_tara");

  const pageStyle: CSSProperties = {
    backgroundColor: "#0d1b2a",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const cardBase: CSSProperties = {
    backgroundColor: "#1a2d45",
    borderRadius: 14,
    padding: 16,
    cursor: "pointer",
    minHeight: 170,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    transition: "border 0.15s",
  };

  const getCardStyle = (key: string): CSSProperties => ({
    ...cardBase,
    border: selected === key ? "2px solid #2196f3" : "2px solid transparent",
    backgroundColor: selected === key ? "#1e3a5f" : "#1a2d45",
  });

  return (
    <div style={pageStyle}>
      <div className="d-flex align-items-center gap-3 px-3 pt-3 pb-4">
        <button className="btn btn-link p-0" style={{ color: "#fff", fontSize: 22 }}>
          ←
        </button>
        <h5 style={{ margin: 0, fontWeight: 700, fontSize: 20 }}>Görevinizi seçin</h5>
      </div>

      <div className="px-3 pb-5">
        <div className="row g-3 mb-3">
          {GOREVLER.slice(0, 4).map((g) => (
            <div className="col-6" key={g.key}>
              <div style={getCardStyle(g.key)} onClick={() => setSelected(g.key)}>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{g.label}</div>
                <div className="d-flex justify-content-center w-100 mt-2">{g.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {(() => {
          const g = GOREVLER[4];
          return (
            <div style={getCardStyle(g.key)} onClick={() => setSelected(g.key)}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>{g.label}</div>
                {g.alt && (
                  <div style={{ color: "#2196f3", fontSize: 13, marginTop: 2 }}>{g.alt}</div>
                )}
              </div>
              <div className="mt-3">{g.icon}</div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default GorevSec;