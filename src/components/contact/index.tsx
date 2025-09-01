"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./style.css";

export default function Contact() {
  return (
    <section className="contact__section" id="contact">
      <div className="contact__container">
        <h1 className="contact__title">Get in Touch</h1>
        <ul className="contact__list">
          <li>
            <FaEnvelope className="contact__icon" />
            <a href="mailto:amresh.terminal@gmail.com">
              amresh.terminal@gmail.com
            </a>
          </li>

          <li>
            <FaLinkedin className="contact__icon" />
            <a
              href="https://linkedin.com/in/amreshpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaGithub className="contact__icon" />
            <a
              href="https://github.com/amreshcraft"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
