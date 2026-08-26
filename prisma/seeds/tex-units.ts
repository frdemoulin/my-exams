export const TEX_UNITS = {
  G_PER_MOL: String.raw`\mathrm{g}\cdot\mathrm{mol}^{-1}`,
  KG_PER_MOL: String.raw`\mathrm{kg}\cdot\mathrm{mol}^{-1}`,
  MOL_PER_L: String.raw`\mathrm{mol}\cdot\mathrm{L}^{-1}`,
  G_PER_L: String.raw`\mathrm{g}\cdot\mathrm{L}^{-1}`,
  J_PER_MOL: String.raw`\mathrm{J}\cdot\mathrm{mol}^{-1}`,
  KJ_PER_MOL: String.raw`\mathrm{kJ}\cdot\mathrm{mol}^{-1}`,
  DEGREE: String.raw`^\circ`,
  PERCENT: String.raw`\%`,
  MOL_INV: String.raw`\mathrm{mol}^{-1}`,
  MIN: String.raw`\mathrm{min}`,
  S: String.raw`\mathrm{s}`,
  MICROMOL: String.raw`\mu\mathrm{mol}`,
  MICROMOL_PER_MIN: String.raw`\mu\mathrm{mol}\cdot\mathrm{min}^{-1}`,
  MOL_PER_S: String.raw`\mathrm{mol}\cdot\mathrm{s}^{-1}`,
  U_PER_L: String.raw`\mathrm{U}\cdot\mathrm{L}^{-1}`,
  U_PER_MG: String.raw`\mathrm{U}\cdot\mathrm{mg}^{-1}`,
  INVERSE_SECOND: String.raw`\mathrm{s}^{-1}`,
  NM: String.raw`\mathrm{nm}`,
  ENZYME_UNIT: String.raw`\mathrm{U}`,
} as const;

export const texQuantity = (
  value: string | number,
  unit: string,
) => String.raw`${value}\,${unit}`;