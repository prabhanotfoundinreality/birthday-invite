import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="card">
        {/* Floating bubbles */}
        <span className="bubble b1"></span>
        <span className="bubble b2"></span>
        <span className="bubble b3"></span>

        <p className="invite"> You’re Invited To </p>

        {/* Photo */}
        <div className="photo-ring">
          <img src="public/baby.jpg" alt="Sharvesh" />
        </div>

        <h1 className="name">Sharvesh</h1>

        <h2 className="party-title">
          1st Birthday Party <span></span>
        </h2>

        <div className="details">
          <div className="info-text fade-delay-1">📅 23 December</div>
          <div className="info-text fade-delay-2">⏰ 7:00 PM</div>

          <div className="info-text address fade-delay-3">
            📍 No:83, Devados Street<br />
            VGN Mahalakshimi Nagar<br />
            Thiruverkadu
          </div>
        </div>

        <p className="footer">
          ✨ Join us to celebrate love & joy ✨
        </p>
      </div>
    </div>
  );
}
