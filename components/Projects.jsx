import React from 'react';
import { CardDemo } from './CardDemo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const projects = [
  {
    projectname: "Verdent OneHealth",
    image: "onehealth.png",
    desc: "Built a full-stack web app for seamless ambulance booking, online medicine shopping, and virtual doctor consultations with user-friendly interfaces and smooth navigation.",
    techstack: ["React", "Tailwind", "Node", "Express", "MongoDB"],
    liveLink: "https://verdantonehealth.com/shop/home",
    githubLink: "https://github.com/AMAN-JEET-SINGH/verdantOneHealth-public",
  },
  {
    projectname: "Reactive PDF",
    image: "/reactivepdf.png",
    desc: "Built using EJS, this project resizes PDF content dynamically so users can read without zooming in or out. It improves readability and ensures the content fits well on all screens.",
    techstack: ["JavaScript", "Node", "Express", "Tailwind"],
    liveLink: "https://reactivepdf.onrender.com",
    githubLink: "https://github.com/AMAN-JEET-SINGH/ReactivePDF",
  },
  {
    projectname: "tut-lers",
    image: "/tutlers.png",
    desc: "Built an e-learning platform where students can watch lectures and interact with a built-in chatbot for instant doubt resolution and support.",
    techstack: ["HTML", "CSS", "JavaScript", "Bootstrap", "BotPress"],
    liveLink: "https://aman-jeet-singh.github.io/tut-lers/",
    githubLink: "https://github.com/AMAN-JEET-SINGH/tut-lers",
  },
  {
    projectname: "Portfolio",
    image: "/portfolio.png",
    desc: "Built a personal portfolio website to showcase projects, skills, and experience, featuring smooth animations, responsive design, and easy contact options.",
    techstack: ["Next.js","React","JavaScript","Tailwind", "Framer Motion" , ],
    liveLink: "https://aman-jeet-singh.github.io/tut-lers/",
    githubLink: "https://github.com/AMAN-JEET-SINGH/tut-lers",
  },
  {
    projectname: "Basic Calculater",
    image: "/calci.png",
    desc: "Created a simple calculator using HTML and CSS to perform basic arithmetic operations with a clean and responsive interface.",
    techstack: ["HTML", "CSS", "JavaScript",],
    liveLink: "https://aman-jeet-singh.github.io/CODSOFT/",
    githubLink: "https://github.com/AMAN-JEET-SINGH/CODSOFT",
  },
  {
    projectname: "Basic Stonepaper Game",
    image: "/game.png",
    desc: "Built a basic Stone-Paper-Scissors game using HTML, CSS, and JavaScript with interactive UI and score tracking.",
    techstack: ["HTML", "CSS", "JavaScript",],
    liveLink: "https://aman-jeet-singh.github.io/basic-stone-paper/",
    githubLink: "https://github.com/AMAN-JEET-SINGH/basic-stone-paper",
  },

];

function Projects() {
  return (
    <div>
      <section className="text-gray-100 py-12 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-white animate-pulse text-center">
            &gt;/ |My Projects| <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap gap-6">
            {projects.map((project, index) => (
              <div key={index} className="flex-1 min-w-[280px]">
                <CardDemo {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
