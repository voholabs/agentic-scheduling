#!/bin/sh
# Install the Voholabs Studio CLI.
#
#   ./apps/cli/install.sh
#
# Installs the package to ~/.voholabs-cli and a launcher to ~/.local/bin/voholabs.
# Both locations are permanent: never install this from /tmp, macOS prunes it
# after a few days and the CLI disappears mid-workflow.
#
# Env overrides:
#   VOHOLABS_CLI_DIR   where the package lives   (default ~/.voholabs-cli)
#   VOHOLABS_BIN_DIR   where the launcher lives  (default ~/.local/bin)

set -e

SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
CLI_DIR="${VOHOLABS_CLI_DIR:-$HOME/.voholabs-cli}"
BIN_DIR="${VOHOLABS_BIN_DIR:-$HOME/.local/bin}"

# The CLI is a plain CommonJS bundle, so it needs a working Node to install into.
pick_node() {
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
  echo "install: no working Node.js found. Install Node 18+ first." >&2
  exit 1
}
NODE_BIN="$(dirname "$NODE")"
NPM="$NODE_BIN/npm"
[ -x "$NPM" ] || NPM="$(command -v npm)"

# npm is itself a `#!/usr/bin/env node` script, so it has to run with the Node we
# just picked on PATH, otherwise it re-resolves to the broken one and aborts.
export PATH="$NODE_BIN:$PATH"

echo "==> Node:    $NODE ($("$NODE" -v))"
echo "==> Package: $CLI_DIR"
echo "==> Launcher: $BIN_DIR/voholabs"

mkdir -p "$CLI_DIR" "$BIN_DIR"
cp "$SRC_DIR/index.js" "$CLI_DIR/index.js"
cp "$SRC_DIR/package.json" "$CLI_DIR/package.json"
chmod +x "$CLI_DIR/index.js"

# yargs and node-fetch are required at runtime, they are not in the bundle.
(cd "$CLI_DIR" && "$NPM" install --omit=dev --silent)

cp "$SRC_DIR/voholabs.sh" "$BIN_DIR/voholabs"
chmod +x "$BIN_DIR/voholabs"

echo
case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *) echo "!! $BIN_DIR is not on your PATH. Add this to ~/.zshrc:"
     echo "   export PATH=\"\$HOME/.local/bin:\$PATH\""
     echo ;;
esac

echo "Installed. Next:"
echo "  voholabs auth:login          # OAuth device flow against studio.voholabs.com"
echo "  voholabs integrations:list   # confirm the connected channels"
