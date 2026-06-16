import { experience } from "../data/portfolio";

const formatCount = (count) => String(count).padStart(2, "0");

const Experience = () => {
  const totalExperience = formatCount(experience.length);

  return (
    <section className="experience-scroll" id="experience">
      <div className="experience-stage">
        <div className="shell experience-intro">
          <span className="eyebrow">06 / Experience</span>
          <h2>Learning by building, improving by shipping.</h2>
          <p>
            My work crosses traditional role boundaries because useful products
            rarely stop at one layer.
          </p>
        </div>

        <div className="experience-track">
          {experience.map((item, index) => (
            <article className="experience-card" key={item.title}>
              <div className="experience-card-index">
                <span>
                  {formatCount(index + 1)} / {totalExperience}
                </span>
                <i />
              </div>
              <div className="experience-card-body">
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <strong>{item.context}</strong>
                <p>{item.description}</p>
              </div>
              <div className="experience-card-mark" aria-hidden="true">
                {formatCount(index + 1)}
              </div>
            </article>
          ))}
          <div className="experience-endcap">
            <span>Next chapter</span>
            <strong>Ready to contribute.</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
