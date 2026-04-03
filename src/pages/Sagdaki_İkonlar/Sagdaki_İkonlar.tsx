import { useState } from "react";

const initialAlarms = [
  { id: 1, time: "02:47", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 2, time: "05:00", days: "PT, SA, ÇA, PE, CU, CT", active: false },
  { id: 3, time: "05:10", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 4, time: "08:00", days: "PT, SA, ÇA, PE, CU, CT", active: true },
  { id: 5, time: "08:05", days: "PT, SA, ÇA, PE, CU, CT", active: true },
];

const tabs = [
  { key: "alarmlar",    label: "Alarmlar",    icon: "⏰" },
  { key: "zamanlayici", label: "Zamanlayıcı", icon: "⏳" },
  { key: "kronometre",  label: "Kronometre",  icon: "⏱" },
  { key: "gunum",       label: "Günüm",       icon: "📅" },
  { key: "daha",        label: "Daha Fazla",  icon: "☰"  },
];

const Sagdaki_İkonlar = () => {
  const [alarms, setAlarms]     = useState(initialAlarms);
  const [fabOpen, setFabOpen]   = useState(true);
  const [activeTab, setActiveTab] = useState("alarmlar");

  const toggle = (id: number) =>
    setAlarms(prev => prev.map(a => a.id === id ? { ...a, active: !a.active } : a));

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { background: #0a1520; margin: 0; }

        .si-wrap { background: #0a1520; min-height: 100vh; max-width: 420px; margin: 0 auto; color: #fff; font-family: 'Segoe UI', sans-serif; position: relative; padding-bottom: 140px; }
        .si-hero { background: linear-gradient(180deg,#1d4265 0%,#0e2640 60%,#0a1520 100%); padding: 14px 14px 22px; position: relative; min-height: 148px; }
        .si-mountains { position: absolute; bottom: 0; left: 0; right: 0; height: 72px; pointer-events: none; }
        .si-sleep-card { background: rgba(255,255,255,0.06); border-radius: 13px; padding: 11px 14px; display: flex; align-items: center; gap: 12px; margin-top: 14px; position: relative; z-index: 2; }
        .si-sleep-lbl { font-size: .74rem; color: #8ba3c7; line-height: 1.35; flex: 1; }
        .si-sleep-right { display: flex; align-items: center; gap: 8px; }
        .si-sleep-hr { font-size: 1.05rem; font-weight: 700; color: #fff; }

        .si-tips { background: #0e1c2e; padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #131e2e; cursor: pointer; }
        .si-badge { background: #d63a3a; color: #fff; border-radius: 50%; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; font-size: .72rem; font-weight: 700; flex-shrink: 0; }
        .si-tips-text { flex: 1; font-size: .86rem; color: #ccd8ea; }

        .si-tog { position: relative; width: 46px; height: 26px; flex-shrink: 0; cursor: pointer; }
        .si-tog input { opacity: 0; width: 0; height: 0; }
        .si-tog-track { position: absolute; inset: 0; background: #243344; border-radius: 13px; transition: background .2s; }
        .si-tog-track.on { background: #4a9eff; }
        .si-tog-thumb { position: absolute; top: 3px; left: 3px; width: 20px; height: 20px; background: #fff; border-radius: 50%; transition: transform .2s; box-shadow: 0 1px 4px rgba(0,0,0,.35); }
        .si-tog-thumb.on { transform: translateX(20px); }

        .si-row { display: flex; align-items: center; padding: 12px 14px; border-bottom: 1px solid #131e2e; gap: 11px; position: relative; }
        .si-time { font-size: 1.55rem; font-weight: 700; line-height: 1.1; color: #fff; flex: 1; }
        .si-time.off { color: #4a5a70; }
        .si-days { font-size: .68rem; color: #56708a; margin-top: 1px; }

        .si-icons { display: flex; align-items: center; gap: 3px; flex-shrink: 0; }
        .si-icn { background: none; border: none; color: #6a8aaa; cursor: pointer; padding: 4px 5px; border-radius: 6px; display: flex; flex-direction: column; align-items: center; gap: 3px; transition: background .15s; font-size: .9rem; line-height: 1; }
        .si-icn:hover { background: rgba(255,255,255,.06); color: #9ab8d8; }
        .si-icn-bar { width: 18px; height: 2px; background: currentColor; border-radius: 1px; opacity: .6; }
        .si-more { background: none; border: none; color: #6a8aaa; font-size: 1.2rem; padding: 4px 5px; cursor: pointer; border-radius: 6px; line-height: 1; transition: background .15s; }
        .si-more:hover { background: rgba(255,255,255,.06); color: #fff; }

        .si-ad { background: #0e1c2e; padding: 9px 14px; display: flex; align-items: center; gap: 11px; border-bottom: 1px solid #131e2e; position: relative; }
        .si-ad-icon { width: 40px; height: 40px; background: #1a3a6b; border-radius: 9px; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; flex-shrink: 0; }
        .si-ad-name { font-size: .85rem; color: #ccd8ea; font-weight: 600; flex: 1; }
        .si-ad-btn { background: none; border: 1.5px solid #4a9eff; color: #4a9eff; border-radius: 7px; padding: 4px 11px; font-size: .74rem; font-weight: 700; cursor: pointer; letter-spacing: .04em; }
        .si-ad-info { position: absolute; top: 5px; right: 9px; font-size: .6rem; color: #5a7090; }
        .si-ad-lbl { position: absolute; bottom: 4px; right: 9px; font-size: .6rem; color: #4a5a70; }

        .si-fab-wrap { position: fixed; bottom: 108px; right: calc(50% - 210px + 12px); z-index: 50; display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
        .si-fab-row { display: flex; align-items: center; gap: 10px; animation: fabIn .18s ease; }
        @keyframes fabIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .si-fab-chip { background: #182a40; color: #fff; font-size: .82rem; font-weight: 600; padding: 6px 16px; border-radius: 8px; white-space: nowrap; box-shadow: 0 2px 10px rgba(0,0,0,.5); }
        .si-fab-sub { width: 46px; height: 46px; border-radius: 50%; border: none; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; cursor: pointer; flex-shrink: 0; box-shadow: 0 3px 12px rgba(0,0,0,.45); transition: transform .15s; }
        .si-fab-sub:hover { transform: scale(1.08); }
        .si-fab-main { width: 54px; height: 54px; border-radius: 50%; background: #00bfff; border: none; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; cursor: pointer; box-shadow: 0 4px 20px rgba(0,191,255,.4); transition: transform .15s, background .15s; flex-shrink: 0; }
        .si-fab-main:hover { transform: scale(1.07); }
        .si-fab-main.open { background: #0099cc; }

        .si-tab-nav { position: fixed; bottom: 44px; left: 50%; transform: translateX(-50%); width: 100%; max-width: 420px; background: #0d1f33; border-top: 1px solid #182a3a; display: flex; justify-content: space-around; align-items: center; padding: 7px 0 9px; z-index: 30; }
        .si-tab { background: none; border: none; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; padding: 3px 6px; border-radius: 9px; min-width: 52px; transition: background .15s; }
        .si-tab:hover { background: rgba(255,255,255,.04); }
        .si-tab-ico { font-size: 1.18rem; }
        .si-tab-lbl { font-size: .61rem; font-weight: 600; color: #56708a; }
        .si-tab.active .si-tab-lbl { color: #4a9eff; }

        .si-nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 420px; background: #07101a; padding: 9px 0 12px; display: flex; justify-content: space-around; align-items: center; z-index: 20; }
        .nav-sq { background: none; border: 2px solid #56708a; border-radius: 4px; width: 23px; height: 23px; cursor: pointer; }
        .nav-ci { background: none; border: 2px solid #56708a; border-radius: 50%; width: 23px; height: 23px; cursor: pointer; }
        .nav-tr { background: none; border: none; color: #56708a; font-size: .95rem; cursor: pointer; }
      `}</style>

      <div className="si-wrap">

        {/* HERO */}
        <div className="si-hero">
          <svg className="si-mountains" viewBox="0 0 420 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <polygon points="0,72 65,16 135,50 210,4 290,44 365,12 420,34 420,72" fill="#0a1520" opacity=".95"/>
            <polygon points="0,72 45,38 100,62 180,24 255,58 335,28 420,48 420,72" fill="#0a1520" opacity=".5"/>
            {[345,360,374,388,402].map((x,i)=>(<polygon key={i} points={`${x},72 ${x+5.5},56 ${x+11},72`} fill="#112030"/>))}
          </svg>
          <div className="si-sleep-card">
            <span style={{fontSize:"1.8rem",color:"#6a8aaa"}}>🛏</span>
            <div className="si-sleep-lbl">Bugün uyku<br/>vakti ayarlı<br/>değil</div>
            <div className="si-sleep-right">
              <span style={{fontSize:"1.4rem"}}>⏰</span>
              <span className="si-sleep-hr">9sa</span>
            </div>
          </div>
        </div>

        {/* TIPS */}
        <div className="si-tips">
          <div className="si-badge">7</div>
          <div className="si-tips-text">Güvenilirlik ipuçlarına bir göz atın.</div>
          <span style={{color:"#8ba3c7"}}>→</span>
        </div>

        {/* ALARMS */}
        {initialAlarms.map((alarm, idx) => {
          const a = alarms.find(x => x.id === alarm.id) || alarm; // ✅ undefined önleme
          return (
            <div key={alarm.id}>
              <div className="si-row">
                <label className="si-tog">
                  <input type="checkbox" checked={a.active} onChange={()=>toggle(a.id)}/>
                  <div className={`si-tog-track ${a.active?"on":""}`}><div className={`si-tog-thumb ${a.active?"on":""}`}/></div>
                </label>

                <div style={{flex:1}}>
                  <div className={`si-time ${a.active?"":"off"}`}>{a.time}</div>
                  <div className="si-days">{a.days}</div>
                </div>

                <div className="si-icons">
                  <button className="si-icn" title="QR Kod"><span>▦</span><div className="si-icn-bar"/></button>
                  <button className="si-icn" title="Ses"><span>♪</span><div className="si-icn-bar"/></button>
                  <button className="si-more">⋮</button>
                </div>
              </div>

              {idx===0 && (
                <div className="si-ad">
                  <div className="si-ad-icon">🚶</div>
                  <div className="si-ad-name">Adım Sayar - Pedometre</div>
                  <button className="si-ad-btn">YÜKLEYİN</button>
                  <span className="si-ad-info">ⓘ</span>
                  <span className="si-ad-lbl">Ad</span>
                </div>
              )}
            </div>
          );
        })}

        {/* FAB */}
        <div className="si-fab-wrap">
          {fabOpen ? (
            <>
              <div className="si-fab-row"><span className="si-fab-chip">Hatırlatıcı</span><button className="si-fab-sub" style={{background:"#1e3a6b"}} onClick={()=>setFabOpen(false)}>👆</button></div>
              <div className="si-fab-row"><span className="si-fab-chip">Hızlı Alarm</span><button className="si-fab-sub" style={{background:"#1e3a6b"}} onClick={()=>setFabOpen(false)}>⚡</button></div>
              <div className="si-fab-row"><span className="si-fab-chip">Alarm</span><button className="si-fab-main open" style={{width:46,height:46,fontSize:"1.1rem"}} onClick={()=>setFabOpen(false)}>⏰</button></div>
            </>
          ) : (
            <button className="si-fab-main" onClick={()=>setFabOpen(true)}>⏰</button>
          )}
        </div>

        {/* BOTTOM TAB */}
        <div className="si-tab-nav">
          {tabs.map(tab=>(
            <button key={tab.key} className={`si-tab ${activeTab===tab.key?"active":""}`} onClick={()=>setActiveTab(tab.key)}>
              <span className="si-tab-ico">{tab.icon}</span>
              <span className="si-tab-lbl">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ANDROID NAV */}
        <div className="si-nav">
          <button className="nav-sq"/>
          <button className="nav-ci"/>
          <button className="nav-tr">◀</button>
        </div>

      </div>
    </>
  );
};

export default Sagdaki_İkonlar;