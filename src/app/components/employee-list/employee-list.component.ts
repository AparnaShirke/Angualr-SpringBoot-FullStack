// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee'
// import { EmployeeService } from '../employee.service'
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css']
// })
// export class EmployeeListComponent implements OnInit {

//   employees: Employee[];

//   constructor(private employeeService: EmployeeService,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.getEmployees();
//   }

//   private getEmployees(){
//     this.employeeService.getEmployeesList().subscribe(data => {
//       this.employees = data;
//     });
//   }

//   employeeDetails(id: number){
//     this.router.navigate(['employee-details', id]);
//   }

//   updateEmployee(id: number){
//     this.router.navigate(['update-employee', id]);
//   }

//   deleteEmployee(id: number){
//     this.employeeService.deleteEmployee(id).subscribe( data => {
//       console.log(data);
//       this.getEmployees();
//     })
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../../employee';
// import { EmployeeService } from '../../services/employee.service';
// import { Router } from '@angular/router';
// import { LoggerService } from '../../services/logger.service'; 

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css'],
// })
// export class EmployeeListComponent implements OnInit {
//   employees: Employee[];

//   constructor(
//     private employeeService: EmployeeService,
//     private router: Router,
//     private logger: LoggerService
//   ) {}

//   ngOnInit(): void {
//     this.logger.logInfo('EmployeeListComponent initialized'); 
//     this.getEmployees();
//   }

//   getEmployees() {
//     this.employeeService.getEmployeesList().subscribe({
//       next: (data: Employee[]) => {
//         this.employees = data;
//         this.logger.logInfo('Fetched employee list', data);
//       },
//       error: (err: any) => {
//         this.logger.logError('Error fetching employee list', err);
//          alert('Error fetching employee list. Please try again later.');
//       },
//     });
//   }

//   employeeDetails(id: number) {
//     this.logger.logInfo(`Navigating to employee details for ID: ${id}`);
//     this.router.navigate(['employee-details', id]);
//   }

//   updateEmployee(id: number) {
//     this.logger.logInfo(`Navigating to update employee for ID: ${id}`);
//     this.router.navigate(['update-employee', id]);
//   }

//   deleteEmployee(id: number) {
//     this.logger.logWarn(`Attempting to delete employee with ID: ${id}`);
//     this.employeeService.deleteEmployee(id).subscribe({
//       next: () => {
//         this.logger.logInfo(`Deleted employee with ID: ${id}`);
//         this.getEmployees();
//       },
//       error: (err: any) => {
//         this.logger.logError(`Error deleting employee with ID: ${id}`, err);
//       },
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../../employee';
// import { EmployeeService } from '../../services/employee.service';
// import { Router } from '@angular/router';
// import { LoggerService } from '../../services/logger.service'; 

// @Component({
//   selector: 'app-employee-list',
//   templateUrl: './employee-list.component.html',
//   styleUrls: ['./employee-list.component.css'],
// })
// export class EmployeeListComponent implements OnInit {
//   employees: Employee[];

//   constructor(
//     private employeeService: EmployeeService,
//     private router: Router,
//     private logger: LoggerService
//   ) {}

//   ngOnInit(): void {
//     this.logger.logInfo('EmployeeListComponent initialized');
//     this.getEmployees();
//   }

//   getEmployees() {
//     this.employeeService.getEmployeesList().subscribe({
//       next: (data) => {
//         this.employees = data;
//         this.logger.logInfo('Employee list fetched successfully', { employeeCount: data.length, employees: data });
//       },
//       error: (err) => {
//         this.logger.logError('Error fetching employee list', { error: err });
//         alert('Error fetching employee list. Please try again later.');
//       },
//     });
//   }

//   employeeDetails(id: number) {
//     this.logger.logInfo(`Navigating to employee details for ID: ${id}`, { employeeId: id });
//     this.router.navigate(['employee-details', id]);
//   }

//   updateEmployee(id: number) {
//     this.logger.logInfo(`Navigating to update employee for ID: ${id}`, { employeeId: id });
//     this.router.navigate(['update-employee', id]);
//   }

//   deleteEmployee(id: number) {
//     this.logger.logWarn(`Attempting to delete employee with ID: ${id}`, { employeeId: id });
//     this.employeeService.deleteEmployee(id).subscribe({
//       next: (data) => {
//         this.logger.logInfo(`Employee with ID: ${id} deleted successfully`, { employeeId: id });
//         this.getEmployees();
//       },
//       error: (err) => {
//         this.logger.logError(`Error deleting employee with ID: ${id}`, { employeeId: id, error: err });
//       },
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.logger.logInfo('EmployeeListComponent initialized');
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployeesList().subscribe({
      next: (data: Employee[]) => {
        this.employees = data;
        this.logger.logInfo('Fetched employee list', data);
      },
      error: (err: any) => {
        this.logger.logError('Error fetching employee list', err);
        alert('Error fetching employee list. Please try again later.');
      },
    });
  }

  employeeDetails(id: number) {
    this.logger.logInfo(`Navigating to employee details for ID: ${id}`);
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number) {
    this.logger.logInfo(`Navigating to update employee for ID: ${id}`);
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.logger.logWarn(`Attempting to delete employee with ID: ${id}`);
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.logger.logInfo(`Deleted employee with ID: ${id}`);
        this.getEmployees();
      },
      error: (err: any) => {
        this.logger.logError(`Error deleting employee with ID: ${id}`, err);
      },
    });
  }
}
