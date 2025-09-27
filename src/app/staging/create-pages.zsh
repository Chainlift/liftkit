#!/usr/bin/env zsh
# create-pages.zsh
# Reads component names from names.txt (same dir as this script).
# Creates folders in the *current directory* with a page.tsx inside.
# Skips if things already exist.

set -euo pipefail

# Directory of this script
script_dir="${0:a:h}"
names_file="$script_dir/names.txt"

if [[ ! -f "$names_file" ]]; then
  echo "Error: $names_file not found"
  exit 1
fi

while IFS= read -r name || [[ -n "$name" ]]; do
  [[ -z "$name" ]] && continue

  folder_path="./$name"
  tsx_file="$folder_path/page.tsx"

  mkdir -p -- "$folder_path"

  if [[ ! -e "$tsx_file" ]]; then
    : > "$tsx_file"
    echo "Created $tsx_file"
  else
    echo "Skipped $tsx_file (already exists)"
  fi
done < "$names_file"
