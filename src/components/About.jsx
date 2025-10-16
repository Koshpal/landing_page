import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const spans = textRef.current.querySelectorAll(".scroll-animate");

    gsap.set(spans, {
      backgroundPositionX: "100%",
    });

    gsap.to(spans, {
      backgroundPositionX: "0%",
      stagger: 0.3,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 70%",
        end: "bottom 40%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      aria-labelledby="about-headline"
      className="w-full bg-white px-4 py-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          ref={textRef}
          id="about-headline"
          className="text-center font-extrabold leading-tight"
          style={{
            fontSize: "clamp(28px, 4.5vw, 64px)",
            lineHeight: 1.1,
            margin: 0,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          <span className="scroll-animate">
            Our certified advisors deliver practical,
          </span>

          <br />

          <span className="scroll-animate" style={{ display: "inline-block", marginTop: "0.2rem" }}>
            India-specific coaching—so your people act with
          </span>
          <br />
          <span className="scroll-animate" style={{ display: "inline-block" }}>
            confidence, not guesswork.
          </span>
        </h2>
      </div>

      <style jsx>{`
        .scroll-animate {
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          background-image: linear-gradient(
            to right,
            rgb(33, 58, 106) 50%,
            rgb(127, 146, 177) 50%
          );
          background-size: 200% 100%;
          background-position-x: 100%;
        }
      `}</style>
    </section>
  );
}
