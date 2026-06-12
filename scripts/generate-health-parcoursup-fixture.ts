import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const DATASET_ID = "fr-esr-cartographie_formations_parcoursup";
const DATASET_URL =
    `https://data.enseignementsup-recherche.gouv.fr/explore/dataset/${DATASET_ID}/information/`;
const EXPORT_URL =
    `https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/${DATASET_ID}` +
    `/exports/json?where=annee%3D%222025%22%20and%20search%28%22Acc%C3%A8s%20Sant%C3%A9%22%29`;
const OUTPUT_PATH = resolve("prisma/seeds/data/health-parcoursup-2025.json");
const PASS_TAG = "Parcours d'Accès Spécifique Santé (PASS)";
const LAS_TAG = "Licence Accès Santé (LAS)";

// Rattachements explicitement indiqués dans les fiches Parcoursup 2025 des partenaires.
// La clé est l'UAI de l'établissement qui dispense la licence, la valeur l'UAI de
// l'université qui porte l'accès aux filières de santé.
const HEALTH_COORDINATOR_UAI: Record<string, string> = {
    "0331766R": "0333298F", // Université Bordeaux Montaigne -> Université de Bordeaux
    "0301911P": "0342490X", // Université de Nîmes -> Université de Montpellier (fiche 28881)
    "0350937D": "0353074B", // Université Rennes 2 -> Université de Rennes
    "0720916E": "0490970N", // Le Mans Université -> Université Angers (fiche 26780)
    "0840685N": "0134248X", // Avignon Université -> Aix-Marseille Université (fiche 47478)
    "0911975C": "0912418J", // Université d'Évry -> Université Paris-Saclay (fiche 35899)
    "0931827F": "0931391G", // Université Paris 8 -> Université Sorbonne Paris Nord (fiche 28418)
    "0952259P": "0931391G", // CY Cergy Paris Université -> Université Sorbonne Paris Nord (fiche 48006)
    "0952260R": "0931391G", // CY SUP -> Université Sorbonne Paris Nord (fiche 32505)
    "0772894C": "0941111X", // Université Gustave Eiffel -> UPEC, pôle universitaire Paris-Est
    "9840349G": "0333298F", // Université de la Polynésie française -> Université de Bordeaux (fiche 35561)
};

type SourceRecord = {
    annee?: string;
    etab_uai?: string;
    etab_nom?: string;
    etab_url?: string;
    region?: string;
    departement?: string;
    commune?: string;
    nm?: string[];
    fl?: string[];
    aut?: string[];
    fiche?: string;
    gta?: string;
    etablissement_id_paysage?: string;
};

type Offering = {
    type: "PASS" | "LAS";
    name: string;
    campus: string | null;
    parcoursupCode: string;
    sourceUrl: string;
    sourceUaiCode: string;
    sourceInstitutionName: string;
    mentions: string[];
};

type SourceInstitution = {
    uaiCode: string;
    names: string[];
    cities: string[];
    regions: string[];
    departments: string[];
    websites: string[];
    paysageIds: string[];
    offerings: Offering[];
    healthAccessUrl: string | null;
    healthProviderKey: string;
};

const compact = (values: (string | null | undefined)[]) =>
    values.map((value) => value?.trim()).filter((value): value is string => Boolean(value));

const mode = (values: string[]) => {
    const counts = new Map<string, number>();
    for (const value of compact(values)) counts.set(value, (counts.get(value) ?? 0) + 1);
    return [...counts.entries()]
        .sort(([leftValue, leftCount], [rightValue, rightCount]) =>
            rightCount - leftCount || leftValue.localeCompare(rightValue, "fr")
        )[0]?.[0] ?? null;
};

const classify = (record: SourceRecord): Offering["type"] | null => {
    if (record.aut?.includes(PASS_TAG)) return "PASS";
    if (record.aut?.includes(LAS_TAG)) return "LAS";
    return null;
};

const cleanInstitutionName = (name: string) =>
    name.replace(/\s+\([^()]*(?:\d{2,3}|arrondissement)[^()]*\)$/i, "").trim();

const parentInstitutionName = (name: string) => {
    const cleanName = cleanInstitutionName(name);
    const trailingUniversity = cleanName.match(/[–—]\s*(Universit[eé].+)$/i)?.[1];
    if (trailingUniversity) return trailingUniversity;
    if (/Universit[eé] Paris-Saclay/i.test(cleanName)) return "Université Paris-Saclay";
    if (/Unité de Formation et de Recherche.+Université de Versailles/i.test(cleanName)) {
        return "Université de Versailles - Saint Quentin en Yvelines";
    }

    return cleanName
        .replace(/^Universite Jean Monnet,/i, "Université Jean Monnet,")
        .replace(/,\s*Campus d'Orsay$/i, "")
        .replace(
            /\s+-\s+(?:Antenne|Bordeaux Métropole|Campus|Centre Univ\.?|CY SUP|Département|Faculté|Pôle|Saint Denis|Site|UFR).*$/i,
            ""
        )
        .replace(/^Université (?:de )?Bourgogne Europe \(ex (?:UB|université de Bourgogne)\)$/i, "Université Bourgogne Europe")
        .trim();
};

const decodeHtmlAttribute = (value: string) =>
    value.replaceAll("&amp;", "&").replaceAll("&#39;", "'").replaceAll("&quot;", '"');

const healthProviderKey = (url: string | null) => {
    if (!url) return null;
    try {
        const labels = new URL(url).hostname.toLowerCase().replace(/^www\./, "").split(".");
        return labels.length > 2 ? labels.slice(-2).join(".") : labels.join(".");
    } catch {
        return null;
    }
};

const fetchHealthAccessUrl = async (sourceUrls: string[]) => {
    for (const sourceUrl of sourceUrls) {
        const response = await fetch(sourceUrl);
        if (!response.ok) continue;
        const html = await response.text();
        const match = html.match(/<a[^>]+id="lien-nombre-places-sante"[^>]+href="([^"]+)"/i);
        if (match) return decodeHtmlAttribute(match[1]);
    }
    return null;
};

const sourceInstitutionScore = (institution: SourceInstitution, providerKeys: Set<string>) => {
    const name = mode(institution.names) ?? "";
    const websiteMatchesProvider = institution.websites.some(
        (website) => providerKeys.has(healthProviderKey(website) ?? "")
    );
    const isUniversity = /^(universit[eé]|sorbonne universit[eé]|nantes universit[eé]|avignon universit[eé]|la rochelle universit[eé]|le mans universit[eé])/i.test(
        name
    );
    const isHealthFaculty = /facult[eé].*(m[eé]decine|sant[eé])/i.test(name);
    const isComponent = /(antenne|campus|site|ufr|iut|eisine|inalco|esitech|isis|facultés libres)/i.test(
        name
    );

    return (
        (websiteMatchesProvider ? 1_000 : 0) +
        (institution.offerings.some((offering) => offering.type === "PASS") ? 2_000 : 0) +
        (isUniversity ? 500 : 0) +
        (isHealthFaculty ? 400 : 0) +
        institution.offerings.length * 10 -
        (isComponent ? 250 : 0) -
        name.length / 100
    );
};

class DisjointSet {
    private readonly parents = new Map<string, string>();

    add(value: string) {
        if (!this.parents.has(value)) this.parents.set(value, value);
    }

    find(value: string): string {
        const parent = this.parents.get(value);
        if (!parent) throw new Error(`Établissement source inconnu : ${value}`);
        if (parent === value) return value;
        const root = this.find(parent);
        this.parents.set(value, root);
        return root;
    }

    union(left: string, right: string) {
        const leftRoot = this.find(left);
        const rightRoot = this.find(right);
        if (leftRoot !== rightRoot) this.parents.set(rightRoot, leftRoot);
    }
}

async function main() {
    const response = await fetch(EXPORT_URL);
    if (!response.ok) {
        throw new Error(`Téléchargement Parcoursup impossible : ${response.status} ${response.statusText}`);
    }

    const source = (await response.json()) as SourceRecord[];
    const sourceInstitutions = new Map<string, Omit<SourceInstitution, "healthAccessUrl" | "healthProviderKey">>();

    for (const record of source) {
        const type = classify(record);
        const uaiCode = record.etab_uai?.trim();
        const parcoursupCode = record.gta?.trim();
        const sourceUrl = record.fiche?.trim();
        const name = compact(record.nm ?? []).join(" / ");

        if (!type || record.annee !== "2025" || !uaiCode || !parcoursupCode || !sourceUrl || !name) continue;

        const sourceInstitution = sourceInstitutions.get(uaiCode) ?? {
            uaiCode,
            names: [],
            cities: [],
            regions: [],
            departments: [],
            websites: [],
            paysageIds: [],
            offerings: [],
        };
        const sourceInstitutionName = cleanInstitutionName(record.etab_nom?.trim() || uaiCode);
        sourceInstitution.names.push(sourceInstitutionName);
        sourceInstitution.cities.push(...compact([record.commune]));
        sourceInstitution.regions.push(...compact([record.region]));
        sourceInstitution.departments.push(...compact([record.departement]));
        sourceInstitution.websites.push(...compact([record.etab_url]));
        sourceInstitution.paysageIds.push(...compact([record.etablissement_id_paysage]));
        sourceInstitution.offerings.push({
            type,
            name,
            campus: record.commune?.trim() || null,
            parcoursupCode,
            sourceUrl,
            sourceUaiCode: uaiCode,
            sourceInstitutionName,
            mentions: [...new Set(compact(record.fl ?? []))].sort((left, right) =>
                left.localeCompare(right, "fr")
            ),
        });
        sourceInstitutions.set(uaiCode, sourceInstitution);
    }

    const queue = [...sourceInstitutions.values()];
    const resolvedSourceInstitutions: SourceInstitution[] = [];
    const worker = async () => {
        while (queue.length > 0) {
            const sourceInstitution = queue.shift();
            if (!sourceInstitution) return;
            const healthAccessUrl = await fetchHealthAccessUrl(
                sourceInstitution.offerings.map((offering) => offering.sourceUrl)
            );
            const providerKey =
                healthProviderKey(healthAccessUrl) ??
                `paysage:${mode(sourceInstitution.paysageIds) ?? sourceInstitution.uaiCode}`;
            resolvedSourceInstitutions.push({
                ...sourceInstitution,
                healthAccessUrl,
                healthProviderKey: providerKey,
            });
        }
    };
    await Promise.all(Array.from({ length: 12 }, worker));

    const disjointSet = new DisjointSet();
    for (const institution of resolvedSourceInstitutions) disjointSet.add(institution.uaiCode);

    const connectBy = (keys: (institution: SourceInstitution) => string[]) => {
        const firstByKey = new Map<string, string>();
        for (const institution of resolvedSourceInstitutions) {
            for (const key of keys(institution)) {
                const first = firstByKey.get(key);
                if (first) disjointSet.union(first, institution.uaiCode);
                else firstByKey.set(key, institution.uaiCode);
            }
        }
    };

    connectBy((institution) => [...new Set(institution.paysageIds)]);
    connectBy((institution) => [...new Set(institution.names.map(parentInstitutionName))]);
    for (const [partnerUai, coordinatorUai] of Object.entries(HEALTH_COORDINATOR_UAI)) {
        if (sourceInstitutions.has(partnerUai) && sourceInstitutions.has(coordinatorUai)) {
            disjointSet.union(partnerUai, coordinatorUai);
        }
    }

    const institutionsByWebsite = new Map<string, string[]>();
    for (const sourceInstitution of resolvedSourceInstitutions) {
        for (const website of sourceInstitution.websites) {
            const key = healthProviderKey(website);
            if (!key) continue;
            institutionsByWebsite.set(key, [...(institutionsByWebsite.get(key) ?? []), sourceInstitution.uaiCode]);
        }
    }
    const groupHasPass = (uaiCode: string) => {
        const root = disjointSet.find(uaiCode);
        return resolvedSourceInstitutions.some(
            (institution) =>
                disjointSet.find(institution.uaiCode) === root &&
                institution.offerings.some((offering) => offering.type === "PASS")
        );
    };
    const unionHealthPartners = (left: string, right: string) => {
        if (disjointSet.find(left) === disjointSet.find(right)) return;
        if (groupHasPass(left) && groupHasPass(right)) return;
        disjointSet.union(left, right);
    };

    for (const sourceInstitution of resolvedSourceInstitutions) {
        const providerKey = healthProviderKey(sourceInstitution.healthAccessUrl);
        if (!providerKey) continue;
        for (const matchingInstitution of institutionsByWebsite.get(providerKey) ?? []) {
            unionHealthPartners(sourceInstitution.uaiCode, matchingInstitution);
        }
    }

    const healthInstitutions = new Map<string, SourceInstitution[]>();
    for (const sourceInstitution of resolvedSourceInstitutions) {
        const root = disjointSet.find(sourceInstitution.uaiCode);
        const group = healthInstitutions.get(root) ?? [];
        group.push(sourceInstitution);
        healthInstitutions.set(root, group);
    }

    const normalized = [...healthInstitutions.entries()]
        .map(([, group]) => {
            const providerKeys = new Set(compact(group.map((institution) => healthProviderKey(institution.healthAccessUrl))));
            const canonical = [...group].sort(
                (left, right) =>
                    sourceInstitutionScore(right, providerKeys) - sourceInstitutionScore(left, providerKeys)
            )[0];
            const canonicalName = parentInstitutionName(mode(canonical.names) ?? canonical.uaiCode);
            const allOfferings = group.flatMap((institution) =>
                institution.offerings.map((offering) => ({
                    ...offering,
                    campus:
                        offering.sourceInstitutionName === canonicalName
                            ? offering.campus
                            : compact([offering.sourceInstitutionName, offering.campus]).join(" · "),
                }))
            );

            return {
                uaiCode: canonical.uaiCode,
                sourceUaiCodes: group.map((institution) => institution.uaiCode).sort(),
                providerKey: [...providerKeys].sort()[0] ?? `paysage:${mode(group.flatMap((item) => item.paysageIds)) ?? canonical.uaiCode}`,
                name: canonicalName,
                city: mode(canonical.cities),
                region: mode(canonical.regions),
                department: mode(canonical.departments),
                websiteUrl: mode(canonical.websites) ?? canonical.healthAccessUrl,
                healthAccessUrl:
                    canonical.healthAccessUrl ??
                    group.map((institution) => institution.healthAccessUrl).find(Boolean) ??
                    null,
                offerings: allOfferings.sort(
                    (left, right) =>
                        left.type.localeCompare(right.type) ||
                        left.name.localeCompare(right.name, "fr") ||
                        left.parcoursupCode.localeCompare(right.parcoursupCode)
                ),
            };
        })
        .sort((left, right) => left.name.localeCompare(right.name, "fr"));

    const offeringCount = normalized.reduce((count, institution) => count + institution.offerings.length, 0);
    const sourceUaiCodes = [...sourceInstitutions.keys()].sort();
    const fixture = {
        metadata: {
            sourceTitle: "Cartographie des formations Parcoursup",
            sourceUrl: DATASET_URL,
            sourceLicense: "Licence Ouverte v2.0 (Etalab)",
            sourceSession: "2025",
            academicYear: "2025-2026",
            sourceCheckedAt: new Date().toISOString().slice(0, 10),
            scope:
                "Universités porteuses de l'accès santé et leurs offres portant explicitement les marqueurs " +
                "Parcours d'Accès Spécifique Santé (PASS) ou Licence Accès Santé (LAS) dans la cartographie officielle Parcoursup.",
            sourceEstablishmentCount: sourceInstitutions.size,
            sourceUaiCodes,
            institutionCount: normalized.length,
            offeringCount,
        },
        institutions: normalized,
    };

    await writeFile(OUTPUT_PATH, `${JSON.stringify(fixture, null, 2)}\n`, "utf8");
    console.log(`${normalized.length} établissements et ${offeringCount} offres écrits dans ${OUTPUT_PATH}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
