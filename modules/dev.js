
import { Employee } from "./employee.js";


class Dev extends Employee {
    constructor(id, salary) {
      super(id, salary);
      this._jobType = "Dev";

      
      // только для чтение 
      Object.defineProperty(this, "id", {
        enumerable: true,
        configurable: false,
        writable: false,
        value: id,
       });


    }
  
    getJobType() {
      return `I am a ${this._jobType}`;
    }
  }

  export { Dev }

  const newDev = new Dev(1, 3000);
  
  newDev.id = 15; // видасть помилку TypeError: Cannot assign to read only property 'id' of object '#<Dev>'
  delete newDev.id; // видасть помилку TypeError: Cannot delete property 'id' of #<Dev>
  for (let key in newDev) {
    console.log(newDev[key]); // виведе почергово 1 та 3000
  }
  