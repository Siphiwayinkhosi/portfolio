import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "../components/Icons";
import { navigation, profile } from "../data/portfolio";

const configured = (value) => Boolean(value);

const ContactItem = ({ href, icon, label, value }) => {
  if (!configured(href)) return null;

  return (
    <a
      className="contact-link"
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span className="contact-icon">{icon}</span>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      <ArrowUpRightIcon />
    </a>
  );
};

const Contact = () => {
  const emailHref = configured(profile.email) ? `mailto:${profile.email}` : "";

  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="contact-orbit" />
        <div className="shell contact-layout">
          <div className="contact-copy reveal">
            <span className="eyebrow">07 / Contact</span>
            <p className="contact-kicker">Have a role, project, or problem?</p>
            <h2>
              Let&apos;s build something
              <span> useful.</span>
            </h2>
            <p>
              I’m open to software roles, web projects, automation work, and
              conversations with people building thoughtful products.
            </p>
          </div>

          <div className="contact-links reveal">
            <ContactItem
              href={emailHref}
              icon={<MailIcon />}
              label="Email"
              value={profile.email}
            />
            {profile.phoneNumbers?.map((phone) => (
              <ContactItem
                href={phone.href}
                icon={<PhoneIcon />}
                key={phone.href}
                label={phone.label}
                value={phone.display}
              />
            ))}
            <ContactItem
              href={profile.linkedIn}
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value={
                configured(profile.linkedIn)
                  ? "Connect professionally"
                  : profile.linkedIn
              }
            />
            <ContactItem
              href={profile.github}
              icon={<GitHubIcon />}
              label="GitHub"
              value={
                configured(profile.github)
                  ? "Explore my code"
                  : profile.github
              }
            />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <a className="brand footer-brand" href="#home">
              <span className="brand-monogram">
                <span>SM</span>
              </span>
              <span className="brand-name">
                Siphiwayinkhosi Mahlalela
                <small>Software Engineer / Web Developer / AI Automation</small>
              </span>
            </a>
            <nav aria-label="Footer navigation">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Siphiwayinkhosi Mahlalela</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
