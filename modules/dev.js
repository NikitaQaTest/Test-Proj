
import { Employee } from "./employee.js";


class Dev extends Employee {
    constructor(id, salary) {
      super(id, salary);
      this._jobType = "Dev";
    }
  
    getJobType() {
      return `I am a ${this._jobType}`;
    }
  }

  export { Dev };