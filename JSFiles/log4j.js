"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("./node_modules/log4js");
log4js_1.configure({
    appenders: {
        access: { type: 'dateFile', filename: './access.log', pattern: '-yyyy-MM-dd' },
        app: { type: 'file', filename: './app.log', maxLogSize: 10485760, numBackups: 3 },
        errorFile: { type: 'file', filename: './errors.log' },
        errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
    },
    categories: {
        default: { appenders: ['app', 'errors'], level: 'info' },
        http: { appenders: ['access'], level: 'info' }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGouanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9sb2c0ai50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLGtEQUEyRDtBQUUzRCxrQkFBUyxDQUFDO0lBQ04sU0FBUyxFQUFFO1FBQ1QsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUU7UUFDOUUsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUNqRixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUU7UUFDckQsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTtLQUMxRTtJQUNELFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQ3hELElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7S0FDL0M7Q0FDRixDQUFDLENBQUMifQ==