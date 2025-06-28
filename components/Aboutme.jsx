'use client';

import React from 'react';
import { 
  SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTypescript, SiNextdotjs, 
  SiReact, SiTailwindcss, SiHtml5, SiCss3, SiPostman, SiJsonwebtokens, 
  SiGit, SiGithub, SiFirebase, SiLinux
} from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const techIcons = [
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-600" /> },
  { name: 'REST API', icon: <SiPostman className="text-orange-400" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="text-pink-400" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
  { name: 'Linux', icon: <SiLinux className="text-yellow-500" /> },
  { name: 'Bootstrap', icon: <BsBootstrap className="text-purple-500" /> },
];

function Aboutme() {
  const loopIcons = [...techIcons, ...techIcons]; // ensure perfect loop continuity

  return (
    <section className="text-gray-100 py-12 px-4 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white animate-pulse flex justify-center">
          About Me
        </h2>

        <p className="text-lg leading-8 mb-6 text-slate-300 text-center max-w-3xl mx-auto">
          A curious <span className="text-white font-semibold">developer</span> who loves to code, break, fix and repeat. I'm passionate about building backend systems that just work—fast, secure, and scalable.
        </p>

        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Tech Stack</h3>

          {/* Top Row Marquee */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 text-7xl w-max animate-[scroll-left_45s_linear_infinite]">
              {loopIcons.map((tech, index) => (
                <div
                  key={`top-${index}`}
                  className="flex flex-col items-center text-center hover:scale-125 transition-transform duration-300"
                >
                  {tech.icon}
                  <span className="text-xs mt-2 text-white/90">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row Marquee Reversed */}
          <div className="relative w-full overflow-hidden mt-4">
            <div className="flex gap-10 text-7xl w-max animate-[scroll-left_45s_linear_infinite]" style={{ animationDirection: 'reverse' }}>
              {loopIcons.map((tech, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex flex-col items-center text-center hover:scale-125 transition-transform duration-300"
                >
                  {tech.icon}
                  <span className="text-xs mt-2 text-white/90">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
