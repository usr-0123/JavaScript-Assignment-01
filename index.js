//Assignments on JavaScript loops

//example 4
// ******
// *****
// ****
// ***
// **
// *

console.log("example 4")
for (let z = 6; z >= 1; z--) {
    console.log(("*").repeat(z));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
console.log("example 5")
for(let i=1; i<=5; i++){
    let gap = " ".repeat(5-i);
    let star = "*".repeat((1+i)-1);
    console.log(gap + star);
}
for(let i=5; i>=1; i--){
    let gap = " ".repeat(5-i);
    let star = "*".repeat((1+i)-1);
    console.log(gap + star);
}

// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
console.log("example 6")
for(let i=1; i<=5; i++){
    let gap = " ".repeat(5-i);
    let star = "*".repeat((2*i)-1);
    console.log(gap + star);
}
for(let i=5; i>=1; i--){
    let gap = " ".repeat(5-i);
    let star = "*".repeat((2*i)-1);
    console.log(gap + star);
}

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
console.log("example 7")
console.log(("*").repeat(7));
for (let z = 1; z <= 6; z++) {
    let gap = " ".repeat(6)
    console.log(gap + ("*").repeat(1));
}
// example 8
//*******
//*
//*
//*
//*
//*
//*
console.log("example 8")
console.log(("*").repeat(7));
for (let z = 1; z <= 6; z++) {
    let gap = " ".repeat(6)
    console.log(("*")+gap.repeat(1));
}