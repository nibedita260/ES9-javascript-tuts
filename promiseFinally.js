//The finally() is executed whenever a promise is settled, regardless of its outcome.
// This function returns a promise. It can be used to avoid code duplication in both the promise's then() and catch() handlers.

let asyncSquareFn = function(n1){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
          if(n1>=0){
             resolve(n1*n1)
          }
          else reject('NOT_POSITIVE_NO')
       },3000)
    })
 }
 console.log('Start')

 asyncSquareFn(10)//modify to add -10
 .then(result=>{
    console.log("result is",result)
 }).catch(error=>console.log(error))
 .finally(() =>{
    console.log("inside finally")
    console.log("executes all the time")
 })

 console.log("End");