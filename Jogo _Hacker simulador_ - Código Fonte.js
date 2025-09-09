var clicked = false;
var money = 0;
var x = 140;
var y = 1.5;
var a1 = 5;
var a2 = 5;
var a3 = 100000;
var t = 5;
mouseClicked = function(){
    clicked = true;
}; 
draw = function() {
// CENARIO
{
background(196, 111, 196);
noStroke ();


fill(38, 12, 12);
rect(0, 297, 401, 100);


fill(0, 0, 0);
rect(47, 313, 56, 57);


fill(25, 24, 59);
rect(50, 315, 50, 50);


fill(107, 49, 49);
ellipse(76, 341, 20, 30);


fill(66, 30, 30);
ellipse(76, 348, 5, 16);


fill(36, 36, 36);
rect(145, 353, 150, 30);


fill(0, 0, 0);
ellipse(219, 365, 35, 35);


fill(36, 36, 36);
ellipse(219, 365, 30, 30);
rect(206, 306, 26, 60);
rect(148, 219, 142, 100);


fill(0, 0, 0);
rect(162, 238, 109, 69);


fill(36, 36, 36);
rect(166, 243, 100, 60);


fill(0, 0, 0);
rect(141, 141, 144, 14);


rect(14, 50, 64, 64);
rect(14, 50 + 70, 64, 64);
rect(14, 50 + 70 + 70, 64, 64);


fill(255, 255, 255);
rect(143, 143, 140, 10);


fill(255, 106, 0);
rect(143, 143, x, 10);


fill(0, 0, 255);
rect(16, 52, 60, 60);


fill(255, 0, 0);
rect(16, 52 + 70, 60, 60);


fill(0, 255, 0);
rect(16, 52 + 70 + 70, 60, 60);


fill(0, 0, 0);
rect(29, 93, 35 ,10);
rect(29, 78, 35 ,10);
triangle(23, 72, 46, 55, 69, 73);


ellipse(46, 152, 40, 40);


rect(22, 241, 50, 10);
rect(41, 204, 10, 40);
ellipse(47, 212, 40, 40);


fill(0, 255, 0);
rect(19, 192, 50, 10);
}






// codiguins
if(clicked === true){
if(mouseX >= 90 && mouseX <= 400 && mouseY >= 0 && mouseY <= 400){
    
    x -= y;
}
}
if(x < 0) {
    money += t;
    x = 140;
}


if(mouseX >= 14 && mouseX <= 80 && mouseY >= 50 && mouseY <= 115){
    
    fill(97, 97, 97);
    rect(142, 7, 250, 100);
    
    fill(145, 145, 145);
    rect(144, 9, 246, 96);
    
    fill(0, 0, 0);
    text("Custa:"+ a1, 145, 28);
    text("aumenta a velocidade", 145, 48);
    text("em 0.5", 145, 68);
    
}
if(mouseX >= 14 && mouseX <= 80 && mouseY >= 50 + 70 && mouseY <= 115 + 70){
    
    fill(97, 97, 97);
    rect(142, 7, 250, 100);
    
    fill(145, 145, 145);
    rect(144, 9, 246, 96);
    
    fill(0, 0, 0);
    text("Custa:"+ a2, 145, 28);
    text("aumenta o ganho em 1", 145, 48);
    text("", 145, 68);
    
}
if(mouseX >= 14 && mouseX <= 80 && mouseY >= 50 + 70 + 70 && mouseY <= 115 + 70 + 70){
    
    fill(97, 97, 97);
    rect(142, 7, 250, 100);
    
    fill(145, 145, 145);
    rect(144, 9, 246, 96);
    
    fill(0, 0, 0);
    text("Custa:"+ a3, 145, 28);
    text("Vença o jogo :D", 145, 48);
    text("obs:terá uma supresa", 145, 74);
    
}


if(clicked === true){
if(mouseX >= 14 && mouseX <= 80 && mouseY >= 50 && mouseY <= 115 && money >= a1){
    
    money -= a1;
    y += 0.5; 
    a1 += 2;
}
if(mouseX >= 14 && mouseX <= 80 && mouseY >= 50 + 70 && mouseY <= 115 + 70 && money >= a2){
    
    money -= a2;
    t += 1; 
    a2 += 2;
}




}




fill(0, 0, 0);
textSize(20);
text("Dinheiro: " + money, 8 , 28);


clicked = false;
};