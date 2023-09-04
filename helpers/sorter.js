function sortBySalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }


export { sortBySalary };