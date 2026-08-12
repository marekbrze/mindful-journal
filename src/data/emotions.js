export const emotionsMetCategories = [
  {
    id: "energia",
    label: "Energy",
    icon: "⚡",
    needs: [
      "Energetic", "Driven", "Lively", "Stimulated", "Animated",
      "Electrified", "Enthusiastic", "Uplifted", "Passionate",
    ],
  },
  {
    id: "spokoj",
    label: "Calm",
    icon: "🌿",
    needs: [
      "Comfortable", "Fulfilled", "Satisfied", "Relaxed", "At ease",
      "Safe", "Carefree", "Calm", "Serene",
    ],
  },
  {
    id: "swiezosc",
    label: "Freshness",
    icon: "✨",
    needs: [
      "Rested", "Refreshed", "Energetic", "Strong", "Cheerful", "Free", "Blissful",
    ],
  },
  {
    id: "ciekawosc",
    label: "Curiosity",
    icon: "🔍",
    needs: [
      "Interested", "Curious", "Excited", "Eager", "Fascinated",
      "Intrigued", "Inspired", "Encouraged",
    ],
  },
  {
    id: "radosc",
    label: "Joy",
    icon: "😊",
    needs: [
      "Content", "Happy", "Hopeful", "Delighted", "Grateful",
      "Joyful", "Fulfilled", "Optimistic", "Proud",
    ],
  },
  {
    id: "milosc",
    label: "Love",
    icon: "💛",
    needs: [
      "Loving", "Connected", "Open", "Tender", "Affectionate",
    ],
  },
  {
    id: "zabawa",
    label: "Play",
    icon: "🎉",
    needs: [
      "Cheerful", "Daring", "Lively", "Playful", "Amused", "Elated",
    ],
  },
  {
    id: "wzruszenie",
    label: "Moved",
    icon: "🌸",
    needs: [
      "Moved", "Touched", "Uplifted", "Glowing", "Stirred",
    ],
  },
]

export const emotionsUnmetCategories = [
  {
    id: "brak-energii",
    label: "Lack of energy",
    icon: "😴",
    needs: [
      "Drained", "Apathetic", "Gloomy", "Numb", "Limp",
      "Lethargic", "Dazed", "Down", "Deflated",
    ],
  },
  {
    id: "dyskomfort",
    label: "Discomfort",
    icon: "😰",
    needs: [
      "Uncomfortable", "Uneasy", "Ashamed", "Embarrassed",
      "Dismayed", "Flustered", "Startled", "Tense", "Troubled", "Confused", "Abashed",
    ],
  },
  {
    id: "zmeczenie",
    label: "Fatigue",
    icon: "😩",
    needs: [
      "Tired", "Exhausted", "Sleepy", "Weak", "Overwhelmed",
    ],
  },
  {
    id: "nuda",
    label: "Boredom",
    icon: "😶",
    needs: [
      "Uninterested", "Bored", "Empty",
    ],
  },
  {
    id: "smutek",
    label: "Sadness",
    icon: "😔",
    needs: [
      "Dissatisfied", "Unhappy", "Disappointed", "Heavy", "Lonely",
      "Sad", "Worried", "Downcast", "Broken", "Troubled",
      "Bitter", "Resentful", "Let down",
    ],
  },
  {
    id: "napiecie",
    label: "Tension",
    icon: "😤",
    needs: [
      "Nervous", "Worried", "Tense", "Stressed", "Agitated",
    ],
  },
  {
    id: "zlosc",
    label: "Anger",
    icon: "😡",
    needs: [
      "Furious", "Angry", "Frustrated", "Irritated", "Annoyed", "Trembling",
      "Incensed", "Enraged", "Indignant", "Agitated",
    ],
  },
  {
    id: "strach",
    label: "Fear",
    icon: "😨",
    needs: [
      "Frightened", "Apprehensive", "Doubtful", "Shocked", "Terrified",
      "Panicked", "Alarmed", "Shaken", "Surprised",
    ],
  },
]

export const emotionsMet = emotionsMetCategories.flatMap(c => c.needs)
export const emotionsUnmet = emotionsUnmetCategories.flatMap(c => c.needs)
