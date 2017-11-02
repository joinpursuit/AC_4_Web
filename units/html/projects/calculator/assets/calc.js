var outputDiv;

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var operators = ['+','-','*','/'];
var operations = ['add','sub','mul','div']

// hint: look at the output:
console.log(eval('5 + 10 * 3'))

document.addEventListener('DOMContentLoaded', function() {
  outputDiv = document.getElementById('output');

  document.addEventListener('click', function(event) {
    var elementId = event.target.id;
    outputDiv.innerText += elementId;
    // logging the element id for debug purposes
    console.log(elementId)
       

  })
})