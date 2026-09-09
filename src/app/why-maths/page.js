import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WhyMaths() {
  return (
    <>
      <Navbar />

      <main className="why-maths-page">

        {/* Hero */}
        <section className="why-hero">
          <div className="why-hero-content">
            <p className="eyebrow">WHY MATHEMATICS?</p>

            <h1>
              Mathematics is more than
              <span> numbers.</span>
            </h1>

            <p className="hero-description">
              Mathematics helps us understand problems, recognise patterns,
              make decisions and prepare for a world that is becoming
              increasingly driven by technology and data.
            </p>
          </div>
        </section>


        {/* Introduction */}
        <section className="why-section intro-section">
          <div className="section-heading">
            <span>01</span>
            <h2>Why does mathematics matter?</h2>
          </div>

          <div className="section-content">
            <p>
              Mathematics is part of far more than the classroom. It is used
              when we manage money, interpret information, measure things,
              analyse data and solve everyday problems.
            </p>

            <p>
              Learning mathematics also develops ways of thinking that can be
              useful far beyond a mathematics examination. It encourages
              logical reasoning, problem-solving and the ability to work
              through complex questions step by step.
            </p>
          </div>
        </section>


        {/* Everyday Life */}
        <section className="why-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Mathematics in everyday life</h2>
          </div>

          <div className="info-grid">

            <article className="info-card">
              <div className="card-number">01</div>
              <h3>Money</h3>
              <p>
                Mathematics helps us understand budgets, percentages,
                interest, prices and financial decisions.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">02</div>
              <h3>Information</h3>
              <p>
                Graphs, statistics and percentages are used to communicate
                information and help us understand what the numbers are
                telling us.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">03</div>
              <h3>Problem Solving</h3>
              <p>
                Mathematics teaches us to break difficult problems into
                smaller parts and work towards logical solutions.
              </p>
            </article>

          </div>
        </section>


        {/* Careers */}
        <section className="why-section careers-section">
          <div className="section-heading">
            <span>03</span>
            <h2>Mathematics and careers</h2>
          </div>

          <div className="section-content">
            <p>
              Mathematics can also help keep future opportunities open.
              Different careers require different levels and types of
              mathematical knowledge, but mathematical thinking appears
              across many fields.
            </p>
          </div>

          <div className="info-grid">

            <article className="info-card">
              <h3>Engineering & Science</h3>
              <p>
                Mathematics is used to model systems, analyse problems,
                understand measurements and develop solutions.
              </p>
            </article>

            <article className="info-card">
              <h3>Technology & Computing</h3>
              <p>
                Programming, algorithms, data science, cybersecurity and
                artificial intelligence all involve mathematical ideas.
              </p>
            </article>

            <article className="info-card">
              <h3>Business & Finance</h3>
              <p>
                Mathematics and statistics help with analysing money, risk,
                markets, data and business decisions.
              </p>
            </article>

            <article className="info-card">
              <h3>Health Sciences</h3>
              <p>
                Mathematics and statistics are used in research, measurements,
                data analysis and understanding health information.
              </p>
            </article>

          </div>
        </section>


        {/* South Africa */}
        <section className="why-section sa-section">
          <div className="section-heading">
            <span>04</span>
            <h2>Why mathematics matters to South Africa</h2>
          </div>

          <div className="sa-highlight">
            <p>
              A country needs people who can solve problems, understand
              information and adapt to changing technologies.
            </p>
          </div>

          <div className="section-content">
            <p>
              For South Africa, developing strong mathematical skills is
              important for education, employment, innovation and participation
              in an increasingly technological economy.
            </p>

            <p>
              Giving learners the opportunity to develop their mathematical
              abilities can help them prepare for a wider range of future
              opportunities.
            </p>
          </div>
        </section>


        {/* Future */}
        <section className="why-section future-section">
          <div className="section-heading">
            <span>05</span>
            <h2>Mathematics and the future</h2>
          </div>

          <div className="future-content">
            <h3>
              The world is changing.
              <span> Mathematical thinking still matters.</span>
            </h3>

            <p>
              Artificial intelligence, automation and data-driven technologies
              are changing the way people work. Mathematics provides an
              important foundation for understanding many of these technologies
              and the problems they are designed to solve.
            </p>
          </div>
        </section>


        {/* Closing */}
        <section className="why-cta">
          <div>
            <p className="eyebrow">KEEP YOUR OPTIONS OPEN</p>

            <h2>
              You don't have to know
              <span> your future yet.</span>
            </h2>

            <p>
              Learning mathematics gives you another tool for solving problems,
              understanding information and exploring opportunities.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}