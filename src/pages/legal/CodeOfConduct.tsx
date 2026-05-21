import { LegalLayout } from "./LegalLayout";

const CodeOfConduct = () => (
  <LegalLayout
    eyebrow="Community"
    title="Code of Conduct"
    description="A simple commitment to a respectful, inclusive, and harassment-free space for everyone."
  >
    <h2>Our Pledge</h2>
    <p>
      I pledge to make participation in this project and its community a harassment-free
      experience for everyone, regardless of age, body size, disability, ethnicity, gender
      identity, level of experience, nationality, personal appearance, race, religion, or
      sexual identity and orientation.
    </p>

    <h2>Our Standards</h2>
    <h3>Expected Behaviour</h3>
    <ul>
      <li>Demonstrating empathy and kindness</li>
      <li>Respecting differing opinions and experiences</li>
      <li>Giving and gracefully accepting constructive feedback</li>
      <li>Taking responsibility for mistakes and learning from them</li>
      <li>Focusing on what is best for the wider community</li>
    </ul>

    <h3>Unacceptable Behaviour</h3>
    <ul>
      <li>Sexualised language, imagery, or unwelcome advances</li>
      <li>Trolling, insulting comments, or personal attacks</li>
      <li>Public or private harassment</li>
      <li>Publishing others' private information without permission</li>
      <li>Any conduct inappropriate in a professional setting</li>
    </ul>

    <h2>Enforcement</h2>
    <p>
      Reports of unacceptable behaviour can be sent to{" "}
      <a href="mailto:jha.ishank74@gmail.com">jha.ishank74@gmail.com</a>. All complaints
      will be reviewed promptly and fairly, with the reporter's privacy protected.
    </p>

    <h2>Attribution</h2>
    <p>
      Adapted from the{" "}
      <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" target="_blank" rel="noreferrer">
        Contributor Covenant, v2.0
      </a>
      .
    </p>
  </LegalLayout>
);

export default CodeOfConduct;