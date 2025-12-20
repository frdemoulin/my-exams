#!/usr/bin/env bash
set -euo pipefail

if command -v apt-get >/dev/null 2>&1; then
  echo "Installing Ghostscript..."
  if apt-get update && apt-get install -y ghostscript; then
    echo "Ghostscript installed."
  else
    echo "Ghostscript install failed; continuing without it." >&2
  fi
else
  echo "apt-get not available; skipping Ghostscript install." >&2
fi

npm ci --include=dev
npm run build
