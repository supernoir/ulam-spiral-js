'use strict'

var app = {}

var drawCanvas = function() {
        var canvas = document.getElementById('canvas-scope');
        var width = $('#canvas-scope').width();
        var height = $('#canvas-scope').height();
        
                
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        
          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect (10, 10, 55, 50);
        
        var value = 0;
        for(var i = 0; i < 100; i++) {
          if(value%i === 0) {
            ctx.fillStyle = "rgb(255,255,255)";
            ctx.fillRect(i*10,10,5,5);
            console.log(i);
          } else {
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fillRect(i*10,10,5,5);
          }
        }
        
      
      
        }
        
        
        return canvas
      }
     


module.exports = { drawCanvas: drawCanvas };