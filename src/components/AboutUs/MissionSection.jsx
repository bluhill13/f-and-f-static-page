import React from "react";

const MissionSection = () => {
  return (
    <div className="mt-20 bg-white text-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-sm text-gray-400">HOME &mdash; OM OSS</p>
        </div>
        <h1 className="text-4xl font-semibold mb-6">Om oss</h1>
        <h2 className="text-2xl text-blue-600 mb-2">
          Dette er Fight & Fitness
        </h2>
        <p className="text-lg mb-6">
          Fight & Fitness ble etablert av Øystein Ljøsne i 2006.
        </p>
        <p className="text-lg mb-6">
          Vi holder til i flotte lokaler like ved bybanestoppet på Danmarksplass
          i Bergen. Vi har i dag rundt 300 aktive medlemmer, og er kjent for å
          ha et veldig godt miljø hvor alle blir inkludert.
        </p>
        <p className="text-lg mb-6">
          Fight & Fitness er tilknyttet{" "}
          <span className="font-bold">Kali Sikaran International (KSI)</span> og{" "}
          <span className="font-bold">World Kobudo Federation (WKF)</span> hvor
          vi har internasjonal tilhørighet og anerkjennelse.
        </p>
        <p className="text-lg mb-8">Velkommen til oss!</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-600 p-4 rounded-md flex items-center">
            <div className="text-5xl mr-4">🏋️</div>
            <div>
              <p className="text-3xl font-semibold">300</p>
              <p className="text-sm">Aktive medlemmer</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md flex items-center">
            <div className="text-5xl text-green-500 mr-4">🏠</div>
            <div>
              <p className="text-3xl font-semibold">480</p>
              <p className="text-sm">kvm å boltre oss på</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md flex items-center">
            <div className="text-5xl text-green-500 mr-4">⏱</div>
            <div>
              <p className="text-3xl font-semibold">20</p>
              <p className="text-sm">ordinære gruppetimer hver uke</p>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-md flex items-center">
            <div className="text-5xl text-green-500 mr-4">🎉</div>
            <div>
              <p className="text-3xl font-semibold">18</p>
              <p className="text-sm">år i Bergen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
