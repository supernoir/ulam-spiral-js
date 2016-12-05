'use strict';

// Prime Array
let p = [];

// Canvas
let c = document.getElementById("canvas-scope");
let ctx = c.getContext("2d");

let isPrime = (number) => {

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }

  for (let i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}

let primePrinter = (max) => {
    for(let i = 0; i < max; i ++){
      if(isPrime(i) == false){
        ctx.fillStyle="#FF0000";
        ctx.fillRect(10,10,5,5);
        ctx.translate(10,0);
        console.log('○ ');
      } else {
        ctx.fillStyle="#336699";
        ctx.fillRect(10,10,5,5);
        ctx.translate(10,0);
      console.log('● ');
      p.push(i);
      }
    }
}

let pushPrime = (a) => {
  p.push(a);
}


primePrinter(100);


