const chapters = [
  {
    number: "01",
    label: "The beginning",
    title: "I started with the web.",
    text: "Each page taught me that a good interface is a chain of decisions: hierarchy, speed, clarity, accessibility, and what the user needs next.",
    word: "BUILD",
    visual: "portrait",
  },
  {
    number: "02",
    label: "The shift",
    title: "Then I looked behind the screen.",
    text: "The more I built, the more I cared about the systems underneath: APIs, authentication, data, deployment, workflows, and how the business actually operates.",
    word: "SYSTEMS",
    visual: "system",
  },
  {
    number: "03",
    label: "The focus now",
    title: "Useful outcomes over isolated code.",
    text: "Today I combine software, product thinking, SEO, and AI automation to turn rough ideas and slow processes into practical tools people can use.",
    word: "IMPACT",
    visual: "impact",
  },
];

const StoryVisual = ({ type }) => {
  if (type === "portrait") {
    return (
      <div className="story-visual story-visual-portrait">
        <img
          alt="Siphiwayinkhosi Mahlalela wearing a headset while working"
          height="1152"
          src="/images/siphiwayinkhosi-headset.webp"
          width="864"
        />
        <span>Listening first / Building with context</span>
      </div>
    );
  }

  return (
    <div className={`story-visual story-visual-${type}`}>
      <div className="story-orbit story-orbit-one" />
      <div className="story-orbit story-orbit-two" />
      <div className="story-node story-node-one" />
      <div className="story-node story-node-two" />
      <div className="story-node story-node-three" />
      <div className="story-visual-core">
        <span>{type === "system" ? "INPUT" : "PROBLEM"}</span>
        <i />
        <strong>{type === "system" ? "LOGIC" : "PRODUCT"}</strong>
        <i />
        <span>{type === "system" ? "OUTPUT" : "OUTCOME"}</span>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <section className="story-scroll" id="story">
      <div className="story-stage">
        <div className="story-giant-words" aria-hidden="true">
          {chapters.map((chapter, index) => (
            <span
              className={index === 0 ? "is-active" : ""}
              key={chapter.word}
            >
              {chapter.word}
            </span>
          ))}
        </div>
        <div className="shell story-cinema">
          <div className="story-fixed">
            <span className="eyebrow">01 / My story</span>
            <h2>
              Code is only
              <span> part of the job.</span>
            </h2>
            <p>
              The real work is understanding what needs to change, then shaping
              a solution people can actually use.
            </p>
            <div className="story-progress">
              {chapters.map((chapter) => (
                <span key={chapter.number}>
                  <i />
                  {chapter.number}
                </span>
              ))}
            </div>
          </div>

          <div className="story-chapters">
            {chapters.map((chapter, index) => (
              <article
                className={`story-chapter ${index === 0 ? "is-active" : ""}`}
                key={chapter.number}
              >
                <StoryVisual type={chapter.visual} />
                <div className="story-chapter-copy">
                  <span>
                    {chapter.number} / {chapter.label}
                  </span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
