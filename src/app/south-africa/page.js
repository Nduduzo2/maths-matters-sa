import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SouthAfricaMaths() {
  return (
    <>
      <Navbar />

      <main className="sa-maths-page">

        {/* HERO */}
        <section className="sa-hero">
          <div className="sa-hero-content">

            <p className="eyebrow">SOUTH AFRICAN MATHEMATICS</p>

            <h1>
              Where does
              <span> South Africa </span>
              stand?
            </h1>

            <p className="hero-description">
              TIMSS gives us a way to look beyond individual marks and examine
              mathematics achievement across South Africa, over time and in
              comparison with other education systems.
            </p>

            <a href="#timss" className="hero-button">
              Explore TIMSS ↓
            </a>

          </div>
        </section>


        {/* INTRO / TIMSS */}
        <section className="sa-section" id="timss">

          <div className="section-heading">
            <span>01</span>
            <h2>What is TIMSS?</h2>
          </div>

          <div className="sa-intro-grid">

            <div className="sa-intro-text">

              <p>
                The Trends in International Mathematics and Science Study,
                commonly known as TIMSS, is an international assessment that
                measures mathematics and science achievement.
              </p>

              <p>
                It is conducted every four years and allows participating
                education systems to monitor changes in achievement over time
                and compare their results internationally.
              </p>

              <p>
                TIMSS also collects information about the environments in which
                learners study, including their homes, schools and classrooms.
              </p>

            </div>

            <div className="timss-fact-box">

              <span className="fact-label">TIMSS 2023</span>

              <strong>59</strong>

              <p>
                education systems participated in the Grade 4/5
                mathematics and science assessment.
              </p>

              <div className="fact-divider" />

              <strong>44</strong>

              <p>
                education systems participated in the Grade 8/9
                assessment.
              </p>

            </div>

          </div>

          <p className="source-note">
            TIMSS is developed by the International Association for the
            Evaluation of Educational Achievement (IEA). In South Africa,
            the Human Sciences Research Council hosts the National Research
            Coordinator.
          </p>

        </section>


        {/* SOUTH AFRICAN GRADES */}
        <section className="sa-section grade-section">

          <div className="section-heading">
            <span>02</span>
            <h2>Why Grade 5 and Grade 9?</h2>
          </div>

          <div className="grade-intro">

            <p>
              Most countries participating in TIMSS assess learners around
              Grade 4 and Grade 8. South Africa assesses learners in
              <strong> Grade 5 and Grade 9</strong>.
            </p>

            <p>
              This difference is important when interpreting international
              comparisons. South Africa changed from Grade 8 to Grade 9 partly
              because the Grade 9 assessment was considered a better match for
              the mathematics curriculum being covered in South African
              schools.
            </p>

          </div>

          <div className="grade-cards">

            <article className="grade-card">

              <span>PRIMARY</span>

              <strong>Grade 5</strong>

              <p>
                Gives us an important picture of mathematical achievement
                during the primary-school years.
              </p>

            </article>

            <article className="grade-card">

              <span>LOWER SECONDARY</span>

              <strong>Grade 9</strong>

              <p>
                Shows what mathematical achievement looks like as learners
                approach the end of the General Education and Training phase.
              </p>

            </article>

          </div>

          <div className="warning-box">

            <span>IMPORTANT</span>

            <p>
              Grade 5 and Grade 9 TIMSS scores should not be directly compared.
              Each grade has its own assessment scale and level of difficulty.
            </p>

          </div>

        </section>


        {/* INTERNATIONAL COMPARISON */}
        <section className="sa-section comparison-section">

          <div className="section-heading">
            <span>03</span>
            <h2>South Africa vs the world</h2>
          </div>

          <div className="comparison-intro">

            <p>
              In TIMSS 2023, South African Grade 5 learners achieved an
              average mathematics score of:
            </p>

            <div className="big-score">
              <strong>362</strong>
              <span>Grade 5 Mathematics</span>
            </div>

            <p>
              TIMSS uses international benchmarks to describe what learners
              know and can do. The first benchmark is <strong>400 points</strong>,
              described as the Low International Benchmark.
            </p>

          </div>

          <div className="benchmark-bar">

            <div className="benchmark-item">
              <span>400</span>
              <p>Low</p>
            </div>

            <div className="benchmark-item">
              <span>475</span>
              <p>Intermediate</p>
            </div>

            <div className="benchmark-item">
              <span>550</span>
              <p>High</p>
            </div>

            <div className="benchmark-item">
              <span>625</span>
              <p>Advanced</p>
            </div>

          </div>

          <div className="score-message">

            <p>
              South Africa's 2023 Grade 5 average was therefore below the
              Low International Benchmark.
            </p>

          </div>

          <p className="section-source">
            TIMSS international achievement scales have a centrepoint of 500
            and benchmarks at 400, 475, 550 and 625.
          </p>

        </section>


        {/* TREND */}
        <section className="sa-section trend-section" id="trends">

          <div className="section-heading">
            <span>04</span>
            <h2>Explore the trends</h2>
          </div>

          <div className="trend-intro">

            <p>
              Looking at a single year can hide the bigger story. TIMSS is
              particularly useful because it allows South Africa to track
              achievement across different assessment cycles.
            </p>

          </div>

          <div className="trend-grid">

            <article className="trend-card">

              <span>GRADE 5 · MATHEMATICS</span>

              <div className="trend-number">376</div>

              <p>2015</p>

            </article>

            <div className="trend-arrow">→</div>

            <article className="trend-card">

              <span>GRADE 5 · MATHEMATICS</span>

              <div className="trend-number">374</div>

              <p>2019</p>

            </article>

            <div className="trend-arrow">→</div>

            <article className="trend-card current">

              <span>GRADE 5 · MATHEMATICS</span>

              <div className="trend-number">362</div>

              <p>2023</p>

            </article>

          </div>

          <div className="trend-summary">

            <h3>
              The Grade 5 result declined between 2019 and 2023.
            </h3>

            <p>
              South Africa's Grade 5 mathematics average fell from 374 in
              2019 to 362 in 2023 — a decline of 12 points.
            </p>

          </div>


          {/* GRADE 9 */}
          <div className="grade9-trend">

            <div>

              <span className="small-label">
                GRADE 9 · MATHEMATICS
              </span>

              <h3>
                A different trend appears at Grade 9.
              </h3>

            </div>

            <div className="grade9-numbers">

              <div>
                <span>2019</span>
                <strong>389</strong>
              </div>

              <div className="trend-arrow">→</div>

              <div>
                <span>2023</span>
                <strong>397</strong>
              </div>

            </div>

            <p>
              The Grade 9 average increased by 8 points between 2019 and
              2023. This should be interpreted as a trend within the Grade 9
              scale, rather than compared directly with the Grade 5 score.
            </p>

          </div>

        </section>


        {/* FOUNDATION */}
        <section className="sa-section foundation-section" id="foundation">

          <div className="section-heading">
            <span>05</span>
            <h2>Why the foundation matters</h2>
          </div>

          <div className="foundation-layout">

            <div className="foundation-big">

              <span>THE IDEA</span>

              <h3>
                Mathematics does not suddenly become difficult in Grade 10.
              </h3>

            </div>

            <div className="foundation-text">

              <p>
                The mathematics learners encounter later in school builds on
                knowledge developed during the earlier years.
              </p>

              <p>
                Number sense, calculation, mathematical reasoning, interpreting
                information and solving problems are part of the foundation on
                which more advanced mathematics can be built.
              </p>

              <p>
                TIMSS does not prove that a particular Grade 5 result causes a
                particular FET outcome. What it does provide is an indication
                of how learners are performing before they reach the later
                stages of schooling.
              </p>

            </div>

          </div>

          <div className="education-path">

            <div>
              <span>01</span>
              <strong>FOUNDATION</strong>
              <p>Early mathematical understanding</p>
            </div>

            <div className="path-arrow">→</div>

            <div>
              <span>02</span>
              <strong>INTERMEDIATE</strong>
              <p>Building mathematical fluency</p>
            </div>

            <div className="path-arrow">→</div>

            <div>
              <span>03</span>
              <strong>SENIOR</strong>
              <p>More complex mathematical reasoning</p>
            </div>

            <div className="path-arrow">→</div>

            <div>
              <span>04</span>
              <strong>FET</strong>
              <p>Advanced school mathematics</p>
            </div>

          </div>

        </section>


        {/* INEQUALITY */}
        <section className="sa-section inequality-section" id="bigger-picture">

          <div className="section-heading">
            <span>06</span>
            <h2>The bigger picture</h2>
          </div>

          <div className="inequality-intro">

            <p>
              A national average can tell us something important — but it
              cannot tell us the whole story.
            </p>

            <p>
              South Africa has substantial differences in mathematics
              achievement between different groups of learners and schools.
            </p>

          </div>


          <div className="province-highlight">

            <div className="province-heading">

              <span>GRADE 5 MATHEMATICS · 2023</span>

              <h3>
                Achievement differs significantly between provinces.
              </h3>

            </div>

            <div className="province-grid">

              <div className="province-card highest">
                <span>WESTERN CAPE</span>
                <strong>406</strong>
              </div>

              <div className="province-card">
                <span>GAUTENG</span>
                <strong>404</strong>
              </div>

              <div className="province-card">
                <span>NORTH WEST</span>
                <strong>309</strong>
              </div>

              <div className="province-card lowest">
                <span>LIMPOPO</span>
                <strong>316</strong>
              </div>

            </div>

            <p className="province-note">
              These provincial averages illustrate the differences within
              South Africa. They should not be interpreted as representing
              every school or learner in a province.
            </p>

          </div>


          {/* FACTORS */}
          <div className="factors-section">

            <h3>
              What factors are connected to these differences?
            </h3>

            <div className="factor-grid">

              <article className="factor-card">

                <span>01</span>

                <h4>Socioeconomic background</h4>

                <p>
                  Learners' socioeconomic circumstances are associated with
                  differences in educational achievement.
                </p>

              </article>


              <article className="factor-card">

                <span>02</span>

                <h4>Language</h4>

                <p>
                  The language in which learners experience mathematics can
                  matter when they are learning and demonstrating their
                  understanding.
                </p>

              </article>


              <article className="factor-card">

                <span>03</span>

                <h4>School resources</h4>

                <p>
                  Differences in school resources, infrastructure and learning
                  environments form part of the wider context surrounding
                  learner achievement.
                </p>

              </article>


              <article className="factor-card">

                <span>04</span>

                <h4>Teaching and learning</h4>

                <p>
                  TIMSS also collects information about teachers, classroom
                  practices, instructional time and challenges to teaching and
                  learning.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* WHAT TIMSS DOESN'T TELL US */}
        <section className="sa-section limitations-section">

          <div className="section-heading">
            <span>07</span>
            <h2>What TIMSS can — and cannot — tell us</h2>
          </div>

          <div className="limitations-grid">

            <div className="can-box">

              <span>WHAT IT CAN TELL US</span>

              <ul>
                <li>How learners perform on the TIMSS mathematics assessment.</li>
                <li>How achievement changes over time.</li>
                <li>How South Africa compares internationally.</li>
                <li>How achievement differs across groups and contexts.</li>
                <li>What learners, teachers and schools report about their educational environments.</li>
              </ul>

            </div>


            <div className="cannot-box">

              <span>WHAT IT CANNOT TELL US</span>

              <ul>
                <li>That one factor alone causes low mathematics achievement.</li>
                <li>That every learner in a particular group performs the same way.</li>
                <li>That Grade 5 and Grade 9 scores can be directly compared.</li>
                <li>That a single assessment completely describes South African mathematics education.</li>
              </ul>

            </div>

          </div>

        </section>


        {/* FINAL MESSAGE */}
        <section className="sa-cta">

          <p className="eyebrow">THE BIGGER QUESTION</p>

          <h2>
            The numbers matter.
            <span> Understanding them matters more.</span>
          </h2>

          <p>
            TIMSS gives South Africa evidence about where mathematics
            achievement stands, how it changes and where differences exist.
            The challenge is turning that evidence into better mathematical
            foundations and better opportunities for learners.
          </p>

        </section>


        {/* SOURCES */}
        <section className="sa-sources">

          <h2>Sources & further reading</h2>

          <p>
            South African Department of Basic Education — TIMSS 2023:
            South Africa Highlights Report
          </p>

          <p>
            TIMSS South Africa — International Mathematics & Science Results
          </p>

          <p>
            TIMSS South Africa — Frequently Asked Questions
          </p>

          <p>
            TIMSS & PIRLS International Study Center — TIMSS 2023
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}