// tests/selenium/pages/intakeFormPage.js
import { By } from 'selenium-webdriver';
import BasePage from './basePage.js';

class IntakeFormPage extends BasePage {
  constructor(driver) {
    super(driver);
    this.path = '/intake-form';
    
    // Form fields locators
    this.formFields = {
      fullName: By.id('full_name'),
      email: By.id('email'),
      phone: By.id('phone'),
      claimType: By.id('claimType'),
      vinNumber: By.id('vinNumber'),
      vehicleYear: By.id('vehicleYear'),
      vehicleMake: By.id('vehicleMake'),
      vehicleModel: By.id('vehicleModel'),
      vehicleTrim: By.id('vehicleTrim'),
      vehicleMileage: By.id('vehicleMileage'),
      accidentDate: By.id('accidentDate'),
      state: By.id('state'),
      estimatedRepair: By.id('estimatedRepair'),
      priorAccidents: By.id('priorAccidents'),
      prevEstimatedRepair: By.id('prevEstimatedRepair'),
      leasingYes: By.id('leasing_yes'),
      leasingNo: By.id('leasing_no'),
      insurance: By.id('insurance'),
      faultInsurance: By.id('faultInsurance'),
      message: By.id('message'),
      consentCheckbox: By.id('checkbox'),
      submitButton: By.css('button[type="submit"]')
    };
    
    // Success message locator
    this.successPopup = By.css('.success-popup');
  }

  async load() {
    await this.navigateTo(this.path);
    return this;
  }

  async fillFormWithValidData() {
    await this.typeText(this.formFields.fullName, 'Test User');
    await this.typeText(this.formFields.email, 'test@example.com');
    
    // Phone field requires special handling due to intl-tel-input
    const phoneInput = await this.findElement(this.formFields.phone);
    await phoneInput.sendKeys('5551234567');
    
    // Select claim type
    const claimTypeSelect = await this.findElement(this.formFields.claimType);
    await claimTypeSelect.click();
    await this.clickElement(By.css('option[value="Diminished Value"]'));
    
    // Fill vehicle details
    await this.typeText(this.formFields.vinNumber, '1HGCM82633A123456');
    await this.typeText(this.formFields.vehicleYear, '2022');
    await this.typeText(this.formFields.vehicleMake, 'Honda');
    await this.typeText(this.formFields.vehicleModel, 'Accord');
    await this.typeText(this.formFields.vehicleTrim, 'EX');
    await this.typeText(this.formFields.vehicleMileage, '15000');
    
    // Date field
    await this.typeText(this.formFields.accidentDate, '2025-02-15');
    
    // Select state
    const stateSelect = await this.findElement(this.formFields.state);
    await stateSelect.click();
    await this.clickElement(By.css('option[value="FL"]'));
    
    await this.typeText(this.formFields.estimatedRepair, '5000');
    
    // Prior accidents dropdown
    const priorAccidentsSelect = await this.findElement(this.formFields.priorAccidents);
    await priorAccidentsSelect.click();
    await this.clickElement(By.xpath("//option[text()='No']"));
    
    // Leasing option
    await this.clickElement(this.formFields.leasingNo);
    
    // Additional info
    await this.typeText(this.formFields.insurance, 'Test Insurance');
    await this.typeText(this.formFields.faultInsurance, 'Fault Insurance Co');
    await this.typeText(this.formFields.message, 'This is a test submission.');
    
    // Consent checkbox
    await this.clickElement(this.formFields.consentCheckbox);
    
    return this;
  }

  async submitForm() {
    await this.clickElement(this.formFields.submitButton);
  }

  async isSuccessPopupDisplayed() {
    try {
      await this.waitForElement(this.successPopup, 5000);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default IntakeFormPage;