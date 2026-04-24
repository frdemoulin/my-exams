#!/usr/bin/env bash
set -euo pipefail

# Sync a dev MongoDB database into a prod MongoDB database.
# This will BACK UP then DROP the prod database and restore from dev.
#
# Required env vars:
#   MONGODB_URI_DEV
#   MONGODB_URI_PROD
#
# Optional env vars:
#   DEV_DB_NAME
#   PROD_DB_NAME
#   BACKUP_DIR
#   DUMP_DIR
#
# Usage:
#   bash scripts/sync_dev_to_prod.sh [--dev-db my_exams_dev] [--prod-db my_exams_prod] [--skip-backup] [--yes] [--allow-same-cluster]

DEV_DB_NAME="${DEV_DB_NAME:-}"
PROD_DB_NAME="${PROD_DB_NAME:-}"
SKIP_BACKUP=0
AUTO_YES=0
ALLOW_SAME_CLUSTER=0

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dev-db)
      DEV_DB_NAME="${2:-}"
      shift 2
      ;;
    --prod-db)
      PROD_DB_NAME="${2:-}"
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
      echo "Usage: $0 [--dev-db my_exams_dev] [--prod-db my_exams_prod] [--skip-backup] [--yes] [--allow-same-cluster]"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [--dev-db my_exams_dev] [--prod-db my_exams_prod] [--skip-backup] [--yes] [--allow-same-cluster]"
      exit 1
      ;;
  esac
done

if [[ -z "${MONGODB_URI_DEV:-}" ]]; then
  echo "MONGODB_URI_DEV is required."
  exit 1
fi

if [[ -z "${MONGODB_URI_PROD:-}" ]]; then
  echo "MONGODB_URI_PROD is required."
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

DEV_DB_NAME="${DEV_DB_NAME:-$(extract_db_name "${MONGODB_URI_DEV}")}"
PROD_DB_NAME="${PROD_DB_NAME:-$(extract_db_name "${MONGODB_URI_PROD}")}"

if [[ -z "${DEV_DB_NAME}" ]]; then
  echo "Unable to determine DEV_DB_NAME from MONGODB_URI_DEV. Pass --dev-db explicitly."
  exit 1
fi

if [[ -z "${PROD_DB_NAME}" ]]; then
  echo "Unable to determine PROD_DB_NAME from MONGODB_URI_PROD. Pass --prod-db explicitly."
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
BACKUP_DIR="${BACKUP_DIR:-/tmp/my-exams-prod-backup-${timestamp}}"
DUMP_DIR="${DUMP_DIR:-/tmp/my-exams-dev-dump-${timestamp}}"

if [[ "${AUTO_YES}" -ne 1 ]]; then
  echo "This will BACK UP then DROP the prod database '${PROD_DB_NAME}' and restore it from dev database '${DEV_DB_NAME}'."
  read -r -p "Type '${PROD_DB_NAME}' to continue: " confirm
  if [[ "${confirm}" != "${PROD_DB_NAME}" ]]; then
    echo "Aborted."
    exit 1
  fi
fi

if [[ "${SKIP_BACKUP}" -ne 1 ]]; then
  echo "Backing up prod database to: ${BACKUP_DIR}"
  mongodump --uri "${MONGODB_URI_PROD}" --db "${PROD_DB_NAME}" --out "${BACKUP_DIR}"
else
  echo "Skipping prod backup."
fi

echo "Dropping prod database '${PROD_DB_NAME}' for a strict mirror."
mongosh "${MONGODB_URI_PROD}" --quiet --eval "db.getSiblingDB('${PROD_DB_NAME}').dropDatabase()"

echo "Dumping dev database '${DEV_DB_NAME}' to: ${DUMP_DIR}"
mongodump --uri "${MONGODB_URI_DEV}" --db "${DEV_DB_NAME}" --out "${DUMP_DIR}"

echo "Restoring dev dump into prod database '${PROD_DB_NAME}' (drop enabled)."
mongorestore --uri "${MONGODB_URI_PROD}" --drop --db "${PROD_DB_NAME}" "${DUMP_DIR}/${DEV_DB_NAME}"

echo "Done. Prod now mirrors dev."