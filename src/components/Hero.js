import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background decoration */}
      <div className="hero-grid"></div>

      <div className="hero-circle hero-circle-one"></div>
      <div className="hero-circle hero-circle-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-label">
            <span className="pulse"></span>
            MATHEMATICS × THE FUTURE
          </div>

          <h1>
            Mathematics is
            <span className="hero-highlight"> more than</span>
            <br />
            a school subject.
          </h1>

          <p className="hero-description">
            It is a language of problem-solving, innovation and opportunity —
            and it could play a bigger role in South Africa&apos;s future than
            you think.
          </p>

          <div className="hero-buttons">
            <Link href="/why-maths" className="hero-button primary">
              Discover Why Maths
              <span>→</span>
            </Link>

            <Link href="/south-africa" className="hero-button secondary">
              Explore South Africa
            </Link>
          </div>

        </div>

        {/* Mathematical visual */}
        <div className="hero-visual">

          <div className="math-orbit orbit-one"></div>
          <div className="math-orbit orbit-two"></div>

          <div className="math-core">
            <span>∑</span>
          </div>

          <div className="math-symbol symbol-one">π</div>
          <div className="math-symbol symbol-two">∞</div>
          <div className="math-symbol symbol-three">√</div>
          <div className="math-symbol symbol-four">x²</div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}