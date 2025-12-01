#!/bin/bash

# This script uses a Docusaurus-based wrapper around the Prince PDF tool to convert our documentation into PDFs.
# See the 'generate-pdfs.yml' workflow file to see how it is called in GH Actions.
# We assume you have Prince installed, and it's on your PATH.
# For more information about Prince see: https://www.princexml.com/

# To more easily build a list of files to include in each PDF you can use the following command:
# npx docusaurus-prince-pdf -u https://plandev.github.io/plandev-docs/introduction/
# This will output a .txt index of all files under plandev-docs/introduction.

# PlanDev API
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/api/introduction/ \
  -f generate-pdfs/plandev-api.txt \
  -o pdf/plandev-api.pdf

# PlanDev Concept of Operations
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/overview/concept-of-operations/ \
  -f generate-pdfs/plandev-concept-of-operations.txt \
  -o pdf/plandev-concept-of-operations.pdf

# PlanDev Mission Modeling Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/mission-modeling/introduction/ \
  -f generate-pdfs/plandev-mission-modeling-guide.txt \
  -o pdf/plandev-mission-modeling-guide.pdf

# PlanDev Product Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/category/deployment/ \
  -f generate-pdfs/plandev-product-guide.txt \
  -o pdf/plandev-product-guide.pdf

# PlanDev Software Design Document
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/overview/software-design-document/ \
  -f generate-pdfs/plandev-software-design-document.txt \
  -o pdf/plandev-software-design-document.pdf

# PlanDev Users Guide
npx docusaurus-prince-pdf \
  --pdf-only \
  -u https://plandev.github.io/plandev-docs/introduction/ \
  -f generate-pdfs/plandev-users-guide.txt \
  -o pdf/plandev-users-guide.pdf

