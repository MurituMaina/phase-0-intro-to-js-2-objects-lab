// Write your solution in this file!
const employee ={name: "Sam",
                streetAddress:""};

function updateEmployeeWithKeyAndValue(employee,key,value)    {
  const employeeUpdate = {...employee};
employeeUpdate[key]= "Sam";
employeeUpdate[streetAddress]="11 Broadway";  
  
return employeeUpdate;
}
console.log(updateEmployeeWithKeyAndValue());

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject,key,value){
employeeObject +=employee;
}
destructivelyUpdateEmployeeWithKeyAndValue();
function deleteFromEmployeeByKey(){


}
deleteFromEmployeeByKey();
function destructivelyDeleteFromEmployeeByKey(){

}
destructivelyDeleteFromEmployeeByKey();
