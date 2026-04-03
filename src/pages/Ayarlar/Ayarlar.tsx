import { useState } from "react";
const Ayarlar=()=> {
  const [volume, setVolume] = useState(100);
  const [onceliklendir, setOnceliklendir] = useState(true);
  const [sesDuzeyi, setSesDuzeyi] = useState(true);
  const [giderekArtir, setGiderekArtir] = useState("1 dk. 0 sn.");
  const [titresim, setTitresim] = useState("Yoğun");
  const [elFeneri, setElFeneri] = useState("Yok");

  const pageStyle = {
    backgroundColor: "#0d1b2a",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const sectionLabelStyle = {
    color: "#7a9bb8",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "1.5px",
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

  const divider = (
    <hr style={{ borderColor: "#1e3a5f", margin: "4px 0" }} />
  );

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div className="px-3 pt-3 pb-2">
        <button className="btn btn-link p-0" style={{ color: "#fff", fontSize: "22px" }}>
          ←
        </button>
      </div>

      <div className="px-3 d-flex flex-column gap-4" style={{ paddingBottom: "40px" }}>

        {/* AYARLAR label */}
        <div style={sectionLabelStyle}>AYARLAR</div>

        {/* Alarm sesi seviyesi */}
        <div>
          <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "14px" }}>
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
              style={{ accentColor: "#2196f3", height: "6px", cursor: "pointer" }}
            />
            <span style={{ color: "#fff", fontWeight: "600", minWidth: "48px", textAlign: "right" }}>
              %{volume}
            </span>
          </div>
        </div>

        {divider}

        {/* Alarm sesini önceliklendir */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "6px" }}>
              Alarm sesini önceliklendir
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.6" }}>
              Ayarlar farklıysa telefonumun ses seviyesi yerine alarmın ses seviyesini kullan.
            </div>
          </div>
          {toggleSwitch(onceliklendir, () => setOnceliklendir(!onceliklendir))}
        </div>

        {divider}

        {/* Alarm çalarken ses düzeyi değişikliğine izin ver */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "6px" }}>
              Alarm çalarken ses düzeyi değişikliğine izin ver
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.6" }}>
              Alarmlarım çalarken ses seviyesini değiştirmeme izin ver.
            </div>
          </div>
          {toggleSwitch(sesDuzeyi, () => setSesDuzeyi(!sesDuzeyi))}
        </div>

        {divider}

        {/* Ses seviyesini giderek artır */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "6px" }}>
              Ses seviyesini giderek artır
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.6" }}>
              Alarmı %0 düzeyinde başlat; sonrasında giderek ses yükselsin.
            </div>
          </div>
          <span style={{ color: "#2196f3", fontWeight: "600", fontSize: "14px", flexShrink: 0 }}>
            {giderekArtir}
          </span>
        </div>

        {divider}

        {/* Titreşim */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "6px" }}>
              Titreşim
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.6" }}>
              Alarmınız çalarken cihazınızın titreşip titreşmeyeceğini seçin.
            </div>
          </div>
          <span style={{ color: "#2196f3", fontWeight: "600", fontSize: "14px", flexShrink: 0 }}>
            {titresim}
          </span>
        </div>

        {divider}

        {/* El feneri */}
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", fontSize: "17px", marginBottom: "6px" }}>
              El feneri
            </div>
            <div style={{ color: "#8aaac8", fontSize: "14px", lineHeight: "1.6" }}>
              Alarmınız çalarken el fenerinizin açılıp açılmayacağını seçin.
            </div>
          </div>
          <span style={{ color: "#2196f3", fontWeight: "600", fontSize: "14px", flexShrink: 0 }}>
            {elFeneri}
          </span>
        </div>

      </div>
    </div>
  );
}
export default Ayarlar;