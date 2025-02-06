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
  
