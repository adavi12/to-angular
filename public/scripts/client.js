var app = angular.module('introApp', []);
app.controller('IntroController', function(){

console.log('IntroController loaded');

var intro = this;

intro.monthlySalaryCost = 0;
intro.employees = [];
intro.addEmployee = function(){
  console.log(intro.employee);

intro.employees.push(angular.copy(intro.employee));
intro.getMonthlySal();

};// end of intro.addEmployee
intro.deleteEmployee = function(i){
  //to delete from intro.employees array
  intro.employees.splice(i,1);

  intro.getMonthlySal();
};//end of intro.deleteEmployee
intro.getMonthlySal = function(){
  //intro.monthlySalaryCost = 0; used to reset
intro.monthlySalaryCost = 0;
  intro.employees.forEach(function(employee){
intro.monthlySalaryCost +=  Number(parseFloat((employee.salary/12)).toFixed(2));
console.log(intro.monthlySalaryCost);

});
return intro.monthlySalaryCost;
};//end of intro.getMonthlySal

});//end of app.controller
