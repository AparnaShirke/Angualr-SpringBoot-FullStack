// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeDetailsComponent } from './employee-details.component';

// describe('EmployeeDetailsComponent', () => {
//   let component: EmployeeDetailsComponent;
//   let fixture: ComponentFixture<EmployeeDetailsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EmployeeDetailsComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EmployeeDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { of } from 'rxjs';
import { LoggerService } from '../../services/logger.service';
import { Employee } from '../../employee';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let employeeServiceMock: any;
  let loggerServiceMock: any;

  beforeEach(async(() => {
    // Mock EmployeeService to return a mock employee when called
    employeeServiceMock = {
      getEmployeeById: jasmine.createSpy().and.returnValue(of(new Employee()))
    };

    // Mock LoggerService
    loggerServiceMock = {
      logInfo: jasmine.createSpy(),
      logError: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { params: { id: '123' } } } // Mock ActivatedRoute with string id
        },
        { provide: EmployeeService, useValue: employeeServiceMock },
        { provide: LoggerService, useValue: loggerServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize employee details on ngOnInit', () => {
    // Ensure that the employee service method was called with the correct string id
    expect(employeeServiceMock.getEmployeeById).toHaveBeenCalledWith('123'); // Expect '123' (string)

    // Check if the logInfo method was called (to verify logging functionality)
    expect(loggerServiceMock.logInfo).toHaveBeenCalledWith('EmployeeDetailsComponent initialized', { employeeId: '123' }); // Expect '123' (string)

    // Check if the employee details were retrieved and logged
    expect(loggerServiceMock.logInfo).toHaveBeenCalledWith('Employee details retrieved successfully', { employeeId: '123', employeeData: jasmine.any(Object) }); // Expect '123' (string)
  });
});
