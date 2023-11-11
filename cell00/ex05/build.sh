#!/bin/bash

# Check if at least one argument is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 folder_name1 [folder_name2 ...]"
    exit 1
fi

# Loop through each argument and create a folder with "ex" added to the beginning
for folder_name in "$@"; do
    new_folder_name="ex${folder_name}"

    # Check if the folder already exists
    if [ -d "$new_folder_name" ]; then
        echo "Folder '$new_folder_name' already exists. Skipping."
    else
        mkdir "$new_folder_name"
        echo "Folder '$new_folder_name' created."
    fi
done
