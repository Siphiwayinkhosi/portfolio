import { useEffect, useRef, useState } from "react";

import { navigation } from "../data/portfolio";
import { ArrowUpRightIcon, MenuIcon } from "./Icons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId = 0;
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    const updateNavigation = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const probe = window.innerHeight * 0.38;
      const currentSection = [...sections].reverse().find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probe && rect.bottom > probe;
      });

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      setScrolled(window.scrollY > 24);
      frameId = 0;
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateNavigation);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-active", menuOpen);

    return () => document.body.classList.remove("menu-active");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-monogram">
            <span>SM</span>
          </span>
          <span className="brand-name">
            Siphiwo
            <small>Engineer / Builder</small>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="desktop-nav">
          {navigation.map((item) => (
            <a
              aria-current={
                activeSection === item.href.slice(1) ? "page" : undefined
              }
              className={
                activeSection === item.href.slice(1) ? "is-active" : ""
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Start a conversation
          <ArrowUpRightIcon size={16} />
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <div
        aria-hidden={!menuOpen}
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
      >
        <div className="mobile-menu-inner">
          <span className="eyebrow">Navigate</span>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                aria-current={
                  activeSection === item.href.slice(1) ? "page" : undefined
                }
                className={
                  activeSection === item.href.slice(1) ? "is-active" : ""
                }
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <p>Software, useful systems, and automation built from Eswatini.</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
