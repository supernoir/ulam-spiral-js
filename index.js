'use strict';

let direct = {};

// Initializing the Canvas
let c = document.getElementById("canvas-scope");
let ctx = c.getContext("2d");
ctx.save();

const WIDTH = c.width;
const HEIGHT = c.height;


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



let directionChanger = (w,h) => {
  ctx.beginPath();
  ctx.moveTo(w,h);
//  ctx.fillRect(w,h,5,5);
  console.log(w,h);
  
  let m,n;
  for(m = 0; m <= 20; m++) {
    for(n = 0; n < 4; n++) {
      if(isPrime(m)){
      ctx.fillStyle="#00FFFF";
    } else {
      ctx.fillStyle="#FF00FF";
    }
    
      console.log(`M: ${m} N: ${n}`);

      switch(n) {
        case 0:
          w = w + m * 10;
          
          console.log('-0-');
          console.log(w,h);
          console.log(m,n);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.lineTo(w,h);
          break;
        case 1:
          
          h = h - m * 10;
          
          console.log('-1-');
          console.log(w,h);
          console.log(m,n);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.lineTo(w,h);
          break;
        case 2:
          w = w - m * 10;

          
          console.log('-2-');
          console.log(w,h);
          console.log(m,n);

          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.lineTo(w,h);
          break;
        case 3:
          //w = w - m * 10;
          h = h + m * 10;
          
          console.log('-3-');
          console.log(w,h);
          console.log(m,n);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.lineTo(w,h);
          break;
        case 4:
          //w = w + m * 10;
          w = w + m * 10;
          
          console.log('-3-');
          console.log(w,h);
          console.log(m,n);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.lineTo(w,h);
          break;
      }

      }   
    }
    ctx.stroke();  
  }


directionChanger(WIDTH/2,HEIGHT/2);





function iterateInject() {
  for(let itr = 0; itr <= 100; itr++){
    let inj = 4;
    ctx.fillRect(WIDTH/2,HEIGHT/2,5,5);
    if(isPrime(itr)){
      ctx.fillStyle="#006699";
    } else {
      ctx.fillStyle="#DFDFDF";
    }
    if(itr % inj == 0){
      ctx.translate(itr*2,0);
      itr++;
    } else {
      inj++;
      //console.log(`Iterating: ${itr}`);
      ctx.translate(itr,0);
    }

  }
}

