let input = require('fs').readFileSync(0).toString().trim().split('\n');

let x = Number(input[0]);
let y = Number(input[1]);

if (x > 0 && y > 0) {
    console.log(1);
    } else if (x > 0 && y < 0) {
        console.log(4);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else {
        console.log(3);
    }
