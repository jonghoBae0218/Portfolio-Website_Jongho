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
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-800 border border-gray-600 rounded-lg p-6">
          <div className="md:w-1/6 flex items-center justify-center">
            <img
              src="./images/profile.jpg"
              alt="Profile"
              className="w-full h-auto max-w-full max-h-[calc(100vh*1/2)] rounded-lg object-cover"
            />
          </div>
          <div className="md:w-5/6 text-white">
            <p className="text-xl mb-4">
              I am an enthusiastic junior developer with a keen interest in
              Machine Learning. My journey began as a self-taught programmer,
              inspired by my experience as a mathematics instructor. I was
              motivated by the challenges of providing personalized education to
              each student, which led me to develop an interest in adaptive
              learning.
            </p>

            <p className="text-xl mb-4">
              While self-educating in programming, I addressed local issues but
              realized that achieving my dream of becoming a machine learning
              developer required further education. After studying at the New
              York Institute of Technology, I am now pursuing Machine Learning
              at Columbia University to realize my aspirations.
            </p>
          </div>
        </section>
      </div>

      <section className="py-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Work Experience */}
          <div className="md:w-1/2 bg-gray-800 border border-gray-600 rounded-lg p-6 flex flex-col">
            <h2 className="text-4xl font-bold text-center py-4 text-white mb-4">
              Work Experience
            </h2>
            <ul className="text-white flex-grow">
              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">EnoB</h3>
                  <p className=" mt-4">May 2024 - Aug 2024</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="mb-4">Part-time web-developer Internship</p>
                  <p className="mb-4">Long Island City, NY</p>
                </div>
                <p className="mb-2">
                  • Enhanced User Interface and accessibility of EnoB website.
                </p>
                <p className="mb-2">
                  • Took initiative in developing educational platform for
                  seniors.
                </p>
              </li>
              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    NYIT Tutoring Center
                  </h3>
                  <p className=" mt-4">Sep 2023 - Dec 2023</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="mb-4">Tutor/Programmer</p>
                  <p className="mb-4">New York, NY</p>
                </div>
                <p className="mb-2">
                  • Provided one-on-one tutoring for Introduction to Java and
                  Data Structures course.
                </p>
                <p className="mb-2">
                  • Developed NYIT TA (Tutor Assistant) Android app that allows
                  students to post questions before the session.
                </p>
              </li>
              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    KATUSA
                    <span className="text-xl font-normal">
                      {" "}
                      (Korean Augmentation to the United States Army)
                    </span>
                  </h3>

                  <p className="mt-4">Jun 2020 - Dec 2021</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="mb-4">Religious Support Officer</p>
                  <p className="mb-4">USAG-Humphreys, Pyeongtaek, Korea</p>
                </div>
                <p className="mb-2">
                  • Served as Senior KATUSA, assisting Chaplains in mission
                  execution and overseeing the performance and welfare of junior
                  KATUSAs and US soldiers.
                </p>
                <p className="mb-2">
                  • Developed chapel reservation system that meets the Army
                  standards.
                </p>
                <p className="mb-2">
                  • Awards: ARCOM(Army Commendation Medal) and MOVSM(The
                  Military Outstanding Volunteer Service Medal).
                </p>
              </li>
              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    E-You Academy
                  </h3>
                  <p className="mt-4 ">Jan 2018 - May 2020</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="mb-4">Mathematics Instructor</p>
                  <p className="mb-4">Seoul, Korea</p>
                </div>
                <p className="mb-2">
                  • Taught Calculus, Geometry and Vectors, and Probability and
                  Statistics to high school students.
                </p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="md:w-1/2 bg-gray-800 border border-gray-600 rounded-lg p-6 flex flex-col">
            <h2 className="text-4xl font-bold text-center py-4 text-white mb-4">
              Education
            </h2>
            <ul className="text-white flex-grow">
              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    Columbia University
                  </h3>
                  <p className="mt-4 ">Jan 2024 - December 2026*</p>
                </div>
                <div className="flex justify-between items-center ">
                  <p className="mb-4">Bachelor of Arts in Computer Science</p>
                  <p className="mb-4">GPA: 4.3 / 4.0</p>
                </div>

                <p className="mb-4">
                  • Related Course: Data Structures, Fundamentals of Computer
                  Science, Computer Science Theory, Discrete Mathematics,
                  Calculus III.
                </p>
              </li>

              <li className="mb-4">
                <div className="flex justify-between items-center ">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    Columbia Engineering Coding Bootcamp
                  </h3>
                  <p className="mt-4">May 2024 - Aug 2024</p>
                </div>
                <p className="mb-4">Full Stack Track</p>
                <p className="mb-4">
                  • Related Skills: JavaScript, React, MERN Stack, Node.js,
                  Express, SQL, NoSQL, HTML/CSS, APIs, Sequelize, JQuery.
                </p>
              </li>

              <li className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl mt-4 mb-4 font-semibold">
                    New York Institute of Technology
                  </h3>
                  <p className="mt-4">Sep 2022 - Dec 2023</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="mb-4">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="mb-4">GPA: 4.0 / 4.0</p>
                </div>
                <p className="mb-4">
                  • Related Course: Linear Algebra, Introduction to Java,
                  Probability for Computer Science, Calculus II.
                </p>
              </li>
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
