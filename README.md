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

## 📊 Advanced Test Reporting - Unique Run Architecture

This project implements a **unique path architecture** where each test execution gets its own permanent URL, eliminating the need for centralized history management.

### � Unique Run Approach (NEW)
- **Individual URLs**: Each test run gets a unique path like `/runs/build-2025-09-22_14-30-15-001/`
- **Self-Contained**: Every run includes all data, metadata, and navigation
- **Permanent Access**: Share specific test results with permanent URLs
- **No Cleanup**: No automatic deletion - each run stays accessible
- **Parallel Safe**: Multiple CI runs don't interfere with each other

### 🎭 Report Features per Unique Run
- **Grouped Dashboard**: Modern interface with browser/suite organization
- **Detailed Playwright Report**: Complete test execution details
- **Rich Metadata**: JSON file with build info, commit, timestamps, and URLs
- **Direct Navigation**: Links between all report types within the run

### 📈 Report Features
- **Unique Run Paths**: Each test execution gets a unique URL path
- **Self-contained**: Each run includes all necessary data and metadata
- **Direct Access**: No need for central history - access runs directly by URL
- **Build Metadata**: Build ID, timestamp, and commit information per run

### 🔗 Report Access
- **Unique Run URL**: `https://eugen-automation.github.io/playwright_proj1/runs/{BUILD_ID}/`
- **Grouped Report**: `runs/{BUILD_ID}/index.html` - Modern grouped interface
- **Detailed Report**: `runs/{BUILD_ID}/original-index.html` - Full Playwright report
- **Run Metadata**: `runs/{BUILD_ID}/run-info.json` - Build and execution details

### 🎨 Report Views
1. **📱 By Browser**: Tests grouped by browser engine
2. **📁 By Test Suite**: Tests grouped by functionality (Auth, Smoke, Integration)
3. **📊 Overview**: Test execution summary and categories

### 🌟 Architecture Benefits
- **🔗 Direct Sharing**: Share exact test results with unique URLs
- **📦 Zero Dependencies**: Each run is completely self-contained  
- **🚀 Instant Access**: No navigation through history - direct to results
- **🔄 Concurrent Safe**: Multiple runs can deploy simultaneously
- **💾 Permanent Storage**: Results stay accessible indefinitely
- **📊 Rich Context**: Complete execution metadata included per run

### 🔧 Implementation Files
- `grouped-index-template.html`: Modern dashboard template
- `generate-grouped-report.sh`: Data extraction and population script  
- `root-index.html`: Architecture explanation page
- `.github/workflows/ci.yml`: Unique path deployment workflow
- Each run generates: `index.html`, `original-index.html`, `run-info.json`

### 📍 Example URLs
```
Root: https://eugen-automation.github.io/playwright_proj1/
Run:  https://eugen-automation.github.io/playwright_proj1/runs/build-2025-09-22_14-30-15-001/
Data: https://eugen-automation.github.io/playwright_proj1/runs/build-2025-09-22_14-30-15-001/run-info.json
```

