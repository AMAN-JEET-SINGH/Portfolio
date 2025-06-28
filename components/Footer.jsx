import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
function Footer() {
  return (
    <div className='flex justify-between px-10 mb-7 '>
        <div className="flex gap-4 ">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-6 h-6 text-white hover:text-gray-400" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-200 hover:text-white" />
      </a>
    </div>
        <p className='text-white/60 '>Made with ❤️ by Aman Jeet Singh</p>
    </div>
  )
}

export default Footer