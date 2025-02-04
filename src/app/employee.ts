// export class Employee {
//     id?: number; // Optional since it is auto-generated
//     firstName!: string;
//     lastName!: string;
//     emailId!: string;
  
//     constructor(firstName: string, lastName: string, emailId: string, id?: number) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.emailId = emailId;
//       if (id) {
//         this.id = id;
//       }
//     }
//   }
  export class Employee {
    id?: number;
    firstName: string;
    lastName: string;
    emailId: string;
  
    constructor(firstName: string = '', lastName: string = '', emailId: string = '', id?: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailId = emailId;
    }
  }
  
