'use strict'

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75)

// Line
ctx.moveTo(0,0);
ctx.lineTo(200,200);
ctx.stroke();