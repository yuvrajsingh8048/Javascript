// for
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}

for(let i = 1; i <= 10; i++){
    // console.log(`Multiplication Table: ${i}`)
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

// break and continue
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        // console.log(`Detected ${i}`)
        // continue  // mean skip this iteration
        break //break the loop
    }
    // console.log(i)
}

// while loop

let i = 1
while (i <= 5) {
    // console.log(`Value of i is ${i}`)
    i++
}

// Do-while Loop

let j = 1
do {
    console.log(j)
    j++
} while (j <= 0);