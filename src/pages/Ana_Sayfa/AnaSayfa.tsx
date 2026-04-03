import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IconBed = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8v9" />
  </svg>
);

const IconAlarmClock = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
    <path d="M6.38 18.7 4 21" />
    <path d="M17.64 18.67 20 21" />
  </svg>
);

const IconAlarmOff = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
    <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    <path d="m2 2 20 20" />
  </svg>
);

const IconQrCode = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
    <path d="M21 21v.01" />
    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
    <path d="M3 12h.01" />
    <path d="M12 3h.01" />
    <path d="M12 16v.01" />
    <path d="M16 12h1" />
    <path d="M21 12v.01" />
    <path d="M12 21v-1" />
  </svg>
);

const IconMusic = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconMoreVertical = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const IconPlus = ({ size = 26, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const IconTimer = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 2h4" />
    <path d="M12 14 8 10" />
    <circle cx="12" cy="14" r="8" />
  </svg>
);

const IconStopwatch = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4" />
    <path d="M9.17 3h5.66" />
    <path d="M22 5 19 8" />
  </svg>
);

const IconCalendar = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const IconMenu = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconChevronRight = ({ size = 18, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const IconCrown = ({ size = 20, color = "#f59e0b" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 19h20M3 9l4 4 5-8 5 8 4-4 1 10H2L3 9z" />
  </svg>
);

const IconActivity = ({ size = 24, color = "#fff" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const IconShield = ({ size = 13, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z" />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const alarms = [
  { id: 1, time: "02:47", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 2, time: "05:00", days: "PT, SA, ÇA, PE, CU, CT", active: false },
  { id: 3, time: "05:10", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 4, time: "08:00", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 5, time: "08:05", days: "HER GÜN", active: true },
];
const Anasayfa = () => {
  const navigate = useNavigate();
  const [alarmList, setAlarmList] = useState(alarms);
  const [activeTab, setActiveTab] = useState("alarmlar");

  const toggleAlarm = (id: number) => {
    setAlarmList((prev) =>
      prev.map((a) => (a.id === id ? { ...a, active: !a.active } : a)),
    );
  };

  const tabs = [
    { key: "alarmlar", Icon: IconAlarmClock, label: "Alarmlar" },
    { key: "zamanlayici", Icon: IconTimer, label: "Zamanlayıcı" },
    { key: "kronometre", Icon: IconStopwatch, label: "Kronometre" },
    { key: "gunum", Icon: IconCalendar, label: "Günüm" },
    { key: "daha", Icon: IconMenu, label: "Daha Fazla" },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0a74da 0%, #0d1b3e 38%, #0d1b3e 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: 430,
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* ── Mountain Background ── */}
      <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
        <svg
          viewBox="0 0 430 160"
          style={{ position: "absolute", bottom: 0, width: "100%" }}
          preserveAspectRatio="none"
        >
          <polygon
            points="0,160 80,60 160,120 240,40 320,100 430,30 430,160"
            fill="#0d2a5e"
          />
          <polygon
            points="0,160 60,90 130,140 200,70 280,120 360,60 430,90 430,160"
            fill="#0d1b3e"
          />
          <rect x="340" y="78" width="16" height="82" fill="#0d1b3e" />
          <polygon points="348,58 339,78 357,78" fill="#0d1b3e" />
          <rect x="368" y="98" width="12" height="62" fill="#0d1b3e" />
          <polygon points="374,82 368,98 380,98" fill="#0d1b3e" />
        </svg>
        {/* Crown badge */}
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "#1a3a6e",
            borderRadius: 14,
            padding: "7px 11px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          <IconCrown size={20} />
        </div>
      </div>

      {/* ── Sleep Info Card ── */}
      <div className="mx-3 mb-2">
        <div
          className="d-flex align-items-center justify-content-between rounded-3 px-3 py-2"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <div className="d-flex align-items-center gap-2">
            <IconBed size={24} color="#90a4ae" />
            <span style={{ color: "#aab4c8", fontSize: 13, lineHeight: 1.4 }}>
              Bugün uyku
              <br />
              vakti ayarlı değil
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <IconAlarmClock size={24} color="#29b6f6" />
            <span style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              9sa
            </span>
          </div>
        </div>
      </div>
      {/* ── Alarm List ── */}
      <div className="px-3 pb-5">
        {alarmList.map((alarm, idx) => (
          <div key={alarm.id}>
            <div
              className="d-flex align-items-center justify-content-between py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Toggle Button */}
              <div
                onClick={() => toggleAlarm(alarm.id)}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: alarm.active ? "#29b6f6" : "#263238",
                  border: alarm.active ? "none" : "2px solid #37474f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                  boxShadow: alarm.active
                    ? "0 0 12px rgba(41,182,246,0.4)"
                    : "none",
                }}
              >
                {alarm.active ? (
                  <IconAlarmClock size={24} color="#fff" />
                ) : (
                  <IconAlarmOff size={22} color="#546e7a" />
                )}
              </div>

              {/* Time & Days */}
              <div className="flex-grow-1 ms-3">
                <div
                  style={{
                    color: alarm.active ? "#fff" : "#546e7a",
                    fontSize: 36,
                    fontWeight: "bold",
                    lineHeight: 1,
                    letterSpacing: -1,
                    transition: "color 0.2s",
                  }}
                >
                  {alarm.time}
                </div>
                <div
                  style={{
                    color: alarm.active ? "#90a4ae" : "#37474f",
                    fontSize: 12,
                    marginTop: 3,
                  }}
                >
                  {alarm.days}
                </div>
              </div>

              {/* Action Icons */}
              <div className="d-flex align-items-center gap-3">
                <IconQrCode
                  size={18}
                  color={alarm.active ? "#78909c" : "#37474f"}
                />
                <IconMusic
                  size={18}
                  color={alarm.active ? "#78909c" : "#37474f"}
                />
                <IconMoreVertical
                  size={18}
                  color={alarm.active ? "#78909c" : "#37474f"}
                />
              </div>
            </div>

            {/* Ad Banner — after first alarm */}
            {/* {idx === 0 && (
              <div
                className="d-flex align-items-center justify-content-between rounded-3 my-2 px-3 py-2"
                style={{ background: "#1a2744", border: "1px solid #1e3a6e" }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconActivity size={24} color="#fff" />
                  </div>
                  <span style={{ color: "#fff", fontSize: 14 }}>Adım Sayar - Pedometre</span>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <span style={{ color: "#29b6f6", fontWeight: "bold", fontSize: 13 }}>YÜKLEYİN</span>
                  <span style={{ color: "#546e7a", fontSize: 10 }}>Ad</span>
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Alarm ekleme butonu*/}
      <button
        className="btn d-flex align-items-center justify-content-center"
        onClick={() => {
          navigate("saat-ayarlama");
        }}
        style={{
          position: "fixed",
          bottom: 80,
          right: "calc(50% - 215px + 20px)",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#29b6f6",
          border: "none",
          color: "#fff",
          zIndex: 100,
          boxShadow: "0 4px 16px rgba(41,182,246,0.5)",
        }}
      >
        <IconPlus size={26} color="#fff" />
      </button>

      {/* ── Bottom Navigation ── */}
      <div
        className="d-flex justify-content-around align-items-center py-2"
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 430,
          background: "#0a1428",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          zIndex: 99,
        }}
      >
        {tabs.map(({ key, Icon, label }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                background: "none",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              <Icon size={22} color={isActive ? "#29b6f6" : "#546e7a"} />
              <span
                style={{
                  fontSize: 10,
                  color: isActive ? "#29b6f6" : "#546e7a",
                  fontWeight: isActive ? "600" : "normal",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Anasayfa;
