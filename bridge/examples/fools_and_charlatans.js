var num = 1

while (num <= 20) {
  if (num % 4 === 0) {
    console.log("charlatans")
  } else if (num % 2 === 0) {
    console.log("fools")
  } else {
    console.log(num)
  }
  num++
}