/*
 * NASTAVENÍ WEBU
 *
 * Tento soubor je určený k běžným úpravám přes GitHub.
 * Zde se upravuje ceník, kontakt i informační banner.
 * Texty ponechte v uvozovkách. Banner zapnete změnou false na true.
 */
window.NASTAVENI = {
  cenik: {
    sluzby: [
      {
        nazev: "Broušení hran / Voskování a leštění skluznice",
        cena: "349",
        jednotka: "Kč",
        polozky: [
          "Broušení hran NEBO voskování",
          "Leštění skluznice",
          "Vizuální kontrola lyží",
        ],
      },
      {
        nazev: "Broušení hran + Voskování a leštění skluznice",
        cena: "549",
        jednotka: "Kč",
        nejoblibenejsi: true,
        polozky: [
          "Broušení hran",
          "Voskování skluznice",
          "Leštění skluznice",
          "Kompletní péče",
        ],
      },
      {
        nazev: "Závodní servis",
        cena: "649",
        jednotka: "Kč",
        polozky: [
          "Profesionální broušení hran",
          "Závodní voskování",
          "Maximální výkon na svahu",
        ],
      },
      {
        nazev: "Vyzvednutí/Odvoz lyží až domů po Brně",
        cena: "Individuální",
        jednotka: "",
        polozky: [
          "1 cesta po Brně (odvoz NEBO vyzvednutí) + 100 Kč",
          "2 cesty po Brně (odvoz a vyzvednutí) + 200 Kč",
          "Cesta mimo Brno po domluvě",
        ],
      },
    ],

    poznamky: [
      "Seřízení vázání po domluvě",
      "Více párů / lyže do 130 cm = sleva",
    ],
  },

  kontakt: {
    email: "dominik.keznikl@seznam.cz",
    telefon: "+420737837157",
    telefonZobrazeni: "+420 737 837 157",
    lokalita: "Brno a okolí",
  },

  banner: {
    zobrazit: true,
    text: "Dovolená – servis bude opět otevřen od 15. srpna.",

    // Volitelné: když odkaz nechcete, ponechte prázdné uvozovky.
    odkaz: "",
    textOdkazu: "Více informací",
  },
};
