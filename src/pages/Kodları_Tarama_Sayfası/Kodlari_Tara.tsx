import { useState } from "react";

type Code = {
  id: number;
  value: string;
  checked: boolean;
};

const Kodlari_Tara = () => {
  const [codes, setCodes] = useState<Code[]>([
    { id: 1, value: "8697520108037", checked: true },
  ]);

  const [sessize, setSessize] = useState(false);
  const [cozmedenKapat, setCozmedenKapat] = useState(true);

  const toggleCode = (id: number) => {
    setCodes((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, checked: !c.checked } : c
      )
    );
  };

  const deleteCode = (id: number) => {
    setCodes((prev) => prev.filter((c) => c.id !== id));
  };

  const addCode = () => {
    const val = prompt("Barkod veya QR kod değeri girin:");
    if (val && val.trim()) {
      setCodes((prev) => [
        ...prev,
        { id: Date.now(), value: val.trim(), checked: true },
      ]);
    }
  };

  return (
    <>
      <style>{`
        body { background-color: #0f1b2d; }

        .kt-page {
          background: linear-gradient(180deg, #0f1b2d 0%, #132040 100%);
          min-height: 100vh;
          color: #ffffff;
          font-family: 'Segoe UI', sans-serif;
          max-width: 430px;
          margin: 0 auto;
          padding-bottom: 100px;
        }

        .kt-back-btn {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 1.4rem;
          padding: 14px 16px;
          cursor: pointer;
        }

        .kt-title {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .kt-desc {
          font-size: 0.9rem;
          color: #8ba3c7;
        }

        .code-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid #1e3560;
        }

        .kt-checkbox {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          border: 2px solid #4a9eff;
          background: #4a9eff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .kt-checkbox.unchecked {
          background: transparent;
          border-color: #5a7ab0;
        }

        .code-value {
          flex: 1;
        }

        .code-menu-btn {
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        .code-dropdown {
          position: absolute;
          right: 0;
          background: #1e3560;
          border-radius: 6px;
        }

        .kt-toggle-row {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .kt-fab {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #00bfff;
          color: #fff;
          border: none;
          font-size: 24px;
        }
      `}</style>

      <div className="kt-page">
        <button className="kt-back-btn">←</button>

        <div style={{ padding: 16 }}>
          <div className="kt-title">Kodları tara</div>
          <div className="kt-desc">
            Alarmı kapatmak için kod tarayın.
          </div>
        </div>

        <div style={{ padding: 16 }}>
          {codes.map((code) => (
            <CodeRow
              key={code.id}
              code={code}
              onToggle={() => toggleCode(code.id)}
              onDelete={() => deleteCode(code.id)}
            />
          ))}
        </div>

        <div style={{ padding: 16 }}>
          <div className="kt-toggle-row">
            <span>Sessize al</span>
            <input
              type="checkbox"
              checked={sessize}
              onChange={() => setSessize(!sessize)}
            />
          </div>

          <div className="kt-toggle-row">
            <span>Çözmeden kapat</span>
            <input
              type="checkbox"
              checked={cozmedenKapat}
              onChange={() => setCozmedenKapat(!cozmedenKapat)}
            />
          </div>
        </div>

        <button className="kt-fab" onClick={addCode}>
          +
        </button>
      </div>
    </>
  );
};

type CodeRowProps = {
  code: Code;
  onToggle: () => void;
  onDelete: () => void;
};

const CodeRow: React.FC<CodeRowProps> = ({
  code,
  onToggle,
  onDelete,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="code-row">
      <div
        className={`kt-checkbox ${
          code.checked ? "" : "unchecked"
        }`}
        onClick={onToggle}
      >
        {code.checked && "✓"}
      </div>

      <span className="code-value">{code.value}</span>

      <div style={{ position: "relative" }}>
        <button
          className="code-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </button>

        {menuOpen && (
          <div className="code-dropdown">
            <button onClick={onDelete}>Sil</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kodlari_Tara;