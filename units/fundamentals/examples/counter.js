function a(num){
  console.log(num)
}

function count(num){
  setTimeout(function(){
    a(num)
  }, 1000)
}

count(1)