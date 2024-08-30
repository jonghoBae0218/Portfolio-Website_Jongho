import React from "react";

function Resume() {
  return (
    <div className="px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Resume</h1>

      {/* Resume Image */}
      <div className="flex justify-center mb-8">
        <img
          src="./resume.jpg" // Path to your resume image
          alt="Resume"
          className="w-full max-w-xl h-auto"
        />
      </div>

      {/* Download Button */}
      <div className="flex justify-center">
        <a
          href="./images/resume.jpg" // Path to your resume image
          download="Resume_Jongh_Bae.jpg" // Name for the downloaded file
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
