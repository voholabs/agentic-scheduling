#!/bin/sh
# Voholabs Studio CLI launcher.
#
# Resolves a working Node before running the CLI, so a broken `node` on PATH
# (e.g. a Homebrew build with missing ICU libs) cannot take the CLI down, and
# the CLI works in any shell without an nvm PATH export.
#
# Override the interpreter with VOHOLABS_NODE, the package with VOHOLABS_CLI_DIR.

CLI_DIR="${VOHOLABS_CLI_DIR:-$HOME/.voholabs-cli}"

if [ ! -f "$CLI_DIR/index.js" ]; then
  echo "voholabs: CLI not found at $CLI_DIR. Reinstall with apps/cli/install.sh from the voholabs-studio repo." >&2
  exit 1
fi

pick_node() {
  if [ -n "$VOHOLABS_NODE" ] && [ -x "$VOHOLABS_NODE" ] && "$VOHOLABS_NODE" -e '' >/dev/null 2>&1; then
    echo "$VOHOLABS_NODE"; return 0
  fi
  for candidate in \
    $(ls -1d "$HOME"/.nvm/versions/node/*/bin/node 2>/dev/null | sort -Vr) \
    "$(command -v node 2>/dev/null)" \
    /opt/homebrew/bin/node \
    /usr/local/bin/node
  do
    [ -n "$candidate" ] && [ -x "$candidate" ] && "$candidate" -e '' >/dev/null 2>&1 && { echo "$candidate"; return 0; }
  done
  return 1
}

NODE="$(pick_node)" || {
  echo "voholabs: no working Node.js found. Install Node 18+ or set VOHOLABS_NODE=/path/to/node" >&2
  exit 1
}

exec "$NODE" "$CLI_DIR/index.js" "$@"
