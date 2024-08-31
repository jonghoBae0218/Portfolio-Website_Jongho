import React from "react";

function AboutMe() {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-32"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <h1 className="text-3xl font-bold text-white mt-8">About Me</h1>
      {/* Section 1: Photo and Description */}
      <div className="pt-16">
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-800 border border-gray-600 rounded-lg  p-6">
          <div className="md:w-1/6 flex items-center justify-center">
            <img
              src="./images/profile.jpg"
              alt="Profile"
              className="w-full h-auto max-w-full max-h-[calc(100vh*1/2)] rounded-lg object-cover"
            />
          </div>
          <div className="md:w-5/6 text-white">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sit amet accumsan arcu. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </section>
      </div>

      {/* Section 2: Work Experience and Education */}
      <section className="px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Work Experience */}
          <div className="md:w-1/2 bg-gray-800 border border-gray-600 rounded-lg h-[calc(100vh*2/3)] p-6">
            <h2 className="text-2xl font-bold text-center py-4 text-white mb-4">
              Work Experience
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                <h3 className="text-xl font-semibold">Job Title</h3>
                <p>Company Name - Dates</p>
                <p>Description of work responsibilities and achievements.</p>
              </li>
              {/* Add more work experience entries here */}
            </ul>
          </div>

          {/* Education */}
          <div className="md:w-1/2 bg-gray-800 border border-gray-600 rounded-lg h-[calc(100vh*2/3)] p-6">
            <h2 className="text-2xl font-bold text-center py-4 text-white mb-4">
              Education
            </h2>
            <ul className="text-white">
              <li className="mb-4">
                <h3 className="text-xl font-semibold">Degree</h3>
                <p>Institution Name - Dates</p>
                <p>Description of major and any honors or awards.</p>
              </li>
              {/* Add more education entries here */}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Download Resume */}
      <section className="flex justify-center py-6">
        <a
          href="./resume.jpg"
          download="Resume_Jongh_Bae.jpg"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default AboutMe;
