import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <a
          href="https://github.com/jonghoBae0218"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <img
            src="/images/github-mark-white.svg"
            alt="Github Logo"
            className="w-12 h-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jongho-bae-774645303/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <img
            src="/images/linkedin.png"
            alt="Linkedin Logo"
            className="w-12 h-12"
          />
        </a>
        <a
          href="https://www.instagram.com/jongh0_bae/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75"
        >
          <img
            src="/images/instagram.png"
            alt="Instagram Logo"
            className="w-12 h-12"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
