import { ArrowUpRightIcon } from "../components/Icons";
import { clientServices, recruiterPoints } from "../data/portfolio";

const Audience = () => {
  return (
    <section className="section audience-section">
      <div className="shell audience-grid">
        <article className="audience-card recruiter-card reveal">
          <span className="eyebrow">For recruiters & teams</span>
          <h2>Why I’m worth a conversation.</h2>
          <ul className="check-list">
            {recruiterPoints.map((point) => (
              <li key={point}>
                <span>✓</span>
                {point}
              </li>
            ))}
          </ul>
          <a className="button button-primary" href="#contact">
            Let&apos;s connect
            <ArrowUpRightIcon size={17} />
          </a>
        </article>

        <article className="audience-card client-card reveal">
          <span className="eyebrow">For businesses & founders</span>
          <h2>Need a website, system, or automation?</h2>
          <p>
            I can help turn a rough idea, slow process, or underperforming
            website into something practical and ready to use.
          </p>
          <div className="client-service-list">
            {clientServices.map((service, index) => (
              <span key={service}>
                <i>0{index + 1}</i>
                {service}
              </span>
            ))}
          </div>
          <a className="button button-secondary" href="#contact">
            Start a conversation
            <ArrowUpRightIcon size={17} />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Audience;
