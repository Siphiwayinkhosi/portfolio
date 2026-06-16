import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
} from "../components/Icons";
import { profile } from "../data/portfolio";

const isConfiguredUrl = (value) => Boolean(value);

const processSteps = ["Idea", "Plan", "Build", "Test", "Ship"];
const [primaryPhone, secondaryPhone] = profile.phoneNumbers ?? [];

const SocialLink = ({ href, icon, label }) => {
  if (!isConfiguredUrl(href)) {
    return null;
  }

  return (
    <a
      aria-label={label}
      className="social-link"
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
};

const Hero = () => {
  return (
    <section className="hero-scroll" id="home">
      <div className="hero hero-stage">
        <div className="hero-ambient hero-ambient-one" />
        <div className="hero-ambient hero-ambient-two" />
        <div className="hero-grid" />

        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="availability hero-reveal">
              <span />
              Open to software, web & automation opportunities
            </div>

            <p className="hero-kicker hero-reveal">
              {profile.location} <i /> Building for the web
            </p>

            <h1 className="hero-title" aria-label={profile.name}>
              <span className="hero-reveal">Siphiwayinkhosi</span>
              <span className="hero-reveal outline-text">Mahlalela.</span>
            </h1>

            <h2 className="hero-statement hero-reveal">
              I build websites, systems, and AI-powered workflows that turn ideas
              into <em>working products.</em>
            </h2>

            <p className="hero-summary hero-reveal">
              I combine frontend development, backend logic, automation, SEO, and
              product thinking to create practical digital solutions for
              businesses and teams.
            </p>

            <div className="hero-actions hero-reveal">
              <a className="button button-primary" href="#work">
                View my work
                <ArrowDownIcon size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Contact me
                <ArrowUpRightIcon size={17} />
              </a>
              <a className="button button-secondary" download href={profile.cv}>
                Download CV
                <ArrowDownIcon size={17} />
              </a>
            </div>

            <div className="hero-contact-line hero-reveal">
              <span>Direct line</span>
              {primaryPhone ? (
                <a href={primaryPhone.href}>{primaryPhone.display}</a>
              ) : null}
              {primaryPhone && secondaryPhone ? <i /> : null}
              {secondaryPhone ? (
                <a href={secondaryPhone.href}>{secondaryPhone.display}</a>
              ) : null}
            </div>
          </div>

          <div className="hero-portrait-column">
            <div className="portrait-frame hero-portrait">
              <div className="portrait-corner portrait-corner-top" />
              <div className="portrait-corner portrait-corner-bottom" />
              <div className="portrait-index">
                <span>Portrait / 001</span>
                <span>26.3054° S</span>
              </div>
              <img
                alt="Siphiwayinkhosi Mahlalela"
                fetchPriority="high"
                height="1080"
                src="/images/siphiwayinkhosi-mahlalela.jpg"
                width="810"
              />
              <div className="portrait-overlay" />
              <div className="portrait-caption">
                <span>Software Engineer</span>
                <strong>Building useful digital products.</strong>
              </div>
            </div>

            <div className="hero-side-meta hero-reveal">
              <div>
                <span className="meta-label">Current mode</span>
                <strong>Build. Test. Improve.</strong>
              </div>
              <div className="hero-socials">
                <SocialLink
                  href={profile.linkedIn}
                  icon={<LinkedInIcon />}
                  label="LinkedIn"
                />
                <SocialLink
                  href={profile.github}
                  icon={<GitHubIcon />}
                  label="GitHub"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-mask-scene" aria-hidden="true">
          <div className="hero-full-media">
            <img
              alt=""
              height="941"
              src="/images/digital-product-workflow-v2.webp"
              width="1672"
            />
            <div className="hero-full-shade" />
          </div>
          <div className="hero-mask-media">
            <img
              alt=""
              height="941"
              src="/images/digital-product-workflow-v2.webp"
              width="1672"
            />
          </div>
          <div className="hero-mask-interface">
            <span>Process / 001</span>
            <span>Idea → Working product</span>
          </div>
          <div className="hero-process-strip">
            <div className="hero-process-intro">
              <span>From thought to shipped system</span>
              <strong>A repeatable way to build.</strong>
            </div>
            <div className="hero-process-steps">
              {processSteps.map((step, index) => (
                <span key={step}>
                  <i>0{index + 1}</i>
                  {step}
                </span>
              ))}
            </div>
          </div>
          <div className="hero-final-statement" aria-hidden="true">
            <span>Software is not only code.</span>
            <strong>
              Make the work
              <em> move better.</em>
            </strong>
            <p>
              Websites, systems, and automations shaped around real business
              movement.
            </p>
            <div>
              <span>Available for roles and projects</span>
              <span>
                {primaryPhone?.display}
                {secondaryPhone ? ` / ${secondaryPhone.display}` : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="hero-mobile-process">
          <div className="hero-mobile-process-media">
            <img
              alt="A digital product workflow moving from an idea and wireframes through code, testing, deployment, and monitoring"
              height="941"
              src="/images/digital-product-workflow-v2.webp"
              width="1672"
            />
          </div>
          <div className="hero-mobile-process-copy">
            <span>From thought to shipped system</span>
            <strong>A repeatable way to build.</strong>
          </div>
          <div className="hero-mobile-process-steps">
            {processSteps.map((step, index) => (
              <span key={step}>
                <i>0{index + 1}</i>
                {step}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-scroll-cue hero-reveal" aria-hidden="true">
          <span>Scroll to enter</span>
          <i />
        </div>

        <div className="capability-ticker" aria-label="Core capabilities">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div aria-hidden={group === 1} className="ticker-group" key={group}>
                <span>Web Development</span>
                <i />
                <span>Product Thinking</span>
                <i />
                <span>AI Automation</span>
                <i />
                <span>Technical SEO</span>
                <i />
                <span>Full-Stack Systems</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
