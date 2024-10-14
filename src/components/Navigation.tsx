import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <a className="text-white text-xl font-bold" href="#">Movie App</a>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-4 md:mt-0 md:flex md:space-x-4">
          <li className="text-white">
            <a className="hover:text-gray-400" href="#">Home</a>
          </li>
          <li className="text-white">
            <a className="hover:text-gray-400" href="#">Features</a>
          </li>
          <li className="text-white">
            <a className="hover:text-gray-400" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;