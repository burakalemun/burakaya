const puppeteer = require('puppeteer');
const path = require('path');

async function capture(url, prefix) {
  console.log(`Starting capture for ${url}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Desktop screenshot 1
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(url, { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(__dirname, `../../public/screenshots/${prefix}-1.jpg`), type: 'jpeg' });
  
  // Desktop screenshot 2 (scrolled)
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(__dirname, `../../public/screenshots/${prefix}-2.jpg`), type: 'jpeg' });
  
  // Mobile screenshot
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.reload({ waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.join(__dirname, `../../public/screenshots/${prefix}-3.jpg`), type: 'jpeg' });

  await browser.close();
  console.log(`Finished capture for ${url}`);
}

(async () => {
  await capture('https://quick-menu-delta.vercel.app/', 'quickmenu');
  await capture('https://biox-life-backend.vercel.app/tr', 'bioxlife');
})();
