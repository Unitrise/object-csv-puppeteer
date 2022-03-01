const { csvWriteActionError } = require("C:\\Users\\User\\Desktop\\puppeteer-test\\object-csv-puppeteer\\lib\\CSVmanager.js")
const { createActionObject } = require("./objectConstructor")

// syntax for csvWriteAction function call: (csvFileName, actionName, actionLocation, errors, actionURL) 
// also dont forget to include "actionLocation" and "actionURL" function variables, example: 
// clickThat: async function (page, selector, actionLocation, actionURL)


module.exports = {
    clickThat: async function (page, selector, actionURL){
        try {
            await page.waitForSelector(selector)
            await page.click(selector)
            console.log('Clicked on selector: ' + selector)
            try {
                await createActionObject(page, selector, 'none', actionURL, 'Click')
            } catch (error) {
                console.log('\n\nCould not create information object\nError msg:\n' + error)
            }
            
        } catch (error) {
            throw new Error ('Could not find selector: ' + selector)
        }
        
    },
    getCount: async function (page, selector) {
        try {
            const count = await page.$$eval(selector, element => element.length)
            return console.log(count)
            
        } catch (e) {
            throw new Error ('Could not count selectors: ' + selector)
        }

    },
    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            let text = await page.$eval(selector, element => element.textContent)
            return console.log(text)
            
        } catch (e) {
            throw new Error ('Could not find selector or text in: ' + selector) 
        }
    },
    getTexts: async function (page, selector) {
        try {
            await page.waitForSelector(selector)
            let text = await page.$$eval(selector, element => element.textContent)
            return console.log(text[1])
            
        } catch (e) {
            throw new Error ('Could not find selector or text in: ' + selector)
 
        }
    },
    typeText: async function (page, selector, input) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, input)
            console.log('Typed: ' + input, 'inside of: ' + selector)
        } catch (error) {
        throw new Error('Could not find or type in selector: ' + selector)            
        }
    },
    typeTextandEnter: async function (page, selector, input) {
        try {
            await page.waitForSelector(selector)
            await page.type(selector, input).then(async () => {
                try {
                    await page.keyboard.press('Enter');
                    csvWriteAction('test', selector, actionLocation, 'none', actionURL)
                } catch (error) {
                    csvWriteActionError('test', selector, actionLocation, error, actionURL)
                    throw new Error('Could not press enter')
                    
                }

            })
            console.log('Typed: ' + input, 'inside of: ' + selector)
        } catch (e) {
        throw new Error('Could not find or type in selector: ' + selector)            
        }
    }
}
































