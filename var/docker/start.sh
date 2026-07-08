#!/bin/sh
# Container entrypoint: bring up the in-container Temporal dev server first,
# wait until it accepts connections, then start nginx + the Postiz processes.
set -e

TEMPORAL_DB_DIR="${TEMPORAL_DB_DIR:-/temporal}"
mkdir -p "$TEMPORAL_DB_DIR"

echo "[start] launching Temporal dev server..."
temporal server start-dev \
  --ip 0.0.0.0 \
  --port 7233 \
  --ui-port 8233 \
  --db-filename "$TEMPORAL_DB_DIR/temporal.db" \
  --namespace default \
  --log-level error &

# Wait for Temporal to accept connections (up to ~90s) so the backend's
# search-attribute registration doesn't race it on boot.
i=0
while [ "$i" -lt 90 ]; do
  if temporal operator namespace describe default --address 127.0.0.1:7233 >/dev/null 2>&1; then
    echo "[start] Temporal dev server ready"
    break
  fi
  i=$((i + 1))
  sleep 1
done

echo "[start] starting nginx + app processes..."
nginx
pnpm run pm2
