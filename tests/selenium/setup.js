import { Builder } from 'selenium-webdriver';
import 'chromedriver';

async function createDriver() {
  return await new Builder()
    .forBrowser('chrome')
    .build();
}

export { createDriver };