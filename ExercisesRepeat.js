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
    // 1 Write a console app that takes 2 numbers entered by the user and prints the larger number to the console

    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number number: ");
    // let number2 = parseInt(userInput2);

    // if(number1 > number2){
    //     console.log(number1);
    // } else {
    //     console.log(number2);
    // }

    // 2 Write a console app that takes 2 numbers entered by the user and prints them to the console in order from largest to smallest

    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number number: ");
    // let number2 = parseInt(userInput2);

    // if(number1 > number2){
    //     console.log(number1);
    //     console.log(number2);
    // } else {
    //     console.log(number2);
    //     console.log(number1);
    // }

    // 3 Write a console app that takes 2 numbers entered by the user and prints them to the console in order from smallest to largest
    // let userInput1 = await askQuestion("Enter the first number: ");
    // let number1 = parseInt(userInput1);
    // let userInput2 = await askQuestion("Enter the second number number: ");
    // let number2 = parseInt(userInput2);

    // if(number1 < number2){
    //     console.log(number1);
    //     console.log(number2);
    // } else {
    //     console.log(number2);
    //     console.log(number1);
    // }

    // 1 Write a console app that takes strings from the user and adds them to an array
    // let myItems = [];
    // while(true) {
    //     let userInput = await askQuestion("Enter an Item: ");
    //     if(userInput == "") {
    //         break;
    //     }
    //     myItems.push(userInput);
    // }
    // console.log(myItems);

    // let myNumber;
    // while (true) {
    //     let userInput1 = await askQuestion("Enter a number: ");
    //     if (isNaN(userInput1)) {
    //         console.log("ERROR: Please Enter A Number");
    //     } else {
    //         myNumber = parseInt(userInput1);
    //         break;
    //     }
    // }
    // console.log(myNumber);

    // 1 Loops Write a console app that writes the numbers from 1 to 7 to the console
    // for(let i = 1; i <= 7; i++) {
    //     console.log(i);
    // }

    // let i = 1;
    // while (i <= 7){
    //     console.log(i);
    //     i++;
    // }

    // 2 Write a console app that writes even numbers from 2 to 8 (inclusive) to the console (hint, you will need to not use the increment operator)
    // for (let i = 2; i <= 8; i += 2) {
    //     console.log(i);
    // }

    // let i = 2;
    // while(i <= 8) {
    //     console.log(i);
    //     i += 2;
    // }

    // 3 Write a console app that prints the elements of an array in reverse.
    // let myArray = ["Luke", "Dave", "Pauline", "Steve"];

    // for (let i = myArray.length - 1; i >= 0; i--) {
    //     console.log(myArray[i]);
    // }

    // let i = myArray.length - 1;
    // while (i >= 0) {
    //     console.log(myArray[i]);
    //     i--;
    // }

    // 4 Write a console app that prints the elements of an array that begin with the letter a (hint, a string is an array of characters so you can access the first character the same way you would access the first element in an array)
    // let myArray = ["Luke", "Dan", "Alexandria", "Paul", "Steve", "Andrew"];
    // for (let i = 0; i < myArray.length; i++) {
    //     let name = myArray[i];

    //     let hasE = false;
    //     for (let j = 0; j < name.length; j++) {
    //         let letter = name[j];
    //         if (letter == "e") {
    //             hasE = true;
    //             break;
    //         }
    //     }
    //     if (hasE) {
    //         console.log(name);
    //     }
    // }

    // Extension Write a console app that counts the number of times an element appears in an array.
    let myArray = ["Luke", "Dan", "Alexandria", "Luke", "Steve", "Luke", "Steve"];

    let myCountedArray = [];

    for (let i = 0; i < myArray.length; i++) {
        let name = myArray[i];

        let found = false;
        for (let j = 0; j < myCountedArray.length; j++) {
            let element = myCountedArray[j];
            if (element.name == name){
                found = true;
                element.count++;
                break;
            }
        }
        if (found == false) {
            myCountedArray.push({
                name: name,
                count: 1
            });
        }
    }
    for (let i = 0; i < myCountedArray.length; i++) {
        let element = myCountedArray[i];
        console.log(`${element.name} appears ${element.count} times`)
    }

    // let myCountedArray = [
    //     {
    //         name: "Luke",
    //         count: 3
    //     },{
    //         name: "Dan",
    //         count: 1
    //     },{
    //         name: "Alexandria",
    //         count: 1
    //     },{
    //         name: "Steve",
    //         count: 2
    //     },
    // ];

    // let numberOfLukes = 0;
    // for(let i = 0; i < myArray.length; i++) {
    //     let name = myArray[i];
    //     if(name == "Luke"){
    //         numberOfLukes++;
    //     }
    // }
    // console.log(numberOfLukes);


}

Program().then(() => {
    process.exit(0);
});
