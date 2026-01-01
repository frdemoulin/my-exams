#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/create_issues_v1.sh OWNER/REPO
# Exemple:
#   ./scripts/create_issues_v1.sh frdemoulin/my-exams

REPO="${1:-}"
if [[ -z "${REPO}" ]]; then
  echo "Usage: $0 OWNER/REPO"
  echo "Example: $0 frdemoulin/my-exams"
  echo "Hint: install GitHub CLI with 'brew install gh' and login using 'gh auth login'."
  exit 1
fi

# Vérifier que gh est installé + authentifié
command -v gh >/dev/null 2>&1 || { echo "gh CLI not found. Install GitHub CLI first."; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "gh not authenticated. Run: gh auth login"; exit 1; }

# Créer les labels si besoin (idempotent-ish)
create_label () {
  local name="$1"
  local color="$2"
  gh label create "$name" --repo "$REPO" --color "$color" --force >/dev/null 2>&1 || true
}

create_label "P0" "B60205"
create_label "P1" "D93F0B"
create_label "P2" "FBCA04"
create_label "examens" "0E8A16"
create_label "ux" "1D76DB"
create_label "seo" "5319E7"
create_label "navigation" "5319E7"
create_label "corrections" "1D76DB"
create_label "tracking" "0052CC"
create_label "user" "0052CC"
create_label "auth" "0052CC"
create_label "ux-copy" "1D76DB"
create_label "backend" "111111"
create_label "api" "111111"
create_label "entitlements" "111111"
create_label "dashboard" "1D76DB"

# Créer les issues à partir du JSON
node - "$REPO" <<'NODE'
const fs = require('fs');

const repo = process.argv[2];
const items = JSON.parse(fs.readFileSync('scripts/issues_v1.json', 'utf8'));

const { spawnSync } = require('child_process');

const listExisting = () => {
  const res = spawnSync('gh', [
    'issue', 'list',
    '--repo', repo,
    '--state', 'all',
    '--limit', '1000',
    '--json', 'title'
  ], { encoding: 'utf8' });

  if (res.status !== 0) {
    console.error('Failed to list existing issues. Aborting to avoid duplicates.');
    console.error(res.stderr || res.stdout || '');
    process.exit(res.status || 1);
  }

  try {
    const parsed = JSON.parse(res.stdout || '[]');
    return new Set(
      parsed
        .map((item) => (item.title || '').trim().toLowerCase())
        .filter(Boolean)
    );
  } catch (error) {
    console.error('Failed to parse existing issues list. Aborting to avoid duplicates.');
    console.error(error);
    process.exit(1);
  }
};

const existingTitles = listExisting();

for (const it of items) {
  const normalizedTitle = (it.title || '').trim().toLowerCase();
  if (normalizedTitle && existingTitles.has(normalizedTitle)) {
    console.log(`Skip (already exists): ${it.title}`);
    continue;
  }

  const labels = it.labels.join(',');
  const res = spawnSync('gh', [
    'issue', 'create',
    '--repo', repo,
    '--title', it.title,
    '--body', it.body,
    '--label', labels
  ], { stdio: 'inherit' });

  if (res.status !== 0) {
    console.error(`Failed creating issue: ${it.title}`);
    process.exit(res.status || 1);
  }

  if (normalizedTitle) {
    existingTitles.add(normalizedTitle);
  }
}

console.log('Done.');
NODE
