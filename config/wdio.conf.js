import { bsConf } from './bs.conf.js'
import { localConf } from './local.conf.js'
import { sauceConf } from './sauce.conf.js'

import 'dotenv/config';

function getConfig() {
    switch (process.env.ENVIRONMENT) {
        //testes locais
        case 'local':
            return localConf
        //usar saucelabs
        case 'saucelabs':
            return sauceConf
        //usar browserstack
        case 'browserstack':
            return bsConf
    }
}

export const config = getConfig()