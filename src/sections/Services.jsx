import { ArrowUpRightIcon } from "../components/Icons";
import { services } from "../data/portfolio";

const Services = () => {
  return (
    <section className="services-scroll">
      <div className="services-stage">
        <div className="shell services-heading">
          <div>
            <span className="eyebrow">03 / What I build</span>
            <h2>Useful technology, shaped around real work.</h2>
          </div>
          <p>
            From the first screen to the workflow behind it, I care about the
            complete result.
          </p>
        </div>

        <div className="services-track">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <ArrowUpRightIcon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
          <div className="services-endcap">
            <span>Built around the problem.</span>
            <strong>Not the trend.</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
