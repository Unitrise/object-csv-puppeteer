const csvParser = require("csv-parser")
const fs = require('fs');
const { csvWriteAction, csvCreate } = require("./CSVmanager");
const objTime = new Date().getTime().toString();
const csvFileName = 'test'

module.exports= {
    createActionObject: async function (page, selector, actionLocation, actionURL, actionName) {
        const actionObj = {
            selector:selector,
            actionName:actionName,
            actionLocation:actionLocation,
            actionURL:actionURL,
            objTime:objTime,
            page:page,
            printObjectDetails:  function() {
              console.log(`\n\nAction:${actionName}\nSelector:${selector}\nLocation:${actionLocation}\nTime:${objTime}\nURL:${actionURL}\n}`);
            },
            csvWriteNow: async function () {
                try {
                await csvWriteAction(csvFileName, actionName, actionLocation, actionURL, objTime)

                } catch (error) {
                    console.log('Could not Write into file!'+error)
                }
            }
          };
          const me = Object.create(actionObj);
            me.selector = selector
            me.actionLocation = actionLocation
            me.page = page
            me.actionName = actionName
            me.actionURL = actionURL
            me.printObjectDetails();
            me.csvWriteNow();

    },
    csvCreateNow: async function () {
        try {
            await csvCreate(csvFileName, objTime)
            return console.log('The oject has created a new CSV file!')

        } catch (error) {
            console.log('\n\nCould not create csv file!\n'+error)
        }
    },
    createActionObjectCsvAppend: async function (page, selector, actionLocation, actionURL) {
        const actionObjapp = {
            selector:selector,
            actionName:actionName,
            actionLocation:actionLocation,
            actionURL:actionURL,
            objTime:objTime,
            page:page,
            printObjectDetails: function() {
              console.log(`\n\nAction:${actionName}\nSelector:${selector}\nLocation:${actionLocation}\nTime:${objTime}\nURL:${actionURL}\nError:${error}`);
            }};

          const me = Object.create(actionObjapp);
            me.selector = selector
            me.actionLocation = actionLocation
            me.page = page
            me.actionName = actionName
            
            me.printObjectDetails();

    }



}
