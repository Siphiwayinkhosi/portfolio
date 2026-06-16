import { useEffect, useRef, useState } from "react";

const messages = [
  "Initializing portfolio",
  "Building digital systems",
  "Ready to explore",
];

const IntroLoader = ({ onComplete }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      onComplete();
      return undefined;
    }

    document.body.classList.add("intro-active");

    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) =>
        Math.min(current + 1, messages.length - 1),
      );
    }, 520);

    const leaveTimer = window.setTimeout(() => setLeaving(true), 1450);
    const completeTimer = window.setTimeout(() => {
      completedRef.current = true;
      document.body.classList.remove("intro-active");
      onComplete();
    }, 2050);

    return () => {
      window.clearInterval(messageTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(completeTimer);

      if (!completedRef.current) {
        document.body.classList.remove("intro-active");
      }
    };
  }, [onComplete]);

  const skipIntro = () => {
    completedRef.current = true;
    document.body.classList.remove("intro-active");
    onComplete();
  };

  return (
    <div
      aria-live="polite"
      className={`intro-loader ${leaving ? "is-leaving" : ""}`}
    >
      <div className="loader-grid" />
      <div className="loader-content">
        <div className="loader-mark">
          <span>SM</span>
        </div>
        <div className="loader-status">
          <span className="loader-dot" />
          <span key={messageIndex}>{messages[messageIndex]}</span>
        </div>
        <div className="loader-line">
          <span />
        </div>
      </div>
      <button className="loader-skip" onClick={skipIntro} type="button">
        Skip intro
      </button>
    </div>
  );
};

export default IntroLoader;
