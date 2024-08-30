import React from "react";

function Portfolio() {
  return (
    <div className="px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Container 1 */}
        <a
          href="https://project2-find-my-duo.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/find_my_duo.png"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Find My Duo</h2>
            <p className="mb-4">
              A web application that users can create chatroom and find their
              duo partner.
            </p>
            <a
              href="https://github.com/DeadSeaTupperware/Project2-Find-My-Duo"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link
            </a>
          </div>
        </a>

        {/* Container 2 */}
        <a
          href="https://memable-0472.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/memable.png"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Memable</h2>
            <p className="mb-4">
              A web application that users can learn new memes. Users are
              prompted with a random script, and they find the perfectly
              matching gif to win the round.
            </p>
            <a
              href="https://github.com/BrianTib/memable"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link
            </a>
          </div>
        </a>

        {/* Container 3 */}
        <a
          href="https://example.com/project3"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/NASA-Logo-Large.png"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">
              NASA Micro -G NExT Challenge: Search and Rescue Platform for
              Optical Target Recognition
            </h2>
            <p className="mb-4">
              This is a challenge conducted by NASA. Uses machine learning to
              detect the key objects for resquing pilots in moon setting.
            </p>
            <a
              href="https://github.com/DeadSeaTupperware/Project2-Find-My-Duo"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link - Will be updated after creating a seperate
              repo
            </a>
          </div>
        </a>

        {/* Container 4 */}
        <a
          href="https://jonghobae0218.github.io/weather_dashboard/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/weatherDashboard.png"
            alt="Project 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Weather Dashboard</h2>
            <p className="mb-4">
              A weather dashboard application that user can search weather
              forcast of five days.
            </p>
            <a
              href="https://github.com/jonghoBae0218/weather_dashboard"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link
            </a>
          </div>
        </a>

        {/* Container 5 */}
        <a
          href="https://jonghobae0218.github.io/Task_board/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/taskboard.png"
            alt="Project 5"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Task Board</h2>
            <p className="mb-4">
              A task board application that user can add to-do cards and move
              the card based on the progress.
            </p>
            <a
              href="https://github.com/jonghoBae0218/Task_board"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link
            </a>
          </div>
        </a>

        {/* Container 6 */}
        <a
          href="https://github.com/jonghoBae0218/readme-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white rounded-lg overflow-hidden border border-gray-600 transition-transform transform hover:scale-105"
        >
          <img
            src="./images/readme-generator.png"
            alt="Project 6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Project Title 6</h2>
            <p className="mb-4">
              Description for project 6 goes here. This section provides a brief
              overview of the project.
            </p>
            <a
              href="https://github.com/jonghoBae0218/readme-generator"
              className="text-blue-400 hover:underline"
            >
              Github Repository Link
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
