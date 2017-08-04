// num is total amount to make change for
// arr contains the array of currencies
// greedyChange should return the minimum number of coins required to make exact change for the given currency
// precondition: arr has at least one element, contains unique positive integers, and is sorted from least to greatest.
// precondition: num is a integer greater than 0.
function greedyChange(num, arr){
    var count = 0; //counts minimum number of change required.
    var remaining = num; //keeps track of remaining total
    for (var i = arr.length - 1; i >= 0; i--){
        if (remaining === 0){
            return count;
        } else if (remaining >= arr[i]){
            count += Math.floor(remaining / arr[i]);
            remaining = remaining % arr[i];
        }
    }
    return count;
}

// recursive solution with same parameters
// this gives the correct answer!
// THIS IS NOT THE OPTIMAL SOLUTION! MANY CALCULATIONS ARE REPEATED.
function recursiveChange(num, arr){
    if (num <= arr[0]){
        return num;
    } else {
        var min = Number.MAX_SAFE_INTEGER;
        for (var i = arr.length - 1; i >= 0; i--){
            if (num >= arr[i]){
                if (recursiveChange(num - arr[i],arr) < min){
                    min = recursiveChange(num - arr[i],arr)
                }
            }
        }
        return min + 1;
    }
}

// dynamic solution with same parameters
// this gives the correct answer!
// THIS IS THE CLOSEST TO OPTIMAL OUT OF THE THREE SOLUTIONS
function dynamicChange(num, arr){
    var mem = Array(arr.length);
    function helper(n){
        if (mem[n]){
            return mem[n];
        } else if (n <= arr[0]){
            mem[n] = n;
            return n;
        } else {
            var min = Number.MAX_SAFE_INTEGER;
            for (var i = arr.length - 1; i >= 0; i--){
                if (n >= arr[i]){
                    if (helper(n - arr[i]) < min){
                        min = helper(n - arr[i])
                    }
                }
            }
            mem[n] = min + 1;
            return min + 1;
        }
    }
    return helper(num);
}

console.time("dbsave");  
console.log("(num:" + 60 + ", " + "currency:[1,5,12], min:" + recursiveChange(60, [1,5,12]));
console.timeEnd("dbsave"); 

console.time("dbsave");  
console.log("(num:" + 60 + ", " + "currency:[1,5,12], min:" + dynamicChange(60, [1,5,12]));
console.timeEnd("dbsave"); 

// for (var i = 0; i < 10; i++){ 
//     var num = Math.floor(Math.random()*100)+200;
//     var currency = [1, Math.floor(Math.random()*10)+2, Math.floor(Math.random()*10)+15, Math.floor(Math.random()*100)+20];

//     console.time("dbsave");  
//     console.log("(num:" + num + ", " + "currency:[" + currency + "], min:" + greedyChange(num, currency));
//     console.timeEnd("dbsave");

//     console.time("dbsave");  
//     console.log("(num:" + num + ", " + "currency:[" + currency + "], min:" + recursiveChange(num, currency));
//     console.timeEnd("dbsave");
// }