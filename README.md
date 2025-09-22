# Playwright Automation Framework for nopCommerce website

This project is a modular and scalable framework for E2E automation testing using Page Object Model (POM), ComponentPage, Allure, logger, Docker, and GitHub Actions.

## Main Features
- **Page Object Model** and PageFactory for clear and reusable structure
- **ComponentPage** for reusable UI components
- **Allure** for advanced reporting
- **Logger**  based on Node.js
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

## Allure Reporting - not yet
##- Generate report: `npm run allure:generate`
##- Serve report: `npm run allure:serve`

## Run in Docker - not yet
```
##bash
##docker build -t playwright-nopcommerce .
##docker run --rm playwright-nopcommerce
```

## CI Configuration
See `.github/workflows/ci.yml` for the GitHub Actions pipeline.

## 📊 Advanced Test Reporting

This project includes comprehensive test reporting with multiple views:

### 🎭 Grouped Test Report (NEW)
- **Custom Dashboard**: Modern, grouped view of test results
- **Browser Segregation**: Tests organized by Chromium, Firefox, and WebKit
- **Test Suites**: Grouped by Authentication, Smoke, and Integration tests
- **Real-time Data**: Extracts actual test results from Playwright reports
- **Interactive UI**: Tabbed interface with summary cards and status badges

### 📈 Report Features
- **Latest Run View**: Focused view of the most recent test execution
- **Test History**: 30-day history with automatic cleanup
- **Build Metadata**: Build ID, timestamp, and commit information
- **Quick Navigation**: Links between grouped and detailed reports

### 🔗 Report Access
- **Grouped Report**: `playwright-report/index.html` - Modern grouped interface
- **Detailed Report**: `playwright-report/original-index.html` - Full Playwright report
- **Test History**: `playwright-report/history/index.html` - Historical builds

### 🎨 Report Views
1. **📱 By Browser**: Tests grouped by browser engine
2. **📁 By Test Suite**: Tests grouped by functionality (Auth, Smoke, Integration)
3. **📊 Overview**: Test execution summary and categories

### ⚙️ Generated Files
- `grouped-index-template.html`: HTML template for grouped reporting
- `generate-grouped-report.sh`: Script to extract and populate real test data
- Automated CI/CD integration with browser matrix testing

