import { By, until } from 'selenium-webdriver'

class BasePage {
  constructor(driver) {
    this.driver = driver
    this.baseUrl = 'https://dv-hive.vercel.app' // Update to your local dev URL if needed
  }

  async navigateTo(path = '') {
    await this.driver.get(`${this.baseUrl}${path}`)
  }

  async getTitle() {
    return await this.driver.getTitle()
  }

  async findElement(locator) {
    return await this.driver.findElement(locator)
  }

  async waitForElement(locator, timeout = 10000) {
    return await this.driver.wait(until.elementLocated(locator), timeout)
  }

  async clickElement(locator) {
    const element = await this.waitForElement(locator)
    await element.click()
    return element
  }

  async typeText(locator, text) {
    const element = await this.waitForElement(locator)
    await element.clear()
    await element.sendKeys(text)
    return element
  }

  async getNavigation() {
    return await this.waitForElement(By.css('nav'))
  }

  async navigateToPage(linkText) {
    await this.clickElement(By.linkText(linkText))
  }
}

export default BasePage
