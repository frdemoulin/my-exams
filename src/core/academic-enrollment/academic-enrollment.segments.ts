export type SecondarySchoolSegment = 'COLLEGE' | 'LYCEE';

/**
 * Associe un grade à son segment scolaire canonique (Collège ou Lycée).
 * Retourne null pour les grades non pris en charge dans le secondaire standard (ex: BTS).
 */
export function resolveSecondarySchoolSegment(
  grade: { shortDescription: string } | string | null | undefined
): SecondarySchoolSegment | null {
  if (!grade) return null;
  const short = (typeof grade === 'string' ? grade : grade.shortDescription || '')
    .trim()
    .toLowerCase();

  switch (short) {
    case '6e':
    case 'sixieme':
    case 'sixième':
    case '5e':
    case 'cinquieme':
    case 'cinquième':
    case '4e':
    case 'quatrieme':
    case 'quatrième':
    case '3e':
    case 'troisieme':
    case 'troisième':
      return 'COLLEGE';

    case '2de':
    case 'seconde':
    case '1re':
    case 'premiere':
    case 'première':
    case 'tle':
    case 'terminale':
      return 'LYCEE';

    default:
      return null;
  }
}
