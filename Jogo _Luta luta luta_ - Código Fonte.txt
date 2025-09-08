var clicked = false;
var barra = 140;
var barra2 = 140;
var vida1 = 0;
var y = 0.5;
var preço1 = 5;
var preço1a = 20;
var preço2 = 5;
var preço2a = 20;
var preço3 = 1;
var money = 0;
var ganho = 5;
var arma = 0;
var roupa = 0;
var mostro = 0;
var dança = 0;
mouseClicked = function(){
    clicked = true;
}; 
draw = function() {
    // CENARIO
        {
            background(41, 118, 227);
            noStroke ();
            fill(92, 40, 40);
            rect(-3, 351, 418, 50);
            fill(60, 255, 0);
            rect(-3, 332, 418, 50);
            fill(82, 179, 50);
            ellipse(24, 338, 50, 50);
            ellipse(53, 352, 50, 50);
            ellipse(57, 328, 50, 50);
            fill(16, 42, 102);
            ellipse(24, 328, 10, 10);
            ellipse(15, 349, 10, 10);
            ellipse(62, 362, 10, 10);
            ellipse(46, 349, 10, 10);
            ellipse(60, 328, 10, 10);
            fill(161, 77, 77);
            rect(347, 205, 29, 143);
            fill(82, 179, 50);
            ellipse(359, 190, 100, 90);
            ellipse(327, 172, 50, 50);
            ellipse(359, 155, 50, 50);
            ellipse(328, 209, 50, 50);
            ellipse(400, 204, 50, 50);
            ellipse(381, 174, 50, 50);
            fill(255, 170, 0);
            ellipse(200, 66, 100, 100);
            fill(255, 255, 255);
            ellipse( 161 - 60, 150 - 60, 126, 97);
            ellipse( 161+2, 150 - 60, 70, 60);
            ellipse( 161+-118, 150 - 60, 70, 60);
            ellipse(222 + 50, 100 - 60, 126, 97);
            ellipse(222+62 + 50, 100 - 60, 70, 60);
            ellipse(222-62 + 50, 100 - 60, 70, 60);
    }
    // Personagem
        {
        // cabelo
        {
            fill(250, 128, 114);
            ellipse(50+ 50, 212, 50, 50);
            fill(57, 59, 39);
            ellipse(61 + 50, 195, 35, 18);
            ellipse(36+ 50, 195, 26, 20);
            ellipse(47+ 50, 195, 26, 20);
            ellipse(35+ 50, 207, 26, 20);
        }
        // Olho
        {
        fill(0, 0, 0);
        ellipse(35+ 50, 213, 5, 5);
        ellipse(35 + 30+ 50, 213, 5, 5);
        }
        // Corpo
        {
        fill(250, 128, 114);
        ellipse(51+ 50, 268, 47, 62);
        ellipse(75+ 50, 260, 70, 10);
        ellipse(32+ 50, 260, 70, 10);
        ellipse(63+ 50, 305, 9, 70);
        ellipse(40+ 50, 305, 9, 67);
        fill(51, 46, 46);
        ellipse(51+ 50, 291, 38, 17);
        }
        // Boca
        {
        fill(227, 75, 75);
        ellipse(50+ 50, 226, 12, 6);
        ellipse(61+ 51, 254, 4, 4);
        ellipse(61+ 51 - 20, 254, 4, 4);
        fill(250, 128, 114);
        ellipse(24+ 50, 215, 10, 10);
        }
        // pés
        {
        fill(250, 128, 114);
        ellipse(41+ 50, 334, 20, 12);
        ellipse(67+ 50, 334, 21, 12);
        }
        // Roupão mágico
        if( roupa >= 6){
            fill(92, 5, 79);
            rect(49+ 28, 266, 46, 50);
            fill(112, 20, 97);
            ellipse(51+ 50, 268, 47, 63);
            ellipse(75+ 50, 260, 45, 10);
            ellipse(32+ 50, 260, 45, 10);
            ellipse(63+ 50, 305, 9, 48);
            ellipse(40+ 50, 305, 9, 48);
            fill(0, 0, 0);
            ellipse(40+ 61, 269, 2, 63);
            ellipse(40+ 52, 253 - 4, 5, 5);
            ellipse(40+ 52, 253 + 20 - 4, 5, 5);
        }
        // Cinto
        if( roupa >= 2){
        fill(128, 56, 56);
        rect(81, 284, 41, 7);
        fill(212, 242, 80);
        ellipse(101, 287, 10, 10); 
        }
        // Sapado
        if( roupa >= 4){
        fill(0, 0, 0);
        ellipse(41+ 50, 334, 20, 12);
        ellipse(67+ 50, 334, 20, 12);
        rect(86, 318, 8, 15);
        rect(109, 318, 8, 15);
        }
        // Chapéu
        if( roupa >= 8){
        fill(97, 16, 86);
        rect(66, 185, 70, 25);
        ellipse(101, 175, 48, 69);
        ellipse(83, 148, 25, 36);
        ellipse(83, 188, 25, 36);
        ellipse(119, 188, 25, 36);
        fill(48, 25, 25);
        rect(66, 187, 69, 9);
        fill(77, 45, 45);
        rect(66, 187, 19, 9);
        fill(186, 177, 15);
        ellipse(89, 164, 5, 5);
        ellipse(106, 177, 5, 5);
        ellipse(113, 154, 5, 5);
        ellipse(105, 164, 5, 5);
        ellipse(85, 146, 5, 5);
        }
        // livro magico
        if( roupa >= 10){
        fill(43, 13, 13);
        rect(9, 151, 50, 37);
        fill(255, 255, 255);
        rect(9 + 4, 151 + 4, 50 - 8, 37 - 8);
        fill(8, 8, 8);
        rect(32, 151, 3, 37);
        rect(38, 159, 12, 3);
        rect(37, 159 + 6, 17, 3);
        rect(37, 166 + 6, 17, 3);
        rect(38 - 24, 159, 17, 3);
        rect(37 - 21, 159 + 6, 12, 3);
        rect(37 - 22, 171 + 7, 14, 3);
        }
        // Cachachados 1
        if( arma >= 0){
        fill(77, 43, 43);
        rect(150, 226, 6 ,50);
        }
        // Cachachados 2
        if( arma >= 2){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        }
        // Cachachados 3
        if( arma >= 4){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        fill(0, 0, 0);
        rect(149, 220, 8 ,15);
        }
        // Cachachados 4
        if( arma >= 6){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        ellipse(155, 246, 10, 20);
        ellipse(152, 285, 10, 20);
        ellipse(155, 321, 10, 20);
        fill(0, 0, 0);
        rect(149, 220, 8 ,15);
        }
        // Cachachados 5
        if( arma >= 8){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        ellipse(155, 246, 10, 20);
        ellipse(152, 285, 10, 20);
        ellipse(155, 321, 10, 20);
        fill(0, 0, 0);
        rect(149, 220, 8 ,15);
        fill(250, 55, 55);
        ellipse( 153, 207, 20, 20);
        }
        // Cachachados 6
        if( arma >= 10){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        ellipse(155, 246, 10, 20);
        ellipse(152, 285, 10, 20);
        ellipse(155, 321, 10, 20);
        fill(0, 0, 0);
        rect(149, 220, 8 ,15);
        fill(250, 55, 55);
        ellipse( 153, 207, 20, 20);
        ellipse( 153, 188, 10, 10);
        ellipse( 171, 207, 10, 10);
        ellipse( 133, 207, 10, 10);
        }
        // Cachachados 7
        if( arma >= 12){
        fill(77, 43, 43);
        rect(150, 220, 6 ,118);
        ellipse(155, 246, 10, 20);
        ellipse(152, 285, 10, 20);
        ellipse(155, 321, 10, 20);
        fill(0, 0, 0);
        rect(149, 220, 8 ,15);
        fill(250, 55, 55);
        ellipse( 153, 207, 20, 20);
        ellipse( 153, 188, 10, 10);
        ellipse( 171, 207, 10, 10);
        ellipse( 133, 207, 10, 10);
        fill(191, 48, 48);
        ellipse( 153, 207, 20 - 6, 20 - 6);
        ellipse( 153, 188, 10 - 5, 10 - 5);
        ellipse( 171, 207, 10 - 5, 10 - 5);
        ellipse( 133, 207, 10 - 5, 10 - 5);
        }
        // Cachachados 8
        if( arma >= 14){
        fill(77, 43, 43);
        rect(47, 226 - 10, 6 ,50);
        }
        // Cachachados 9
        if( arma >= 16){
        fill(77, 43, 43);
        rect(47, 226 - 10, 6 ,50);
        fill(43, 43, 43);
        rect(47, 258 - 10, 6 ,18);
        rect(40, 256 - 10, 20 ,5);
        }
        // Cachachados 10
        if( arma >= 18){
        fill(148, 120, 120);
        rect(47, 226 - 10, 6 ,50);
        rect(47, 230 + 15, 6 ,50);
        rect(13, 239 + 15, 40 ,5);
        fill(43, 43, 43);
        rect(47, 258 - 10, 6 ,18);
        rect(40, 256 - 10, 20 ,5);
        rect(40, 272 - 10, 20 ,5);
        }
        // Cachachados 11
        if( arma >= 20){
        fill(148, 120, 120);
        rect(47, 226 - 10, 6 ,50);
        rect(47, 230 + 15, 6 ,50);
        rect(13, 239 + 15, 40 ,5);
        fill(43, 43, 43);
        rect(47, 258 - 10, 6 ,18);
        rect(40, 256 - 10, 20 ,5);
        rect(40, 272 - 10, 20 ,5);
        fill(250, 55, 55);
        ellipse( 50, 204, 10, 10);
        ellipse( 5, 256, 10, 10);
        ellipse( 50, 305, 10, 10);
        fill(191, 48, 48);
        ellipse( 50, 204, 10 - 5, 10 - 5);
        ellipse( 5, 256, 10 - 5, 10 - 5);
        ellipse( 50, 305, 10 - 5, 10 - 5);
        }
}
    // Inimigos
        {
        if(dança >= 0 && dança <= 7){
            dança += 0.04;
        } else {
            dança = 0;
        }
    // Inimigo de grama
        {
    if( mostro >= 0){
        image(getImage("avatars/leafers-seed"), 214 - dança, 223);
        if( dança >= 7) {
            barra2 -= 1;
        }
    }
    if( mostro >= 2){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/leafers-seedling"), 214 - dança, 206);
        if( dança >= 7) {
            barra2 -= 2;
        }
    }
    if( mostro >= 4){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/leafers-sapling"), 214 - dança, 209);
        if( dança >= 7) {
            barra2 -= 3;
        }
    }
    if( mostro >= 6){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/leafers-tree"), 214 - dança, 212);
        if( dança >= 7) {
            barra2 -= 4;
        }
        
    }
    if( mostro >= 8){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/leafers-ultimate"), 214 - dança, 209);
        if( dança >= 7) {
            barra2 -= 5;
        }
        }}
    // Inimigo de agua
        {
    if( mostro >= 10){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/aqualine-seed"), 214 - dança, 220);
        if( dança >= 7) {
            barra2 -= 6;
        }
    }
    if( mostro >= 12){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/aqualine-seedling"), 214 - dança, 200);
        if( dança >= 7) {
            barra2 -= 7;
        }
    }
    if( mostro >= 14){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/aqualine-sapling"), 214 - dança, 206);
        if( dança >= 7) {
            barra2 -= 8;
        }
    }
    if( mostro >= 16){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/aqualine-tree"), 214 - dança, 202);
        if( dança >= 7) {
            barra2 -= 9;
        }
    }
    if( mostro >= 18){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/aqualine-ultimate"), 214 - dança, 204);
        if( dança >= 7) {
            barra2 -= 10;
        }
    }
        }
    // Inimigo de fogo
        {
    if( mostro >= 20){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/piceratops-seed"), 214 - dança, 221);
        if( dança >= 7) {
            barra2 -= 10;
        }
    }
    if( mostro >= 22){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/piceratops-seedling"), 207 - dança, 201);
        if( dança >= 7) {
            barra2 -= 12;
        }
    }
    if( mostro >= 24){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/piceratops-sapling"), 187 - dança, 210);
        if( dança >= 7) {
            barra2 -= 13;
    }}
    if( mostro >= 26){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/piceratops-tree"), 214 - dança, 202);
        if( dança >= 7) {
            barra2 -= 14;
        }
    }
    if( mostro >= 28){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/piceratops-ultimate"), 214 - dança, 203);
        if( dança >= 7) {
            barra2 -= 15;
        }
    }
        } 
    // Inimigo de veneno
        {
    if( mostro >= 30){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/duskpin-seed"), 214 - dança, 219);
        if( dança >= 7) {
            barra2 -= 16;
        }
    }
    if( mostro >= 32){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/duskpin-seedling"), 210 - dança, 200);
        if( dança >= 7) {
            barra2 -= 17;
        }
    }
    if( mostro >= 34){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/duskpin-sapling"), 214 - dança, 206);
        if( dança >= 7) {
            barra2 -= 18;
        }
    }
    if( mostro >= 36){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/duskpin-tree"), 214 - dança, 208);
        if( dança >= 7) {
            barra2 -= 19;
        }
    }
    if( mostro >= 38){
        fill(41, 118, 227);
        rect(196, 194, 111, 135);
        rect(293, 233, 50, 92);
        image(getImage("avatars/duskpin-ultimate"), 214 - dança, 203);
        if( dança >= 7) {
            barra2 -= 20;
        }
    }
    }
    // Inimigo de eletrico
        {
    if( mostro >= 40){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/primosaur-seed"), 214 - dança, 222);
        if( dança >= 7) {
            barra2 -= 21;
        }
    }
    if( mostro >= 42){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/primosaur-seedling"), 210 - dança, 202);
        if( dança >= 7) {
            barra2 -= 22;
        }
    }
    if( mostro >= 44){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/primosaur-sapling"), 215 - dança, 210);
        if( dança >= 7) {
            barra2 -= 23;
        }
    }
    if( mostro >= 46){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/primosaur-tree"), 214 - dança, 206);
        if( dança >= 7) {
            barra2 -= 24;
        }
    }
    if( mostro >= 48){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/primosaur-ultimate"), 214 - dança, 207);
        if( dança >= 7) {
            barra2 -= 25;
        }
    }
    } 
    // Inimigo de escuridão
         {
    if( mostro >= 50){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/starky-seed"), 214 - dança, 220);
        if( dança >= 7) {
            barra2 -= 26;
        }
    }
    if( mostro >= 52){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/starky-seedling"), 209 - dança, 201);
        if( dança >= 7) {
            barra2 -= 27;
        }
    }
    if( mostro >= 54){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/starky-sapling"), 214 - dança, 204);
        if( dança >= 7) {
            barra2 -= 28;
        }
    }
    if( mostro >= 56){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/starky-tree"), 214 - dança, 200);if( dança >= 7) {
            barra2 -= 29;
        }
    }
    if( mostro >= 58){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("avatars/starky-ultimate"), 214 - dança, 200);
        if( dança >= 7) {
            barra2 -= 31;
        }
    }
    if( mostro >= 60){
        fill(41, 118, 227);
        rect(206, 194, 97, 135);
        rect(293, 238, 50, 92);
        image(getImage("creatures/Hopper-Cool"), 207 - dança, 227);
        if( dança >= 7) {
            barra2 -= 50;
        }
        fill(0, 0, 0);
        text("Fim De Jogo!", 159, 173);
    }
    } 
    }
    // Barra de Vida do inimigo
        {
    fill(0, 0, 0);
    rect(203, 352, 140 + 4, 10 + 4);
    fill(255, 0, 0);
    rect(205, 354, barra, 10);
    if(clicked === true){
        if(mouseX >= 0 && mouseX <= 400 && mouseY >= 0 && mouseY <= 400){
            barra -= y;
    }   } 
    if(barra < 10) {
        money += ganho;
        barra = 140;
        mostro += 1;
    }}
    // Barra de Vida do Personagem
        {
        fill(0, 0, 0);
        rect(203 - 173, 352 - 240, barra2 + 4 + vida1, 10 + 4);
        fill(255, 0, 128);
        rect(205 - 173, 354 - 240, barra2 + vida1, 10);
        barra2 += vida1;
        if ( barra2 <= 0){
            barra2 = 140;
            money -= 100;
        }
    }
    // Loja
        {
        fill(0, 0, 0);
        textSize(25);
        text("XP: " + money, 8 , 28);
        text("(Ganho atual " + ganho + " xp)", 8 , 28 + 25);
        rect(330, 10, 60, 60);
        rect(330 - 70, 10, 60, 60);
        rect(330, 10 + 70, 60, 60);
        fill(106, 255, 0);
        rect(333, 13, 54, 54);
        fill(181, 0, 0);
        rect(333 - 70, 13, 54, 54);
        fill(255, 251, 0);
        rect(333, 13 + 70, 54, 54);
        fill(0, 0, 0);
        ellipse(350, 102, 20, 20);
        ellipse(370, 102, 20, 20);
        triangle(361, 135, 339, 102, 380, 106);
        rect(275, 55, 30, 8);
        rect(275, 55 - 13, 30, 8);
        triangle(291, 17, 269, 37, 312, 37);
        ellipse(360, 40, 42, 42);
        if(mouseX >= 330 && mouseX <= 400 && mouseY >= 10 && mouseY <= 60){
            fill(0, 0, 0);
            rect(150, 75, 245, 80);
            fill(217, 76, 217);
            rect(153, 78, 245 - 6, 80 - 6);
            textSize(24);
            fill(0, 0, 0);
            text("Preço: "+ preço1 + " XP.", 160, 100);
            text("Melhore sua roupa.", 160, 124);
            text("Ganho de xp + " + preço1a + "%", 159, 147);
        }
        if(mouseX >= 330 - 70 && mouseX <= 400 - 80 && mouseY >= 10 && mouseY <= 60){
            fill(0, 0, 0);
            rect(150, 75, 245, 80);
            fill(217, 76, 217);
            rect(153, 78, 245 - 6, 80 - 6);
            textSize(24);
            fill(0, 0, 0);
            text("Preço: "+ preço2 + " XP.", 160, 100);
            text("Melhore sua arma.", 160, 124);
            text("Força + " + preço2a + "%", 159, 147);
        }
        if(mouseX >= 330 && mouseX <= 400 && mouseY >= 80 && mouseY <= 130){
            fill(0, 0, 0);
            rect(150, 75, 245, 80);
            fill(217, 76, 217);
            rect(153, 78, 245 - 6, 80 - 6);
            textSize(24);
            fill(0, 0, 0);
            text("Preço: "+ preço3 + " XP.", 160, 100);
            text("Cura 30 de vida.", 160, 124);
            text("vida por segundo " + 30 + "%", 159, 147);
        }
        if(clicked === true){
            if(mouseX >= 330 && mouseX <= 400 && mouseY >= 80 && mouseY <= 130 && money >= preço3){
                money -= preço3;
                y += 2; 
                preço3 += 2;
                vida1 += 0.005;
                barra2 += 40;
        }
            if(mouseX >= 330 - 70 && mouseX <= 400 - 80 && mouseY >= 10 && mouseY <= 60 && money >= preço2){
                money -= preço2;
                y += 0.5; 
                preço2 += 2;
                arma += 1;
        }
            if(mouseX >= 330 && mouseX <= 400 && mouseY >= 10 && mouseY <= 60 && money >= preço1){
                money -= preço1;
                ganho += 1; 
                preço1 += 2;
                roupa += 1;
        }}}
    
clicked = false;
};