import { LegalLayout } from "./LegalLayout";

const Security = () => (
  <LegalLayout
    eyebrow="Policy"
    title="Security"
    path="/security"
    description="How I protect this site and how to responsibly report a vulnerability."
  >
    <p>
      This is a personal portfolio website. I take security seriously and welcome responsible
      disclosure of any issues you discover.
    </p>

    <h2>Reporting a Vulnerability</h2>
    <p>
      Please do not open a public issue for security reports. Instead, email{" "}
      <a href="mailto:info.git@ishankportfolio.space">info.git@ishankportfolio.space</a> with:
    </p>
    <ul>
      <li>A clear description of the vulnerability</li>
      <li>Steps to reproduce</li>
      <li>Potential impact</li>
      <li>Any suggested remediation (optional)</li>
    </ul>

    <h2>What to Expect</h2>
    <ul>
      <li><strong>Acknowledgement</strong> within 48 hours</li>
      <li><strong>Investigation</strong> with status updates as it progresses</li>
      <li><strong>Resolution</strong> within 7 days for critical issues, 30 days for others</li>
      <li><strong>Credit</strong> for your contribution, with your permission</li>
    </ul>

    <h2>Best Practices Followed</h2>
    <ul>
      <li>HTTPS-only delivery with modern TLS</li>
      <li>Dependencies kept up to date</li>
      <li>Row-level security on all user data</li>
      <li>No secrets committed to the codebase</li>
    </ul>

    <h2>Out of Scope</h2>
    <ul>
      <li>Issues in third-party dependencies (please report upstream)</li>
      <li>Social engineering attempts</li>
      <li>Issues requiring physical access</li>
      <li>Missing headers on services I do not control</li>
    </ul>
  </LegalLayout>
);

export default Security;