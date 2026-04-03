import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DAYS = [
  { key: "PT", label: "PT" },
  { key: "SA", label: "SA" },
  { key: "ÇA", label: "ÇA" },
  { key: "PE", label: "PE" },
  { key: "CU", label: "CU" },
  { key: "CT", label: "CT" },
  { key: "PZ", label: "PZ" },
];

const DAY_NAMES: Record<
  "PT" | "SA" | "ÇA" | "PE" | "CU" | "CT" | "PZ",
  string
> = {
  PT: "Pzt",
  SA: "Sal",
  ÇA: "Çar",
  PE: "Per",
  CU: "Cum",
  CT: "Cmt",
  PZ: "Paz",
};

const Saat_Ayarlama = () => {
  const navigate = useNavigate();

  const [alarmName, setAlarmName] = useState("");
  const [hour, setHour] = useState(8);
  const [minute, setMinute] = useState(0);
  const [selectedDays, setSelectedDays] = useState<
    ("PT" | "SA" | "ÇA" | "PE" | "CU" | "CT" | "PZ")[]
  >(["PT", "SA", "ÇA", "PE", "CU", "CT"]);
  const [sakinAlarm, setSakinAlarm] = useState(false);
  const [uyanmaKontrol, setUyanmaKontrol] = useState(false);
  const [uygulamaBaslatici, setUygulamaBaslatici] = useState(false);

  const toggleDay = (key: "PT" | "SA" | "ÇA" | "PE" | "CU" | "CT" | "PZ") => {
    setSelectedDays((prev) =>
      prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key],
    );
  };

  const incrementHour = () => setHour((h) => (h + 1) % 24);
  const decrementHour = () => setHour((h) => (h - 1 + 24) % 24);
  const incrementMinute = () => setMinute((m) => (m + 1) % 60);
  const decrementMinute = () => setMinute((m) => (m - 1 + 60) % 60);

  const getDayText = () => {
    if (selectedDays.length === 0) return "Hiçbir gün seçilmedi";
    if (selectedDays.length === 7) return "Her gün";
    const allWeekdays: ("PT" | "SA" | "ÇA" | "PE" | "CU")[] = [
      "PT",
      "SA",
      "ÇA",
      "PE",
      "CU",
    ];
    const allWeekend: ("CT" | "PZ")[] = ["CT", "PZ"];
    const isWeekdays =
      allWeekdays.every((d) => selectedDays.includes(d)) &&
      selectedDays.length === 5;
    const isWeekend =
      allWeekend.every((d) => selectedDays.includes(d)) &&
      selectedDays.length === 2;
    if (isWeekdays) return "Her hafta içi";
    if (isWeekend) return "Her hafta sonu";
    const names = selectedDays.map((d) => DAY_NAMES[d]).join(", ");
    return `Her ${names}`;
  };

  const fmt = (n: number) => String(n).padStart(2, "0");

  const pageStyle = {
    backgroundColor: "#0d1b2a",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#1a2d45",
    borderRadius: "12px",
    padding: "16px",
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
      <div
        className="d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid #1e3a5f" }}
      >
        <button
          className="btn btn-link p-0"
          style={{ color: "#fff", fontSize: "20px" }}
        >
          ✕
        </button>
        <div className="d-flex gap-3">
          <button
            className="btn btn-link p-0"
            style={{
              color: "#ccc",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            ÖNİZLEME
          </button>
          <button
            className="btn btn-link p-0"
            style={{
              color: "#fff",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            KAYDET
          </button>
        </div>
        <button
          className="btn btn-link p-0"
          style={{ color: "#fff", fontSize: "20px" }}
        >
          ⋮
        </button>
      </div>

      <div className="px-3 py-3 d-flex flex-column gap-3">
        {/* Alarm Name */}
        <input
          type="text"
          className="form-control"
          placeholder="Alarm adı"
          value={alarmName}
          onChange={(e) => setAlarmName(e.target.value)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            borderBottom: "1px solid #4a6fa5",
            borderRadius: "0",
            color: "#aaa",
            fontSize: "20px",
            boxShadow: "none",
            paddingLeft: 0,
          }}
        />

        {/* Time Picker */}
        <div className="d-flex justify-content-center align-items-center gap-4 py-3">
          {/* Hour */}
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: "4px" }}
          >
            <div
              onClick={incrementHour}
              style={{
                color: "#4a6fa5",
                fontSize: "28px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              {fmt((hour - 1 + 24) % 24)}
            </div>
            <div
              style={{
                fontSize: "52px",
                fontWeight: "700",
                color: "#fff",
                lineHeight: 1,
                borderBottom: "2px solid #2196f3",
                paddingBottom: "4px",
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              {fmt(hour)}
            </div>
            <div
              onClick={incrementHour}
              style={{
                color: "#4a6fa5",
                fontSize: "28px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              {fmt((hour + 1) % 24)}
            </div>
          </div>

          <div
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#fff",
              alignSelf: "center",
            }}
          >
            :
          </div>

          {/* Minute */}
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: "4px" }}
          >
            <div
              onClick={incrementMinute}
              style={{
                color: "#4a6fa5",
                fontSize: "28px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              {fmt((minute - 1 + 60) % 60)}
            </div>
            <div
              style={{
                fontSize: "52px",
                fontWeight: "700",
                color: "#fff",
                lineHeight: 1,
                borderBottom: "2px solid #2196f3",
                paddingBottom: "4px",
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              {fmt(minute)}
            </div>
            <div
              onClick={incrementMinute}
              style={{
                color: "#4a6fa5",
                fontSize: "28px",
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              {fmt((minute + 1) % 60)}
            </div>
          </div>
        </div>

        {/* Day Text */}
        <div
          className="text-center"
          style={{ color: "#ccc", fontSize: "14px" }}
        >
          {getDayText()}
        </div>

        {/* Day Selector */}
        <div className="d-flex justify-content-between">
          {DAYS.map((day) => {
            const isSelected = selectedDays.includes(day.key as any);
            return (
              <div
                key={day.key}
                onClick={() => toggleDay(day.key as any)}
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: isSelected ? "#2196f3" : "transparent",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: isSelected ? "#fff" : "#6b8cae",
                  border: isSelected ? "none" : "1px solid transparent",
                  transition: "background-color 0.2s",
                }}
              >
                {day.label}
              </div>
            );
          })}
        </div>

        {/* Sound Card */}
        <div
          style={cardStyle}
          onClick={() => {
            navigate("/ses-ayarlama");
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  marginBottom: "4px",
                }}
              >
                Ses
              </div>
              <div style={{ color: "#2196f3", fontSize: "13px" }}>Müzik</div>
              <div style={{ color: "#2196f3", fontSize: "13px" }}>
                TAVUK ALARM SESİ MU...
              </div>
            </div>
            <div style={{ fontSize: "56px" }}>🎧</div>
          </div>
        </div>

        {/* Ertele & Kapat */}
        <div onClick={() =>{ navigate("/Kapat")}} className="row g-3">
          <div className="col-6">
            <div style={{ ...cardStyle, minHeight: "160px" }}>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  marginBottom: "12px",
                }}
              >
                Ertele
              </div>
              <div className="d-flex gap-2 mb-3">
                {["🔋", "⏻", "📱", "🖥️"].map((icon, i) => (
                  <span
                    key={i}
                    style={{ fontSize: "18px", opacity: i === 3 ? 1 : 0.4 }}
                  >
                    {icon}
                  </span>
                ))}
              </div>
              <div
                style={{
                  border: "1px dashed #4a6fa5",
                  borderRadius: "8px",
                  padding: "10px",
                  textAlign: "center",
                  color: "#6b8cae",
                  fontSize: "13px",
                }}
              >
                Görev yok
              </div>
            </div>
          </div>
          <div className="col-6">
            <div style={{ ...cardStyle, minHeight: "160px" }}>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                  marginBottom: "12px",
                }}
              >
                Kapat
              </div>
              <div className="d-flex gap-2 mb-3">
                {["🔋", "⏻", "📱", "🖥️"].map((icon, i) => (
                  <span
                    key={i}
                    style={{ fontSize: "18px", opacity: i === 3 ? 1 : 0.4 }}
                  >
                    {icon}
                  </span>
                ))}
              </div>
              <div
                style={{
                  backgroundColor: "#ffb3c1",
                  borderRadius: "8px",
                  padding: "12px",
                  textAlign: "center",
                  fontSize: "28px",
                }}
              >
                📊
              </div>
            </div>
          </div>
        </div>

        {/* Sakin Alarm */}
        <div
          style={cardStyle}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#2a4060",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              🕊️
            </div>
            <span style={{ fontWeight: "600" }}>Sakin Alarm</span>
          </div>
          {toggleSwitch(sakinAlarm, () => setSakinAlarm(!sakinAlarm))}
        </div>

        {/* Uyanma Kontrolü */}
        <div
          style={cardStyle}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#2a4060",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ✅
            </div>
            <span style={{ fontWeight: "600" }}>Uyanma kontrolü</span>
          </div>
          {toggleSwitch(uyanmaKontrol, () => setUyanmaKontrol(!uyanmaKontrol))}
        </div>

        {/* Uygulama Başlatıcı */}
        <div
          style={{ ...cardStyle, marginBottom: "32px" }}
          className="d-flex align-items-center justify-content-between"
        >
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#2a4060",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              ⚏
            </div>
            <span style={{ fontWeight: "600" }}>Uygulama Başlatıcı</span>
          </div>
          {toggleSwitch(uygulamaBaslatici, () =>
            setUygulamaBaslatici(!uygulamaBaslatici),
          )}
        </div>
      </div>
    </div>
  );
};
export default Saat_Ayarlama;
