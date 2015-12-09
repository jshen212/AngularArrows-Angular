angular
  .module('app')
  .controller('d3Lines',lineFunction);

function lineFunction(query){
  var temp = $(query);
  if(temp.length > 1) {
    var x1 = $(temp[0]).offset().left+5;
    var y1 = $(temp[0]).offset().top +10;
    var x2 = $(temp[1]).offset().left+5;
    var y2 = $(temp[1]).offset().top +10;


    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.lineWidth = 0.2;
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(400,400,x2,y2);
    ctx.stroke();
  }



}
