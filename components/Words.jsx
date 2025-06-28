import React from "react";
import { FlipWords } from "./ui/flip-words";
import { FaLinkedin, FaGithub, FaXTwitter, FaDownload } from "react-icons/fa6";

export function Words() {
  const words = ["MERN developer", "Coder", "Freelancer", "CS Engineer"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl font-normal text-neutral-100 dark:text-neutral-50 text-left max-w-3xl w-full">
        <p className="text-sm mb-2">&gt;_ Hi there</p>
        My name is Aman Jeet Singh
        <br />
        I'm a <FlipWords words={words} />

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/aman-jeet-singh-b12246243/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:-rotate-3"
          >
            <FaLinkedin className="text-blue-500" />
          </a>
          <a
            href="https://github.com/AMAN-JEET-SINGH"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:-rotate-3"
          >
            <FaGithub className="text-gray-300" />
          </a>
          <a
            href="https://x.com/_Aman_JeetSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:-rotate-3"
          >
            <FaXTwitter className="text-blue-400" />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
           <FaDownload /> Resume 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Words;
