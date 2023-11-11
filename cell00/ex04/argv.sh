#!/bin/bash

# Check if there are any arguments
if [ $# -eq 0 ]; then
  echo "No arguments provided."
elif [ $# -le 3 ]; then
  for arg in "$@"; do
    echo "$arg"
  done
else
	echo "Only 3 arguments allowed"
fi
