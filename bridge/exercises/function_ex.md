# Function Exercises

### Closures
1. What does this code do? What would be the return value?

```javascript
function makePwdChecker(pwd){
  return function(attemptPwd){
    return pwd === attemptPwd
  }
}

const checkPwd = makePwdCheker(3456)

checkPwd(1234)
```