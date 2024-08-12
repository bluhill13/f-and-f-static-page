import React from "react";

const Timeline = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image and Vision Section */}
          <div className="flex flex-col">
            <img
              src="your-image-url-here"
              alt="Training session"
              className="mb-4 rounded-md"
            />
            <h2 className="text-xl text-green-500 mb-2">Vår visjon</h2>
            <p className="text-lg">
              Vår visjon er å være det foretrukne stedet for kampsporttrening i
              Bergen. Vi skal tilby morsom og effektiv trening, med god faglig
              tyngde, i trygge og gode omgivelser.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute h-full border-l-2 border-gray-500 left-1/2 transform -translate-x-1/2"></div>

            {/* Event 1 */}
            <div className="mb-8 flex flex-col items-center">
              <div className="bg-white text-black px-4 py-2 rounded-md mb-2">
                JAN, 2006
              </div>
              <div className="bg-gray-800 text-center p-4 rounded-md">
                <h3 className="text-xl font-semibold mb-2">
                  Fight & Fitness ble stiftet
                </h3>
                <p>Vi startet som smått i et treningsrom i Nordneshallen</p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="mb-8 flex flex-col items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-md mb-2">
                APRIL, 2010
              </div>
              <div className="bg-gray-800 text-center p-4 rounded-md">
                <h3 className="text-xl font-semibold mb-2">
                  Vi flyttet til Danmarksplass
                </h3>
                <p>
                  Vi vokste ut av lokalene i Nordneshallen, og fikk bygget våre
                  egne lokaler på Danmarksplass
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-md mb-2">
                NOV, 2019
              </div>
              <div className="bg-gray-800 text-center p-4 rounded-md">
                <h3 className="text-xl font-semibold mb-2">Verdens beste!</h3>
                <p>
                  Vi fikk vår første egenproduserte Verdensmester. Thea Vatselle
                  tok VM-gull i kickboxing (fullkontakt)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
