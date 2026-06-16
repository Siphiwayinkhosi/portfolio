const frames = [
  {
    number: "01",
    label: "Listen",
    title: "Understand the real problem.",
  },
  {
    number: "02",
    label: "Structure",
    title: "Turn complexity into a clear system.",
  },
  {
    number: "03",
    label: "Build",
    title: "Connect interface, logic, and automation.",
  },
  {
    number: "04",
    label: "Improve",
    title: "Measure what works and refine it.",
  },
];

const SystemsMachine = () => (
  <div aria-hidden="true" className="systems-machine systems-machine-desktop">
    <div className="machine-ring machine-ring-one" />
    <div className="machine-ring machine-ring-two" />
    <div className="machine-ring machine-ring-three" />
    <div className="machine-axis machine-axis-x" />
    <div className="machine-axis machine-axis-y" />
    <div className="machine-core">
      <span>SM</span>
    </div>
    <div className="machine-node machine-node-a">
      <span>01</span>
    </div>
    <div className="machine-node machine-node-b">
      <span>02</span>
    </div>
    <div className="machine-node machine-node-c">
      <span>03</span>
    </div>
    <div className="machine-node machine-node-d">
      <span>04</span>
    </div>
  </div>
);

const SystemsReel = () => {
  return (
    <section className="systems-reel">
      <div className="systems-stage">
        <div className="systems-grid" />
        <div className="systems-horizon" />

        <SystemsMachine />

        <div className="shell systems-copy">
          <div className="systems-topline">
            <span>02 / How I think</span>
            <span>Scroll-driven system map</span>
          </div>
          <div className="systems-frames">
            {frames.map((frame, index) => (
              <article
                className={`systems-frame ${index === 0 ? "is-active" : ""}`}
                key={frame.number}
              >
                <span>{frame.number} / {frame.label}</span>
                <h2>{frame.title}</h2>
              </article>
            ))}
          </div>
          <div className="systems-readout">
            <span>Signal</span>
            <i />
            <strong>Connected</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsReel;
