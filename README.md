# Playwright Automation Framework for nopCommerce website

This project is a modular and scalable framework for E2E automation testing using Page Object Model (POM), ComponentPage, Allure, logger, Docker, and GitHub Actions.

## Main Features
- **Page Object Model** (POM) and PageFactory for clear and reusable structure
- **ComponentPage** for reusable UI components
- **Allure** for advanced reporting
- **Logger** based on Node.js
- **Docker** for containerized execution
- **GitHub Actions** for CI
- Multi-browser support (Chromium, Firefox, Webkit)

## Installation
```bash
npm install --with-deps
```

## Run tests
- All tests: `npm test`
- Headed (UI visible): `npm run test:headed`
- With Allure: `npm run test:allure`

## Allure Reporting
- Generate report: `npm run allure:generate`
- Serve report: `npm run allure:serve`

## Run in Docker
```bash
docker build -t playwright-nopcommerce .
docker run --rm playwright-nopcommerce
```

## CI Configuration
See `.github/workflows/ci.yml` for the GitHub Actions pipeline.

