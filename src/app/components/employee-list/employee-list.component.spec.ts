// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeListComponent } from './employee-list.component';

// describe('EmployeeListComponent', () => {
//   let component: EmployeeListComponent;
//   let fixture: ComponentFixture<EmployeeListComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EmployeeListComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EmployeeListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EmployeeListComponent } from './employee-list.component';
// import { EmployeeService } from '../employee.service';
// import { LoggerService } from '../services/logger.service';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('EmployeeListComponent', () => {
//   let component: EmployeeListComponent;
//   let fixture: ComponentFixture<EmployeeListComponent>;
//   let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
//   let mockLoggerService: jasmine.SpyObj<LoggerService>;
//   let mockRouter: jasmine.SpyObj<Router>;

//   const mockEmployees = [
//     { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' }
//   ];

//   beforeEach(() => {
//     mockEmployeeService = jasmine.createSpyObj('EmployeeService', [
//       'getEmployeesList',
//       'deleteEmployee'
//     ]);
//     mockLoggerService = jasmine.createSpyObj('LoggerService', ['info', 'warn', 'error']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);

//     TestBed.configureTestingModule({
//       declarations: [EmployeeListComponent],
//       imports: [RouterTestingModule, HttpClientTestingModule],
//       providers: [
//         { provide: EmployeeService, useValue: mockEmployeeService },
//         { provide: LoggerService, useValue: mockLoggerService },
//         { provide: Router, useValue: mockRouter }
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     });

//     fixture = TestBed.createComponent(EmployeeListComponent);
//     component = fixture.componentInstance;
//   });

//   afterEach(() => {
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call getEmployees on ngOnInit', () => {
//     spyOn(component, 'getEmployees');
//     component.ngOnInit();
//     expect(component.getEmployees).toHaveBeenCalled();
//   });

//   it('should log info when component is initialized', () => {
//     component.ngOnInit();
//     expect(mockLoggerService.info).toHaveBeenCalledWith('EmployeeListComponent initialized');
//   });

//   it('should fetch employees on getEmployees call', () => {
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));

//     component.getEmployees();

//     expect(component.employees).toEqual(mockEmployees);
//     expect(mockLoggerService.info).toHaveBeenCalledWith('Fetched employee list', mockEmployees);
//   });

//   it('should log error if fetching employees fails', () => {
//     const mockError = new Error('Failed to fetch employees');
//     mockEmployeeService.getEmployeesList.and.returnValue(throwError(() => mockError));

//     component.getEmployees();

//     expect(mockLoggerService.error).toHaveBeenCalledWith('Error fetching employee list', mockError);
//   });

//   it('should navigate to employee details when employeeDetails is called', () => {
//     component.employeeDetails(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['employee-details', 1]);
//     expect(mockLoggerService.info).toHaveBeenCalledWith('Navigating to employee details for ID: 1');
//   });

//   it('should navigate to update employee page when updateEmployee is called', () => {
//     component.updateEmployee(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['update-employee', 1]);
//     expect(mockLoggerService.info).toHaveBeenCalledWith('Navigating to update employee for ID: 1');
//   });

//   it('should delete employee and refresh list when deleteEmployee is called', () => {
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));
//     mockEmployeeService.deleteEmployee.and.returnValue(of(null));

//     component.deleteEmployee(1);

//     expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
//     expect(mockLoggerService.info).toHaveBeenCalledWith('Deleted employee with ID: 1');
//     expect(mockEmployeeService.getEmployeesList).toHaveBeenCalled();
//   });

//   it('should log error if deleting employee fails', () => {
//     const mockError = new Error('Failed to delete employee');
//     mockEmployeeService.deleteEmployee.and.returnValue(throwError(() => mockError));

//     component.deleteEmployee(1);

//     expect(mockLoggerService.error).toHaveBeenCalledWith('Error deleting employee with ID: 1', mockError);
//   });
// });
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EmployeeListComponent } from './employee-list.component';
// import { EmployeeService } from '../../services/employee.service';
// import { LoggerService } from '../../services/logger.service';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('EmployeeListComponent', () => {
//   let component: EmployeeListComponent;
//   let fixture: ComponentFixture<EmployeeListComponent>;
//   let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
//   let mockLoggerService: jasmine.SpyObj<LoggerService>;
//   let mockRouter: jasmine.SpyObj<Router>;

//   const mockEmployees = [
//     { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
//     { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' }
//   ];

//   beforeEach(() => {
//     mockEmployeeService = jasmine.createSpyObj('EmployeeService', [
//       'getEmployeesList',
//       'deleteEmployee'
//     ]);
//     mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError', 'logWarn']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);

//     TestBed.configureTestingModule({
//       declarations: [EmployeeListComponent],
//       imports: [RouterTestingModule, HttpClientTestingModule],
//       providers: [
//         { provide: EmployeeService, useValue: mockEmployeeService },
//         { provide: LoggerService, useValue: mockLoggerService },
//         { provide: Router, useValue: mockRouter }
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     });

//     fixture = TestBed.createComponent(EmployeeListComponent);
//     component = fixture.componentInstance;
//   });

//   afterEach(() => {
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should call getEmployees on ngOnInit', () => {
//     spyOn(component, 'getEmployees');
//     component.ngOnInit();
//     expect(component.getEmployees).toHaveBeenCalled();
//   });

//   it('should log info when component is initialized', () => {
//     component.ngOnInit();
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('EmployeeListComponent initialized');
//   });

//   it('should fetch employees on getEmployees call', () => {
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));

//     component.getEmployees();

//     expect(component.employees).toEqual(mockEmployees);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Fetched employee list', mockEmployees);
//   });

//   it('should log error if fetching employees fails', () => {
//     const mockError = new Error('Failed to fetch employees');
//     mockEmployeeService.getEmployeesList.and.returnValue(throwError(() => mockError));

//     component.getEmployees();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error fetching employee list', mockError);
//   });

//   it('should navigate to employee details when employeeDetails is called', () => {
//     component.employeeDetails(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['employee-details', 1]);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to employee details for ID: 1');
//   });

//   it('should navigate to update employee page when updateEmployee is called', () => {
//     component.updateEmployee(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['update-employee', 1]);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to update employee for ID: 1');
//   });

//   it('should delete employee and refresh list when deleteEmployee is called', () => {
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));
//     mockEmployeeService.deleteEmployee.and.returnValue(of(null));

//     component.deleteEmployee(1);

//     expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Deleted employee with ID: 1');
//     expect(mockEmployeeService.getEmployeesList).toHaveBeenCalled();
//   });

//   it('should log error if deleting employee fails', () => {
//     const mockError = new Error('Failed to delete employee');
//     mockEmployeeService.deleteEmployee.and.returnValue(throwError(() => mockError));

//     component.deleteEmployee(1);

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error deleting employee with ID: 1', mockError);
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../../services/employee.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockLoggerService: jasmine.SpyObj<LoggerService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockEmployees = [
    { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' }
  ];

  beforeEach(() => {
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', [
      'getEmployeesList',
      'deleteEmployee'
    ]);
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError', 'logWarn']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    // Mock the getEmployeesList method to return an observable
    mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));

    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: LoggerService, useValue: mockLoggerService },
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEmployees on ngOnInit', () => {
    spyOn(component, 'getEmployees');
    component.ngOnInit();
    expect(component.getEmployees).toHaveBeenCalled();
  });

  it('should log info when component is initialized', () => {
    component.ngOnInit();
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('EmployeeListComponent initialized');
  });

  it('should fetch employees on getEmployees call', () => {
    // Explicitly set the mock for getEmployeesList
    mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));

    component.getEmployees();

    // Detect changes to ensure component state is updated
    fixture.detectChanges();

    expect(component.employees).toEqual(mockEmployees);
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Fetched employee list', mockEmployees);
  });

  // it('should log error if fetching employees fails', () => {
  //   const mockError = new Error('Failed to fetch employees');
  //   mockEmployeeService.getEmployeesList.and.returnValue(throwError(() => mockError));

  //   component.getEmployees();

  //   fixture.detectChanges();

  //   expect(mockLoggerService.logError).toHaveBeenCalledWith('Error fetching employee list', mockError);
  // });
  it('should log error if fetching employees fails', () => {
    const mockError = new Error('Failed to fetch employees');
    mockEmployeeService.getEmployeesList.and.returnValue(throwError(mockError));
  
    component.getEmployees();
  
    fixture.detectChanges();
  
    expect(mockLoggerService.logError).toHaveBeenCalledWith('Error fetching employee list', mockError);
  });

  it('should navigate to employee details when employeeDetails is called', () => {
    component.employeeDetails(1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['employee-details', 1]);
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to employee details for ID: 1');
  });

  it('should navigate to update employee page when updateEmployee is called', () => {
    component.updateEmployee(1);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['update-employee', 1]);
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to update employee for ID: 1');
  });

  it('should delete employee and refresh list when deleteEmployee is called', () => {
    // Ensure deleteEmployee is called and the list is refreshed after deletion
    mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));
    mockEmployeeService.deleteEmployee.and.returnValue(of(null));

    component.deleteEmployee(1);

    fixture.detectChanges();

    expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Deleted employee with ID: 1');
    expect(mockEmployeeService.getEmployeesList).toHaveBeenCalled();
  });

  // it('should log error if deleting employee fails', () => {
  //   const mockError = new Error('Failed to delete employee');
  //   mockEmployeeService.deleteEmployee.and.returnValue(throwError(() => mockError));

  //   component.deleteEmployee(1);

  //   fixture.detectChanges();

  //   expect(mockLoggerService.logError).toHaveBeenCalledWith('Error deleting employee with ID: 1', mockError);
  // });

  it('should log error if deleting employee fails', () => {
    const mockError = new Error('Failed to delete employee');
    mockEmployeeService.deleteEmployee.and.returnValue(throwError(mockError));
  
    component.deleteEmployee(1);
  
    fixture.detectChanges();
  
    expect(mockLoggerService.logError).toHaveBeenCalledWith('Error deleting employee with ID: 1', mockError);
  });
});

