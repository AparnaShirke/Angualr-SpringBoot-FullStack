// import { TestBed } from '@angular/core/testing';

// import { LoggerService } from './logger.service';

// describe('LoggerService', () => {
//   let service: LoggerService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoggerService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { NGXLogger, LoggerConfig } from 'ngx-logger';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
        LoggerService, 
        NGXLogger,
        { provide: LoggerConfig, useValue: new LoggerConfig() }, 
        DatePipe, 
      ],
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    console.log(service);  
    expect(service).toBeTruthy(); 
  });
});
