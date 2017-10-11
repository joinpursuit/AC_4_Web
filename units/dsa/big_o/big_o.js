
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++ ) {
            sum += arr[i][j]
        }
    }
    return sum
}


var arr = [[ 1, 2, 3],
           [ 4, 5, 6],
           [ 7, 8, 9]]



