/**
 * @function next
 * @param  {number} num 
 * @return {number} {num + 1}
 */
function next(num){
  return num + 1
}

/**
 * @function prev
 * @param  {number} num 
 * @return {number} { num -1 }
 */
function prev(num){
  return num - 1
}


/**
 * @function addRecursive
 * @param  {number} num1 {description}
 * @param  {number} num2 {description}
 * @return {number} {num1 + num2}
 */
function addRecursive(num1, num2){
  if (num2 === 0){
    return num1
  } else {
    return addRecursive(next(num1), prev(num2))
  }
}

function add(num1, num2){
  while (num2 !== 0){
    num1 = next(num1)
    num2 = prev(num2)
  }
  return num1
}

var num = addRecursive(2, 500)
console.log(num)
