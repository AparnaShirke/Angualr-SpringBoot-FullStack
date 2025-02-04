// import { Component, OnInit } from '@angular/core';

// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';
// import { Employee } from '../employee';

// @Component({
//   selector: 'app-create-employee',
//   templateUrl: './create-employee.component.html',
//   styleUrls: ['./create-employee.component.css']
// })
// export class CreateEmployeeComponent implements OnInit {

//   employee: Employee = new Employee();
//   constructor(private employeeService: EmployeeService,
//     private router: Router) { }

//   ngOnInit(): void {
//   }

//   saveEmployee(){
//     this.employeeService.createEmployee(this.employee).subscribe( data =>{
//       console.log(data);
//       this.goToEmployeeList();
//     },
//     error => console.log(error));
//   }

//   goToEmployeeList(){
//     this.router.navigate(['/employees']);
//   }
  
//   onSubmit(){
//     console.log(this.employee);
//     this.saveEmployee();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../employee';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private logger: LoggerService  
  ) { }

  ngOnInit(): void {
    this.logger.logInfo('CreateEmployeeComponent initialized');
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      this.logger.logInfo('Employee created successfully');
      console.log(data);
      this.goToEmployeeList();
    },
    error => {
      this.logger.logError('Error creating employee: ' + error);
      console.log(error);
    });
  }

  goToEmployeeList(){
    this.logger.logInfo('Navigating to employee list');
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    this.logger.logInfo('Form submitted with employee data: ' + JSON.stringify(this.employee));
    this.saveEmployee();
  }
}
