var canvas = document.querySelector('canvas');

const w = canvas.width = 1200;
const h = canvas.height = 550;

var c = canvas.getContext('2d'); //Super Objects


/*Animate*/
var x = Math.random()* w;
var y = Math.random()* h;
var dx = (Math.random() - 0.5)*14;
var dy = (Math.random() - 0.5)*14;
var radius = 30;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, w, h);

    c.fillRect(0, 0, 100, 50);
    c.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    c.fillStyle = 'rgba(255, 0, 0, 0.5)';

    c.beginPath()
    c.arc(x, y, radius, 0, Math.PI*2, false); //outline
    c.strokeStyle = 'blue';
    c.fillStyle = 'blue';
    c.stroke();
    c.fill();

    if(x + radius > w || x - radius < 0){
          dx = -dx;
    }
    if(y + radius > h || y - radius < 0){
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animate()
// function start(){
//     animate()
// }

















