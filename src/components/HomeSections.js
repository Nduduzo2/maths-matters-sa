"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function HomeSections() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* WHY MATHEMATICS */}
      <section className="overview-section why-section">
        <div className="overview-container">

          <div className="section-intro reveal">
            <span className="section-number">01 / WHY MATHEMATICS</span>

            <h2>
              Mathematics gives you
              <span> more than an exam mark.</span>
            </h2>

            <p>
              It develops the way you think, solve problems and approach
              difficult situations. Those skills can stay with you long after
              you leave the classroom.
            </p>

            <Link href="/why-maths" className="text-link">
              Discover why mathematics matters <span>→</span>
            </Link>
          </div>

          <div className="idea-grid">

            <div className="idea-card reveal">
              <div className="idea-icon">01</div>
              <h3>Think</h3>
              <p>
                Mathematics encourages logical, analytical and structured
                thinking.
              </p>
            </div>

            <div className="idea-card reveal">
              <div className="idea-icon">02</div>
              <h3>Explore</h3>
              <p>
                Mathematics can open pathways into a wide range of university
                courses and careers.
              </p>
            </div>

            <div className="idea-card reveal">
              <div className="idea-icon">03</div>
              <h3>Create</h3>
              <p>
                From engineering to technology, mathematical ideas help people
                build and understand the world around us.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* AI SECTION */}
      <section className="overview-section ai-section">
        <div className="overview-container ai-container">

          <div className="ai-visual reveal">
            <div className="ai-ring ring-one"></div>
            <div className="ai-ring ring-two"></div>

            <div className="ai-core">
              <span>AI</span>
            </div>

            <div className="ai-equation equation-one">
              f(x)
            </div>

            <div className="ai-equation equation-two">
              ∑ x²
            </div>

            <div className="ai-equation equation-three">
              P(A)
            </div>
          </div>


          <div className="section-intro reveal">
            <span className="section-number">02 / MATHEMATICS × AI</span>

            <h2>
              The future is
              <span> mathematical.</span>
            </h2>

            <p>
              Artificial intelligence may seem like something completely
              separate from school mathematics. In reality, mathematics sits
              behind many of the ideas that make modern AI possible.
            </p>

            <p>
              Understanding mathematics can help learners become more
              prepared for a world increasingly shaped by data, algorithms
              and intelligent technology.
            </p>

            <Link href="/maths-ai" className="text-link">
              Explore mathematics and the future <span>→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* SOUTH AFRICA */}
      <section className="overview-section sa-section">
        <div className="overview-container">

          <div className="section-intro centered reveal">
            <span className="section-number">03 / MATHEMATICS IN SOUTH AFRICA</span>

            <h2>
              How is South Africa
              <span> really doing?</span>
            </h2>

            <p>
              Behind the marks and percentages is a much bigger story about
              mathematics education in South Africa.
            </p>
          </div>


          <div className="sa-preview-grid">

            <div className="sa-preview-card reveal">
              <span className="preview-label">TIMSS</span>

              <h3>
                International
                <br />
                performance
              </h3>

              <p>
                What does international assessment data tell us about
                mathematics achievement in South Africa?
              </p>

              <Link href="/south-africa">
                Explore TIMSS <span>→</span>
              </Link>
            </div>


            <div className="sa-preview-card featured reveal">
              <span className="preview-label">MATRIC</span>

              <h3>
                The story behind
                <br />
                the marks
              </h3>

              <p>
                Matric mathematics results can reveal important patterns,
                challenges and changes over time.
              </p>

              <Link href="/south-africa">
                Explore the trends <span>→</span>
              </Link>
            </div>


            <div className="sa-preview-card reveal">
              <span className="preview-label">ACCESS</span>

              <h3>
                Who gets the
                <br />
                opportunity?
              </h3>

              <p>
                The availability of Mathematics in schools is another important
                part of understanding the country's bigger picture.
              </p>

              <Link href="/south-africa">
                See the bigger picture <span>→</span>
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* IMPROVE CTA */}
      <section className="improve-section">
        <div className="improve-glow"></div>

        <div className="improve-container reveal">

          <span className="section-number">04 / YOUR TURN</span>

          <h2>
            Mathematics can be
            <span> difficult.</span>
            <br />
            That doesn't mean you
            <span> can't improve.</span>
          </h2>

          <p>
            Better marks aren't about being a "maths person". They come from
            understanding concepts, practising effectively and learning from
            your mistakes.
          </p>

          <Link href="/improve" className="improve-button">
            Learn how to improve
            <span>→</span>
          </Link>

        </div>
      </section>
    </>
  );
}