import React from "react";
import { FaLaptopCode, FaGraduationCap, FaTrophy, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section className="text-white py-12 px-6 max-w-5xl mx-auto">
      {/* Intro */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm a passionate full-stack developer with a strong background in building real-time, secure, and scalable web applications. Whether it's developing healthcare platforms, experimenting with machine learning in agriculture, or creating responsive tools, I love bringing ideas to life with clean and efficient code.
        </p>
      </div>

      {/* Experience */}
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaBriefcase /> Experience</h3>
          <ul className="mt-4 space-y-6 text-gray-300">
            <li>
              <strong>Verdant One Health (Freelance) — Full Stack Developer (Mar–Apr 2025)</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Developed and optimized landing page using React and Tailwind CSS</li>
                <li>Built scalable APIs with Node.js, Express, and MongoDB</li>
                <li>Delivered features for ambulance booking, e-commerce, and doctor consultations</li>
              </ul>
            </li>
            <li>
              <strong>Intern — KistechnoSoftware (Jul 2024)</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Built a restaurant eCommerce site using PHP and SQL</li>
                <li>Gained experience in backend and database management</li>
              </ul>
            </li>
            <li>
              <strong>CPC Hackathon Winner (Nov 2024)</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Built AI-based crop recommendation models using Python and TensorFlow</li>
                <li>Helped farmers with data-driven crop suggestions</li>
              </ul>
            </li>
            <li>
              <strong>Code Red 4.0 (Top 10 Team) (Oct 2024)</strong>
              <ul className="list-disc list-inside text-sm mt-1">
                <li>Developed ML models for soil analysis, crop suggestions & disease detection</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaLaptopCode /> Skills</h3>
          <div className="mt-4 text-gray-300 text-sm space-y-2">
            <p><strong>Languages:</strong> C++, Java, JavaScript, Python, SQL</p>
            <p><strong>Technologies:</strong> React.js, Node.js, Express.js, Tailwind CSS, Socket.io, JWT, MongoDB, PostgreSQL, TensorFlow, Flask, Git</p>
            <p><strong>Expertise:</strong> Full-Stack Web Development, REST APIs, Realtime Apps, Authentication, Deployment</p>
          </div>
        </div>

        {/* Projects */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaTrophy /> Academic Projects</h3>
          <ul className="mt-4 space-y-4 text-gray-300 text-sm">
            <li><strong>Verdant One Health:</strong> Full-stack healthcare platform for ambulance, medicine, and consults.</li>
            <li><strong>Tut-lers:</strong> Ed-tech platform with Web3 on Solana and an AI chatbot for learners.</li>
            <li><strong>Reactive PDF Reader:</strong> Dynamic PDF viewer with zoom-free readability.</li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2"><FaGraduationCap /> Education</h3>
          <p className="mt-4 text-gray-300 text-sm">
            <strong>SKIT, Jaipur (Sep 2023 – May 2024)</strong><br />
            B.Tech in Computer Science – CGPA: 9.4/10<br />
            <span className="text-xs">Relevant coursework: OOP, OS, DBMS, ML, DSA, Computer Org, Stats</span>
          </p>
        </div>
      </div>
    </section>
  );
}
