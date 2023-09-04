/* Створити базовий клас Employee з властивостями id, salary та статичним методом для порівняння властивостей salary, який
  повертає строку з тесктом User with id ... has greater salary, або у випадку рівності значень
  повертає salaries are equal. Створити два класи Dev та PM, які успадковують клас Employee та кожен
  по своєму реалізує метод getJobType(), використовуючи для jobType приватну властивість. Кожен з класів 
  повинен бути організований у окремому модулі, які лежать у папці modules. Приклад імпортів та викликів нижче.*/

  
  import { Dev } from "./modules/dev.js";
  import { PM } from "./modules/pm.js";
  import { Employee } from "./modules/employee.js";
  import { sortBySalary } from "./helpers/sorter.js";
  
  const dev = new Dev(1, 2000);
  const pm = new PM(2, 2500);
  const dev2 = new Dev(3, 2000);
  console.log(dev.getJobType()); // виведе I am a Dev
  console.log(pm.getJobType()); // виведе I am a PM
  console.log(Employee.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
  console.log(Employee.compareSalary(dev, dev2)); // виведе salaries are equal