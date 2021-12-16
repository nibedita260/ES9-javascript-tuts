//In ES2016 and earlier, if invalid escape sequences are used with tagged functions a Syntax Error
function myTagFn(str) {
    return { "parsed": str[0] }
 }
//  let result1 =myTagFn`\unicode1` //invalid unicode character
//  console.log(result1)

 //ES9 introduces a special property raw, available on the first argument to the tag function
 let result2 =myTagFn`\u2464\uFE0F`//valid unicode ,2764
 console.log(result2)
