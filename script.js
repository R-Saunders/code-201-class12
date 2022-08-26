'use strict'

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

// // Rectangle
// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 150, 75)

// // Line
// ctx.moveTo(0,0);
// ctx.lineTo(200,200);
// ctx.stroke();

// // Circle
// ctx.beginPath();
// ctx.arc(100, 100, 100, 0, 2 * Math.PI);
// ctx.stroke();

var grd = ctx.createLinearGradient(0, 0, 250, 0);
grd.addColorStop(0, "red");
grd.addColorStop(0.2, "orange");
grd.addColorStop(0.35, "yellow");
grd.addColorStop(0.5, "green");
grd.addColorStop(0.65, "blue");
grd.addColorStop(0.8, "indigo");
grd.addColorStop(1, "violet")
ctx.fillStyle = grd;
// ctx.fillRect(0, 0, 600, 600);

// Text
ctx.font = "50px Arial";
ctx.fillText("Hello World", 10, 50);