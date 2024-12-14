const puppeteer = require('puppeteer');
const path = require('path');

const captureScreenshot = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');  // You can modify this to capture specific pages.
    const filePath = path.join(__dirname, '../uploads', `screenshot-${Date.now()}.png`);
    await page.screenshot({ path: filePath });
    await browser.close();
    return filePath;
};

module.exports = { captureScreenshot };
