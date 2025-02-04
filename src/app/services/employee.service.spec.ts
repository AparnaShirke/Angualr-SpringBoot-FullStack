// import { TestBed } from '@angular/core/testing';

// import { EmployeeService } from './employee.service';
// import { HttpClient } from '@angular/common/http';
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from '@angular/common/http/testing';

// describe('EmployeeService', () => {
//   let service: EmployeeService;
//   let http: HttpClient;
//   let httpController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [EmployeeService]
//     });
//     service = TestBed.inject(EmployeeService);
//     http = TestBed.inject(HttpClient);
//     httpController = TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy;
//   });
// });
import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from '../employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpController: HttpTestingController;

  // Mock Employee Data
  const mockEmployees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', emailId: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', emailId: 'jane.smith@example.com' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch employee list', () => {
    service.getEmployeesList().subscribe((employees) => {
      expect(employees.length).toBe(2);
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpController.expectOne('http://localhost:8080/api/v1/employees');
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });

  it('should create an employee', () => {
    const newEmployee: Employee = { firstName: 'Alice', lastName: 'Brown', emailId: 'alice.brown@example.com' };

    service.createEmployee(newEmployee).subscribe((response) => {
      expect(response).toEqual(newEmployee);
    });

    const req = httpController.expectOne('http://localhost:8080/api/v1/employees');
    expect(req.request.method).toBe('POST');
    req.flush(newEmployee);
  });

  it('should fetch an employee by ID', () => {
    const employeeId = 1;

    service.getEmployeeById(employeeId).subscribe((employee) => {
      expect(employee).toEqual(mockEmployees[0]);
    });

    const req = httpController.expectOne(`http://localhost:8080/api/v1/employees/${employeeId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees[0]);
  });

  it('should update an employee', () => {
    const updatedEmployee: Employee = { id: 1, firstName: 'John Updated', lastName: 'Doe', emailId: 'john.updated@example.com' };

    service.updateEmployee(1, updatedEmployee).subscribe((response) => {
      expect(response).toEqual(updatedEmployee);
    });

    const req = httpController.expectOne(`http://localhost:8080/api/v1/employees/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedEmployee);
  });

  it('should delete an employee', () => {
    const employeeId = 1;

    service.deleteEmployee(employeeId).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpController.expectOne(`http://localhost:8080/api/v1/employees/${employeeId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
// import { EmployeeService } from './employee.service';
// import { LoggerService } from './logger.service';
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
//     mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['getEmployeesList', 'deleteEmployee']);
//     mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError', 'logWarn']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);

//     // Mock getEmployeesList to return an observable of mockEmployees
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));

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
//     component.getEmployees();

//     expect(component.employees).toEqual(mockEmployees);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee list fetched successfully', {
//       employeeCount: mockEmployees.length,
//       employees: mockEmployees
//     });
//   });

//   it('should log error if fetching employees fails', () => {
//     const mockError = new Error('Failed to fetch employees');
//     mockEmployeeService.getEmployeesList.and.returnValue(throwError(() => mockError));

//     component.getEmployees();

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error fetching employee list', { error: mockError });
//   });

//   it('should navigate to employee details when employeeDetails is called', () => {
//     component.employeeDetails(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['employee-details', 1]);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to employee details for ID: 1', { employeeId: 1 });
//   });

//   it('should navigate to update employee page when updateEmployee is called', () => {
//     component.updateEmployee(1);
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['update-employee', 1]);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Navigating to update employee for ID: 1', { employeeId: 1 });
//   });

//   it('should delete employee and refresh list when deleteEmployee is called', () => {
//     mockEmployeeService.getEmployeesList.and.returnValue(of(mockEmployees));
//     mockEmployeeService.deleteEmployee.and.returnValue(of(null));

//     component.deleteEmployee(1);

//     expect(mockEmployeeService.deleteEmployee).toHaveBeenCalledWith(1);
//     expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Employee with ID: 1 deleted successfully', { employeeId: 1 });
//     expect(mockEmployeeService.getEmployeesList).toHaveBeenCalled();
//   });

//   it('should log error if deleting employee fails', () => {
//     const mockError = new Error('Failed to delete employee');
//     mockEmployeeService.deleteEmployee.and.returnValue(throwError(() => mockError));

//     component.deleteEmployee(1);

//     expect(mockLoggerService.logError).toHaveBeenCalledWith('Error deleting employee with ID: 1', { employeeId: 1, error: mockError });
//   });
// });
