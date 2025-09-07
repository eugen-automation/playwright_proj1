import { test } from '../../fixtures/fixtures'
import { expect } from '@playwright/test'


const viewports = [
    { width: 320, height: 568 },   // Mobile
    { width: 768, height: 1024 },  // Tablet
    { width: 1920, height: 1080 }  // Desktop
];

test.beforeEach(async ({ page }) => {
    // Disable animations pentru consistency
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          animation-delay: -1ms !important;
          animation-duration: 1ms !important;
          animation-iteration-count: 1 !important;
          background-attachment: initial !important;
          scroll-behavior: auto !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
      `
    });
  });

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