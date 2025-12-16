import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const audioRef = useRef(null);

  // Try autoplay on load (muted)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
    audio.muted = true;

    audio.play().catch(() => {
      // autoplay blocked – will enable on user interaction
    });

    const enableSound = () => {
      audio.muted = false;
      audio.play();
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
    };
  }, []);

  return (
    <div className="page">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/happy-birthday.mp3" type="audio/mpeg" />
      </audio>

      <div className="card">
        <span className="bubble b1"></span>
        <span className="bubble b2"></span>
        <span className="bubble b3"></span>

        <p className="invite"> You’re Invited </p>

        <div className="photo-ring">
          <img src="/baby.jpg" alt="Sharvesh" />
        </div>

        <h1 className="name">Sharvesh.P</h1>

        <h2 className="party-title">
          1st Birthday Party 
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
