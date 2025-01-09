import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="min-h-[50vh] w-full flex items-center justify-center py-10 px-4"
    >
      <div className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-20 relative">
          <h2 className="text-2xl font-medium mb-8 md:mb-0 md:mr-24 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-cyan-400 after:rounded-lg">
            Education
          </h2>

          <div className="flex-1 space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Loyalist College Toronto</h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-lg text-gray-600">
                  Post Graduate in Computer Software and Database Development
                </span>
                <span className="text-base font-semibold text-gray-800 whitespace-nowrap">
                  May 2023 - Dec 2024
                </span>
              </div>
              <p className="text-gray-500">
                Post Graduate with First Class Honours
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Guru Nanak Dev Engineering College, Ludhiana
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-lg text-gray-600">
                  Bachelor's Degree, Computer Science
                </span>
                <span className="text-base font-semibold text-gray-800 whitespace-nowrap">
                  July 2018 - July 2022
                </span>
              </div>
              <p className="text-gray-500">Graduate with First Class Honours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
