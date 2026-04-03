import { useState } from "react";

const Sesi_Ayarla=()=> {
  const [volume, setVolume] = useState(100);
  const [onceliklendir, setOnceliklendir] = useState(true);
  const [sesTuru, setSesTuru] = useState("Müzik");
  const [sarki, setSarki] = useState("TAVUK ALARM SESİ MU...");

  const pageStyle = {
    backgroundColor: "#0d1b2a",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#1a2d45",
    borderRadius: "12px",
    padding: "16px 20px",
    cursor: "pointer",
  };

  const toggleSwitch = (isOn: boolean, onToggle: () => void) => (
    <div
      onClick={onToggle}
      style={{
        width: "52px",
        height: "28px",
        borderRadius: "14px",
        backgroundColor: isOn ? "#2196f3" : "#4a5568",
        cursor: "pointer",
        position: "relative",
        transition: "background-color 0.2s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          position: "absolute",
          top: "3px",
          left: isOn ? "27px" : "3px",
          transition: "left 0.2s",
        }}
      />
    </div>
  );

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div className="px-3 pt-3 pb-2">
        <button
          className="btn btn-link p-0"
          style={{ color: "#fff", fontSize: "22px" }}
        >
          ←
        </button>
      </div>

      {/* Hero Image Area */}
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{ height: "220px" }}
      >
        {/* Music Note */}
        <div
          style={{
            position: "absolute",
            left: "60px",
            top: "40px",
            fontSize: "40px",
            color: "#cdd8e8",
            opacity: 0.85,
          }}
        >
          ♫
        </div>

        {/* Headphone + Phone Illustration (SVG) */}
        <svg
          width="180"
          height="190"
          viewBox="0 0 180 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phone body */}
          <rect x="55" y="55" width="80" height="120" rx="10" fill="#1e3a4a" />
          <rect x="58" y="58" width="74" height="114" rx="8" fill="#162f3f" />
          {/* Camera dot */}
          <circle cx="92" cy="65" r="4" fill="#0d1b2a" />

          {/* Headphone arc */}
          <path
            d="M30 90 Q30 30 95 30 Q160 30 160 90"
            stroke="#e05c3a"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left ear cup */}
          <rect x="18" y="88" width="26" height="38" rx="8" fill="#c94f2e" />
          <rect x="22" y="93" width="18" height="28" rx="5" fill="#e8a030" />

          {/* Right ear cup */}
          <rect x="146" y="88" width="26" height="38" rx="8" fill="#c94f2e" />
          <rect x="150" y="93" width="18" height="28" rx="5" fill="#e8a030" />
        </svg>
      </div>

      <div className="px-3 d-flex flex-column gap-3" style={{ paddingBottom: "32px" }}>
        {/* Ses başlığı */}
        <h4 style={{ fontWeight: "700", marginBottom: "4px" }}>Ses</h4>

        {/* Ses türü */}
        <div style={cardStyle} className="d-flex justify-content-between align-items-center">
          <span style={{ fontWeight: "600", fontSize: "16px" }}>Ses türü</span>
          <span style={{ color: "#2196f3", fontWeight: "600" }}>{sesTuru}</span>
        </div>

        {/* Şarkı */}
        <div style={cardStyle} className="d-flex justify-content-between align-items-center">
          <span style={{ fontWeight: "600", fontSize: "16px" }}>Şarkı</span>
          <span style={{ color: "#2196f3", fontWeight: "600", fontSize: "13px" }}>{sarki}</span>
        </div>

        {/* Ayarlar başlığı */}
        <div
          style={{
            color: "#7a9bb8",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            marginTop: "8px",
          }}
        >
          AYARLAR
        </div>

        {/* Alarm sesi seviyesi */}
        <div>
          <div style={{ fontWeight: "700", fontSize: "16px", marginBottom: "14px" }}>
            Alarm sesi seviyesi
          </div>
          <div className="d-flex align-items-center gap-3">
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-grow-1"
              style={{
                accentColor: "#2196f3",
                height: "6px",
                cursor: "pointer",
              }}
            />
            <span style={{ color: "#fff", fontWeight: "600", minWidth: "45px", textAlign: "right" }}>
              %{volume}
            </span>
          </div>
        </div>

        {/* Alarm sesini önceliklendir */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <div style={{ fontWeight: "700", fontSize: "16px", marginBottom: "6px" }}>
              Alarm sesini önceliklendir
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.5" }}>
              Ayarlar farklıysa telefonumun ses seviyesi yerine alarmın ses seviyesini kullan.
            </div>
          </div>
          {toggleSwitch(onceliklendir, () => setOnceliklendir(!onceliklendir))}
        </div>
      </div>
    </div>
  );
}
export default Sesi_Ayarla;