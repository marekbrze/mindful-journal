export const needsCategories = [
  {
    id: "fizyczne",
    label: "Physical",
    icon: "🌿",
    needs: [
      "Air", "Food", "Water", "Shelter", "Movement",
      "Rest", "Sleep", "Sexual expression", "Touch", "Physical safety",
    ],
  },
  {
    id: "autonomia",
    label: "Autonomy",
    icon: "🦋",
    needs: [
      "Choosing own plans", "Choosing own goals", "Choosing own dreams",
      "Choosing own values", "Freedom", "Space", "Spontaneity", "Independence",
    ],
  },
  {
    id: "zwiazek",
    label: "Connection with others",
    icon: "🤝",
    needs: [
      "Contributing to others' wellbeing", "Feedback", "Belonging",
      "Support", "Community", "Connection with others", "Companionship", "Closeness",
      "Sharing", "Bond", "Attention", "Emotional safety", "Honesty",
      "Empathy", "Interdependence", "Respect", "Equal opportunity", "Being seen",
      "Understanding", "Trust", "Warmth", "Comfort", "Love", "Intimacy",
      "Group strength", "Cooperation", "Reciprocity",
    ],
  },
  {
    id: "kontakt",
    label: "Connection with self",
    icon: "🌱",
    needs: [
      "Authenticity", "Challenge", "Learning", "Clarity", "Awareness",
      "Competence", "Creativity", "Integrity", "Self-growth", "Self-expression",
      "Sense of self-worth", "Self-acceptance", "Self-respect",
      "Achievement", "Privacy", "Meaning", "Agency", "Congruence",
      "Growth", "Stimulation", "Self-trust", "Celebration", "Purpose",
    ],
  },
  {
    id: "radosc",
    label: "Joy",
    icon: "✨",
    needs: [
      "Play", "Adventure", "Humor", "Simplicity", "Joy",
      "Inspiration", "Ease", "Hope",
    ],
  },
  {
    id: "swiat",
    label: "Connection with the world",
    icon: "🌍",
    needs: [
      "Physical wellbeing", "Emotional wellbeing", "Comfort", "Diversity",
      "Beauty", "Order", "Connection with nature", "Harmony", "Peace",
    ],
  },
]

export const allNeeds = needsCategories.flatMap(c => c.needs)
