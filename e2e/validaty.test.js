import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Card Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.card-form-widget');
  });

  test('Should add .valid class if card is valid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('371449635398431');
    await submit.click();

    await page.waitForTimeout('.valid');
  });

  test('Should add .invalid class if card is invalid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('555555555555444');
    await submit.click();

    await page.waitForTimeout('.invalid');
  });

  afterEach(async () => {
    await browser.close();
  });
});
