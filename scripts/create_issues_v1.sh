#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/create_issues_v1.sh OWNER/REPO
# Exemple:
#   ./scripts/create_issues_v1.sh fred/my-exams

REPO="${1:-}"
if [[ -z "${REPO}" ]]; then
  echo "Usage: $0 OWNER/REPO"
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
node <<'NODE'
const fs = require('fs');

const repo = process.argv[1];
const items = JSON.parse(fs.readFileSync('scripts/issues_v1.json', 'utf8'));

const { spawnSync } = require('child_process');

for (const it of items) {
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
}

console.log('Done.');
NODE "$REPO"
