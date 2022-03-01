const fs = require('fs')
const parse = require('csv-parse')
const puppeteer = require('puppeteer')
const { clickThat, getCount, getText, typeText, typeTextandEnter, getTexts } = require('./helper');
const { csvCreate } = require('./CSVmanager');
const { csvCreateNow } = require('./objectConstructor');



module.exports ={

dateOfnow: function () {
    var dateStamp = new Date().getTime().toString();
    return dateStamp    
}
}