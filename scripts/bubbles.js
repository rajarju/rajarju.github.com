
window.requestAnimationFrame = (function(){
  //Check for each browser
  //@paul_irish function
  //Globalises this function to work on any browser as each browser has a different namespace for this
  return  window.requestAnimationFrame       ||  //Chromium
  window.webkitRequestAnimationFrame ||  //Webkit
  window.mozRequestAnimationFrame    || //Mozilla Geko
  window.oRequestAnimationFrame      || //Opera Presto
  window.msRequestAnimationFrame     || //IE Trident?
  function(callback, element){ //Fallback function
    window.setTimeout(callback, 1000/60);
  }

})();
var initBlobs = 30;
var minBlobs = 5;
var minBlobs = 20;
var width;
var height;
var curcolor = '#467491';
var blobs = new Array();
var ltime = 0;
var ctx;
function Blob(x,y,r,vx,vy,w,p,c){
  this.x = x;
  this.y = y;
  this.r = r;
  this.vx = vx;
  this.vy = vy;
  this.wobble = w;
  this.wperiod = p;
  this.color = c;
}
function init() {
  ltime = new Date().getTime();
  height = window.innerHeight;
  width = window.innerWidth;
  var elt = document.getElementById('canv');
  elt.height = height;
  elt.width = width;
  ctx = elt.getContext('2d');
  draw();
}
function draw() {
  var g = ctx.createLinearGradient(0, 0, 0, height);
  g.addColorStop(0, '#467491');
  g.addColorStop(1, '#467491');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);
  var time = new Date().getTime();
  var dt = time-ltime;
  // render blobs
  for (i=0; i<blobs.length; i++) {
    var blob = blobs[i];
    var tf = time/1000/blob.wperiod;
    var wf = (tf-Math.floor(tf))*2*Math.PI;
    var xw = blob.wobble*(Math.sin(wf)-0.5);

    var rg = ctx.createRadialGradient(blob.x+xw+blob.r/4,blob.y-blob.r/4,blob.r/5,blob.x+xw,blob.y,blob.r);
    rg.addColorStop(0, 'rgba(2,96,236,0)');
    rg.addColorStop(0.85, '#eee');
    rg.addColorStop(1, 'rgba(2,96,236,0)');
    ctx.fillStyle = rg;
    ctx.fillRect(blob.x+xw-blob.r,blob.y-blob.r,blob.r*2,blob.r*2);

    // update blob pos
    blob.x += blob.vx;
    blob.y += blob.vy;
    if (blob.x > width+blob.r || blob.x < -blob.r  || blob.y > height+blob.r || blob.y < -blob.r) {
      delete blob;
      if (blobs.length <= minBlobs) {
        blobs.splice(i, 1, createBlob(null));
      } else {
        blobs.splice(i, 1);
        if (i>0) i--;
      }
    }
  }
  ltime = time;

  requestAnimationFrame(draw);
}
function createBlob(event) {
  var r = (Math.random()*31)+1; // 10-40
  var x;
  var y;
  if (event == null) {
    x = Math.random()*width; // 0-width;
    y = height+r;
  } else {
    x = event.clientX;
    y = event.clientY;
  }
  var vx = (((Math.random()*21))-10)/10; // -1 to 1
  var vy = -((Math.random()*15)+1)/3.0; // -.3 to -5

  clr = curcolor;

  var wob = Math.random()*3+0.1; // wobble amount 0.1-3.1
  var wp = Math.random()*wob+0.1; // wobble period 0.1-3.1 sec
  return new Blob(x, y, r, vx, vy, wob, wp, clr);
  //  blobs.push(new Blob(x, y, r, vx, vy, wob, wp, clr));
}
window.onload = function(){
  document.body.onclick = function(event){
    blobs.push(createBlob(event));
  };
  init();
}
