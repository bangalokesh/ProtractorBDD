//const log = require('node-file-logger');

export const options = {
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
}
 
// Note: If you set dateBasedFileNaming to false, then a log file will be created at the folder path with the provided fileName.
// If set to true then a logfile will be created with the name <fileName> provided in the options
 
//log.SetUserOptions(options);
