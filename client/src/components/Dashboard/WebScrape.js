const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x(
    "/html/body/div[1]/div/div[2]/div[1]/div[2]/div/div[2]/div[3]/div/table/tbody/tr[1]/td[4]/a"
  );
  const text = await el.getProperty("textContent");
  const bitcoin = await text.jsonValue();

  console.log({ bitcoin });

  browser.close();
}

scrapeProduct("https://coinmarketcap.com/");
