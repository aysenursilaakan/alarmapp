import { useState } from "react";

const Kapatma_Secenekleri=()=> {
  const [selectedDismiss, setSelectedDismiss] = useState("kontroller");
  const [autoStop, setAutoStop] = useState("Hiçbir zaman");

  const autoStopOptions = ["Hiçbir zaman", "1 dakika", "5 dakika", "10 dakika", "15 dakika"];

  return (
    <>
      <style>{`
        body { background-color: #0f1b2d; }

        .alarm-page {
          background: linear-gradient(180deg, #0f1b2d 0%, #132040 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: 'Segoe UI', sans-serif;
          max-width: 430px;
          margin: 0 auto;
          padding-bottom: 80px;
        }

        .back-btn {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 1.4rem;
          padding: 12px 16px;
          cursor: pointer;
        }

        .hero-illustration {
          background: linear-gradient(135deg, #1a3a6b 0%, #1e4a8a 50%, #1a3a6b 100%);
          border-radius: 0 0 32px 32px;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 220px;
          position: relative;
          overflow: hidden;
        }

        .hero-illustration::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(135deg, #5bb8e8 0%, #4aa8d8 100%);
          border-radius: 50% 50% 0 0 / 20px 20px 0 0;
        }

        .person-emoji {
          font-size: 5rem;
          position: relative;
          z-index: 2;
          animation: stretchUp 2s ease-in-out infinite;
        }

        @keyframes stretchUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .section-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .section-desc {
          font-size: 0.9rem;
          color: #8ba3c7;
          line-height: 1.5;
        }

        .option-card {
          background: #1a2f52;
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 18px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .option-card.active {
          border-color: #4a9eff;
          background: #1e3560;
          box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.15);
        }

        .option-card:hover {
          border-color: #3a7edd;
          background: #1c3258;
        }

        .option-label {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0;
        }

        .option-icons {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .icon-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          color: #8ba3c7;
          cursor: pointer;
          transition: background 0.15s;
        }

        .icon-btn.active-icon {
          background: #4a9eff;
          color: #fff;
        }

        .icon-btn:hover {
          background: rgba(74, 158, 255, 0.3);
          color: #fff;
        }

        .task-card {
          background: #1a2f52;
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 18px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .task-card.active {
          border-color: #4a9eff;
          background: #1e3560;
        }

        .task-card:hover {
          border-color: #3a7edd;
        }

        .barcode-visual {
          background: linear-gradient(135deg, #ff6b9d33, #ff6b9d22);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 3px;
          align-items: center;
        }

        .barcode-line {
          background: #333;
          height: 28px;
          border-radius: 1px;
        }

        .barcode-scan-line {
          position: absolute;
          background: #ff3366;
          height: 2px;
          width: 100%;
          left: 0;
          border-radius: 2px;
        }

        .task-link {
          color: #4a9eff;
          font-size: 0.88rem;
          text-decoration: none;
          display: block;
          margin-top: 4px;
          transition: color 0.15s;
        }

        .task-link:hover {
          color: #7bbfff;
          text-decoration: underline;
        }

        .settings-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #5a7ab0;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .auto-stop-card {
          background: #1a2f52;
          border-radius: 16px;
          padding: 18px 20px;
        }

        .auto-stop-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .auto-stop-desc {
          font-size: 0.82rem;
          color: #8ba3c7;
          line-height: 1.4;
        }

        .dropdown-select {
          background: #0f1b2d;
          border: 1.5px solid #2a4470;
          border-radius: 10px;
          color: #4a9eff;
          font-size: 0.88rem;
          font-weight: 600;
          padding: 6px 12px;
          cursor: pointer;
          outline: none;
          transition: border-color 0.15s;
        }

        .dropdown-select:focus {
          border-color: #4a9eff;
        }

        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          background: #0a1628;
          border-top: 1px solid #1e3560;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 12px 0 20px;
        }

        .nav-btn {
          background: none;
          border: 2px solid #8ba3c7;
          border-radius: 6px;
          width: 28px;
          height: 28px;
          cursor: pointer;
          transition: border-color 0.15s;
        }

        .nav-btn:hover {
          border-color: #4a9eff;
        }

        .nav-btn-circle {
          background: none;
          border: 2px solid #8ba3c7;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          cursor: pointer;
          transition: border-color 0.15s;
        }

        .nav-btn-circle:hover {
          border-color: #4a9eff;
        }

        .nav-btn-tri {
          background: none;
          border: none;
          cursor: pointer;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8ba3c7;
          font-size: 1.1rem;
          transition: color 0.15s;
        }

        .nav-btn-tri:hover {
          color: #4a9eff;
        }
      `}</style>

      <div className="alarm-page">
        {/* Top bar */}
        <div className="d-flex align-items-center pt-2 pb-1">
          <button className="back-btn">&#8592;</button>
        </div>

        {/* Hero */}
        <div className="hero-illustration mx-3" style={{ borderRadius: "20px" }}>
          <span className="person-emoji">🙆</span>
        </div>

        {/* Title */}
        <div className="px-4 pt-4 pb-2">
          <div className="section-title">Kapat</div>
          <div className="section-desc">
            Alarmlarınızı nasıl kapatmak istediğinizi seçin.
            Uyandığınızdan emin olmak istiyorsanız alarmınızın
            kapanması için bir görevi tamamlayarak zihin egzersizi
            yapabilirsiniz.
          </div>
        </div>

        {/* Options */}
        <div className="px-4 d-flex flex-column gap-3 mt-3">

          {/* Kontroller Card */}
          <div
            className={`option-card ${selectedDismiss === "kontroller" ? "active" : ""}`}
            onClick={() => setSelectedDismiss("kontroller")}
          >
            <div className="d-flex align-items-center justify-content-between">
              <span className="option-label">Kontroller</span>
              <div className="option-icons">
                <button className="icon-btn" title="Pil">🔋</button>
                <button className="icon-btn active-icon" title="Güç">⏻</button>
                <button className="icon-btn" title="Telefon">📱</button>
                <button className="icon-btn" title="Ekran">🖥</button>
              </div>
            </div>
          </div>

          {/* Görev Card */}
          <div
            className={`task-card ${selectedDismiss === "gorev" ? "active" : ""}`}
            onClick={() => setSelectedDismiss("gorev")}
          >
            <div>
              <div className="option-label mb-2">Görev</div>
              <a href="#" className="task-link" onClick={e => e.preventDefault()}>Kodları tara</a>
              <a href="#" className="task-link" onClick={e => e.preventDefault()}>Kayıtlı kodlar</a>
            </div>
            {/* Barcode visual */}
            <div className="barcode-visual position-relative" style={{ minWidth: 70 }}>
              <div className="d-flex gap-1 align-items-end">
                {[3,5,2,6,3,4,2,5,3,4,2].map((h, i) => (
                  <div
                    key={i}
                    className="barcode-line"
                    style={{ width: i % 3 === 0 ? 4 : 2, height: h * 5, background: "#1a1a2e" }}
                  />
                ))}
              </div>
              <div className="barcode-scan-line" style={{ top: "40%" }} />
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="px-4 mt-4">
          <div className="settings-label">Ayarlar</div>

          <div className="auto-stop-card">
            <div className="d-flex align-items-start justify-content-between gap-3">
              <div>
                <div className="auto-stop-title">Otomatik Kapatma</div>
                <div className="auto-stop-desc mt-1">
                  Alarmınız ne kadar süreyle çalsın? Bu
                  sürenin ardından alarmınızı otomatik
                  olarak erteleyeceğiz.
                </div>
              </div>
              <div className="flex-shrink-0">
                <select
                  className="dropdown-select"
                  value={autoStop}
                  onChange={e => setAutoStop(e.target.value)}
                >
                  {autoStopOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="bottom-nav">
          <button className="nav-btn" />
          <button className="nav-btn-circle" />
          <button className="nav-btn-tri">&#9664;</button>
        </div>
      </div>
    </>
  );
}
export default Kapatma_Secenekleri ;