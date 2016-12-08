'use strict';

const c = document.getElementById("canvas-scope");
const ctx = c.getContext("2d");
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
  console.log('Inital: ',w,h);
  
  let m,n;
  for(m = 0; m <= 20; m++) {
    for(n = 0; n < 5; n++) {
      if(isPrime(m)){
      ctx.fillStyle="#00FFFF";
      console.log(`${m} is a Prime`);
    } else {
      ctx.fillStyle="#FF00FF";
      console.log(`${m} is not a Prime`);
    }
    
      console.log(`M: ${m} N: ${n}`);

      switch(n) {
        case 0:
          w = w + m * 10;
          
          console.log('Case 0: ',w,h);
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.strokeStyle="#FF0000";
          ctx.lineTo(w,h);
          break;
        case 1:
          
          h = h - m * 10;          
          console.log('Case 1: ',w,h);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.strokeStyle="#00FF00";
          ctx.lineTo(w,h);
          break;
        case 2:
          w = w - m * 10;

          
          console.log('Case 2: ',w,h);

          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.strokeStyle="#FF00FF";
          ctx.lineTo(w,h);
          break;
        case 3:
          h = h + m * 10;
          
          console.log('Case 3: ',w,h);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.strokeStyle="#FFFF00";
          ctx.lineTo(w,h);
          break;
        case 4:
          w = w + m * 10;
          
          console.log('Case 4: ',w,h);
          
          ctx.fillRect(w-2.5,h-2.5,5,5);
          ctx.strokeStyle="#0000FF";
          ctx.lineTo(w,h);
          w = w+10;
          break;
      }

      }   
    }
    ctx.stroke();  
  }


directionChanger(WIDTH/2,HEIGHT/2);


