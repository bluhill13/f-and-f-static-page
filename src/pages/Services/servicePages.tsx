import React from "react";
import boxing from "../../images/images/boxing.jpg";
import kickboxing from "../../images/images/Kickboxing.jpg";
import juejitsu from "../../images/images/juejitsu.jpg";
import kali from "../../images/images/kali.jpg";
import styrkeTrening from "../../images/images/styrketrening.jpg";
import cardio from "../../images/images/cardio.jpg";

const JuJitsuPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">Ju Jitsu</h1>
      <img
        src={juejitsu}
        alt="Ju Jitsu"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Ju Jitsu er en tradisjonell japansk kampsport som vektlegger
        fleksibilitet, effektivitet og tilpasningsevne i kamp. Det er kjent for
        sine teknikker innen grappling, leddlåser og kast.
      </p>
      <p className="text-lg mb-4">
        Hos Fight & Fitness tilbyr vi Ju Jitsu-klasser som passer for alle
        nivåer, fra nybegynnere til viderekomne. Våre erfarne instruktører vil
        veilede deg gjennom teknikkene og prinsippene i Ju Jitsu, og hjelpe deg
        med å bygge selvtillit og forbedre din fysiske form.
      </p>
    </div>
  );
};

const KickboxingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">Kickboxing</h1>
      <img
        src={kickboxing}
        alt="Kickboxing"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Kickboxing er en høyenergisk kampsport som kombinerer teknikkene fra
        boksing med kraftige spark. Det er en utmerket måte å forbedre din
        kondisjon, styrke og smidighet på, samtidig som du lærer selvforsvar.
      </p>
      <p className="text-lg mb-4">
        Våre Kickboxing-klasser hos Fight & Fitness er designet for å utfordre
        deg både fysisk og mentalt. Enten du ønsker å konkurrere eller bare
        holde deg i form, tilbyr våre klasser et støttende miljø der du kan nå
        dine mål.
      </p>
    </div>
  );
};

const BoxingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">Boksing</h1>
      <img
        src={boxing}
        alt="Boksing"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Boksing er en kampsport som fokuserer på slagteknikker og fotarbeid. Det
        er en av de mest effektive måtene å bygge utholdenhet, styrke og
        koordinasjon på.
      </p>
      <p className="text-lg mb-4">
        Våre Boksing-klasser passer for alle nivåer, fra nybegynnere til erfarne
        boksere. Hos Fight & Fitness lærer du boksingens grunnleggende teknikker
        i et trygt og oppmuntrende miljø.
      </p>
    </div>
  );
};

const KaliSikaranPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">
        Selvforsvar for voksne - Kali Sikaran
      </h1>
      <img
        src={kali}
        alt="Kali Sikaran"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Kali Sikaran er en kampsport som fokuserer på selvforsvar ved bruk av
        pinner, kniver, og tomhendte teknikker. Det vektlegger hurtighet,
        presisjon og tilpasningsevne i nærkamp.
      </p>
      <p className="text-lg mb-4">
        Hos Fight & Fitness tilbyr våre Kali Sikaran-klasser praktisk
        selvforsvarstrening for voksne. Du vil lære å beskytte deg selv i reelle
        situasjoner, samtidig som du forbedrer din generelle fysiske form og
        selvtillit.
      </p>
    </div>
  );
};

const CardioKickBoxingPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">Cardio KickBoxing</h1>
      <img
        src={cardio}
        alt="Cardio KickBoxing"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Cardio KickBoxing er en høyintensiv treningsøkt som kombinerer
        kampsportteknikker med rask kondisjonstrening. Det er en flott måte å
        forbrenne kalorier, forbedre utholdenheten, og bygge styrke.
      </p>
      <p className="text-lg mb-4">
        Våre Cardio KickBoxing-klasser er designet for å være morsomme og
        utfordrende for alle treningsnivåer. Bli med oss hos Fight & Fitness for
        å slå, sparke og svette deg til bedre helse.
      </p>
    </div>
  );
};

const StyrketreningPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-6">Styrketrening</h1>
      <img
        src={styrkeTrening}
        alt="Styrketrening"
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-4">
        Styrketrening fokuserer på å bygge muskelmasse, forbedre styrke, og øke
        den generelle fysiske formen. Det er en viktig del av enhver balansert
        treningsrutine.
      </p>
      <p className="text-lg mb-4">
        Hos Fight & Fitness er våre styrketreningsøkter skreddersydd for å
        hjelpe deg med å nå dine treningsmål, enten du ønsker å bygge muskler,
        tone kroppen, eller bare holde deg i form. Våre erfarne trenere vil
        veilede deg gjennom effektive og sikre treningsøkter.
      </p>
    </div>
  );
};

export {
  JuJitsuPage,
  KickboxingPage,
  BoxingPage,
  KaliSikaranPage,
  CardioKickBoxingPage,
  StyrketreningPage,
};
