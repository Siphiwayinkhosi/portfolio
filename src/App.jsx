import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IntroLoader from "./components/IntroLoader";
import Navigation from "./components/Navigation";
import Audience from "./sections/Audience";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Story from "./sections/Story";
import SystemsReel from "./sections/SystemsReel";
import Work from "./sections/Work";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const appRef = useRef(null);
  const resetInitialScroll = useCallback(() => {
    if (window.location.hash) {
      return;
    }

    window.scrollTo({ behavior: "instant", left: 0, top: 0 });
  }, []);
  const completeIntro = useCallback(() => {
    resetInitialScroll();
    setIntroComplete(true);
    window.requestAnimationFrame(resetInitialScroll);
  }, [resetInitialScroll]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    resetInitialScroll();

    const handlePageShow = () => resetInitialScroll();
    window.addEventListener("pageshow", handlePageShow);

    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [resetInitialScroll]);

  useGSAP(
    () => {
      if (!introComplete) {
        return undefined;
      }

      const media = gsap.matchMedia();

      media.add(
        {
          animate: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 900px)",
        },
        ({ conditions }) => {
          if (!conditions.animate || !conditions.desktop) {
            gsap.set(
              [
                ".hero-reveal",
                ".hero-portrait",
                ".reveal",
                ".project-card",
                ".story-chapter",
                ".story-giant-words span",
                ".systems-frame",
                ".hero-mask-scene",
                ".hero-full-media",
                ".hero-process-strip",
                ".hero-final-statement",
                ".work-watermark i",
                ".work-progress-count i",
                ".work-progress i span",
                ".project-case-rail",
                ".project-preview-link",
                ".project-preview-image",
                ".project-preview-gallery",
                ".project-content > *",
                ".project-stack span",
              ],
              {
                clearProps: "all",
              },
            );
            return undefined;
          }

          gsap.set(
            ".hero-mask-scene, .hero-full-media, .hero-process-strip, .hero-final-statement",
            { autoAlpha: 0 },
          );
          gsap.set(".hero-full-shade", { opacity: 0 });
          gsap.set(".story-chapter:not(:first-child)", {
            opacity: 0,
            y: 70,
          });
          gsap.set(".story-giant-words span:not(:first-child)", {
            autoAlpha: 0,
            y: 80,
          });
          gsap.set(".systems-frame:not(:first-child)", {
            opacity: 0,
            y: 70,
          });
          gsap.set(".project-card:not(:first-child)", {
            autoAlpha: 0,
            clipPath: "inset(100% 0% 0% 0%)",
            yPercent: 10,
          });
          gsap.set(".work-watermark i:not(:first-child)", {
            autoAlpha: 0,
            yPercent: 35,
          });
          gsap.set(".work-progress-count i:not(:first-child)", {
            autoAlpha: 0,
            yPercent: 35,
          });
          gsap.set(".work-progress i span", { scaleX: 0 });
          gsap.set(".work-progress i:first-child span", { scaleX: 1 });

          const introTimeline = gsap.timeline({
            defaults: { duration: 0.85, ease: "power3.out" },
          });

          introTimeline
            .fromTo(
              ".hero-reveal",
              { autoAlpha: 0, y: 36 },
              { autoAlpha: 1, y: 0, stagger: 0.09 },
            )
            .fromTo(
              ".hero-portrait",
              { autoAlpha: 0, clipPath: "inset(12% 0 88% 0)", y: 28 },
              {
                autoAlpha: 1,
                clipPath: "inset(0% 0 0% 0)",
                duration: 1.15,
                y: 0,
              },
              0.18,
            );

          const heroTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              anticipatePin: 1,
              end: "bottom bottom",
              pin: ".hero-stage",
              pinSpacing: false,
              scrub: 1.15,
              start: "top top",
              trigger: ".hero-scroll",
            },
          });

          heroTimeline
            .to(
              ".hero-layout",
              {
                autoAlpha: 0,
                duration: 1,
                scale: 0.84,
                yPercent: -7,
              },
              0,
            )
            .to(
              ".hero-scroll-cue, .capability-ticker",
              { autoAlpha: 0, duration: 0.45 },
              0,
            )
            .to(
              ".hero-mask-scene",
              { autoAlpha: 1, duration: 0.2 },
              0.4,
            )
            .fromTo(
              ".hero-mask-media",
              { "--mask-size": "21vw" },
              { "--mask-size": "145vw", duration: 1.8 },
              0.45,
            )
            .fromTo(
              ".hero-mask-media img",
              { scale: 1.22 },
              { duration: 2.5, scale: 1.02 },
              0.45,
            )
            .to(
              ".hero-mask-media",
              { "--mask-size": "420vw", duration: 0.85 },
              2.1,
            )
            .fromTo(
              ".hero-full-media",
              { autoAlpha: 0, scale: 1.045 },
              { autoAlpha: 1, duration: 0.48, scale: 1 },
              2.55,
            )
            .to(
              ".hero-mask-media",
              { autoAlpha: 0, duration: 0.42 },
              2.58,
            )
            .fromTo(
              ".hero-process-strip",
              { autoAlpha: 0, y: 26 },
              { autoAlpha: 1, duration: 0.48, y: 0 },
              2.92,
            )
            .to(
              ".hero-mask-interface",
              { autoAlpha: 0, duration: 0.35 },
              3.08,
            )
            .to(
              ".hero-process-strip",
              { autoAlpha: 0, duration: 0.4, y: -18 },
              3.82,
            )
            .to(
              ".hero-full-shade",
              { duration: 0.55, opacity: 0.56 },
              3.78,
            )
            .fromTo(
              ".hero-final-statement",
              { autoAlpha: 0, y: 80 },
              { autoAlpha: 1, duration: 0.7, y: 0 },
              4.05,
            )
            .to(
              ".hero-final-statement",
              { autoAlpha: 0, duration: 0.55, y: -55 },
              5.15,
            )
            .to(
              ".hero-mask-scene",
              { autoAlpha: 0, duration: 0.5 },
              5.25,
            );

          const storyChapters = gsap.utils.toArray(".story-chapter");
          const storyWords = gsap.utils.toArray(".story-giant-words span");
          const storyProgress = gsap.utils.toArray(".story-progress i");
          const storyTimeline = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              anticipatePin: 1,
              end: "bottom bottom",
              pin: ".story-stage",
              pinSpacing: false,
              scrub: 1,
              start: "top top",
              trigger: ".story-scroll",
            },
          });

          storyProgress.forEach((bar, index) => {
            storyTimeline.to(
              bar,
              { duration: 0.55, scaleX: 1 },
              index === 0 ? 0 : index * 1.4,
            );

            if (index === 0) {
              return;
            }

            storyTimeline
              .to(
                storyChapters[index - 1],
                { duration: 0.45, opacity: 0, y: -55 },
                index * 1.4 - 0.45,
              )
              .to(
                storyWords[index - 1],
                { autoAlpha: 0, duration: 0.4, y: -70 },
                "<",
              )
              .fromTo(
                storyChapters[index],
                { opacity: 0, y: 70 },
                { duration: 0.65, opacity: 1, y: 0 },
                index * 1.4,
              )
              .fromTo(
                storyWords[index],
                { autoAlpha: 0, y: 80 },
                { autoAlpha: 1, duration: 0.65, y: 0 },
                "<",
              );
          });

          gsap.to(".story-orbit-one", {
            rotation: 210,
            scrollTrigger: {
              end: "bottom bottom",
              scrub: 1,
              start: "top top",
              trigger: ".story-scroll",
            },
          });
          gsap.to(".story-orbit-two", {
            rotation: -260,
            scrollTrigger: {
              end: "bottom bottom",
              scrub: 1,
              start: "top top",
              trigger: ".story-scroll",
            },
          });

          const systemsFrames = gsap.utils.toArray(".systems-frame");
          const systemsTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              anticipatePin: 1,
              end: "bottom bottom",
              pin: ".systems-stage",
              pinSpacing: false,
              scrub: 1,
              start: "top top",
              trigger: ".systems-reel",
            },
          });

          systemsTimeline
            .to(
              ".machine-ring-one",
              { duration: 4.2, rotation: 260 },
              0,
            )
            .to(
              ".machine-ring-two",
              { duration: 4.2, rotation: -190 },
              0,
            )
            .to(
              ".machine-ring-three",
              { duration: 4.2, rotation: 330 },
              0,
            )
            .to(
              ".systems-machine",
              { duration: 4.2, scale: 1.18 },
              0,
            )
            .to(
              ".systems-horizon",
              { duration: 4.2, scaleX: 1 },
              0,
            );

          systemsFrames.forEach((frame, index) => {
            if (index === 0) {
              return;
            }

            const handoff = index * 1.02;
            systemsTimeline
              .to(
                systemsFrames[index - 1],
                { duration: 0.18, opacity: 0, y: -45 },
                handoff,
              )
              .fromTo(
                frame,
                { opacity: 0, y: 70 },
                { duration: 0.4, opacity: 1, y: 0 },
                handoff + 0.14,
              );
          });

          const servicesTrack = document.querySelector(".services-track");
          if (servicesTrack) {
            gsap.to(servicesTrack, {
              ease: "none",
              scrollTrigger: {
                anticipatePin: 1,
                end: () =>
                  `+=${Math.max(
                    servicesTrack.scrollWidth - window.innerWidth + 140,
                    window.innerWidth,
                  )}`,
                invalidateOnRefresh: true,
                pin: ".services-stage",
                scrub: 1,
                start: "top top",
                trigger: ".services-scroll",
              },
              x: () =>
                -(servicesTrack.scrollWidth - window.innerWidth + 80),
            });
          }

          const projectCards = gsap.utils.toArray(".project-card");
          const projectNumbers = gsap.utils.toArray(".work-watermark i");
          const projectProgress = gsap.utils.toArray(
            ".work-progress i span",
          );
          const projectCounts = gsap.utils.toArray(
            ".work-progress-count i",
          );

          if (projectCards.length) {
            const projectItems = projectCards.map((card) => ({
              card,
              chips: gsap.utils.toArray(card.querySelectorAll(".project-stack span")),
              content: gsap.utils.toArray(
                card.querySelectorAll(
                  ".project-case-rail, .project-meta, .project-category, .project-content h3, .project-summary, .project-details, .project-stack, .project-footer",
                ),
              ),
              preview: card.querySelector(".project-preview-link"),
              previewMedia:
                card.querySelector(".project-preview-image") ??
                card.querySelector(".project-preview-gallery"),
              visual: card.querySelector(".project-visual"),
            }));

            gsap.set(
              projectItems.flatMap(({ content }) => content),
              { autoAlpha: 0, y: 26 },
            );
            gsap.set(projectItems[0].content, { autoAlpha: 1, y: 0 });
            gsap.set(
              projectItems.flatMap(({ chips }) => chips),
              { autoAlpha: 0, scale: 0.84, y: 10 },
            );
            gsap.set(projectItems[0].chips, {
              autoAlpha: 1,
              scale: 1,
              y: 0,
            });
            gsap.set(
              projectItems.map(({ preview }) => preview).filter(Boolean),
              {
                transformOrigin: "50% 50%",
                transformPerspective: 1200,
              },
            );

            const workTimeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                anticipatePin: 1,
                end: "bottom bottom",
                pin: ".work-stage",
                pinSpacing: false,
                scrub: 1.05,
                start: "top top",
                trigger: ".work-scroll",
              },
            });

            workTimeline
              .fromTo(
                ".work-heading",
                { autoAlpha: 0, y: 45 },
                {
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "power3.out",
                  y: 0,
                },
                0,
              )
              .fromTo(
                projectItems[0].preview,
                { rotation: -3.5, scale: 0.93, xPercent: -5, yPercent: 4 },
                {
                  duration: 0.86,
                  ease: "power3.out",
                  rotation: -0.6,
                  scale: 1.02,
                  xPercent: 0,
                  yPercent: 0,
                },
                0.25,
              )
              .fromTo(
                projectItems[0].content,
                { autoAlpha: 0, y: 28 },
                {
                  autoAlpha: 1,
                  duration: 0.48,
                  ease: "power3.out",
                  stagger: 0.035,
                  y: 0,
                },
                0.35,
              )
              .fromTo(
                projectItems[0].chips,
                { autoAlpha: 0, scale: 0.84, y: 10 },
                {
                  autoAlpha: 1,
                  duration: 0.36,
                  ease: "back.out(1.6)",
                  scale: 1,
                  stagger: 0.026,
                  y: 0,
                },
                0.62,
              );

            projectItems.forEach((item, index) => {
              const position = index * 1.42 + 0.35;

              workTimeline
                .fromTo(
                  item.visual,
                  { backgroundPosition: "0% 42%" },
                  {
                    backgroundPosition: "100% 58%",
                    duration: 1.22,
                  },
                  position,
                );

              if (item.preview) {
                workTimeline.fromTo(
                  item.preview,
                  {
                    rotation: index % 2 === 0 ? -2.4 : 2.4,
                    scale: 0.96,
                    xPercent: index % 2 === 0 ? -4 : 4,
                    yPercent: 4,
                  },
                  {
                    duration: 0.9,
                    ease: "power3.out",
                    rotation: index % 2 === 0 ? -0.4 : 0.4,
                    scale: 1.025,
                    xPercent: 0,
                    yPercent: 0,
                  },
                  position + 0.08,
                );
              }

              if (item.previewMedia) {
                workTimeline.fromTo(
                  item.previewMedia,
                  { scale: 1.12, yPercent: -4 },
                  {
                    duration: 1.18,
                    scale: 1.03,
                    yPercent: 3,
                  },
                  position + 0.06,
                );
              }

              if (index === 0) {
                return;
              }

              const previousCard = projectItems[index - 1].card;
              const previousNumber = projectNumbers[index - 1];
              const currentNumber = projectNumbers[index];
              const previousCount = projectCounts[index - 1];
              const currentCount = projectCounts[index];
              const handoff = position - 0.18;

              workTimeline
                .to(
                  previousCard,
                  {
                    duration: 0.42,
                    filter: "brightness(0.22) saturate(0.55)",
                    rotationX: 2,
                    scale: 0.92,
                    yPercent: -5,
                  },
                  handoff,
                )
                .fromTo(
                  item.card,
                  {
                    autoAlpha: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                    scale: 0.98,
                    yPercent: 12,
                  },
                  {
                    autoAlpha: 1,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 0.78,
                    ease: "power3.inOut",
                    scale: 1,
                    yPercent: 0,
                  },
                  handoff,
                )
                .fromTo(
                  item.content,
                  { autoAlpha: 0, y: 28 },
                  {
                    autoAlpha: 1,
                    duration: 0.46,
                    ease: "power3.out",
                    stagger: 0.034,
                    y: 0,
                  },
                  position + 0.18,
                )
                .fromTo(
                  item.chips,
                  { autoAlpha: 0, scale: 0.84, y: 10 },
                  {
                    autoAlpha: 1,
                    duration: 0.34,
                    ease: "back.out(1.55)",
                    scale: 1,
                    stagger: 0.024,
                    y: 0,
                  },
                  position + 0.48,
                )
                .to(
                  previousCard,
                  {
                    autoAlpha: 0,
                    duration: 0.08,
                  },
                  handoff + 0.72,
                )
                .to(
                  previousNumber,
                  {
                    autoAlpha: 0,
                    duration: 0.24,
                    yPercent: -35,
                  },
                  handoff - 0.08,
                )
                .fromTo(
                  currentNumber,
                  { autoAlpha: 0, yPercent: 35 },
                  {
                    autoAlpha: 1,
                    duration: 0.4,
                    ease: "power3.out",
                    yPercent: 0,
                  },
                  handoff + 0.12,
                )
                .to(
                  projectProgress[index],
                  { duration: 0.45, scaleX: 1 },
                  handoff + 0.12,
                )
                .to(
                  previousCount,
                  {
                    autoAlpha: 0,
                    duration: 0.2,
                    yPercent: -35,
                  },
                  handoff - 0.04,
                )
                .fromTo(
                  currentCount,
                  { autoAlpha: 0, yPercent: 35 },
                  {
                    autoAlpha: 1,
                    duration: 0.35,
                    yPercent: 0,
                  },
                  handoff + 0.12,
                );
            });

            workTimeline.to({}, { duration: 0.7 });
          }

          gsap.utils.toArray(".reveal").forEach((element) => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 52 },
              {
                duration: 0.9,
                ease: "power3.out",
                opacity: 1,
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  once: true,
                },
                y: 0,
              },
            );
          });

          const experienceTrack =
            document.querySelector(".experience-track");
          if (experienceTrack) {
            gsap.to(experienceTrack, {
              ease: "none",
              scrollTrigger: {
                anticipatePin: 1,
                end: () =>
                  `+=${Math.max(
                    experienceTrack.scrollWidth - window.innerWidth + 160,
                    window.innerWidth,
                  )}`,
                invalidateOnRefresh: true,
                pin: ".experience-stage",
                scrub: 1,
                start: "top top",
                trigger: ".experience-scroll",
              },
              x: () =>
                -(experienceTrack.scrollWidth - window.innerWidth + 80),
            });
          }

          return undefined;
        },
      );

      window.requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => media.revert();
    },
    { dependencies: [introComplete], scope: appRef },
  );

  return (
    <>
      {!introComplete && <IntroLoader onComplete={completeIntro} />}
      <div className="app" ref={appRef}>
        <Navigation />
        <main>
          <Hero />
          <Story />
          <SystemsReel />
          <Services />
          <Work />
          <Skills />
          <Experience />
          <Audience />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
