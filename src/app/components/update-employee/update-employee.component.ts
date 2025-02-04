// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from '../employee.service';
// import { Employee } from '../employee';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-update-employee',
//   templateUrl: './update-employee.component.html',
//   styleUrls: ['./update-employee.component.css']
// })
// export class UpdateEmployeeComponent implements OnInit {

//   id: number;
//  employee: Employee = new Employee();
//   constructor(private employeeService: EmployeeService,
//     private route: ActivatedRoute,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.employeeService.getEmployeeById(this.id).subscribe(data => {
//       this.employee = data;
//     }, error => console.log(error));
//   }

//   onSubmit(){
//     this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
//       this.goToEmployeeList();
//     }
//     , error => console.log(error));
//   }

//   goToEmployeeList(){
//     this.router.navigate(['/employees']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../services/logger.service';
  // Import LoggerService

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.logger.logInfo('UpdateEmployeeComponent initialized. Fetching employee details for ID: ' + this.id);

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.logger.logInfo('Employee details successfully retrieved for ID: ' + this.id);
    }, error => {
      this.logger.logError('Error retrieving employee details for ID: ' + this.id + '. Error: ' + error);
    });
  }

  onSubmit(): void {
    this.logger.logInfo('Updating employee with ID: ' + this.id);

    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.logger.logInfo('Employee with ID: ' + this.id + ' successfully updated');
      this.goToEmployeeList();
    }, error => {
      this.logger.logError('Error updating employee with ID: ' + this.id + '. Error: ' + error);
    });
  }

  goToEmployeeList(): void {
    this.logger.logInfo('Navigating to employee list after update');
    this.router.navigate(['/employees']);
  }
}


