const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Your Code Goes Here...
    let username;
    while(username != "Luke") {
        username = await askQuestion("What is your name?\n");
    }
    console.log("Hello " + username);
}

Program().then(() => {
    process.exit(0);
});
