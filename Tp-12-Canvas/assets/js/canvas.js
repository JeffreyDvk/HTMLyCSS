const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw(i,j){
    ctx.fillStyle= "#BADA55"
    ctx.fillRect(50*i,0,50,50*j)
}
setInterval(()=>{
    draw(anime.random(0,20),anime.random(0,7))
},100)