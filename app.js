'use strict'

var app = {}

var getCanvas = function(){
        var canvas = $('#canvas-scope');
        var width = $('#canvas-scope').width();
        var height = $('#canvas-scope').height();
        
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
          
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
        }
        
        app.canvasloaded = canvas.selector;
        console.log(app.canvasloaded);
        
        return app.canvasloaded
      }
     