// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Selecionar Produto', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
    driver.manage().setTimeouts({implicit: 3000}) // define uma espera de até 3s (usar sempre milisegundos, nanosegundos)
    // para a seleção de qualquer elemento = Calibrar Paciência
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Selecionar Produto', async function() {
    await driver.get("https://www.saucedemo.com/")
    await driver.manage().window().setRect({ width: 1267, height: 816 })
    await driver.findElement(By.css("*[data-test=\"username\"]")).sendKeys("standard_user")
    await driver.findElement(By.css("*[data-test=\"password\"]")).sendKeys("secret_sauce")
    await driver.findElement(By.css("*[data-test=\"login-button\"]")).click()
    assert(await driver.findElement(By.css("*[data-test=\"title\"]")).getText() == "Products")
    await driver.findElement(By.css("*[data-test=\"inventory-item-name\"]")).click()
    assert(await driver.findElement(By.css("*[data-test=\"back-to-products\"]")).getText() == "Back to products")
    assert(await driver.findElement(By.css("*[data-test=\"inventory-item-name\"]")).getText() == "Sauce Labs Backpack")
    await driver.findElement(By.css("*[data-test=\"add-to-cart\"]")).click()
    assert(await driver.findElement(By.css("*[data-test=\"shopping-cart-badge\"]")).getText() == "1")
    await driver.findElement(By.css("*[data-test=\"shopping-cart-badge\"]")).click()
    assert(await driver.findElement(By.css("*[data-test=\"title\"]")).getText() == "Your Cart")
    assert(await driver.findElement(By.css("*[data-test=\"inventory-item-name\"]")).getText() == "Sauce Labs Backpack")
    assert(await driver.findElement(By.css("*[data-test=\"item-quantity\"]")).getText() == "1")
    assert(await driver.findElement(By.css("*[data-test=\"inventory-item-price\"]")).getText() == "$29.99")
    await driver.findElement(By.css("*[data-test=\"remove-sauce-labs-backpack\"]")).click()
    await driver.findElement(By.id("react-burger-menu-btn")).click()
    //await driver.sleep(3000) // espera bruta - parar a thread/trilha de processamento - mal visto
    await driver.findElement(By.css("*[data-test=\"logout-sidebar-link\"]")).click()
  })
})

