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
    
    employeeServiceMock = {
      getEmployeeById: jasmine.createSpy().and.returnValue(of(new Employee()))
    };

   
    loggerServiceMock = {
      logInfo: jasmine.createSpy(),
      logError: jasmine.createSpy()
    };

    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsComponent ],
      providers: [
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { params: { id: '123' } } } 
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
    
    expect(employeeServiceMock.getEmployeeById).toHaveBeenCalledWith('123'); 

   
    expect(loggerServiceMock.logInfo).toHaveBeenCalledWith('EmployeeDetailsComponent initialized', { employeeId: '123' }); // Expect '123' (string)

    
    expect(loggerServiceMock.logInfo).toHaveBeenCalledWith('Employee details retrieved successfully', { employeeId: '123', employeeData: jasmine.any(Object) }); // Expect '123' (string)
  });
});
