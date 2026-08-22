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
} as const;

export const texQuantity = (
  value: string | number,
  unit: string,
) => String.raw`${value}\,${unit}`;