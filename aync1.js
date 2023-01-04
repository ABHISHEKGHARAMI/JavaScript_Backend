/*
agenda of this class
1. callbacks
  1. v8 engine
  2.libuex
  3. Callback queue
  4. call stack
2. Promises and async await
3. SetTimeout and set Interval
4. count down timer
*/
//callbacks-function inside a function is called callbacks

function addContainer(addMilk){
    console.log('container added');
    addMilk(addSugar)
}
function addSugar(addTea){
    console.log('sugar added.');
    addTea();
}
function addTea(){
    console.log('tea added..');
}
function addMilk(addSugar){
    console.log('milk added');
    addSugar(addTea)
}
function makeTea(addContainer){
    addContainer(addMilk)
}

makeTea(addContainer)
//callback hell
setTimeout(()=>{
    console.log("first Outside");
    setTimeout(()=>{
        console.log("first inside");
    },1000);
},1000);

setTimeout(()=>{
    console.log("Second Outside");
    setTimeout(()=>{
        console.log("Second inside");
    },1000);
},1000);


