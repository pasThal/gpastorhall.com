const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (!fs.existsSync(indexPath)) {
    console.error(`Built file not found: ${indexPath}`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + indexPath);
  const title = await page.title();
  await browser.close();

  if (title !== 'Gregory Pastor-Hall | Student and Tinkerer') {
    console.error(`Unexpected title: ${title}`);
    process.exit(1);
  }

  console.log('Homepage title verified successfully');
})();
