import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Procurar produto', () => {
    

    it('Deve procurar produtos', async () => {
        await homePage.search()
        await browsePage.searchInput.setValue('In')
        await browsePage.products.map(async product => {
            expect(await product.getText()).toContain('R$')
        })
    })
})

