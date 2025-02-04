// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../employee';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../employee.service';

// @Component({
//   selector: 'app-employee-details',
//   templateUrl: './employee-details.component.html',
//   styleUrls: ['./employee-details.component.css']
// })
// export class EmployeeDetailsComponent implements OnInit {

//   id: number
//   employee: Employee
//   constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.employee = new Employee();
// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../../employee';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from '../../services/employee.service';
// import { LoggerService } from '../../services/logger.service';


// @Component({
//   selector: 'app-employee-details',
//   templateUrl: './employee-details.component.html',
//   styleUrls: ['./employee-details.component.css']
// })
// export class EmployeeDetailsComponent implements OnInit {

//   id: number;
//   employee: Employee;

//   constructor(
//     private route: ActivatedRoute,
//     private employeService: EmployeeService,
//     private logger: LoggerService  
//   ) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.logger.info('EmployeeDetailsComponent initialized. Fetching details for employee ID: ' + this.id);

//     this.employee = new Employee();
//     this.employeService.getEmployeeById(this.id).subscribe(data => {
//       this.employee = data;
//       this.logger.info('Employee details successfully retrieved for ID: ' + this.id);
//     }, error => {
//       this.logger.error('Error retrieving employee details for ID: ' + this.id + '. Error: ' + error);
//     });
//   }
// }//     this.employeService.getEmployeeById(this.id).subscribe( data => {
//       this.employee = data;
//     });
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private logger: LoggerService  
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.logger.logInfo('EmployeeDetailsComponent initialized', { employeeId: this.id });

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe({
      next: (data) => {
        this.employee = data;
        this.logger.logInfo('Employee details retrieved successfully', { employeeId: this.id, employeeData: data });
      },
      error: (error) => {
        this.logger.logError('Error retrieving employee details', { employeeId: this.id, error: error });
      }
    });
  }
 }
