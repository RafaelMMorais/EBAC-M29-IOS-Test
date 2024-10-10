import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Detalhes do produto', () => {
    it('Deve visualizar as informaçoes do produto', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await (await browsePage.products).at(0).click()
        expect(productPage.getProductTitle('Ingrid Running Jacket')).toBeDisplayed()
    })
})

