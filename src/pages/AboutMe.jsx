import React from "react";

function Portfolio() {
  return (
    <div className="min-h-screen px-4 py-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Container 1 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample1.jpg"
            alt="Sample 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 1</h2>
            <p>
              Description for project 1 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>

        {/* Container 2 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample2.jpg"
            alt="Sample 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 2</h2>
            <p>
              Description for project 2 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>

        {/* Container 3 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample3.jpg"
            alt="Sample 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 3</h2>
            <p>
              Description for project 3 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>

        {/* Container 4 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample4.jpg"
            alt="Sample 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 4</h2>
            <p>
              Description for project 4 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>

        {/* Container 5 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample5.jpg"
            alt="Sample 5"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 5</h2>
            <p>
              Description for project 5 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>

        {/* Container 6 */}
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden">
          <img
            src="/images/sample6.jpg"
            alt="Sample 6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Title 6</h2>
            <p>
              Description for project 6 goes here. This section provides a brief
              overview of the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
