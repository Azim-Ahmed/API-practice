function add() {
console.log("we are not alone");    
}
add()
console.log(2333);
setTimeout(add,2000)
setTimeout(()=> {
    console.log("we are here")
}, 2500)

setInterval(() => {
    console.log("run again and again");
}, 4000);
console.log(7333);
console.log(9333);



