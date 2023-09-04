

import { Employee } from "./employee.js";

class PM extends Employee {
    constructor(id, salary) {
      super(id, salary);
      this._jobType = "PM";
    }
  
    getJobType() {
      return `I am a ${this._jobType}`;
    }
  }

  export { PM };