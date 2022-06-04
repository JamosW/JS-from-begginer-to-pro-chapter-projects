let myString = "Tidyverse";

function intake(str){
    str = str.split("");
    let temp = [];

    str.forEach((element,index,array) => {
        var randNumber = Math.floor(Math.random() * str.length)

        temp[index] = array[randNumber]
    });

    return temp

}


const endDate = "Sept 1 2022";
function dates() {
const total = Date.parse(endDate) - new Date();
const days = Math.floor(total / (1000 * 60 * 60 * 24));
const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
const mins = Math.floor((total / 1000 / 60) % 60);
const secs = Math.floor((total / 1000) % 60);
return {
days,
hrs,
mins,
secs
};
}
function update() {
const temp = dates();
let output = "";
for (const property in temp) {
output += (`${property}: ${temp[property]} `);
}
console.log(output);
setTimeout(update, 1000);
}

update()