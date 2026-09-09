
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MathsAI() {
  return (
    <>
      <Navbar />

      <main className="maths-ai-page">

        {/* HERO */}
        <section className="ai-hero">
          <div className="ai-hero-content">
            <p className="eyebrow">MATHEMATICS & AI</p>

            <h1>
              Understanding AI
              <span> starts with understanding data.</span>
            </h1>

            <p className="hero-description">
              Artificial intelligence is becoming increasingly important in
              education, work and technology. Mathematics provides some of the
              tools used to understand data, identify patterns and evaluate
              the performance of AI systems.
            </p>
          </div>
        </section>


        {/* WHAT IS AI? */}
        <section className="ai-section">
          <div className="section-heading">
            <span>01</span>
            <h2>What is artificial intelligence?</h2>
          </div>

          <div className="section-content">
            <p>
              Artificial intelligence, or AI, refers to computer systems
              designed to perform tasks that can involve abilities such as
              recognising patterns, making predictions and processing
              information.
            </p>

            <p>
              One important area of AI is machine learning. Machine-learning
              systems can use information from previous data to identify
              patterns and make predictions about new data.
            </p>

            <p className="source-note">
              Based on descriptions of machine learning from the National
              Institute of Standards and Technology (NIST).
            </p>
          </div>
        </section>


        {/* MATHEMATICS */}
        <section className="ai-section">
          <div className="section-heading">
            <span>02</span>
            <h2>Where does mathematics come in?</h2>
          </div>

          <div className="ai-grid">

            <article className="ai-card">
              <div className="card-number">01</div>

              <h3>Statistics</h3>

              <p>
                Statistics provides methods for working with data, identifying
                patterns and evaluating results. Statistical methods are also
                used when assessing how well AI systems perform.
              </p>
            </article>

            <article className="ai-card">
              <div className="card-number">02</div>

              <h3>Probability</h3>

              <p>
                Probability provides a mathematical way of reasoning about
                uncertainty and possible outcomes, which is important when
                systems make predictions.
              </p>
            </article>

            <article className="ai-card">
              <div className="card-number">03</div>

              <h3>Algebra & Linear Algebra</h3>

              <p>
                Algebra and linear algebra provide mathematical tools for
                representing relationships between quantities and working with
                data and models.
              </p>
            </article>

            <article className="ai-card">
              <div className="card-number">04</div>

              <h3>Mathematical Models</h3>

              <p>
                Mathematical models allow relationships and patterns to be
                represented in a structured way. Machine learning uses
                mathematical and statistical models to work with data.
              </p>
            </article>

          </div>

          <p className="section-source">
            Mathematical and statistical methods are discussed in IBM's
            overview of statistical machine learning and NIST's research on
            machine learning and AI evaluation.
          </p>
        </section>


        {/* DATA */}
        <section className="ai-section data-section">

          <div className="section-heading">
            <span>03</span>
            <h2>AI depends on data</h2>
          </div>

          <div className="data-layout">

            <div className="data-number">
              <span>01</span>
              <strong>DATA</strong>
            </div>

            <div className="section-content">
              <p>
                Many machine-learning systems learn from data. Mathematical
                and statistical methods help systems identify relationships
                and patterns within that data.
              </p>

              <p>
                This is why being comfortable with numbers, graphs,
                statistics and probability can be valuable when working with
                AI-related information.
              </p>

              <p>
                It also helps people question whether a result is reasonable
                instead of simply accepting a computer-generated answer.
              </p>
            </div>

          </div>
        </section>


        {/* CRITICAL THINKING */}
        <section className="ai-section important-section">

          <div className="important-box">

            <p className="eyebrow">THE HUMAN SIDE OF AI</p>

            <h2>
              AI can process information.
              <span> People still need to judge it.</span>
            </h2>

            <p>
              Understanding AI is not only about learning how computers work.
              UNESCO's AI competency framework for students highlights
              foundational AI knowledge and critical judgement as important
              parts of preparing students for the AI era.
            </p>

          </div>

        </section>


        {/* SOUTH AFRICA */}
        <section className="ai-section">

          <div className="section-heading">
            <span>04</span>
            <h2>Why this matters in South Africa</h2>
          </div>

          <div className="section-content">

            <p>
              AI and digital skills are becoming part of South Africa's
              education and workforce-development discussions. Government
              initiatives have included partnerships aimed at expanding
              digital skills, integrating AI into higher education and
              preparing students for changing workplace requirements.
            </p>

            <p>
              For learners, this makes strong foundations in mathematics,
              problem-solving, data literacy and digital skills increasingly
              useful areas to develop.
            </p>

          </div>

          <div className="sa-ai-highlight">
            <p>
              Mathematics is not the only skill needed for the AI era —
              but it can provide an important foundation for understanding
              data, models and quantitative problems.
            </p>
          </div>

        </section>


        {/* WHAT LEARNERS CAN DO */}
        <section className="ai-section">

          <div className="section-heading">
            <span>05</span>
            <h2>What can learners do?</h2>
          </div>

          <div className="ai-grid">

            <article className="ai-card">
              <h3>Strengthen your mathematics</h3>

              <p>
                Focus on understanding concepts rather than only memorising
                procedures. Strong foundations make more advanced ideas easier
                to approach.
              </p>
            </article>

            <article className="ai-card">
              <h3>Learn to work with data</h3>

              <p>
                Become comfortable with graphs, percentages, statistics and
                probability. These skills help you interpret information
                critically.
              </p>
            </article>

            <article className="ai-card">
              <h3>Think critically</h3>

              <p>
                When an AI system gives you an answer, ask whether it is
                sensible, supported by evidence and appropriate for the
                problem.
              </p>
            </article>

            <article className="ai-card">
              <h3>Keep learning</h3>

              <p>
                AI is developing quickly. Building strong foundations in
                mathematics, technology and problem-solving can help you adapt
                as new tools appear.
              </p>
            </article>

          </div>

        </section>


        {/* FINAL MESSAGE */}
        <section className="ai-cta">

          <p className="eyebrow">THE FUTURE</p>

          <h2>
            Don't just use AI.
            <span> Understand it.</span>
          </h2>

          <p>
            Mathematics can help you develop the ability to work with data,
            reason about problems and question the results produced by
            technology.
          </p>

        </section>


        {/* SOURCES */}
        <section className="ai-sources">

          <h2>Sources</h2>

          <p>
            IBM — Statistical Machine Learning
          </p>

          <p>
            National Institute of Standards and Technology (NIST) —
            Machine Learning and AI Evaluation
          </p>

          <p>
            UNESCO — AI Competency Framework for Students
          </p>

          <p>
            South African Government — AI and Digital Skills Development
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

