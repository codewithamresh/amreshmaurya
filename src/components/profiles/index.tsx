"use client";

import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import "./style.css"

export default function CodingProfiles() {
  return (
    <section className="coding-section" id="coding">
      <div className="coding-container">
        <h2 className="coding-title">Coding Profiles</h2>
        <div className="coding-card-container">
          {/* LeetCode */}
          <a
            href="https://leetcode.com/amreshpro"
            target="_blank"
            rel="noopener noreferrer"
            className="coding-card"
          >
            <SiLeetcode className="coding-icon leetcode" />
            <div className="coding-content">
              <span className="platform-name">LeetCode</span>
              <span className="platform-stats">40+ Problems Solved</span>
            </div>
          </a>

          {/* HackerRank */}
          <a
            href="https://www.hackerrank.com/amresh_terminal"
            target="_blank"
            rel="noopener noreferrer"
            className="coding-card"
          >
            <SiHackerrank className="coding-icon hackerrank" />
            <div className="coding-content">
              <span className="platform-name">HackerRank</span>
              <span className="platform-stats stars">
                5 Star&nbsp;
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                <FaStar className="star-icon filled" />
                {/* <FaStar className="star-icon empty" /> */}

              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
