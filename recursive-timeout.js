/*  Recursive function that counts down  */
function recursive(nm){
    console.log(`counting up... ${nm}`);

    nm++;

    if(nm < 10) {
        recursive(nm)
    } else {
        console.log("10!!!!")
    }
}

/*  Outputs one and two to the console   */
let one = () => {
    console.log("One")
}

let two = () => {
    console.log("Two")
}

/*   Invokes the first two functions   */
let invoker = (f1, f2) => {
    console.log("Three");

    f1();
    f2();

}

/*  Outputs four to the console and utilizes setTimeout to invoke the first function immediately and then the third function   */
let fourth = () => {
    console.log("Four")
    invoker(one, two);
    setTimeout(one, 1000)
}

fourth()