var pac_man, pacmanimg;
var monsters, monstersimg;

function preload(){
pacmanimg = loadAnimation("C:/Users/DELL/Downloads/PACMAN/pacman1.png")
}

function setup() {
 createCanvas(1000,600);
 pac_man = createSprite(500,300,50,70);
 pac_man.addAnimation("pacman", pacmanimg);
}

function draw() {
    background("blue");
    drawSprites();
}
