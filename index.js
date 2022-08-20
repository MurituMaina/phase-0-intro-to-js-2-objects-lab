// // Write your solution in this file!
const employee ={name:"Sam"};

// names =""
streetAddress = "streetAddress"

function updateEmployeeWithKeyAndValue(obj,key,value){
  const employeeUpdate = {...obj};
employeeUpdate[key]= value;
// employeeUpdate[streetAddress]="11 Broadway";  
  // return obj;
return employeeUpdate;
}
console.log(updateEmployeeWithKeyAndValue(employee,streetAddress,"11 Broadway"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
employee[key] = value;
return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, "11 Broadway");

function deleteFromEmployeeByKey(obj,key){
  const deleteNameEmployee = {...obj}
delete deleteNameEmployee[key]
return deleteNameEmployee;
}
deleteFromEmployeeByKey(employee,name);

function destructivelyDeleteFromEmployeeByKey(obj,key){
delete obj[key];
return obj;
}
destructivelyDeleteFromEmployeeByKey(employee,name);
