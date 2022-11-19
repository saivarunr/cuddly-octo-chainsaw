const mass_definitions = {
  Tone: {
    Kilogram: (x) => 1000 * x,
    "Imperial Ton": (x) => x / 1.016,
    "US Ton": (x) => x * 1.102,
  },
  "Imperial Ton": {
    Tone: (x) => x * 1.016,
  },
  "US Ton": {
    Tone: (x) => x / 1.102,
  },
  Stone: {
    Kilogram: (x) => x * 6.35,
  },
  Kilogram: {
    Tone: (x) => 1 / (1000 * x),
    Gram: (x) => 1000 * x,
    Stone: (x) => x / 6.35,
    Pound: (x) => x * 2.205,
  },
  Pound: {
    Kilogram: (x) => x / 2.205,
    Ounce: (x) => x * 16,
  },
  Ounce: {
    Pound: (x) => x / 16,
  },
  Gram: {
    Kilogram: (x) => 1 / (1000 * x),
    Milligram: (x) => 1000 * x,
  },
  Milligram: {
    Gram: (x) => 1 / (1000 * x),
    Microgram: (x) => 1000 * x,
  },
  Microgram: {
    Milligram: (x) => 1 / (1000 * x),
  },
};