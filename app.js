'use strict'

var drawCanvas = function draw(){
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }
      }

var getCanvas = function(){
    return drawCanvas
}

module.exports = { getCanvas: getCanvas };