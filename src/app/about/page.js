import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-hero-content">
            <p className="section-label">ABOUT THE PROJECT</p>

            <h1>
              Why does this
              <span> website exist?</span>
            </h1>

            <p className="hero-description">
              Mathematics plays an important role in education, careers,
              technology and South Africa's future. This website was created
              to explore that importance and encourage learners to see
              mathematics as more than just a school subject.
            </p>
          </div>
        </section>


        {/* WHY THIS PROJECT */}
        <section className="about-section">

          <div className="section-heading">
            <p className="section-label">01 — THE PURPOSE</p>

            <h2>
              Mathematics is more than
              <span> numbers.</span>
            </h2>

            <p>
              This project aims to make the importance of mathematics easier
              to understand by connecting it to real-world opportunities,
              technology and the future of South Africa.
            </p>
          </div>

        </section>


        {/* WHAT YOU'LL FIND */}
        <section className="about-section">

          <div className="section-heading">
            <p className="section-label">02 — EXPLORE THE WEBSITE</p>

            <h2>
              What you'll
              <span> find here.</span>
            </h2>
          </div>

          <div className="about-grid">

            <article className="about-card">
              <span>01</span>

              <h3>Why Maths?</h3>

              <p>
                Discover why mathematics matters in everyday life, future
                careers and South Africa.
              </p>
            </article>

            <article className="about-card">
              <span>02</span>

              <h3>Maths & AI</h3>

              <p>
                Explore the connection between mathematics, data, artificial
                intelligence and the technology of the future.
              </p>
            </article>

            <article className="about-card">
              <span>03</span>

              <h3>Maths in South Africa</h3>

              <p>
                Look at South Africa's mathematics performance, TIMSS results
                and the trends behind the numbers.
              </p>
            </article>

            <article className="about-card">
              <span>04</span>

              <h3>Improve & Resources</h3>

              <p>
                Find practical ways to improve your mathematics and useful
                resources for FET learners.
              </p>
            </article>

          </div>

        </section>


        {/* CREATOR */}
        <section className="about-section creator-section">

          <div className="creator-content">

            <div>
              <p className="section-label">03 — THE CREATOR</p>

              <h2>
                Built by
                <span> Nduduzo Mlaba.</span>
              </h2>
            </div>

            <p>
              An aspiring mathematics teacher interested in mathematics,
              education and technology, and in helping learners see the value
              of mathematics beyond the classroom.
            </p>

          </div>

        </section>


        {/* TECHNOLOGIES */}
        <section className="about-section tech-section">

          <div className="section-heading">
            <p className="section-label">04 — BUILT WITH</p>

            <h2>
              Simple
              <span> technologies.</span>
            </h2>
          </div>

          <div className="tech-list">
            <span>Next.js</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

        </section>


        {/* SOURCES */}
        <section className="about-section sources-section">

          <div className="section-heading">
            <p className="section-label">05 — SOURCES & RESEARCH</p>

            <h2>
              Built on
              <span> research.</span>
            </h2>

            <p>
              The information presented on this website is based on research
              from organisations and educational resources including the
              South African Department of Basic Education, TIMSS, UNESCO,
              NIST, IBM and Siyavula.
            </p>
          </div>

        </section>


        {/* FINAL MESSAGE */}
        <section className="about-cta">

          <div>
            <p className="section-label">WHY IT MATTERS</p>

            <h2>
              Mathematics is more than
              <span> a subject.</span>
            </h2>

            <p>
              It is a tool for understanding the world, solving problems and
              building what comes next.
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}