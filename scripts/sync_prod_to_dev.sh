#!/usr/bin/env bash
set -euo pipefail

# Sync a prod MongoDB database into a dev MongoDB database.
# This will DROP the dev database and restore from prod.
#
# Required env vars:
#   MONGODB_URI_PROD
#   MONGODB_URI_DEV
#
# Optional:
#   PROD_DB_NAME
#   DEV_DB_NAME
#   BACKUP_DIR (default: /tmp/my-exams-dev-backup-YYYYmmdd-HHMMSS)
#   DUMP_DIR (default: /tmp/my-exams-prod-dump-YYYYmmdd-HHMMSS)
#
# Usage:
#   ./scripts/sync_prod_to_dev.sh [--prod-db my_exams] [--dev-db my_exams_dev] [--skip-backup] [--yes] [--allow-same-cluster]
#
# Example:
#   export MONGODB_URI_PROD='...'
#   export MONGODB_URI_DEV='...'
#   ./scripts/sync_prod_to_dev.sh --prod-db my_exams --dev-db my_exams_dev --yes

PROD_DB_NAME="${PROD_DB_NAME:-}"
DEV_DB_NAME="${DEV_DB_NAME:-}"
SKIP_BACKUP=0
AUTO_YES=0
ALLOW_SAME_CLUSTER=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --prod-db)
      PROD_DB_NAME="${2:-}"
      shift 2
      ;;
    --dev-db)
      DEV_DB_NAME="${2:-}"
      shift 2
      ;;
    --skip-backup)
      SKIP_BACKUP=1
      shift 1
      ;;
    --yes)
      AUTO_YES=1
      shift 1
      ;;
    --allow-same-cluster)
      ALLOW_SAME_CLUSTER=1
      shift 1
      ;;
    -h|--help)
      echo "Usage: $0 [--prod-db my_exams] [--dev-db my_exams_dev] [--skip-backup] [--yes] [--allow-same-cluster]"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [--prod-db my_exams] [--dev-db my_exams_dev] [--skip-backup] [--yes] [--allow-same-cluster]"
      exit 1
      ;;
  esac
done

if [[ -z "${MONGODB_URI_PROD:-}" ]]; then
  echo "MONGODB_URI_PROD is required."
  exit 1
fi

if [[ -z "${MONGODB_URI_DEV:-}" ]]; then
  echo "MONGODB_URI_DEV is required."
  exit 1
fi

command -v mongodump >/dev/null 2>&1 || { echo "mongodump not found."; exit 1; }
command -v mongorestore >/dev/null 2>&1 || { echo "mongorestore not found."; exit 1; }
command -v mongosh >/dev/null 2>&1 || { echo "mongosh not found."; exit 1; }

extract_hosts() {
  local uri="$1"
  local rest="${uri#*://}"
  rest="${rest#*@}"
  local hostpart="${rest%%/*}"
  echo "${hostpart}"
}

normalize_hosts() {
  local hostpart="$1"
  echo "${hostpart}" \
    | tr ',' '\n' \
    | sed 's/:.*$//' \
    | tr -d ' ' \
    | sort -u \
    | tr '\n' ',' \
    | sed 's/,$//'
}

extract_db_name() {
  local uri="$1"
  local rest="${uri#*://}"
  rest="${rest#*@}"

  if [[ "${rest}" != */* ]]; then
    echo ""
    return
  fi

  local path_part="${rest#*/}"
  path_part="${path_part%%\?*}"
  path_part="${path_part%%/*}"

  if [[ -z "${path_part}" ]]; then
    echo ""
    return
  fi

  echo "${path_part}"
}

PROD_DB_NAME="${PROD_DB_NAME:-$(extract_db_name "${MONGODB_URI_PROD}")}"
DEV_DB_NAME="${DEV_DB_NAME:-$(extract_db_name "${MONGODB_URI_DEV}")}"

if [[ -z "${PROD_DB_NAME}" ]]; then
  echo "Unable to determine PROD_DB_NAME from MONGODB_URI_PROD. Pass --prod-db explicitly."
  exit 1
fi

if [[ -z "${DEV_DB_NAME}" ]]; then
  echo "Unable to determine DEV_DB_NAME from MONGODB_URI_DEV. Pass --dev-db explicitly."
  exit 1
fi

prod_hosts="$(normalize_hosts "$(extract_hosts "${MONGODB_URI_PROD}")")"
dev_hosts="$(normalize_hosts "$(extract_hosts "${MONGODB_URI_DEV}")")"

if [[ -n "${prod_hosts}" && "${prod_hosts}" == "${dev_hosts}" && "${ALLOW_SAME_CLUSTER}" -ne 1 ]]; then
  echo "Guard: prod and dev URIs appear to point to the same cluster (${prod_hosts})."
  echo "Aborting to avoid accidental overwrite."
  echo "If this is intentional, re-run with --allow-same-cluster."
  exit 1
fi

timestamp="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="${BACKUP_DIR:-/tmp/my-exams-dev-backup-${timestamp}}"
DUMP_DIR="${DUMP_DIR:-/tmp/my-exams-prod-dump-${timestamp}}"

if [[ "${AUTO_YES}" -ne 1 ]]; then
  echo "This will DROP the dev database '${DEV_DB_NAME}' and restore it from prod database '${PROD_DB_NAME}'."
  read -r -p "Type '${DEV_DB_NAME}' to continue: " confirm
  if [[ "${confirm}" != "${DEV_DB_NAME}" ]]; then
    echo "Aborted."
    exit 1
  fi
fi

if [[ "${SKIP_BACKUP}" -ne 1 ]]; then
  echo "Backing up dev database to: ${BACKUP_DIR}"
  mongodump --uri "${MONGODB_URI_DEV}" --db "${DEV_DB_NAME}" --out "${BACKUP_DIR}"
else
  echo "Skipping dev backup."
fi

echo "Dropping dev database '${DEV_DB_NAME}' for a strict mirror."
mongosh "${MONGODB_URI_DEV}" --quiet --eval "db.getSiblingDB('${DEV_DB_NAME}').dropDatabase()"

echo "Dumping prod database '${PROD_DB_NAME}' to: ${DUMP_DIR}"
mongodump --uri "${MONGODB_URI_PROD}" --db "${PROD_DB_NAME}" --out "${DUMP_DIR}"

echo "Restoring prod dump '${PROD_DB_NAME}' into dev database '${DEV_DB_NAME}' (drop enabled)."
mongorestore --uri "${MONGODB_URI_DEV}" --drop --db "${DEV_DB_NAME}" "${DUMP_DIR}/${PROD_DB_NAME}"

echo "Done. Dev now mirrors prod."
