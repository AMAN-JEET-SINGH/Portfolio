"use client";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

// Map tech name to icon
const techIcons = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  Tailwind: <SiTailwindcss />,
  "Framer Motion": <SiFramer />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  MongoDB: <SiMongodb />,
  Node: <SiNodedotjs />,
  Express: <SiExpress />,
  Bootstrap: <SiBootstrap />,
};

export function CardDemo(props) {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const image = imageRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15; // Increased tilt
    const rotateY = ((x - centerX) / centerX) * -15;

    // Apply tilt transform
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    image.style.transform = `scale(1.05) rotateX(${rotateX / 2}deg) rotateY(${rotateY / 2}deg)`;

    // Create light gradient
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const image = imageRef.current;

    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.background = ""; // remove light
    image.style.transform = `scale(1) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      ref={cardRef}
      className="max-w-sm bg-black border border-gray-800 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-200 hover:shadow-2xl relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transition: "transform 0.2s ease, background 0.2s ease",
      }}
    >
      <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
        <img
          ref={imageRef}
          className="rounded-t-lg rounded-b-lg w-full h-48 object-cover transition-transform duration-200"
          src={props.image}
          alt="Project Screenshot"
        />
      </a>

      <div className="p-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-white">{props.projectname}</h5>

        <p className="text-sm font-normal text-gray-400">{props.desc}</p>

        {/* Tech Stack with Icons */}
        <div className="flex flex-wrap gap-3 mt-2">
          {props.techstack?.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-gray-700 rounded-md text-white text-xs"
            >
              <span className="text-base">{techIcons[tech] || "🛠️"}</span>
              {tech}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-5">
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Live link&rarr;
          </a>

          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-gray-300"
            title="View Code on GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
