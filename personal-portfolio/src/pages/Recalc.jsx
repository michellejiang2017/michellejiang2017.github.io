import { useEffect } from "react";
import "./Recalc.css";

const caseStudies = [
  {
    number: "01",
    type: "PUBLIC EQUITIES",
    title: "Microsoft taught me that liking a company is the easy part.",
    description:
      "I co-authored the Microsoft thesis that won Smith's 2026 stock pitch competition and was selected for our $500K student-managed portfolio. I worked across industry research, financial analysis, and valuation.",
    takeaway:
      "The pitch changed the way I thought about investing. A company can have great products, strong financials, and an attractive market and still be a weak investment at the wrong price. I started paying much more attention to expectations: what does the market already believe, and where does my view actually differ?",
    tag: "Smith Investment Club",
  },
  {
    number: "02",
    type: "DATA + BUSINESS",
    title: "The model was only as good as the problem we gave it.",
    description:
      "For an AI4ALL project, I worked with a team using more than 78,000 public-company firm-year observations to predict corporate bankruptcy. I proposed the project idea and worked on feature engineering and model selection.",
    takeaway:
      "One of our biggest improvements had nothing to do with choosing a more sophisticated model. We realized the original data labeled every historical year of a company that eventually failed as a failure year. Fixing the target definition changed the problem itself. It made me much more skeptical of precise-looking outputs when I do not understand the assumptions underneath them.",
    tag: "AI4ALL",
  },
  {
    number: "03",
    type: "PRIVATE MARKETS",
    title: "A model is an argument written in numbers.",
    description:
      "Through Project Destined, I underwrote three multifamily acquisitions using cash-flow modeling, financing assumptions, valuation, and return analysis.",
    takeaway:
      "What interested me most was seeing how quickly the answer changed when one assumption moved. Rent growth, expenses, debt, or exit value could materially alter the return. I started thinking less about whether a spreadsheet was technically correct and more about which assumptions deserved the most scrutiny.",
    tag: "Project Destined",
  },
];

const outsideFinance = [
  {
    number: "A",
    title: "Pearson College UWC",
    text: "I spent my last two years of high school living at Pearson College UWC on Vancouver Island. Being surrounded by people with very different backgrounds made me more comfortable changing my mind, explaining how I got somewhere, and asking people how they see the same problem.",
  },
  {
    number: "B",
    title: "Chinese dance",
    text: "I grew up doing traditional Chinese dance. At UWC, I started teaching and performing it for people who had never encountered it before. It became one of the ways I shared where I came from.",
  },
  {
    number: "C",
    title: "Building communities",
    text: "At Smith, I started Smith Tech Studio because I wanted a lower-pressure place for students to build things together, learn practical skills, and meet other people interested in technology.",
  },
];

function Recalc() {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Michelle Jiang | Investing, Building & Learning";

    return () => {
      document.title = oldTitle;
    };
  }, []);

  return (
    <div className="recalc-site">
      {/* NAV */}
      <nav className="recalc-nav">
        <a href="#top" className="recalc-wordmark">
          MJ
        </a>

        <div className="recalc-nav-links">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#learning">Learning</a>
          <a href="#outside">Beyond</a>
        </div>

        <a className="recalc-back-link" href="/">
          Main site ↗
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="recalc-hero" id="top">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-content">
            <p className="hero-kicker">
              SMITH COLLEGE · COMPUTER SCIENCE + QUANTITATIVE ECONOMICS
            </p>

            <h1>
              I started by
              <span className="hero-accent"> building things.</span>
              <br />
              Now I want to understand what makes them worth owning.
            </h1>

            <div className="hero-bottom">
              <p className="hero-intro">
                Hi, I&apos;m Michelle. I&apos;m a sophomore at Smith College
                who likes getting underneath a business: why customers care,
                where the economics come from, what could change, and what
                someone should be willing to pay for it.
              </p>

              <div className="hero-note">
                <span className="hero-note-label">CURRENTLY THINKING ABOUT</span>
                <p>
                  How do you separate a great company from a great investment?
                </p>
              </div>
            </div>
          </div>

          <div className="hero-scroll">
            <span>SCROLL</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* INTRO STORY */}
        <section className="recalc-section story-section" id="story">
          <div className="section-marker">
            <span>00</span>
            <span>ORIGIN</span>
          </div>

          <div className="story-grid">
            <div className="story-heading">
              <p className="section-eyebrow">
                BEFORE I HAD A FINANCE VOCABULARY
              </p>

              <h2>
                There were Discord bots,
                <br />
                student businesses,
                <br />
                and a wage tracker.
              </h2>
            </div>

            <div className="story-copy">
              <p>
                I started programming in middle school by making Discord bots
                for school and homework. A few years later, I helped run
                student businesses through Junior Achievement. When our team
                needed a better way to calculate wages from attendance records,
                I built one with Flask and SQL.
              </p>

              <p>
                At the time, I did not think of any of this as finance. I just
                liked taking something messy, figuring out what mattered, and
                making it work better.
              </p>

              <p>
                Economics and Investment Club at Smith gave me a new version of
                that same challenge. Instead of asking how to build a product,
                I started asking why one business earns better returns than
                another, how durable those returns are, and what the business
                is actually worth.
              </p>

              <div className="story-path">
                <span>BUILDING</span>
                <span className="story-arrow">→</span>
                <span>BUSINESSES</span>
                <span className="story-arrow">→</span>
                <span>INVESTING</span>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="recalc-section work-section" id="work">
          <div className="section-marker light">
            <span>01</span>
            <span>THREE LENSES</span>
          </div>

          <div className="work-header">
            <p className="section-eyebrow light-text">
              HOW I&apos;VE BEEN LEARNING TO LOOK AT BUSINESSES
            </p>

            <h2>Same curiosity. Different angles.</h2>

            <p>
              Public equities, machine learning, and real estate underwriting
              taught me different ways to challenge an investment idea.
            </p>
          </div>

          <div className="case-list">
            {caseStudies.map((study) => (
              <article className="case-card" key={study.number}>
                <div className="case-top">
                  <span className="case-number">{study.number}</span>
                  <span className="case-type">{study.type}</span>
                  <span className="case-tag">{study.tag}</span>
                </div>

                <div className="case-main">
                  <h3>{study.title}</h3>

                  <div className="case-content">
                    <div>
                      <span className="case-label">WHAT I DID</span>
                      <p>{study.description}</p>
                    </div>

                    <div className="case-takeaway">
                      <span className="case-label">WHAT STAYED WITH ME</span>
                      <p>{study.takeaway}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* LEARNING */}
        <section className="recalc-section learning-section" id="learning">
          <div className="section-marker">
            <span>02</span>
            <span>RIGHT NOW</span>
          </div>

          <div className="learning-layout">
            <div className="learning-title">
              <p className="section-eyebrow">WHAT I&apos;M LEARNING</p>

              <h2>
                I&apos;m trying to get better at one sentence:
                <span> “What would have to be true?”</span>
              </h2>
            </div>

            <div className="learning-copy">
              <p>
                When I first started researching stocks, I naturally spent most
                of my time finding reasons a company was good: attractive
                products, growing markets, competitive advantages, strong
                financials.
              </p>

              <p>
                Now I&apos;m much more interested in translating those facts
                into an actual investment view. What growth is already priced
                in? Which assumptions drive most of the valuation? What would I
                need to believe about margins, market share, or reinvestment?
                What evidence would make me change my mind?
              </p>

              <p>
                I&apos;m especially curious about growth investing because I
                like technology businesses and the challenge of evaluating a
                company while its market and business model are still changing.
                I&apos;m still exploring where within investing I fit. What I
                know is that I want to become much better at fundamental
                analysis and at forming an independent view from incomplete
                information.
              </p>
            </div>
          </div>

          <div className="learning-note">
            <span className="note-symbol">↳</span>

            <div>
              <p className="note-title">The skill I want to build next</p>
              <p>
                Getting faster at moving from “this is an interesting company”
                to a clear view of the few variables that determine whether it
                is an interesting investment.
              </p>
            </div>
          </div>
        </section>

        {/* OUTSIDE FINANCE */}
        <section className="recalc-section outside-section" id="outside">
          <div className="section-marker">
            <span>03</span>
            <span>BEYOND THE SPREADSHEET</span>
          </div>

          <div className="outside-header">
            <p className="section-eyebrow">THE REST OF ME</p>
            <h2>I care a lot about the rooms I help create.</h2>
          </div>

          <div className="outside-grid">
            {outsideFinance.map((item) => (
              <article className="outside-card" key={item.number}>
                <span className="outside-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* END */}
        <section className="recalc-ending">
          <div>
            <p className="ending-small">ONE LAST THING</p>

            <h2>
              I don&apos;t have investing figured out yet.
              <br />
              That&apos;s why I want to keep learning it.
            </h2>

            <p className="ending-copy">
              I&apos;ve had enough exposure to know that I enjoy studying
              businesses and forming a view. I&apos;ve also had enough exposure
              to know how much I still need to learn. I&apos;m looking for
              people who will make me defend my assumptions, sharpen my
              analysis, and get more comfortable changing my mind when the
              evidence changes.
            </p>
          </div>

          <div className="ending-links">
            <a
              href="https://www.linkedin.com/in/michellejiang2017/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/michellejiang2017/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:mhjiang@smith.edu">Email ↗</a>
          </div>
        </section>
      </main>

      <footer className="recalc-footer">
        <span>Michelle Jiang</span>
        <span>Northampton, MA</span>
        <span>2026</span>
      </footer>
    </div>
  );
}

export default Recalc;