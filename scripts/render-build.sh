#!/usr/bin/env bash
set -euo pipefail

if command -v apt-get >/dev/null 2>&1; then
  echo "Installing Ghostscript..."
  apt-get update
  apt-get install -y ghostscript
else
  echo "apt-get not available; skipping Ghostscript install." >&2
fi

npm ci
npm run build
