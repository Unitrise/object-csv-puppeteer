const fs = require('fs')
const parse = require('csv-parse')
const puppeteer = require('puppeteer')

module.exports = {

    csvCreate: async function (csvFileName, dateStamp) {
        fs.writeFile(csvFileName+'-'+dateStamp+'.csv', 'Location, URL ,Action, Time, Error\r\n', 'utf8', function (err){
            console.log('NEW CSV file identifier: ' + dateStamp)
        })
    },
    csvWriteAction: function (csvFileName, actionName, actionLocation, actionURL, dateStamp) {
        fs.appendFile(csvFileName+'-'+dateStamp+'.csv', `${actionLocation},${actionURL},${actionName},${dateStamp}\r\n`, 'utf8', function (err){
            console.log(`Location: ${actionLocation},URL ${actionURL},Action: ${actionName},Time: ${dateStamp}`)
        })
    },
    csvWriteActionError: function (csvFileName, dateStamp) {
        fs.appendFile(csvFileName+'-'+dateStamp+'.csv', `,,,${error}\r\n`, 'utf8', function (err){
            console.log(`selector: ${error}, error: ${error}`)
        })
    }

}