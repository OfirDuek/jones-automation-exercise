const { chromium } = require('playwright');

async function runAutomation() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://test.netlify.app/');

    const inputs = page.locator('input');
    console.log(`Number of input fields found: ${await inputs.count()}`);

    await inputs.nth(0).fill('Ofir Duek');
    await inputs.nth(1).fill('ofir.test@example.com');
    await inputs.nth(2).fill('0501234567');
    await inputs.nth(3).fill('Jones Automation Exercise');
    await inputs.nth(4).fill('https://example.com');

    await page.selectOption('select', { label: '51-500' });

    await page.screenshot({ path: 'screenshots/before-submit.png', fullPage: true });

    await page.getByText('Request a call back').click();
    await page.getByText('Thank You!').waitFor();

    console.log('Reached the thank you page');

    await browser.close();
}

runAutomation();