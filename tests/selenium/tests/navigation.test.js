// tests/selenium/tests/navigation.test.js
import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import { createDriver } from '../setup.js';
import HomePage from '../pages/homePage.js';

describe('Navigation Tests', function() {
  this.timeout(30000); // Increase timeout for slower connections
  
  let driver;
  let homePage;
  
  before(async function() {
    driver = await createDriver();
    homePage = new HomePage(driver);
  });
  
  after(async function() {
    await driver.quit();
  });
  
  it('should load the homepage correctly', async function() {
    await homePage.load();
    const title = await driver.getTitle();
    expect(title).to.include('DvHive'); // Assuming the title contains "DvHive"
  });
  
  it('should display all navigation links', async function() {
    await homePage.load();
    const hasNavLinks = await homePage.verifyAllNavLinks();
    expect(hasNavLinks).to.be.true;
  });
  
  it('should navigate to the Intake Form page', async function() {
    await homePage.load();
    await homePage.navigateToIntakeForm();
    
    // Check if we're on the right page
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/intake-form');
  });
  
  it('should navigate to the Contact page', async function() {
    await homePage.load();
    await homePage.navigateToContact();
    
    // Check if we're on the right page
    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.include('/contact');
  });
});