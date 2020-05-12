// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// more code

// let students = ["Dave", "Christine", "Haley"];
// // students.length = 3
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// for (let i = students.length - 1; i >= 0; i--) {
//     console.log(students[i]);
// }

// Post Increment i++
// Accesses the variable and after using it sets the value to be 1 higher
// Pre Increment ++i
// Sets the value of the variable to be 1 higher, then accesses the variable 
// let myNumber = 10;
// console.log(++myNumber);

// console.log(myNumber);

// Post Decrement i--
// Accesses the variable and after using it sets the value to be 1 less
// Pre Increment --i
// Sets the value of the variable to be 1 less, then accesses the variable 
// let myNumber = 10;
// console.log(--myNumber);
// console.log(myNumber);

// let students = ["Dave", "Christine", "Haley"];
// // students.length = 3
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// While loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// let students = ["Dave", "Christine", "Haley"];
// let i = 0;
// console.log(students[3])
// while (students[i]) {
//     console.log(students[i]);
//     i++;
// }

for (let i = 0; i < 5; i += 1) {
    if (i == 2) {
        continue;
    }
    console.log(i);
}

// let i = 0;
// while (i < 5) {
//     if (i == 2) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let i = 3;
// while (true) {
//     if (i == 7) {
//         i++;
//         continue;
//     } else if (i == 9) {
//         break;
//     } console.log(i);
//     i++;
// }