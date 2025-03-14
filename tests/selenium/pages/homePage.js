// tests/selenium/pages/homePage.js
import { By } from 'selenium-webdriver';
import BasePage from './basePage.js';

class HomePage extends BasePage {
  constructor(driver) {
    super(driver);
    this.path = '/';
    
    // Locators
    this.heroTitle = By.css('h1');
    this.navLinks = {
      home: By.linkText('Home'),
      diminishedValue: By.linkText('Diminished Value'),
      pricing: By.linkText('Pricing'),
      faq: By.linkText('FAQ'),
      contact: By.linkText('Contact'),
      intakeForm: By.linkText('Intake Form')
    };
  }

  async load() {
    await this.navigateTo(this.path);
    return this;
  }

  async getHeroTitle() {
    const element = await this.waitForElement(this.heroTitle);
    return await element.getText();
  }

  async navigateToIntakeForm() {
    await this.clickElement(this.navLinks.intakeForm);
  }
  
  async navigateToContact() {
    await this.clickElement(this.navLinks.contact);
  }

  async verifyAllNavLinks() {
    const navigation = await this.getNavigation();
    const links = await navigation.findElements(By.css('a'));
    return links.length > 0;
  }
}

export default HomePage;