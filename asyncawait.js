async function addContainer(){
    return 'container added';
}
async function addSugar(){
    return 'sugar added.';
}
async function addWater(){
     return 'water added.';
}
async function addTea(){
    return 'tea added..';
}
async function addMilk(){
    return'milk added';
}
// async
// await
async function Maketea(){
    let container = await addContainer();
    let Water = await addWater();
    let Sugar = await addSugar();
    let Milk = await addMilk();
    let Tea = await addTea();
    console.log(container,'\n',Water,'\n',Sugar,'\n',Tea,'\n',Milk);
}
Maketea();
