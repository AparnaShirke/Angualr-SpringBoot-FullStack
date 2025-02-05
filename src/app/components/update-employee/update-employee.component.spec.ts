// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { UpdateEmployeeComponent } from './update-employee.component';

// describe('UpdateEmployeeComponent', () => {
//   let component: UpdateEmployeeComponent;
//   let fixture: ComponentFixture<UpdateEmployeeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UpdateEmployeeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UpdateEmployeeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UpdateEmployeeComponent } from './update-employee.component';
// import { EmployeeService } from '../../services/employee.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { LoggerService } from '../../services/logger.service';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs'; // Import throwError
// import { ActivatedRoute } from '@angular/router';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('UpdateEmployeeComponent', () => {
//   let component: UpdateEmployeeComponent;
//   let fixture: ComponentFixture<UpdateEmployeeComponent>;
//   let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
//   let mockLoggerService: jasmine.SpyObj<LoggerService>;
//   let mockRouter: jasmine.SpyObj<Router>;
//   let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

//   const mockEmployee = { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' };

//   beforeEach(() => {
//     mockEmployeeService = jasmine.createSpyObj('EmployeeService', [
//       'getEmployeeById',
//       'updateEmployee'
//     ]);
//     mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);
//     mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
//     mockActivatedRoute.snapshot.params = { id: 1 };  // Mocking route params

//     TestBed.configureTestingModule({
//       declarations: [UpdateEmployeeComponent],
//       imports: [HttpClientTestingModule], // Add HttpClientTestingModule
//       providers: [
//         { provide: EmployeeService, useValue: mockEmployeeService },
//         { provide: LoggerService, useValue: mockLoggerService },
//         { provide: Router, useValue: mockRouter },
//         { provide: ActivatedRoute, useValue: mockActivatedRoute }
//       ],
//       schemas: [NO_ERRORS_SCHEMA] // Avoid errors due to unrecognized elements in the component template
//     }).compileComponents();

//     fixture = TestBed.createComponent(UpdateEmployeeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch employee details on init', () => {
//     mockEmployeeService.getEmployeeById.and.returnValue(of(mockEmployee));

//     component.ngOnInit();

//     expect(component.employee).toEqual(mockEmployee);
//     expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1); // The mock ID
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee details successfully retrieved for ID: 1');
//   });

//   it('should log error if fetching employee details fails', () => {
//     const mockError = new Error('Failed to fetch employee details');
//     mockEmployeeService.getEmployeeById.and.returnValue(throwError(mockError)); // Use throwError to simulate an error

//     component.ngOnInit();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error retrieving employee details for ID: 1. Error: ' + mockError);
//   });

//   it('should update employee and navigate to employee list', () => {
//     mockEmployeeService.updateEmployee.and.returnValue(of(mockEmployee));

//     component.onSubmit();

//     expect(mockEmployeeService.updateEmployee).toHaveBeenCalledWith(1, mockEmployee);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee with ID: 1 successfully updated');
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
//   });

//   it('should log error if updating employee fails', () => {
//     const mockError = new Error('Failed to update employee');
//     mockEmployeeService.updateEmployee.and.returnValue(throwError(mockError)); // Use throwError to simulate an error

//     component.onSubmit();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error updating employee with ID: 1. Error: ' + mockError);
//   });
// });
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { UpdateEmployeeComponent } from './update-employee.component';
// import { EmployeeService } from '../../services/employee.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { LoggerService } from '../../services/logger.service';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
// import { of, throwError } from 'rxjs'; // Import throwError
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('UpdateEmployeeComponent', () => {
//   let component: UpdateEmployeeComponent;
//   let fixture: ComponentFixture<UpdateEmployeeComponent>;
//   let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
//   let mockLoggerService: jasmine.SpyObj<LoggerService>;
//   let mockRouter: jasmine.SpyObj<Router>;
//   let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

//   const mockEmployee = { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' };

//   beforeEach(() => {
//     mockEmployeeService = jasmine.createSpyObj('EmployeeService', [
//       'getEmployeeById',
//       'updateEmployee'
//     ]);
//     mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);
//     mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
//     mockActivatedRoute.snapshot.params = { id: 1 };  // Mocking route params

//     TestBed.configureTestingModule({
//       declarations: [UpdateEmployeeComponent],
//       imports: [HttpClientTestingModule], // Add HttpClientTestingModule
//       providers: [
//         { provide: EmployeeService, useValue: mockEmployeeService },
//         { provide: LoggerService, useValue: mockLoggerService },
//         { provide: Router, useValue: mockRouter },
//         { provide: ActivatedRoute, useValue: mockActivatedRoute }
//       ],
//       schemas: [NO_ERRORS_SCHEMA] // Avoid errors due to unrecognized elements in the component template
//     }).compileComponents();

//     fixture = TestBed.createComponent(UpdateEmployeeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch employee details on init', () => {
//     // Ensure the mock service method returns an Observable of the mock employee
//     mockEmployeeService.getEmployeeById.and.returnValue(of(mockEmployee));

//     component.ngOnInit();

//     expect(component.employee).toEqual(mockEmployee);
//     expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1); // The mock ID
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee details successfully retrieved for ID: 1');
//   });

//   it('should log error if fetching employee details fails', () => {
//     const mockError = new Error('Failed to fetch employee details');
//     // Ensure the mock service method throws an error (returns throwError)
//     mockEmployeeService.getEmployeeById.and.returnValue(throwError(mockError));

//     component.ngOnInit();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error retrieving employee details for ID: 1. Error: ' + mockError);
//   });

//   it('should update employee and navigate to employee list', () => {
//     // Ensure the mock service method returns an Observable of the mock employee
//     mockEmployeeService.updateEmployee.and.returnValue(of(mockEmployee));

//     component.onSubmit();

//     expect(mockEmployeeService.updateEmployee).toHaveBeenCalledWith(1, mockEmployee);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee with ID: 1 successfully updated');
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
//   });

//   it('should log error if updating employee fails', () => {
//     const mockError = new Error('Failed to update employee');
//     // Ensure the mock service method throws an error (returns throwError)
//     mockEmployeeService.updateEmployee.and.returnValue(throwError(mockError));

//     component.onSubmit();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error updating employee with ID: 1. Error: ' + mockError);
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateEmployeeComponent } from './update-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { LoggerService } from '../../services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { Employee } from '../../employee';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateEmployeeComponent;
  let fixture: ComponentFixture<UpdateEmployeeComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockLoggerService: jasmine.SpyObj<LoggerService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getEmployeeById', 'updateEmployee']);
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UpdateEmployeeComponent],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: LoggerService, useValue: mockLoggerService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeComponent);
    component = fixture.componentInstance;
  });

  // it('should fetch employee details on init', () => {
  //   const mockEmployee = new Employee('John', 'Doe', 'john.doe@example.com', 1);
  //   mockActivatedRoute.snapshot.params = { id: '1' };  // Simulating route param as string
  //   mockEmployeeService.getEmployeeById.and.returnValue(of(mockEmployee)); // Mock the service call

  //   component.ngOnInit();  // Call ngOnInit which should trigger the service call

  //   expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1); // Expecting ID to be a number
  //   expect(component.employee).toEqual(mockEmployee); // Check if the employee data is set correctly
  //   expect(mockLoggerService.logInfo).toHaveBeenCalledWith('UpdateEmployeeComponent initialized. Fetching employee details for ID: 1');
  //   expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee details successfully retrieved for ID: 1');
  // });

  it('should fetch employee details on init', () => {
    const mockEmployee = new Employee('John', 'Doe', 'john.doe@example.com', 1);
    mockActivatedRoute.snapshot.params = { id: '1' };  // Simulating route param as string
    mockEmployeeService.getEmployeeById.and.returnValue(of(mockEmployee)); // Mock the service call
  
    component.ngOnInit();  // Call ngOnInit which should trigger the service call
  
    expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1); // Now expecting ID to be a number
    expect(component.employee).toEqual(mockEmployee); // Check if the employee data is set correctly
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('UpdateEmployeeComponent initialized. Fetching employee details for ID: 1');
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee details successfully retrieved for ID: 1');
  });
  
  // it('should handle error if fetching employee details fails', () => {
  //   mockActivatedRoute.snapshot.params = { id: '1' };  // Simulating route param as string
  //   const mockError = new Error('Failed to fetch employee details');
  //   mockEmployeeService.getEmployeeById.and.returnValue(throwError(mockError)); // Mock an error response

  //   component.ngOnInit();  // Call ngOnInit which should trigger the error

  //   expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1);  // Ensure the ID passed is a number
  //   expect(mockLoggerService.logError).toHaveBeenCalledWith('Error retrieving employee details for ID: 1. Error: Error: Failed to fetch employee details');
  // });

 
  it('should handle error if fetching employee details fails', () => {
    mockActivatedRoute.snapshot.params = { id: '1' };  // Simulating route param as string
    const mockError = new Error('Failed to fetch employee details');
    mockEmployeeService.getEmployeeById.and.returnValue(throwError(mockError)); // Mock an error response
  
    component.ngOnInit();  // Call ngOnInit which should trigger the error
  
    expect(mockEmployeeService.getEmployeeById).toHaveBeenCalledWith(1);  // Now ensuring the ID passed is a number
    expect(mockLoggerService.logError).toHaveBeenCalledWith('Error retrieving employee details for ID: 1. Error: Error: Failed to fetch employee details');
  });
  
  
  it('should update employee and navigate to employee list', () => {
    const mockEmployee = new Employee('John', 'Doe', 'john.doe@example.com', 1);
    mockEmployeeService.updateEmployee.and.returnValue(of(mockEmployee));  // Mock successful update
    component.id = 1;  // Set ID as number
    component.employee = mockEmployee;

    component.onSubmit();  // Call onSubmit which should update the employee and navigate

    expect(mockEmployeeService.updateEmployee).toHaveBeenCalledWith(1, mockEmployee);  // Ensure updateEmployee is called with correct params
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee with ID: 1 successfully updated');
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to employee list after update');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
  });

  it('should handle error if updating employee fails', () => {
    const mockEmployee = new Employee('John', 'Doe', 'john.doe@example.com', 1);
    mockEmployeeService.updateEmployee.and.returnValue(throwError(new Error('Failed to update employee'))); // Mock an error response
    component.id = 1;  // Set ID as number
    component.employee = mockEmployee;

    component.onSubmit();  // Call onSubmit which should trigger the error

    expect(mockEmployeeService.updateEmployee).toHaveBeenCalledWith(1, mockEmployee);  // Ensure updateEmployee is called with correct params
    expect(mockLoggerService.logError).toHaveBeenCalledWith('Error updating employee with ID: 1. Error: Error: Failed to update employee');
  });
});
