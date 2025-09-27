#!/usr/bin/env zsh
# create-structures.zsh
# Reads component names from names.txt in the same directory as this script.
# Creates a folder for each name, plus a CSS file and index.tsx inside it.
# Skips files if they already exist.

set -euo pipefail

# Directory of this script
script_dir="${0:a:h}"
names_file="$script_dir/names.txt"

if [[ ! -f "$names_file" ]]; then
  echo "Error: $names_file not found"
  exit 1
fi

while IFS= read -r name || [[ -n "$name" ]]; do
  # skip empty lines
  [[ -z "$name" ]] && continue

  folder_path="./$name"
  css_file="$folder_path/${name}.css"
  tsx_file="$folder_path/index.tsx"

  mkdir -p -- "$folder_path"

  if [[ ! -e "$css_file" ]]; then
    : > "$css_file"
    echo "Created $css_file"
  else
    echo "Skipped $css_file (already exists)"
  fi

  if [[ ! -e "$tsx_file" ]]; then
    : > "$tsx_file"
    echo "Created $tsx_file"
  else
    echo "Skipped $tsx_file (already exists)"
  fi
done < "$names_file"
