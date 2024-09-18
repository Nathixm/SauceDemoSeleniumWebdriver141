// Bibliotecas
const { Builder, By, Key, until} = require("selenium-webdriver")
const assert = require('assert')

// Funções
describe('Selecionar Produto', function() {
    this.timeout(30000) // espera até 30 segundos pelo carregamento
    let driver          // declarou o objeto para o selenium

    beforeEach(async function() {  // o que ocorre antes do teste
        // instancia o driver como ChromeDriver
        driver = await new Builder().forBrowser('chrome').build()
        // ela configura uma espera geral de 3 segundos para todos os elementos
        await driver.manage().setTimeouts({implicit: 3000})
    }) // final before

    afterEach(async function() {
        await driver.quit()
    })

    // O teste
    it('Login Positivo', async function() {
        await driver.get('https://www.saucedemo.com') // abrir a URL
        // Usuário
        await driver.findElement(By.id('user-name')).sendKeys('standard_user')
        // Senha
        await driver.findElement(By.name('password')).sendKeys('secret_sauce')
        // Login
        await driver.findElement(By.css('input.submit-button.btn_action')).click()
        // Validação
       assert(await driver.findElement(By.css('span.title')).getText() == 'Products') // Esse é o teste - resultado

    })

}) // final describe