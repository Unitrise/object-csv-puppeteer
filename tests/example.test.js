// Needed in order to use puppeteer. commands and it and describe commands
const { expect } = require('chai');
const { describe } = require('mocha');
const pptr = require('puppeteer');
const pptrc = require('puppeteer-core');
const fs = require('fs')
const csv = require('csv-parser');
const { clickThat, getCount, getText, typeText, typeTextandEnter, getTexts } = require('../lib/helper');
const { createActionObject, createActionObjectCsvAppend, csvCreateNow } = require('../lib/objectConstructor');


describe('First Test', () => {
  it('NGX Admin Dashboard', async () => {

    const browser = await pptr.launch({
      args:[
      '--start-maximized',
       // '',
       // '--start-fullscreen',
       // '--window-size=1920,1080',
      ],
      sloMo:10,
      headless:false,
      devtools:false,
      executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    
    })


const page = await browser.newPage()
await page.setViewport({
  height:1080,
  width:1920,
})

await csvCreateNow()
const pageURL = 'http://example.com/'
const changeLocation = 'Homepage'

await page.goto(pageURL, {waitUntil:'networkidle2'})


//page, selector, actionLocation, actionURL
await clickThat(page, '[href="https://www.iana.org/domains/example"]', pageURL)

await page.waitForNetworkIdle()
await clickThat(page, '[href="/domains"]', pageURL)
await typeTextandEnter(page, '[class="search-input"]', 'test')
await clickThat(page, '[class="menu-title ng-tns-c115-9"]')

});


})
