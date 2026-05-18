let a =10; //global scope
console.log(a); //10

//Defining a function
function printHello(){
    console.log("Hello,Prachi!");
    let a = 20; //local scope
    console.log(a); //20
    if (true){
        let a = 30;
        console.log(a); //30
    }       
    console.log("F->",a);

}
console.log("G->",a); //10
printHello();