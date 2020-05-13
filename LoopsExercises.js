const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // 1
    // for (let i = 1; i <= 7; i++) {
    //     console.log(i);
    // }
    // let i = 1;
    // while(i <= 7) {
    //     console.log(i);
    //     i++;
    // }

    // 2
    // for (let i = 2; i <= 8; i++) {
    //     console.log(i + 2);
    // }
    // let i = 2;
    // while (i <= 8) {
    //     console.log(i);
    //     i += 2;
    // }

    // 3
    // let myArray = ["Item1", "Item2", "Item3"];
    // for (let i = myArray.length - 1; i >= 0; i--) {
    //     console.log(myArray[i]);
    // }

    // let i = myArray.length - 1;
    // while(i >= 0){
    //     console.log(myArray[i]);
    //     i--;
    // }

    // let j = 0;
    // while(j < myArray.length){
    //     console.log(myArray[j]);
    //     j++;
    // }

    // 4
    let myArray = ["Apple", "Banana", "Orange", "Andrew", "Bob", "Steve"];
    // for (let i = 0; i < myArray.length; i++) {
    //     let currentElement = myArray[i];
    //     if(currentElement[0] == "A"){
    //         console.log(currentElement);
    //     }
    // }
    let i = 0;
    while (i < myArray.length) {
        let currentElement = myArray[i];
        if(currentElement[0] == "A"){
            console.log(currentElement);
        }
        i++;
    }
}

Program().then(() => {
    process.exit(0);
});
