"use client";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function LetsConnectCard() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 text-white">
      <h2 className="text-xl font-semibold mb-4">| Let’s Connect |</h2>

      {/* Icons */}
      <div className="flex gap-4 mb-4">
  <a
    href="mailto:amanjeet1089singh@gmail.com"
    className="border px-4 py-2 rounded-md flex flex-col items-center justify-center gap-1 hover:-rotate-3 hover:-translate-y-1 transition-all duration-200 text-center"
  >
    <FaEnvelope className="text-red-400 text-2xl" />
    <p className="text-sm">Email</p>
  </a>
  <a
    href="https://x.com/_Aman_JeetSingh"
    target="_blank"
    rel="noopener noreferrer"
    className="border px-4 py-2 rounded-md flex flex-col items-center justify-center gap-1 hover:-rotate-3 hover:-translate-y-1 transition-all duration-200 text-center"
  >
    <FaXTwitter className="text-blue-300 text-2xl" />
    <p className="text-sm">X</p>
  </a>
  <a
    href="https://github.com/AMAN-JEET-SINGH"
    target="_blank"
    rel="noopener noreferrer"
    className="border px-4 py-2 rounded-md flex flex-col items-center justify-center gap-1 hover:-rotate-3 hover:-translate-y-1 transition-all duration-200 text-center"
  >
    <FaGithub className="text-gray-200 text-2xl" />
    <p className="text-sm">GitHub</p>
  </a>
  <a
  href="https://www.linkedin.com/in/aman-jeet-singh-b12246243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  className="border px-4 py-2 rounded-md flex flex-col items-center justify-center gap-1 hover:-rotate-3 hover:-translate-y-1 transition-all duration-200 text-center"
>
  <FaLinkedin className="text-blue-500 text-2xl" />
  <p className="text-sm">LinkedIn</p>
</a>

  
</div>
    </div>
  );
}
