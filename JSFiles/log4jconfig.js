"use strict";
//const log = require('node-file-logger');
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = {
    timeZone: 'America/New_York',
    folderPath: './logs/',
    dateBasedFileNaming: false,
    // Required only if dateBasedFileNaming is set to false
    fileName: 'All_Logs',
    // Required only if dateBasedFileNaming is set to true
    //fileNamePrefix: 'Logs_',
    //fileNameSuffix: '',
    //fileNameExtension: '.log',     
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm:ss.SSS',
    logLevel: 'debug',
    onlyFileLogging: false
};
// Note: If you set dateBasedFileNaming to false, then a log file will be created at the folder path with the provided fileName.
// If set to true then a logfile will be created with the name <fileName> provided in the options
//log.SetUserOptions(options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sb2c0amNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQTBDOztBQUU3QixRQUFBLE9BQU8sR0FBRztJQUNyQixRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLFVBQVUsRUFBRSxTQUFTO0lBQ3JCLG1CQUFtQixFQUFFLEtBQUs7SUFDMUIsdURBQXVEO0lBQ3ZELFFBQVEsRUFBRSxVQUFVO0lBQ3BCLHNEQUFzRDtJQUN0RCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxVQUFVLEVBQUUsWUFBWTtJQUN4QixVQUFVLEVBQUUsY0FBYztJQUMxQixRQUFRLEVBQUUsT0FBTztJQUNqQixlQUFlLEVBQUUsS0FBSztDQUN2QixDQUFBO0FBRUQsZ0lBQWdJO0FBQ2hJLGlHQUFpRztBQUVqRyw4QkFBOEIifQ==