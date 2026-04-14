# Santai Project

This directory is managed by Santai.

## Directory Structure

- **resources/** - Reference materials including markdown files, PDFs, images, and other documents
- **codebases/** - Code repositories and references
- **history/** - Markdown documentation of major changes and decisions (supplements git history)
- **notes/** - General notes, scratch space, and quick thoughts

## Pre-commit Hooks

This project uses [prek](https://prek.j178.dev/) to run [rumdl](https://github.com/rvben/rumdl) for markdown linting.

## History Convention

The `history/` directory contains markdown files documenting significant changes:

- Use filenames in format: `YYYY-MM-DD-brief-description.md`
- Document the what, why, and any alternatives considered
- Git tracks the granular changes; history/ captures the narrative

## Notes Convention

The `notes/` directory is for general notes and scratch space:

- Use `.md` or `.txt` files
- Name files descriptively (e.g., `meeting-notes.md`, `ideas.txt`)
- Notes are displayed with previews in the dashboard
