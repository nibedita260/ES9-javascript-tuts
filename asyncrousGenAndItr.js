async function* load(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
 }
 
 let l = load();
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))
 l.next().then(r=>console.log(r))

 //for await of loop
 //On each iteration a value of a different property is assigned to variable and a variable may be declared with const, let, or var.

//iterable − Object whose iterable properties are to be iterated over.
async function f(){
    for await(const val of load()){
        console.log(val);
    }
}
f()
//example iterates an array using the for await of loop.
async function fntest(){
    for await (const val of [10,20,30,40]){
       console.log(val)
    }
 }
 fntest();
 console.log('end of script')
