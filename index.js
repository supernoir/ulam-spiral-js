'use strict';

// Prime Array
let p = [];

// Canvas
let c = document.getElementById("canvas-scope");
let ctx = c.getContext("2d");
ctx.save();

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
        ctx.translate(10,10);
        console.log('○ ');
        if(i > 100){
          ctx.restore();
          ctx.translate(10,10);
          console.log(i + ' is bigger than 100');
        } else if (i == 100){
          console.log(i + ' is exactly 100');
        } else if (i < 100){
          console.log(i + ' is less than 100');
        }
      } else {
        ctx.fillStyle = "#336699";
        ctx.fillRect(10,10,5,5);
        ctx.translate(10,0);
        console.log('● ');
        p.push(i);
        if(i > 100){
          ctx.restore();
          ctx.translate(10,10);
          console.log(i + ' is bigger than 100');
        } else if (i == 100){
          console.log(i + ' is exactly 100');
        } else if (i < 100){
          console.log(i + ' is less than 100');
        }
      }
    }
}

let pushPrime = (a) => {
  p.push(a);
}

let orientPointer = () => {
  for (let i = 0; i < 100; i += 10){
    ctx.fillRect(20,20,5,5);
    if(i % 2 == 0){
    ctx.translate(i*2,10); 
    } else {
      ctx.translate(i,0);
    }
  }
}


ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(110,100);
ctx.stroke();
ctx.lineTo(110,90);
ctx.stroke();
ctx.lineTo(100,90);
ctx.stroke();

ctx.fillStyle = '#ff33ff';
ctx.fillRect(60,60,5,5);
ctx.translate(10,0);
ctx.fillRect(60,60,5,5);
ctx.translate(0,-10);
ctx.fillRect(60,60,5,5);
ctx.translate(0,-10);
ctx.fillRect(60,60,5,5);



primePrinter(102);
orientPointer();

