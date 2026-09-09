export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Maths in South Africa</h2>
          <p>
            An informative project exploring the importance of mathematics
            for South African learners and the future of our country.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#why-maths">Why Maths?</a>
          <a href="#maths-ai">Maths & AI</a>
          <a href="#south-africa">Maths in South Africa</a>
          <a href="#improve">Improve & Resources</a>
        </div>

        <div className="footer-contact">
          <h3>About the Creator</h3>

          <p><strong>Nduduzo Mlaba</strong></p>
          <p>KwaZulu-Natal, South Africa</p>
          <a href="mailto:mlabanduduzo0@gmail.com">
            mlabanduduzo0@gmail.com
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Nduduzo Mlaba · Built with Next.js, React, JavaScript & CSS
        </p>
      </div>
    </footer>
  );
}