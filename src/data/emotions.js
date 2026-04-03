export const emotionsMetCategories = [
  {
    id: "energia",
    label: "Energia",
    icon: "⚡",
    needs: [
      "Pełen energii", "Pełen werwy", "Pełen życia", "Pobudzony", "Ożywiony",
      "Zelektryzowany", "Rozentuzjazmowany", "Uskrzydlony", "Pełen pasji",
    ],
  },
  {
    id: "spokoj",
    label: "Spokój",
    icon: "🌿",
    needs: [
      "Komfort", "Zaspokojony", "Usatysfakcjonowany", "Rozluźniony", "Zrelaksowany",
      "Bezpieczny", "Beztroski", "Spokojny", "Wyciszony",
    ],
  },
  {
    id: "swiezosc",
    label: "Świeżość",
    icon: "✨",
    needs: [
      "Wypoczęty", "Odświeżony", "Energiczny", "Silny", "Pogodny", "Swobodny", "Pełen błogości",
    ],
  },
  {
    id: "ciekawosc",
    label: "Ciekawość",
    icon: "🔍",
    needs: [
      "Zainteresowany", "Zaciekawiony", "Podniecony", "Podekscytowany", "Zafascynowany",
      "Zaintrygowany", "Zainspirowany", "Zachęcony",
    ],
  },
  {
    id: "radosc",
    label: "Radość",
    icon: "😊",
    needs: [
      "Zadowolony", "Szczęśliwy", "Pełen nadziei", "Zachwycony", "Wdzięczny",
      "Radosny", "Spełniony", "Pełen optymizmu", "Dumny",
    ],
  },
  {
    id: "milosc",
    label: "Miłość",
    icon: "💛",
    needs: [
      "Kochający", "W kontakcie", "Otwarty", "Czuły", "Przyjazny",
    ],
  },
  {
    id: "zabawa",
    label: "Zabawa",
    icon: "🎉",
    needs: [
      "Wesoły", "Śmiały", "Żywy", "Chętny do zabawy", "Rozbawiony", "Rozradowany",
    ],
  },
  {
    id: "wzruszenie",
    label: "Wzruszenie",
    icon: "🌸",
    needs: [
      "Wzruszony", "Roztkliwiony", "Pokrzepiony", "Rozpromieniony", "Poruszony",
    ],
  },
]

export const emotionsUnmetCategories = [
  {
    id: "brak-energii",
    label: "Brak energii",
    icon: "😴",
    needs: [
      "Bez energii", "Apatyczny", "Markotny", "Odrętwiały", "Oklapnięty",
      "Osowiały", "Otępiały", "Przybity", "Przygaszony",
    ],
  },
  {
    id: "dyskomfort",
    label: "Dyskomfort",
    icon: "😰",
    needs: [
      "Dyskomfort", "Zaniepokojony", "Zawstydzony", "Zakłopotany",
      "Skonsternowany", "Speszony", "Spłoszony", "Spięty", "Strapiony", "Zmieszany", "Zażenowany",
    ],
  },
  {
    id: "zmeczenie",
    label: "Zmęczenie",
    icon: "😩",
    needs: [
      "Zmęczony", "Wyczerpany", "Śpiący", "Słaby", "Przytłoczony",
    ],
  },
  {
    id: "nuda",
    label: "Nuda",
    icon: "😶",
    needs: [
      "Niezainteresowany", "Znudzony", "Pusty",
    ],
  },
  {
    id: "smutek",
    label: "Smutek",
    icon: "😔",
    needs: [
      "Niezadowolony", "Nieszczęśliwy", "Rozczarowany", "Ociężały", "Osamotniony",
      "Zasmucony", "Zatroskany", "Przygnębiony", "Załamany", "Zafrasowany",
      "Rozgoryczony", "Zgorzkniały", "Zawiedziony",
    ],
  },
  {
    id: "napiecie",
    label: "Napięcie",
    icon: "😤",
    needs: [
      "Nerwowy", "Zmartwiony", "Napięty", "Podenerwowany", "Podminowany",
    ],
  },
  {
    id: "zlosc",
    label: "Złość",
    icon: "😡",
    needs: [
      "Wściekły", "Zły", "Sfrustrowany", "Zirytowany", "Podrażniony", "Rozdygotany",
      "Rozeźlony", "Rozsierdzony", "Zagniewany", "Wzburzony",
    ],
  },
  {
    id: "strach",
    label: "Strach",
    icon: "😨",
    needs: [
      "Przestraszony", "Pełen obaw", "Wątpiący", "Zszokowany", "Przerażony",
      "Spanikowany", "Zatrwożony", "Roztrzęsiony", "Zaskoczony",
    ],
  },
]

export const emotionsMet = emotionsMetCategories.flatMap(c => c.needs)
export const emotionsUnmet = emotionsUnmetCategories.flatMap(c => c.needs)
