let tabl = [];

for (let i = 0; i < 10; i++) {

    let arr = [];

    for (let j = 0; j < 10; j++) {
        let arr2 = [];

        arr2.push((j + 1) + "*" + (i + 1) + ":" + ((j+1) * (i + 1)))
        
        arr.push(arr2.pop())
        
    }

    tabl.push(arr)
}

console.table(tabl)
