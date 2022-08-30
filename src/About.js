import "./About.css";
export default function About() {
  return (
    <>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Jane"
              style={{ width: "100%" }}
            ></img>
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="Mike"
              style={{ width: "100%" }}
            ></img>
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="data:image/jpeg;base64,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"
              alt="John"
              style={{ width: "100%" }}
            ></img>
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
