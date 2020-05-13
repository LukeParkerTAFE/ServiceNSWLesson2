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
    // Write a console app that counts the number of times an element appears in an array.
    // const arr=["BMW","RANG","AUDI","BMW","Toyota","AUDI"];
    // let cont=[0,0,0,0,0,0];

    // let myArray = [12, 19, 14, 12, 24, 19, 12, 14, 2, 1];

    // let numberOf12s = 0;
    // for(let i = 0; i < myArray.length; i++) {
    //     if(myArray[i] == 12){
    //         numberOf12s++;
    //     }
    // }
    // console.log(`There are ${numberOf12s} 12s in the array`);

    // let myArray = ["Dan", "Steve", "Ellen", "Steve", "Stephanie", "Julia", "Bob", "Dan", "Steve", "Ellen"];
    // let numberOfLukes = 0;
    // for(let i = 0; i < myArray.length; i++){
    //     if(myArray[i] == "Luke"){
    //         numberOfLukes++;
    //     }
    // }
    // console.log(`There are ${numberOfLukes} people called Luke in the list`);

    let students = ["Dave","Christine","Haley","Dave","Dave", "Dave", "Haley"];

    let foundNames = [];
    let foundNameValues = [];
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let found = false;
        for(let j = 0; j < foundNames.length; j++){
            if(foundNames[j] == student){
                foundNameValues[j]++;
                found = true;
                break;
            }
        }
        if (found == false){
            foundNames.push(student);
            foundNameValues.push(1);
        }
    }

    for(let i = 0; i < foundNames.length; i++) {
        console.log(`${foundNames[i]} appears in the list ${foundNameValues[i]} times`);
    }
}

Program().then(() => {
    process.exit(0);
});
