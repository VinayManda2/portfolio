// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaDocker } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-4xl m-auto relative">
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <ul className="flex gap-4 items-center mb-6">
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://hub.docker.com/u/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDocker className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
