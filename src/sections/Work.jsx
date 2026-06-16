import { ArrowUpRightIcon } from "../components/Icons";
import { profile, projects } from "../data/portfolio";

const projectMailto = (project) =>
  `mailto:${profile.email}?subject=${encodeURIComponent(
    `Project conversation: ${project.name}`,
  )}`;

const formatCount = (count) => String(count).padStart(2, "0");

const ProjectVisual = ({ project }) => {
  const liveUrl = project.links?.live;
  const previewImages =
    project.preview?.images ?? (project.preview?.src ? [project.preview.src] : []);
  const hasPreview = previewImages.length > 0;
  const PreviewFrame = liveUrl ? "a" : "div";
  const previewFrameProps = liveUrl
    ? {
        "aria-label": `Open ${project.name} live website`,
        href: liveUrl,
        rel: "noreferrer",
        target: "_blank",
      }
    : {
        "aria-label": `${project.name} preview`,
        role: "img",
      };

  return (
    <div className={`project-visual project-visual-${project.tone}`}>
      <div className="visual-grid" />
      <div className="visual-scan" />

      {hasPreview ? (
        <PreviewFrame
          className={`project-preview-link ${liveUrl ? "" : "is-static"} ${
            previewImages.length > 1 ? "has-gallery" : ""
          }`}
          {...previewFrameProps}
        >
          {previewImages.length > 1 ? (
            <div className="project-preview-gallery">
              {previewImages.map((src, imageIndex) => (
                <img
                  alt={`${project.preview.alt} ${imageIndex + 1}`}
                  key={src}
                  src={src}
                />
              ))}
            </div>
          ) : (
            <img
              alt={project.preview.alt}
              className="project-preview-image"
              src={previewImages[0]}
            />
          )}
          <span className="project-preview-badge">
            {liveUrl ? "Live preview" : "Internal preview"}
            <ArrowUpRightIcon size={15} />
          </span>
        </PreviewFrame>
      ) : (
        <>
          <div className="visual-orbit visual-orbit-one" />
          <div className="visual-orbit visual-orbit-two" />
          <div className="visual-terminal">
            <span className="terminal-top">
              <i />
              <i />
              <i />
            </span>
            <span className="terminal-label">{project.category}</span>
            <strong>{project.number}</strong>
            <span className="terminal-code">
              <i />
              <i />
              <i />
            </span>
          </div>
        </>
      )}

      <span className="visual-coordinate">BUILD / {project.number}</span>
    </div>
  );
};

const Work = () => {
  const totalProjects = formatCount(projects.length);

  return (
    <section className="work-scroll" id="work">
      <div className="work-stage">
        <div className="work-stage-grid" />
        <div className="work-watermark" aria-hidden="true">
          <span>Project transmission</span>
          <strong>
            {projects.map((project, index) => (
              <i className={index === 0 ? "is-active" : ""} key={project.number}>
                {project.number}
              </i>
            ))}
          </strong>
        </div>

        <div className="shell work-stage-shell">
          <div className="work-heading">
            <div>
              <span className="eyebrow">04 / Selected work</span>
              <h2>Projects built around a problem, not a trend.</h2>
            </div>
            <p>
              A selection of client work, product systems, automation, and
              technical problem solving.
            </p>
          </div>

          <div
            className="work-progress"
            style={{ "--project-count": projects.length }}
            aria-hidden="true"
          >
            <span className="work-progress-label">Scroll through the work</span>
            <div>
              {projects.map((project, index) => (
                <i className={index === 0 ? "is-active" : ""} key={project.number}>
                  <span />
                </i>
              ))}
            </div>
            <span className="work-progress-count">
              {projects.map((project, index) => (
                <i className={index === 0 ? "is-active" : ""} key={project.number}>
                  {project.number} / {totalProjects}
                </i>
              ))}
            </span>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <article
                className={`project-card ${index === 0 ? "is-active" : ""}`}
                key={project.number}
                style={{ "--project-index": index }}
              >
                <div className="project-case-rail" aria-hidden="true">
                  <span>{project.number}</span>
                  <i />
                  <small>Case file</small>
                </div>
                <ProjectVisual project={project} />

                <div className="project-content">
                  <div className="project-meta">
                    <span>
                      {project.number} / {totalProjects}
                    </span>
                    <span>{project.status}</span>
                  </div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p className="project-summary">{project.summary}</p>

                  <div className="project-details">
                    <div>
                      <span>Challenge</span>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <span>My contribution</span>
                      <p>{project.contribution}</p>
                    </div>
                  </div>

                  <div className="project-stack">
                    {project.stack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <p>
                      <span>Business value</span>
                      {project.value}
                    </p>
                    <a
                      className="case-study-link"
                      href={project.links?.live ?? projectMailto(project)}
                      rel={project.links?.live ? "noreferrer" : undefined}
                      target={project.links?.live ? "_blank" : undefined}
                    >
                      {project.links?.live ? "View live site" : "Discuss this project"}
                      <ArrowUpRightIcon size={17} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
