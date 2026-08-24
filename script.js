// console.log("This is my looping function");
// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);


// for (let i=1;i<=100;i++){
//     console.log(i)
// }

// let obj={
//     name:"deepu",
//     roolno:30,
//     branch:"csc"
// }
// for (const i in obj) { 
//     const element = obj[i];
    
//     console.log(i);
//     console.log(obj[i]);
//     console.log(i,obj[i]);
// }

// for (const i of "hello") {
//     console.log(i);
// }
// let i=1;
// while (i<100){
//     console.log("heyy!")
//     i++;
// }

let i=1;
do{
    console.log(i);
    i++;
}while (i <= 5);

let a=10;
let b=20;
let max =(a>b)? a:b;
console.log ("maximum numcer is :"+ max);

let x="guava";
switch (x){
case "banana":
    console.log("This is a guava");
    break;
    case "apple":
        console.log("This is a guava");
        break;
        default:
            console.log("i dont need any fruits");
}

for (let i =0; i<=100; i++){
    if (i % 8=== 0){
        console.log(i);
    }
}
function nice(name){
console.log("Hey " +name+ " your nice1");
console.log("Hey " +name+ " your nice2");
console.log("Hey " +name+ " your nice3");
console.log("Hey " +name+ " your nice4");
    

}
nice("sam");

function sum(a,b){
    //
    return a+b;
}
total=sum(2,3);
console.log(total);
function sum2(a,b,c=3){
    console.log(a+b+c);
}
sum2(1,2,3);
sum2(1,2);

const func1 =()=>{
    console.log("I am an arrow function",)
}
func1("Hello");



