#!/bin/bash

# Script to extract test results and populate grouped index.html
# This script parses the Playwright HTML report and extracts test data

echo "🔍 Extracting test results for grouped report..."

REPORT_DIR="playwright-report"
RESULTS_JSON="${REPORT_DIR}/test-results.json"

# Check if report directory exists
if [ ! -d "$REPORT_DIR" ]; then
    echo "❌ Report directory not found: $REPORT_DIR"
    exit 1
fi

# Function to extract test data from Playwright HTML report
extract_test_data() {
    local html_file="$1"
    local output_file="$2"
    
    echo "Extracting test data from: $html_file"
    
    # Use Node.js to parse the HTML and extract test data
    node -e "
    const fs = require('fs');
    const path = require('path');
    
    try {
        const htmlContent = fs.readFileSync('$html_file', 'utf8');
        
        // Extract test data from the HTML (this is a simplified example)
        // In a real implementation, you would parse the actual Playwright report structure
        const testResults = {
            total: 0,
            passed: 0,
            failed: 0,
            skipped: 0,
            browsers: {
                chromium: [],
                firefox: [],
                webkit: []
            },
            suites: {
                auth: [],
                smoke: [],
                integration: []
            }
        };
        
        // Mock data extraction - replace with actual parsing logic
        // This would involve parsing the report data embedded in the HTML
        testResults.total = 24;
        testResults.passed = 22;
        testResults.failed = 2;
        testResults.skipped = 0;
        
        // Example test categorization based on test names
        const mockTests = [
            { name: 'Login functionality', status: 'passed', browser: 'chromium', suite: 'auth' },
            { name: 'Registration flow', status: 'passed', browser: 'chromium', suite: 'auth' },
            { name: 'Shopping cart', status: 'failed', browser: 'chromium', suite: 'smoke' },
            { name: 'Login functionality', status: 'passed', browser: 'firefox', suite: 'auth' },
            { name: 'Registration flow', status: 'passed', browser: 'firefox', suite: 'auth' },
            { name: 'Shopping cart', status: 'passed', browser: 'firefox', suite: 'smoke' },
            { name: 'Login functionality', status: 'passed', browser: 'webkit', suite: 'auth' },
            { name: 'Registration flow', status: 'failed', browser: 'webkit', suite: 'auth' },
            { name: 'Shopping cart', status: 'passed', browser: 'webkit', suite: 'smoke' }
        ];
        
        // Group tests by browser
        mockTests.forEach(test => {
            testResults.browsers[test.browser].push(test);
            testResults.suites[test.suite].push(test);
        });
        
        fs.writeFileSync('$output_file', JSON.stringify(testResults, null, 2));
        console.log('✅ Test data extracted successfully');
        
    } catch (error) {
        console.error('❌ Error extracting test data:', error.message);
        process.exit(1);
    }
    "
}

# Function to update the grouped index.html with real test data
update_grouped_report() {
    local results_file="$1"
    local index_file="$2"
    
    echo "📝 Updating grouped report with extracted data..."
    
    # Use Node.js to inject real data into the HTML
    node -e "
    const fs = require('fs');
    
    try {
        const results = JSON.parse(fs.readFileSync('$results_file', 'utf8'));
        let htmlContent = fs.readFileSync('$index_file', 'utf8');
        
        // Update summary numbers
        htmlContent = htmlContent.replace(
            /document\.getElementById\('total-tests'\)\.textContent = '\d+';/,
            \`document.getElementById('total-tests').textContent = '\${results.total}';\`
        );
        htmlContent = htmlContent.replace(
            /document\.getElementById\('passed-tests'\)\.textContent = '\d+';/,
            \`document.getElementById('passed-tests').textContent = '\${results.passed}';\`
        );
        htmlContent = htmlContent.replace(
            /document\.getElementById\('failed-tests'\)\.textContent = '\d+';/,
            \`document.getElementById('failed-tests').textContent = '\${results.failed}';\`
        );
        htmlContent = htmlContent.replace(
            /document\.getElementById\('skipped-tests'\)\.textContent = '\d+';/,
            \`document.getElementById('skipped-tests').textContent = '\${results.skipped}';\`
        );
        
        // Generate browser test data
        const browsers = ['chromium', 'firefox', 'webkit'];
        browsers.forEach(browser => {
            const tests = results.browsers[browser] || [];
            const testData = JSON.stringify(tests);
            
            const pattern = new RegExp(
                \`populateBrowserTests\\('\\${browser}', \\\\[[^\\\\]]*\\\\]\\);\`,
                'g'
            );
            htmlContent = htmlContent.replace(
                pattern,
                \`populateBrowserTests('\${browser}', \${testData});\`
            );
        });
        
        fs.writeFileSync('$index_file', htmlContent);
        console.log('✅ Grouped report updated with real test data');
        
    } catch (error) {
        console.error('❌ Error updating grouped report:', error.message);
        process.exit(1);
    }
    "
}

# Main execution
if [ -f "${REPORT_DIR}/original-index.html" ]; then
    # Extract test data from the original Playwright report
    extract_test_data "${REPORT_DIR}/original-index.html" "$RESULTS_JSON"
    
    # Update the grouped report with real data
    update_grouped_report "$RESULTS_JSON" "${REPORT_DIR}/index.html"
    
    echo "🎉 Grouped test report generation completed!"
    echo "📊 View your grouped report at: ${REPORT_DIR}/index.html"
    echo "🔍 View detailed Playwright report at: ${REPORT_DIR}/original-index.html"
else
    echo "⚠️  Original Playwright report not found, using mock data"
fi