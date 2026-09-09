import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { books } from "@/data/books";
import { youtubeChannels } from "@/data/youtube";
import { websites } from "@/data/websites";

export default function ImprovePage() {
  const learningWebsites = websites.filter(
    (website) => website.category === "Learning & Practice"
  );

  const pastPaperWebsites = websites.filter(
    (website) => website.category === "Past Papers"
  );

  return (
    <>
      <Navbar />

      <main className="improve-page">

        {/* HERO */}
        <section className="improve-hero">
          <div className="improve-hero-content">
            <p className="section-label">IMPROVE & RESOURCES</p>

            <h1>
              You can get better
              <span> at mathematics.</span>
            </h1>

            <p className="hero-description">
              Mathematics is not something you are simply good or bad at.
              Understanding concepts, practising problems and learning from
              mistakes can help you improve.
            </p>

            <a href="#learning-cycle" className="hero-button">
              Start improving
            </a>
          </div>
        </section>


        {/* LEARNING CYCLE */}
        <section id="learning-cycle" className="improve-section">
          <div className="section-heading">
            <p className="section-label">01 — THE LEARNING CYCLE</p>

            <h2>
              Mistakes are part of
              <span> learning mathematics.</span>
            </h2>

            <p>
              Getting a question wrong does not mean you cannot do mathematics.
              A mistake can show you exactly what you need to understand next.
            </p>
          </div>

          <div className="learning-cycle">

            <div className="cycle-step">
              <span>01</span>
              <h3>Learn</h3>
              <p>
                Understand the concept and study worked examples.
              </p>
            </div>

            <div className="cycle-step">
              <span>02</span>
              <h3>Practise</h3>
              <p>
                Attempt questions yourself instead of only reading solutions.
              </p>
            </div>

            <div className="cycle-step">
              <span>03</span>
              <h3>Make a mistake</h3>
              <p>
                Getting something wrong gives you information about what needs
                more attention.
              </p>
            </div>

            <div className="cycle-step">
              <span>04</span>
              <h3>Understand</h3>
              <p>
                Find the exact step where your reasoning went wrong.
              </p>
            </div>

            <div className="cycle-step">
              <span>05</span>
              <h3>Try again</h3>
              <p>
                Solve a similar problem without immediately looking at the
                solution.
              </p>
            </div>

            <div className="cycle-step">
              <span>06</span>
              <h3>Improve</h3>
              <p>
                Repeating this process builds stronger mathematical
                understanding.
              </p>
            </div>

          </div>
        </section>


        {/* STUDY TIPS */}
        <section className="improve-section study-section">
          <div className="section-heading">
            <p className="section-label">02 — HOW TO STUDY</p>

            <h2>
              Don't just study mathematics.
              <span> Do mathematics.</span>
            </h2>

            <p>
              Mathematics is a subject where active practice matters. Reading
              notes can help you understand an idea, but solving problems is
              where you learn to use it.
            </p>
          </div>

          <div className="tips-grid">

            <article className="tip-card">
              <span>01</span>
              <h3>Do questions</h3>
              <p>
                Spend more time attempting problems yourself and less time
                simply reading through examples.
              </p>
            </article>

            <article className="tip-card">
              <span>02</span>
              <h3>Keep a mistake notebook</h3>
              <p>
                Write down questions you got wrong, what went wrong and how the
                problem should have been approached.
              </p>
            </article>

            <article className="tip-card">
              <span>03</span>
              <h3>Don't look at the answer too quickly</h3>
              <p>
                Give yourself time to think. Even struggling with a problem
                before seeing the solution is valuable practice.
              </p>
            </article>

            <article className="tip-card">
              <span>04</span>
              <h3>Understand why</h3>
              <p>
                Try to understand why a method works instead of memorising
                steps without understanding them.
              </p>
            </article>

            <article className="tip-card">
              <span>05</span>
              <h3>Revisit weak topics</h3>
              <p>
                Don't repeatedly practise only the topics you already find
                comfortable. Spend time on areas where you struggle.
              </p>
            </article>

            <article className="tip-card">
              <span>06</span>
              <h3>Mix your practice</h3>
              <p>
                Once you understand a topic, practise different types of
                questions so you learn to recognise which method is needed.
              </p>
            </article>

          </div>
        </section>


        {/* PRACTICE ROUTINE */}
        <section className="improve-section routine-section">
          <div className="section-heading">
            <p className="section-label">03 — BUILD A ROUTINE</p>

            <h2>
              A simple routine can make
              <span> practice consistent.</span>
            </h2>

            <p>
              You don't need to spend every waking hour studying mathematics.
              What matters is creating a routine that gives you regular
              opportunities to practise.
            </p>
          </div>

          <div className="routine">

            <div className="routine-item">
              <span>01</span>
              <div>
                <h3>Review</h3>
                <p>
                  Look back at the concept or topic you are currently learning.
                </p>
              </div>
            </div>

            <div className="routine-item">
              <span>02</span>
              <div>
                <h3>Attempt</h3>
                <p>
                  Solve several questions without looking at the solutions.
                </p>
              </div>
            </div>

            <div className="routine-item">
              <span>03</span>
              <div>
                <h3>Check</h3>
                <p>
                  Compare your answers with the correct solutions and identify
                  your mistakes.
                </p>
              </div>
            </div>

            <div className="routine-item">
              <span>04</span>
              <div>
                <h3>Repeat</h3>
                <p>
                  Try similar questions again until the method becomes clearer.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* RESOURCES */}
        <section id="resources" className="improve-section resources-section">
          <div className="section-heading">
            <p className="section-label">04 — RESOURCES</p>

            <h2>
              You don't need twenty resources.
              <span> You need good ones.</span>
            </h2>

            <p>
              We've collected a small selection of free resources that can help
              FET Mathematics learners learn, practise and prepare for exams.
            </p>
          </div>


          {/* BOOKS */}
          <div className="resource-group">

            <div className="resource-group-heading">
              <p className="resource-number">01</p>

              <div>
                <h3>Books & PDFs</h3>
                <p>
                  Use textbooks and revision guides to learn concepts and
                  strengthen your understanding.
                </p>
              </div>
            </div>

            <div className="resource-grid">

              {books.map((book) => (
                <article className="resource-card" key={book.title}>

                  <div className="resource-card-top">
                    <span>{book.type}</span>
                    <span>
                      Grade {book.grades.join(", ")}
                    </span>
                  </div>

                  <h4>{book.title}</h4>

                  <p>{book.description}</p>

                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resource →
                  </a>

                </article>
              ))}

            </div>
          </div>


          {/* YOUTUBE */}
          <div className="resource-group">

            <div className="resource-group-heading">
              <p className="resource-number">02</p>

              <div>
                <h3>YouTube</h3>
                <p>
                  Sometimes hearing a concept explained differently can make
                  something finally click.
                </p>
              </div>
            </div>

            <div className="resource-grid">

              {youtubeChannels.map((channel) => (
                <article className="resource-card" key={channel.name}>

                  <div className="resource-card-top">
                    <span>YouTube Channel</span>
                    <span>
                      Grade {channel.grades.join(", ")}
                    </span>
                  </div>

                  <h4>{channel.name}</h4>

                  <p>{channel.description}</p>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit channel →
                  </a>

                </article>
              ))}

            </div>
          </div>


          {/* WEBSITES */}
          <div className="resource-group">

            <div className="resource-group-heading">
              <p className="resource-number">03</p>

              <div>
                <h3>Websites</h3>
                <p>
                  Websites can provide additional lessons, practice material
                  and support outside the classroom.
                </p>
              </div>
            </div>


            {/* LEARNING WEBSITES */}
            <div className="resource-subsection">

              <h4>Learn & Practise</h4>

              <div className="resource-grid">

                {learningWebsites.map((website) => (
                  <article className="resource-card" key={website.name}>

                    <div className="resource-card-top">
                      <span>Learning</span>
                      <span>
                        Grade {website.grades.join(", ")}
                      </span>
                    </div>

                    <h4>{website.name}</h4>

                    <p>{website.description}</p>

                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website →
                    </a>

                  </article>
                ))}

              </div>
            </div>


            {/* PAST PAPERS */}
            <div className="resource-subsection">

              <h4>Past Papers</h4>

              <div className="resource-grid">

                {pastPaperWebsites.map((website) => (
                  <article className="resource-card" key={website.name}>

                    <div className="resource-card-top">
                      <span>Past Papers</span>
                      <span>
                        Grade {website.grades.join(", ")}
                      </span>
                    </div>

                    <h4>{website.name}</h4>

                    <p>{website.description}</p>

                    <a
                      href={website.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find past papers →
                    </a>

                  </article>
                ))}

              </div>
            </div>

          </div>

        </section>


        {/* PAST PAPERS */}
        <section className="improve-section past-paper-section">

          <div className="section-heading">
            <p className="section-label">05 — USING PAST PAPERS</p>

            <h2>
              Past papers are more than
              <span> exam practice.</span>
            </h2>

            <p>
              Past papers can help you discover which topics you understand,
              which ones still need work and how questions are presented in an
              examination.
            </p>
          </div>

          <div className="past-paper-grid">

            <article>
              <span>01</span>
              <h3>Learn first</h3>
              <p>
                Make sure you understand the relevant concepts before relying
                heavily on past papers.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Attempt without help</h3>
              <p>
                Work through questions yourself before checking the memo.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Analyse your mistakes</h3>
              <p>
                Don't just count your marks. Find out exactly why you lost
                marks.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Try again</h3>
              <p>
                Revisit the relevant topic and attempt similar questions until
                your understanding improves.
              </p>
            </article>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="improve-cta">

          <div>
            <p className="section-label">KEEP GOING</p>

            <h2>
              Don't study maths
              <span> by watching.</span>
            </h2>

            <p>
              Watch. Learn. Practise. Make mistakes. Understand them.
              Try again.
            </p>

            <a href="#resources">
              Explore the resources →
            </a>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}