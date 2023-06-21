console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i < 100; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
    else {
        continue;
    }
    }

console.log("Exercise 1 While Loop\n=====================\n");

let x = 1;
while(x < 100){
    if(x % 2 != 0){
        console.log(x);
    }
    x++;
}

console.log("Exercise 1 Do/While loop\n========================");

x = 1;
do{
    if(x % 2 != 0){
        console.log(x);
    }
    x++;
}while(x < 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log( `${i} FIZZBUZZ`);
    }
    else if(i % 3 == 0) {
        console.log(`${i} FIZZ`);
    } 
    else if(i % 5 == 0) {
        console.log(`${i} BUZZ`);
    }
    else{
        continue;
    }
}

console.log("Exercise 2 While loop\n=====================");
let y = 1;

while(y <= 100){
    if(y % 3 == 0 && y % 5 == 0){
        console.log( `${y} FIZZBUZZ`);
    }
    else if(y % 3 == 0) {
        console.log(`${y} FIZZ`);
    } 
    else if(y % 5 == 0) {
        console.log(`${y} BUZZ`);
    }    
    y++;
}

console.log("Exercise 2 Do/While loop\n========================\n");
y = 1;
do{
    if(y % 3 == 0 && y % 5 == 0){
        console.log(`${y} FIZZBUZZ`);
    }
    else if(y % 3 == 0) {
        console.log(`${y} FIZZ`);
    } 
    else if(y % 5 == 0) {
        console.log(`${y} BUZZ`);
    }    
    y++;
}while(y <= 100);

console.log("Exercise 4\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;
for(let i = 0; i <= n; i++){
    if(i == value){
        console.log(`Found value! ${i}`);
        found = true;
        break;
    }    
}
if(!found){
   console.log("Did not find value :(");
}

console.log("Exercise 5\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= end; i++){
  let output = "";

  if(i % fizzDivisor == 0){
    output += "FIZZ";
  }

  if(i % buzzDivisor == 0){
    output += "BUZZ";
  }

  console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);