

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circleParticleArray = [];

class Circle{
    constructor(){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.size = size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size,0,Math.PI * 2);
        ctx.fill();
    }
    update(){
        if(this.x +this.size > canvas.width || this.x - this.size < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.size >canvas.height || this.y - this.size< 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

    let x;
    let y;
    let dx;
    let dy;
    let size;
    let color;

for(let i=0;i<250;i++){
    x = Math.random() * window.innerWidth ;
    y = Math.random() * window.innerHeight ;
    dx = (Math.random() * 2) - 1;
    dy = (Math.random() * 2) - 1;
    size = Math.random() * 20;
    color = "black";
    let particleC = new Circle(x,y,dx,dy,color,size);
    circleParticleArray.push(particleC);
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<circleParticleArray.length;i++){
        circleParticleArray[i].update();
    }
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',function(e){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})