const mass_definitions = {
  Tone: {
    Kilogram: (x) => 1000 * x,
    USTon: (x) => 1.102 * x,
  },
  Kilogram: {
    Gram: (x) => 1000 * x,
    Pound: (x) => 2.205 * x,
    Ounce: (x) => 35.274 * x,
  },
  Gram: {
    Milligram: (x) => 1000 * x,
  },
  Milligram: {
    Microgram: (x) => 1000 * x,
  },
  Stone: {
    Kilogram: (x) => 6.35 * x,
  },
};