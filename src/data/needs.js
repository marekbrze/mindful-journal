export const needsCategories = [
  {
    id: "fizyczne",
    label: "Fizyczne",
    icon: "🌿",
    needs: [
      "Powietrze", "Pożywienie", "Woda", "Schronienie", "Ruch",
      "Odpoczynek", "Sen", "Wyrażenie seksualności", "Dotyk", "Bezpieczeństwo fizyczne",
    ],
  },
  {
    id: "autonomia",
    label: "Autonomia",
    icon: "🦋",
    needs: [
      "Wybieranie własnych planów", "Wybieranie własnych celów", "Wybieranie własnych marzeń",
      "Wybieranie własnych wartości", "Wolność", "Przestrzeń", "Spontaniczność", "Niezależność",
    ],
  },
  {
    id: "zwiazek",
    label: "Związek z innymi",
    icon: "🤝",
    needs: [
      "Przyczynianie się do dobrostanu innych", "Informacja zwrotna", "Przynależność",
      "Wsparcie", "Wspólnota", "Kontakt z innymi", "Towarzystwo", "Bliskość",
      "Dzielenie się", "Więź", "Uwaga", "Bezpieczeństwo emocjonalne", "Szczerość",
      "Empatia", "Współzależność", "Szacunek", "Równe szanse", "Bycie widzianym",
      "Zrozumienie", "Zaufanie", "Ciepło", "Otucha", "Miłość", "Intymność",
      "Siła grupowa", "Współpraca", "Wzajemność",
    ],
  },
  {
    id: "kontakt",
    label: "Kontakt z sobą",
    icon: "🌱",
    needs: [
      "Autentyczność", "Wyzwania", "Uczenie się", "Jasność", "Świadomość",
      "Kompetencje", "Kreatywność", "Integralność", "Samorozwój", "Autoekspresja",
      "Poczucie własnej wartości", "Samoakceptacja", "Szacunek dla siebie",
      "Osiągnięcia", "Prywatność", "Sens", "Sprawczość", "Spójność",
      "Rozwój", "Stymulacja", "Zaufanie do siebie", "Świętowanie", "Cel",
    ],
  },
  {
    id: "radosc",
    label: "Radość życia",
    icon: "✨",
    needs: [
      "Zabawa", "Przygoda", "Humor", "Prostota", "Radość",
      "Inspiracja", "Łatwość", "Nadzieja",
    ],
  },
  {
    id: "swiat",
    label: "Związek ze światem",
    icon: "🌍",
    needs: [
      "Dobrostan fizyczny", "Dobrostan emocjonalny", "Komfort", "Różnorodność",
      "Piękno", "Porządek", "Kontakt z przyrodą", "Harmonia", "Pokój",
    ],
  },
]

export const allNeeds = needsCategories.flatMap(c => c.needs)
