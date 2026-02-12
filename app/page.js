export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="badge">VOICE UP ATHLETICS</p>
        <h1>One platform for team communication and athlete growth.</h1>
        <p className="subtitle">
          Replace scattered chats and missed updates with simple scheduling,
          announcements, and performance tracking built for sports organizations.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#">
            Request a Demo
          </a>
          <a className="btn btn-secondary" href="#">
            See Features
          </a>
        </div>
      </section>

      <section className="features">
        <article>
          <h2>Coach Dashboard</h2>
          <p>Plan sessions, track attendance, and keep every athlete aligned.</p>
        </article>
        <article>
          <h2>Team Messaging</h2>
          <p>Share updates instantly with players, staff, and parents in one place.</p>
        </article>
        <article>
          <h2>Performance Insights</h2>
          <p>Turn training data into clear next steps for measurable improvement.</p>
        </article>
      </section>
    </main>
  );
}