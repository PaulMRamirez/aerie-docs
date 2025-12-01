# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **official documentation site for Aerie**, a NASA-AMMOS software framework for modeling spacecraft. The documentation is built with [Docusaurus 2](https://docusaurus.io/) and hosted at https://nasa-ammos.github.io/aerie-docs/.

Aerie itself is a spacecraft mission planning and simulation tool that includes:
- Mission modeling in Java
- Activity planning and scheduling
- Constraint checking
- Command expansion and sequencing
- Timeline visualization

## Tech Stack

- **Framework**: Docusaurus 2.4.1
- **Node.js**: 22.13.1 (see `.nvmrc`)
- **Markup**: Markdown (`.md`) and MDX (`.mdx`)
- **Diagrams**: Mermaid
- **Code highlighting**: Prism (supports graphql, java, kotlin)
- **Search**: Algolia

## Common Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000/aerie-docs/)
npm start

# Build for production
npm run build

# Format documentation files
npm run format

# Serve production build locally
npm run serve

# Clear Docusaurus cache
npm run clear
```

## Project Structure

```
aerie-docs/
├── docs/                    # All documentation content
│   ├── api/                 # GraphQL API examples
│   ├── command-expansion/   # Command expansion docs
│   ├── deployment/          # Deployment guides
│   ├── mission-modeling/    # Mission modeling guides
│   ├── overview/            # Architecture and design docs
│   ├── planning/            # Planning features docs
│   ├── scheduling-and-constraints/  # Scheduling and constraints
│   ├── sequencing/          # Sequencing docs
│   ├── tutorials/           # Step-by-step tutorials
│   ├── upgrade-guides/      # Version upgrade guides
│   ├── introduction.md      # Main landing page
│   └── glossary.md          # Terms glossary
├── src/                     # Docusaurus React components
│   ├── components/          # Custom React components
│   ├── css/                 # Custom CSS
│   └── pages/               # Custom pages
├── static/                  # Static assets (images, favicon)
├── sidebars.js              # Sidebar navigation configuration
├── docusaurus.config.js     # Docusaurus configuration
└── package.json             # Dependencies and scripts
```

## Key Configuration Files

- **`sidebars.js`**: Defines the sidebar navigation structure. Update this when adding new documents.
- **`docusaurus.config.js`**: Main Docusaurus config (theming, navbar, Algolia search, etc.)
- **`.prettierrc`**: Code formatting rules

## Documentation Guidelines

### File Formats
- Use `.mdx` for documents with React components, images, or admonitions
- Use `.md` for plain markdown documents

### Adding New Documents
1. Create the document in the appropriate `docs/` subdirectory
2. Add the document path to `sidebars.js` in the correct category

### Adding Images/Videos
- Images: Use `.png` format
- Videos: Use `.webm` or `.mov` format
- Place assets in an `assets/` directory within the relevant docs section
- Use Git LFS for large media files

### Code Blocks
Supported syntax highlighting: `graphql`, `java`, `kotlin`, `javascript`, `typescript`, `bash`, `json`, etc.

## External Resources

- **Main Aerie repo**: https://github.com/NASA-AMMOS/aerie
- **Live docs**: https://nasa-ammos.github.io/aerie-docs/
- **Slack**: NASA-AMMOS workspace
