import React from "react";

const MissionSection = () => {
  return (
    <div className="mt-20 bg-white text-black p-11">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">Om oss</h1>

        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl text-blue-600 mb-4">
              Dette er Fight & Fitness
            </h2>
            <p className="text-lg mb-4">
              Fight & Fitness ble etablert av Øystein Ljøsne i 2006.
            </p>
            <p className="text-lg mb-4">
              Vi holder til i flotte lokaler like ved bybanestoppet på
              Danmarksplass i Bergen. Vi har i dag rundt 300 aktive medlemmer,
              og er kjent for å ha et veldig godt miljø hvor alle blir
              inkludert.
            </p>
            <p className="text-lg mb-4">
              Fight & Fitness er tilknyttet{" "}
              <span className="font-bold">
                Kali Sikaran International (KSI)
              </span>{" "}
              og{" "}
              <span className="font-bold">World Kobudo Federation (WKF) </span>
              hvor vi har internasjonal tilhørighet og anerkjennelse.
            </p>
            <p className="text-lg mb-8">Velkommen til oss!</p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-row justify-content mb-8 ml-3">
            <div className="w-full md:w-1/2 bg-blue-600 p-4 rounded-md flex items-center text-white">
              <div className="text-5xl mr-4">🏋️</div>
              <div>
                <p className="text-3xl font-semibold">300</p>
                <p className="text-sm text-gray-300">Aktive medlemmer</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded-md flex items-center text-white">
              <div className="text-5xl text-blue-600 mr-4">🏠</div>
              <div>
                <p className="text-3xl font-semibold text-gray-300">480</p>
                <p className="text-sm text-gray-300">kvm å boltre oss på</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded-md flex items-center text-white">
              <div className="text-5xl text-blue-600 mr-4">⏱</div>
              <div>
                <p className="text-3xl font-semibold text-gray-300">20</p>
                <p className="text-sm text-gray-300">
                  ordinære gruppetimer hver uke
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 p-4 rounded-md flex items-center text-white">
              <div className="text-5xl text-blue-600 mr-4">🎉</div>
              <div>
                <p className="text-3xl font-semibold text-gray-300">18</p>
                <p className="text-sm text-gray-300">år i Bergen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
