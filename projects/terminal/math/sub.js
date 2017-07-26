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
 * @function subRecursive
 * @param  {number} num1 {description}
 * @param  {number} num2 {description}
 * @return {number} {num1 + num2}
 */
function subRecursive(num1, num2){
  if (num2 === 0){
    return num1
  } else {
    return subRecursive(prev(num1), prev(num2))
  }
}

function sub(num1, num2){
  while (num2 !== 0){
    num1 = prev(num1)
    num2 = prev(num2)
  }
  return num1
}

var num = sub(2, 1)
console.log(num)
