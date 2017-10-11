


var arr = [1, 2, 3]

arr.forEach(function(elem1) {
    arr.forEach(function(elem2) {
        arr.forEach(function(elem3) {
            console.log(elem3)
        })
    })
})



// 2 -> 2 * 2 * 2
// 3 -> 3 * 3 * 3
// 4 -> 4 * 4 * 4