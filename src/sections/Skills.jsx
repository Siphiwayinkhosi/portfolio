import { skillGroups } from "../data/portfolio";

const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="skills-glow" />
      <div className="shell">
        <div className="section-heading reveal">
          <div>
            <span className="eyebrow">05 / Capabilities</span>
            <h2>A practical toolkit for shipping complete work.</h2>
          </div>
          <p>
            I choose tools based on the problem and work comfortably across the
            product stack.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-group reveal" key={group.title}>
              <div className="skill-heading">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
