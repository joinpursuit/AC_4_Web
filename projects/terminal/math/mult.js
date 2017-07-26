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

/**
 * @function add
 * @param  {number} num1 
 * @param  {number} num2
 * @return {number} {num1 + num2}
 */
function add(num1, num2){
  while (num2 !== 0){
    num1 = next(num1)
    num2 = prev(num2)
  }
  return num1
}

/**
 * @function mult
 * @param  {number} num1
 * @param  {number} num2
 * @return {number}
 */
function mult(num1, num2){
  var base = num1
  while (num2 !== 1){
    num1 = add(num1, base)
    num2 = prev(num2)
  }
  return num1
}

var num = mult(5, 25)
console.log(num)
