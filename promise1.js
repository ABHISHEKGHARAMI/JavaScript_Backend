//promises
//decoupling of callback
function addContainer(){
    console.log('container added');
}
function addSugar(){
    console.log('sugar added.');
}
function addWater(){
    console.log("water added.");
}
function addTea(){
    console.log('tea added..');
}
function addMilk(){
    console.log('milk added');
}
function makeTea(){
    new Promise(function(resolve,reject){
        resolve(addContainer());
        reject(()=>console.log("error occured while adding container"));
    }).then((onFulfilled,onRejected)=>{
        if(!onRejected){
            addWater();
        }
    }).then((onFulfilled,onRejected)=>{
        if(!onRejected){
            addMilk();
        }
    }).then((onFulfilled,onRejected)=>{
        if(!onRejected){
            addTea();
        }
    })
}
makeTea();
// draw back of promise