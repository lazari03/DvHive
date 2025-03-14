// tests/selenium/pages/contactPage.js
import { By } from 'selenium-webdriver';
import BasePage from './basePage.js';

class ContactPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.path = '/contact';
    
    // Form fields
    this.nameField = By.id('name');
    this.emailField = By.id('email');
    this.phoneField = By.id('phone');
    this.messageField = By.id('message');
    this.submitButton = By.css('button[type="submit"]');
    this.successMessage = By.css('.success-message');
  }

  async load() {
    await this.navigateTo(this.path);
    return this;
  }

  async fillContactForm(name, email, phone, message) {
    await this.typeText(this.nameField, name);
    await this.typeText(this.emailField, email);
    await this.typeText(this.phoneField, phone);
    await this.typeText(this.messageField, message);
    return this;
  }

  async submitContactForm() {
    await this.clickElement(this.submitButton);
  }

  async isSuccessMessageDisplayed() {
    try {
      await this.waitForElement(this.successMessage, 5000);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default ContactPage;