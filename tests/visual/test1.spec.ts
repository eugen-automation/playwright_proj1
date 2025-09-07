import { test } from '../../fixtures/fixtures'
import { expect } from '@playwright/test'


const viewports = [
    { width: 320, height: 568 },   // Mobile
    { width: 768, height: 1024 },  // Tablet
    { width: 1920, height: 1080 }  // Desktop
];

viewports.forEach(viewport => {
    test(`responsive design ${viewport.width}x${viewport.height}`, async ({ page }) => {
        try{
        await page.setViewportSize(viewport);
        await page.goto('/');
        await expect(page).toHaveScreenshot(`homepage-${viewport.width}w.png`, { fullPage: true, maxDiffPixels: 100, animations: 'disabled' });
        } catch (error) {
            console.error(`Error during visual comparison at ${viewport.width}x${viewport.height}:`, error);
            throw error; // Re-throw to ensure the test fails
        }   
    });
});