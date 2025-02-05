// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CreateEmployeeComponent } from './create-employee.component';

// describe('CreateEmployeeComponent', () => {
//   let component: CreateEmployeeComponent;
//   let fixture: ComponentFixture<CreateEmployeeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ CreateEmployeeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(CreateEmployeeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEmployeeComponent } from './create-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;
  let mockEmployeeService: jasmine.SpyObj<EmployeeService>;
  let mockLoggerService: jasmine.SpyObj<LoggerService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
   
    mockEmployeeService = jasmine.createSpyObj('EmployeeService', ['createEmployee']);
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['logInfo', 'logError']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

   
    mockLoggerService.logInfo.and.callFake((message: string) => {
      console.log('logInfo: ' + message);  
    });
    mockLoggerService.logError.and.callFake((message: string) => {
      console.error('logError: ' + message);  
    });

    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeComponent ],
      providers: [
        { provide: EmployeeService, useValue: mockEmployeeService },
        { provide: LoggerService, useValue: mockLoggerService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call logInfo on ngOnInit', () => {
    component.ngOnInit();
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('CreateEmployeeComponent initialized');
  });

  it('should call saveEmployee on submit', () => {
    spyOn(component, 'saveEmployee');
    component.onSubmit();
    expect(component.saveEmployee).toHaveBeenCalled();
  });

  it('should navigate to employee list after successful save', () => {
    
    mockEmployeeService.createEmployee.and.returnValue(of({}));
    component.saveEmployee();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/employees']);
  });

  it('should log error when saveEmployee fails', () => {
    const error = 'Error creating employee';
    
    mockEmployeeService.createEmployee.and.returnValue(throwError(error));
    component.saveEmployee();
    expect(mockLoggerService.logError).toHaveBeenCalledWith('Error creating employee: ' + error);
  });

  it('should call logInfo on form submit with employee data', () => {
    const employeeData = { name: 'John', role: 'Developer' };
    component.employee = employeeData as any;
    
    mockEmployeeService.createEmployee.and.returnValue(of({}));
    component.onSubmit();
    expect(mockLoggerService.logInfo).toHaveBeenCalledWith('Form submitted with employee data: ' + JSON.stringify(employeeData));
  });
});



