import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu){
        await $(`id:tab-${menu}`).click()
    }

    async search(){
        (await $(`-ios predicate string: name ENDSWITH "Search products"`)).click()
    }

}

export default new HomePage();
