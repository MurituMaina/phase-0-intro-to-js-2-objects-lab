// Write your solution in this file!
const employee ={name: "Sam",
                streetAddress:"11 Broadway"};
function updateEmployeeWithKeyAndValue(employee, key, value)    {
  const employeeUpdate= {...employee};

employeeUpdate[key]= value;

return employeeUpdate;
 
}
console.log(updateEmployeeWithKeyAndValue(employee,"streetAddress", "11 Broadway"));

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject,key,value){

employee[key] = value;

return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"Sam", "11 Broadway");

function deleteFromEmployeeByKey(){
  const protect ={...employee};
delete protect.name;
delete protect.streetAddress;
return protect;

}
deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    
  return employee;

}
destructivelyDeleteFromEmployeeByKey();
