import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from './logger.service'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(private injector: Injector) {} 

  handleError(error: any): void {
    const logger = this.injector.get(LoggerService); 
    const router = this.injector.get(Router); 

   
    logger.logError('Global Error Occurred:', error);

    alert('An unexpected error occurred. Please try again.');

    
    router.navigate(['/error']);

    console.error('Global Error Handler:', error);
  }
}
