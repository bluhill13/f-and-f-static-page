import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const data = {
    title: "Ofte stilte spørsmål",
    rows: [
      {
        title: "Hvorfor trene selvforsvar?",
        content: `Selvforsvar er noe alle bør ha en viss basiskunnskap om, det har mange fordeler. La oss starte med det åpenbare: samfunnet er i endring, vi hører stadig om tilfeldige offer og angrep i mediene. Er du heldig vil du kunne gå gjennom livet uten å bli berørt av slike hendelser, men statistikken tilsier at stadig flere blir utsatt for blind vold, voldtekter og andre uønskede og uprovoserte hendelser. I slike situasjoner, hvis du ikke er forberedt på å agere, vil reaksjonen din sannsynligvis være panikk og stress. Ved å lære selvforsvar, vil du trene kropp og sinn til å reagere riktig slik at du kan holde hodet kaldt og løse situasjonen på best mulig måte. Selvforsvarstrening vil ikke bare forberede deg psykisk på at noe kan skje, og hva du bør gjøre i ulike situasjoner, men vil også øke muskelstyrken, kondisjonen, reaksjonstid og gi deg innøvde reflekser, som er nøkkelaspekter for å komme godt ut av en uønsket situasjon.
    `,
      },
      {
        title: "Hvorfor er Kali Sikaran så godt egnet som selvforsvar?",
        content:
          "Kali Sikaran springer opprinnelig ut fra en verden der alle måtte klare seg selv, nærmere bestemt på Fillipinene en gang for lenge siden. Kali Sikaran er komplekst selvforsvar å inneholder elementer som forsvar mot ulike våpen som kniv, batong og andre slagvåpen så vel som ulike angrep med bare nevene. Du lærer å forsvare deg og dine ut fra dine fysiske og psykiske forutsetninger, det finnes ikke en fasit som passer alle.",
      },
      {
        title: "Hvem kan trene selvforsvar?",
        content: `Det korte svaret er alle over 16 år. Treningene, øvelsene og alt vi gjør kan lett tilpasses den enkeltes behov. En kraftig mann på 120 kilo har andre utfordringer når det kommer til selvforsvar en ei lett dame på 52 kilo, men våre instruktører har lang erfaring og vet hva som fungerer for ulike kropper og personligheter. Enkelte klubber har tilpassede treninger for barn.`,
      },
      {
        title: "Hva kan jeg forvente på trening?",
        content:
          "Hvis du har lyst til å teste selvforsvar hos oss er du hjertelig velkommen. Vi har rom for alle. Kom innom og prøv, så jobber vi med deg uansett erfaring eller treningsnivå. Våre erfarne og høyt graderte instruktører har kunnskapen og ekspertisen som trengs, og vi er her for å hjelpe deg med å bli tryggere og sterkere. Som nybegynner er du trygg, noen er redd for skader, men sjansen for å bli skadet er minimal. Folkesporten fotball har mye høyere skadefrekvens enn oss. Likevel byr vi på hard fysisk trening, men vi forstår at alle har ulike begrensninger og grenser og tar hensyn til hver enkelt.",
      },
      {
        title: "Er det bare å møte opp?",
        content:
          "Ja, enkelt og greit! Hvis du vil kan du finne din klubb og ta kontakt med dem direkte. Da vet de at du kommer og kan ta vare på deg fra første stund. ",
      },
      {
        title: "Hva trenger jeg til første trening?",
        content:
          "Vanlige treningsklær, dvs. bukse, short eller tights og ei t-skjorte, og ei vannflaske.",
      },
    ],
  };

  const datase = {
    title: "Vanliga frågor",
    rows: [
      {
        title: "Varför träna självförsvar?",
        content: `Självförsvar är något alla bör ha grundläggande kunskaper i, det har många fördelar. Låt oss börja med det uppenbara: samhället förändras, vi hör ständigt om slumpmässiga offer och attacker i medierna. Du kan ha tur och gå genom livet utan att påverkas av sådana händelser, men statistiken tyder på att allt fler utsätts för blind våld, våldtäkter och andra oönskade och oprovocerade händelser. I sådana situationer, om du inte är förberedd på att agera, kommer din reaktion sannolikt att vara panik och stress. Genom att lära dig självförsvar tränar du kropp och sinne att reagera korrekt så att du kan hålla huvudet kallt och lösa situationen på bästa möjliga sätt. Självförsvarsträning förbereder dig inte bara mentalt på att något kan hända och vad du bör göra i olika situationer, utan ökar också muskelstyrkan, konditionen, reaktionstiden och ger dig inövade reflexer, som är nyckelaspekter för att komma ut väl ur en oönskad situation.`,
      },
      {
        title: "Varför är Kali Sikaran så väl lämpat för självförsvar?",
        content:
          "Kali Sikaran härstammar ursprungligen från en värld där alla måste klara sig själva, närmare bestämt från Filippinerna för länge sedan. Kali Sikaran är ett komplext självförsvar och innehåller element som försvar mot olika vapen som knivar, batonger och andra slagvapen, samt olika attacker med bara nävarna. Du lär dig försvara dig och dina baserat på dina fysiska och psykiska förutsättningar, det finns ingen lösning som passar alla.",
      },
      {
        title: "Vem kan träna självförsvar?",
        content: `Det korta svaret är alla över 16 år. Träningarna, övningarna och allt vi gör kan enkelt anpassas till den enskildes behov. En stark man på 120 kilo har andra utmaningar när det gäller självförsvar än en lätt kvinna på 52 kilo, men våra instruktörer har lång erfarenhet och vet vad som fungerar för olika kroppar och personligheter. Vissa klubbar har anpassade träningar för barn.`,
      },
      {
        title: "Vad kan jag förvänta mig på träningen?",
        content:
          "Om du vill prova självförsvar hos oss är du varmt välkommen. Vi har plats för alla. Kom förbi och prova, så arbetar vi med dig oavsett erfarenhet eller träningsnivå. Våra erfarna och högt graderade instruktörer har kunskapen och expertisen som behövs, och vi är här för att hjälpa dig att bli tryggare och starkare. Som nybörjare är du säker, några är rädda för skador, men risken för att skadas är minimal. Folkets sport, fotboll, har mycket högre skadefrekvens än oss. Ändå erbjuder vi tuff fysisk träning, men vi förstår att alla har olika begränsningar och gränser och tar hänsyn till var och en.",
      },
      {
        title: "Är det bara att dyka upp?",
        content:
          "Ja, det är enkelt! Om du vill kan du hitta din klubb och kontakta dem direkt. Då vet de att du kommer och kan ta hand om dig från första stund.",
      },
      {
        title: "Vad behöver jag till första träningen?",
        content:
          "Vanliga träningskläder, dvs. byxor, shorts eller tights och en t-shirt, samt en vattenflaska.",
      },
    ],
  };

  return (
    <div className="mx-0 w-full">
      <div className="w-2/3 mx-auto">
        <Accordion type={"single"} collapsible>
          {data.rows.map((item, index) => (
            <AccordionItem value={index.toString()}>
              <AccordionTrigger>
                <h1 className="text-2xl">{item.title}</h1>
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
