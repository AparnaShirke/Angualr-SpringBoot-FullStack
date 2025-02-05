import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private logger: NGXLogger) {}

  logDebug(message: string, ...additional: any[]) {
    this.logger.debug(message, ...additional);
  }

  logInfo(message: string, ...additional: any[]) {
    this.logger.info(message, ...additional);
  }

  logWarn(message: string, ...additional: any[]) {
    this.logger.warn(message, ...additional);
  }

  logError(message: string, ...additional: any[]) {
    this.logger.error(message, ...additional);
  }
}
// import { Injectable } from '@angular/core';
// import { NGXLogger } from 'ngx-logger';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoggerService {
//   private storageKey = 'logs';

//   constructor(private logger: NGXLogger) {}

//   private storeLog(level: string, message: string, additional: any[]) {
//     const logs = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
//     logs.push({ level, message, additional, timestamp: new Date().toISOString() });
//     localStorage.setItem(this.storageKey, JSON.stringify(logs));
//   }

//   logDebug(message: string, ...additional: any[]) {
//     this.logger.debug(message, ...additional);
//     this.storeLog('DEBUG', message, additional);
//   }

//   logInfo(message: string, ...additional: any[]) {
//     this.logger.info(message, ...additional);
//     this.storeLog('INFO', message, additional);
//   }

//   logWarn(message: string, ...additional: any[]) {
//     this.logger.warn(message, ...additional);
//     this.storeLog('WARN', message, additional);
//   }

//   logError(message: string, ...additional: any[]) {
//     this.logger.error(message, ...additional);
//     this.storeLog('ERROR', message, additional);
//   }

//   getLogs(): any[] {
//     return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
//   }

//   clearLogs() {
//     localStorage.removeItem(this.storageKey);
//   }
// }
