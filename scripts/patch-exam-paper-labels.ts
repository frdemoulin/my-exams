import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const monthNames = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
];

const buildLabel = (centerNames: string[], examMonth?: number | null, examYear?: number | null, sessionDay?: string | null) => {
  const parts: string[] = [];
  if (centerNames.length > 0) {
    parts.push(centerNames.join('-'));
  }

  const monthLabel = examMonth ? monthNames[(examMonth || 1) - 1] : undefined;
  if (monthLabel) parts.push(monthLabel);

  if (examYear) parts.push(String(examYear));
  if (sessionDay) parts.push(sessionDay);

  return parts.join(' ').trim();
};

async function main() {
  const centers = await prisma.examinationCenter.findMany({ select: { id: true, description: true } });
  const centersById = new Map(centers.map((c) => [c.id, c.description]));

  const examPapers = await prisma.examPaper.findMany();

  let updated = 0;
  for (const paper of examPapers) {
    const centerNames = paper.examinationCenterIds
      .map((id) => centersById.get(id))
      .filter((name): name is string => Boolean(name));

    const year = paper.examYear ?? paper.sessionYear;
    if (!centerNames.length || !paper.examMonth || !year) {
      continue;
    }

    const nextLabel = buildLabel(centerNames, paper.examMonth, year, paper.sessionDay);
    if (nextLabel && nextLabel !== paper.label) {
      await prisma.examPaper.update({
        where: { id: paper.id },
        data: { label: nextLabel },
      });
      updated += 1;
      console.log(`✓ ${paper.label} -> ${nextLabel}`);
    }
  }

  console.log(`Terminé : ${updated} sujets mis à jour sur ${examPapers.length}`);
}

main()
  .catch((error) => {
    console.error('Erreur lors du patch des labels de sujets :', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
