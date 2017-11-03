var outputDiv;

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var operators = ['+','-','*','/'];
var operations = ['add','sub','mul','div']

/**
 * @function calculate
 * @param  {string} mathExp {the expression to calculate}
 * @return {number} {the result of the calculation or NaN if it couldn't be done}
 */
function calculate(mathExp){
    try {
       return eval(mathExp)
    } catch (e) {
       return NaN
    }
}


document.addEventListener('DOMContentLoaded', function() {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function(event) {
    var elementId = event.target.id;
    outputDiv.innerText += elementId;
    // logging the element id for debug purposes
    console.log(elementId)
       
  })
})