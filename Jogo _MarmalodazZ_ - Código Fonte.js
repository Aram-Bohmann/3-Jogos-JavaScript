// Cenas
var scene;
var clicked = false;


// menus
mouseClicked = function(){
    clicked = true;
}; 
function menu() {
    scene = 0;
    background(241, 255, 82);
    stroke(0, 0, 0);
    textSize(50);
    text("MARMALODAZ", 15, 67);
    textSize(35);
    text("Criado por:" + " Aram",20 , 107);
    image(getImage("creatures/Hopper-Jumping"), 173, 154, 200, 200);
    
    // Butão
    fill(255, 255, 255);
    rect(15, 183, 105, 50);
    rect(15, 222 + 20, 108, 50);
    rect(15, 279 + 20, 108, 50);
    
    // Nome do Butão.
    textSize(26);
    fill(0, 0, 0);
    text("Play", 40, 198 + 20);
    text("tutorial", 24, 259 + 20);
    text("História", 22, 315 + 20);
    
    if(clicked === true){
        
        if(mouseX >= 15 && mouseX <= 120 && mouseY >= 183 && mouseY <= 231){
            scene = 1;
        }
        if(mouseX >= 15 && mouseX <= 122 && mouseY >= 279 + 20 && mouseY <= 329 + 20){
            scene = 2;
        }
        if(mouseX >= 15 && mouseX <= 122 && mouseY >= 222 + 20 && mouseY <= 269 + 20){
            scene = 3;
        }
}
}    // FINALIZADO
function niveis() {
    scene = 1;
    background(241, 255, 82);
    
    fill(0, 0, 0);
    rect(6, 179 - 60, 81, 50); 
    rect(133, 179 - 60, 100, 50); 
    rect(287, 179 - 60, 100, 50); 
    rect(6, 179 + 60, 81, 50); 
    rect(133, 179 + 60, 100, 50); 
    rect(287, 179 + 60, 100, 50); 
    
    
    
    textSize(50);
    fill(173, 52, 52);
    text("Nivel:", 20, 66);
    fill(255, 230, 0);
    textSize(32);
    text("1", 36, 214 - 60);
    text("2", 171, 214 - 60);
    text("Boss", 304, 214 - 60);
    text("4", 36, 214 + 60);
    text("5", 171, 214 + 60);
    text("bônus", 291, 214 + 60);
    
    fill(255, 255, 255);
    rect(253, 333, 108, 50); 
    textSize(26);
    fill(0, 0, 0);
    text("Sair", 282, 371);
    
    if(clicked===true){
        if(mouseX >= 253 && mouseX <= 359 && mouseY >= 284 && mouseY >= 333){
            scene = 0;
        }
        
        if(mouseX >= 6 && mouseX <= 87 && mouseY >= 179 - 50 && mouseY <= 228 - 50){
            scene = 4;
        }
        
        if(mouseX >= 133 && mouseX <= 236 && mouseY >= 179 - 50 && mouseY <= 228 - 50){
            scene = 5;
        }
        if(mouseX >= 287 && mouseX <= 388 && mouseY >= 179 - 50 && mouseY <= 278 - 50){
            scene = 6;
        }
        if(mouseX >= 6 && mouseX <= 87 && mouseY >= 179 + 50 && mouseY <= 228 + 50){
            scene = 7;
        }
        
        if(mouseX >= 133 && mouseX <= 236 && mouseY >= 179 + 50 && mouseY <= 228 + 50){
            scene = 8;
        }
        if(mouseX >= 287 && mouseX <= 388 && mouseY >= 179 + 50 && mouseY <= 278 + 50){
            scene = 9;
        }
    }
}  // FINALIZADO


// jogos
function jogo1() {
    scene = 4;
    
    // Personagem
    var leftX = 161;
    var rightX = 222;
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
    };
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-90);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 5;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 5;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
    
    // Chão
    var grassXs = [];
    for (var i = 0; i < 25; i++) { 
        grassXs.push(i*20);
    }
    
    // Arvores
    var grassYs = [];
    for (var i = 0; i < 25; i++) { 
        grassYs.push(i*220);
    }
    
    // Draw
    draw = function() {
        background(184, 236, 255);
        fill(130, 79, 43);
        rectMode(CORNER);
        rect(0, height*0.90, width, height*0.10);
        
        // Movementação Árvore
        for (var l = 0; l < grassYs.length; l++) {
            image(getImage("cute/TreeTall"), grassYs[l], height*0.70, 50, 70);
            grassYs[l] -= 0.8;
            if (grassYs[l] <= -40) {
                grassYs[l] = width;
            }
        }
        
        // Movementação Chão
        for (var i = 0; i < grassXs.length; i++) {
            image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
            grassXs[i] -= 0.8;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
            }
        }
        
        noStroke();
        // clouds 
        fill(255, 170, 0);
        ellipse(200, 100, 100, 100);
        leftX  -= 0.1;
        rightX += 0.1;
        fill(255, 255, 255);
        // left cloud
        ellipse(leftX, 150, 126, 97);
        ellipse(leftX+62, 150, 70, 60);
        ellipse(leftX-62, 150, 70, 60);
        
        // right cloud
        ellipse(rightX, 100, 126, 97);
        ellipse(rightX+62, 100, 70, 60);
        ellipse(rightX-62, 100, 70, 60);
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 0.8;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 0.8;
        }
        
        textSize(18);
        text("Score: " + beaver.sticks, 20, 30);
        
        
        
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
        
        if (beaver.sticks/sticks.length >= 0.95) {
             background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU WIN!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas se ainda não", 6, 137);
            text("estiver sastifeito reinicie o jogo e tente ", 5, 162);
            text("jogar os outros niveis mas dificeis!!", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            text("  😎  ", 329, 199);
            image(getImage("creatures/Hopper-Cool"), 173, 229, 100, 100);
            textSize(101);
            text("🏡  ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            textSize(50);
            text(" 🥬️  ", 292, 297);
        }
    };
}   // FINALIZADO
function jogo2() {
    scene = 5;
    
    // Personagem
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
        this.badsticks =0;
    };
    
    var im = 0;
    var k = 0;
    var f = 0;
    var leftX = 59;
    var leftX2 = 89;
    var rightX = 251;
    var rightX2 = 412;
    var timer = 20;
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-50);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 5;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 5;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
        Beaver.prototype.checkForbadStickGrab = function(badstick) {
        if ((badstick.x >= this.x && badstick.x <= (this.x + 40)) &&
            (badstick.y >= this.y && badstick.y <= (this.y + 40))) {
            badstick.y = -400;
            this.sticks--;
        }
    };
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
        // BADVareda
    var badStick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    badStick.prototype.draw = function() {
        fill(209, 115, 20);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var badsticks = [];
    for (var i = 0; i < 40; i++) {  
        badsticks.push(new badStick(i * 300 + 300, random(20, 260)));
    }
    
    // DRAW
    draw = function() {
        background(19, 0, 82);
        
         noStroke();
         
         // Moon 1
        fill(245, 242, 177);
        ellipse(326,51,85,85);
        fill(232, 230, 223);
        ellipse(326,49,80,80);
         
        // Stars
        fill(255, 255, 255);
        ellipse(151,100,2,2);
        ellipse(124,207,2,2);
        ellipse(234,100,2,2);
        ellipse(54,140,2,2);
        ellipse(346,196,2,2);
        ellipse(85,27,2,2);
        ellipse(187,181,2,2);
        ellipse(358,75,2,2);
        ellipse(171,112,2,2);
        ellipse(386,155,2,2);
        ellipse(140,16,2,2);
        ellipse(38,57,2,2);
        ellipse(140,16,2,2);
        ellipse(102,138,2,2);
        ellipse(208,132,2,2);
        ellipse(155,61,2,2);
        ellipse(52,12,2,2);
        ellipse(143,233,2,2);
        ellipse(378,61,2,2);
        ellipse(378,202,2,2);
        ellipse(50,194,2,2);
        ellipse(209,71,1.2,1.2);
        ellipse(225,157,1.2,1.2);
        ellipse(119,71,1.2,1.2);
        ellipse(360,187,1.2,1.2);
        ellipse(168,168,1.2,1.2);
        ellipse(72,160,1.2,1.2);
        ellipse(233,181,1.2,1.2);
        ellipse(30,33,1.2,1.2);
        ellipse(360,140,1.2,1.2);
        ellipse(380,19,1.2,1.2);
        ellipse(144,163,1.2,1.2);
        ellipse(88,194,1.2,1.2);
        ellipse(88,71,1,1);
        ellipse(166,71,1,1);
        ellipse(115,39,1,1);
        ellipse(252,40,2,2);
        ellipse(215,33,2,2);
        ellipse(170,46,2,2);
        ellipse(384,105,2,2);
         
         // Clouds
        // 3 
        fill(63, 68, 99);
        ellipse(rightX,38,105,63);
        ellipse(rightX-51,39,53,32);
        ellipse(rightX+51,39,53,32);
        // 4
        fill(82, 83, 89);
        ellipse(rightX2,101,104,57);
        ellipse(rightX2-49,101,51,31);
        ellipse(rightX2+45,101,51,31);
        // 2
        fill(104, 107, 120);
        ellipse(leftX2,124,104,57);
        ellipse(leftX2+53,124,51,31);
        ellipse(leftX2-56,124,51,31);
        // 1
        fill(85, 89, 112);
        ellipse(leftX,101,104,57);
        ellipse(leftX+46,101,51,31);
        ellipse(leftX-46,101,51,31);
        
        rightX -= 0.1;
        leftX += 0.1;
        leftX2 = leftX2 + 0.1;
        rightX2 = rightX2 - 0.1;
        
        if(leftX > 500){
                leftX = +1;
                leftX = random(-200, 100);
            }   
        if(leftX2 > 500){
                leftX2 = +1;
                leftX2 = random(-200, 100);
            }
        if(rightX > 500){
                rightX = +1;
                rightX = random(-200, 100);
            }
        if(rightX2 > 500){
                rightX2 = +1;
                rightX2 = random(-200, 100);
            }
         
        im -= 1;
        k -= 0.3;
        f -= 0.1;
        timer -= 0.01;
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 1;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 1;
        }
        
                // Movementação Vareda
        for (var i = 0; i < badsticks.length; i++) {
            badsticks[i].draw();
            beaver.checkForbadStickGrab(badsticks[i]);
            badsticks[i].x -= 1;
        }
        
        fill(251, 0, 255);
        text("Score: " + beaver.sticks, 20, 30);
        text("tempo: " + timer, 305, 30);
        
        //Montanhas
         {fill(51, 51, 51);
         beginShape();
         vertex(f + 2,341);
         vertex(f + 57,320);
         vertex(f + 91,335);
         vertex(f + 118,338);
         vertex(f + 147,316);
         vertex(f + 188,317);
         vertex(f + 233,324);
         vertex(f + 258,331);
         vertex(f + 304,311);
         vertex(f + 316,311);
         vertex(f + 346,317);
         vertex(f + 365,321);
         vertex(f + 408,310);
         vertex(f + 398,394);
         vertex(f + 1,398);
         vertex(f + 0,341);
         vertex(f + 2 + 300,341);
         vertex(f + 57 + 300,320);
         vertex(f + 91 + 300,335);
         vertex(f + 118 + 300,338);
         vertex(f + 147 + 300,316);
         vertex(f + 188 + 300,317);
         vertex(f + 233 + 300,324);
         vertex(f + 258 + 300,331);
         vertex(f + 304 + 300,311);
         vertex(f + 316 + 300,311);
         vertex(f + 346 + 300,317);
         vertex(f + 365 + 300,321);
         vertex(f + 408 + 300,310);
         vertex(f + 398 + 300,394);
         vertex(f + 1 + 300,398);
         vertex(f + 0 + 300,341);
         endShape();
         
         // MONTANHAS DE MEDIO
         fill(38, 38, 38);
         beginShape();
         vertex(k + 1,371);
         vertex(k + 37,355);
         vertex(k + 63,360);
         vertex(k + 78,367);
         vertex(k + 87,373);
         vertex(k + 116,371);
         vertex(k + 153,366);
         vertex(k + 178,364);
         vertex(k + 198,350);
         vertex(k + 233,347);
         vertex(k + 275,350);
         vertex(k + 321,340);
         vertex(k + 345,358);
         vertex(k + 377,356);
         vertex(k + 398,360);
         vertex(k + 395,361);
         vertex(k + 406,400);
         vertex(k + 0,400);
         endShape();
         vertex(k + 1 + 300,371);
         vertex(k + 37 + 300,355);
         vertex(k + 63 + 300,360);
         vertex(k + 78 + 300,367);
         vertex(k + 87 + 300,373);
         vertex(k + 116 + 300,371);
         vertex(k + 153 + 300,366);
         vertex(k + 178 + 300,364);
         vertex(k + 198 + 300,350);
         vertex(k + 233 + 300,347);
         vertex(k + 275 + 300,350);
         vertex(k + 321 + 300,340);
         vertex(k + 345 + 300,358);
         vertex(k + 377 + 300,356);
         vertex(k + 398 + 300,360);
         vertex(k + 395 + 300,361);
         vertex(k + 406 + 300,400);
         vertex(k + 0 + 300,400);
         endShape();
         vertex(k + 1 + 600,371);
         vertex(k + 37 + 600,355);
         vertex(k + 63 + 600,360);
         vertex(k + 78 + 600,367);
         vertex(k + 87 + 600,373);
         vertex(k + 116 + 600,371);
         vertex(k + 153 + 600,366);
         vertex(k + 178 + 600,364);
         vertex(k + 198 + 600,350);
         vertex(k + 233 + 600,347);
         vertex(k + 275 + 600,350);
         vertex(k + 321 + 600,340);
         vertex(k + 345 + 600,358);
         vertex(k + 377 + 600,356);
         vertex(k + 398 + 600,360);
         vertex(k + 395 + 600,361);
         vertex(k + 406 + 600,400);
         vertex(k + 0 + 600,400);
         endShape();
         vertex(k + 1 + 900,371);
         vertex(k + 37 + 900,355);
         vertex(k + 63 + 900,360);
         vertex(k + 78 + 900,367);
         vertex(k + 87 + 900,373);
         vertex(k + 116 + 900,371);
         vertex(k + 153 + 900,366);
         vertex(k + 178 + 900,364);
         vertex(k + 198 + 900,350);
         vertex(k + 233 + 900,347);
         vertex(k + 275 + 900,350);
         vertex(k + 321 + 900,340);
         vertex(k + 345 + 900,358);
         vertex(k + 377 + 900,356);
         vertex(k + 398 + 900,360);
         vertex(k + 395 + 900,361);
         vertex(k + 406 + 900,400);
         vertex(k + 0 + 900,400);
         endShape();
         
         // MONTANHA DE BAIXO
         beginShape();
         fill(28, 28, 28);
         rect(0, 400, 5000, 30);
         vertex(im + 2,386);
         vertex(im + 51,375);
         vertex(im + 80,388);
         vertex(im + 111,393);
         vertex(im + 147,387);
         vertex(im + 180,383);
         vertex(im + 215,386);
         vertex(im + 296,390);
         vertex(im + 340,390);
         vertex(im + 362,381);
         vertex(im + 387,386);
         vertex(im + 396,392);
         vertex(im + 400,400);
         vertex(im + 0,401);
         vertex(im + 0,393);
         vertex(im + 2 + 300,386);
         vertex(im + 51 + 300,375);
         vertex(im + 80 + 300,388);
         vertex(im + 111 + 300,393);
         vertex(im + 147 + 300,387);
         vertex(im + 180 + 300,383);
         vertex(im + 215 + 300,386);
         vertex(im + 296 + 300,390);
         vertex(im + 340 + 300,390);
         vertex(im + 362 + 300,381);
         vertex(im + 387 + 300,386);
         vertex(im + 396 + 300,392);
         vertex(im + 400 + 300,400);
         vertex(im + 0 + 300,401);
         vertex(im + 0 + 300,393);
         vertex(im + 2 + 600,386);
         vertex(im + 51 + 600,375);
         vertex(im + 80 + 600,388);
         vertex(im + 111 + 600,393);
         vertex(im + 147 + 600,387);
         vertex(im + 180 + 600,383);
         vertex(im + 215 + 600,386);
         vertex(im + 296 + 600,390);
         vertex(im + 340 + 600,390);
         vertex(im + 362 + 600,381);
         vertex(im + 387 + 600,386);
         vertex(im + 396 + 600,392);
         vertex(im + 400 + 600,400);
         vertex(im + 0 + 600,401);
         vertex(im + 0 + 600,393);
         vertex(im + 2 + 900,386);
         vertex(im + 51 + 900,375);
         vertex(im + 80 + 900,388);
         vertex(im + 111 + 900,393);
         vertex(im + 147 + 900,387);
         vertex(im + 180 + 900,383);
         vertex(im + 215 + 900,386);
         vertex(im + 296 + 900,390);
         vertex(im + 340 + 900,390);
         vertex(im + 362 + 900,381);
         vertex(im + 387 + 900,386);
         vertex(im + 396 + 900,392);
         vertex(im + 400 + 900,400);
         vertex(im + 0 + 900,401);
         vertex(im + 0 + 900,393);
         vertex(im + 2 + 1200,386);
         vertex(im + 51 + 1200,375);
         vertex(im + 80 + 1200,388);
         vertex(im + 111 + 1200,393);
         vertex(im + 147 + 1200,387);
         vertex(im + 180 + 1200,383);
         vertex(im + 215 + 1200,386);
         vertex(im + 296 + 1200,390);
         vertex(im + 340 + 1200,390);
         vertex(im + 362 + 1200,381);
         vertex(im + 387 + 1200,386);
         vertex(im + 396 + 1200,392);
         vertex(im + 400 + 1200,400);
         vertex(im + 0 + 1200,401);
         vertex(im + 0 + 1200,393);
         vertex(im + 2 + 1500,386);
         vertex(im + 51 + 1500,375);
         vertex(im + 80 + 1500,388);
         vertex(im + 111 + 1500,393);
         vertex(im + 147 + 1500,387);
         vertex(im + 180 + 1500,383);
         vertex(im + 215 + 1500,386);
         vertex(im + 296 + 1500,390);
         vertex(im + 340 + 1500,390);
         vertex(im + 362 + 1500,381);
         vertex(im + 387 + 1500,386);
         vertex(im + 396 + 1500,392);
         vertex(im + 400 + 1500,400);
         vertex(im + 0 + 1500,401);
         vertex(im + 0 + 1500,393);
         vertex(im + 2 + 1500,386);
         vertex(im + 51 + 1500,375);
         vertex(im + 80 + 1500,388);
         vertex(im + 111 + 1500,393);
         vertex(im + 147 + 1500,387);
         vertex(im + 180 + 1500,383);
         vertex(im + 215 + 1500,386);
         vertex(im + 296 + 1500,390);
         vertex(im + 340 + 1500,390);
         vertex(im + 362 + 1500,381);
         vertex(im + 387 + 1500,386);
         vertex(im + 396 + 1500,392);
         vertex(im + 400 + 1500,400);
         vertex(im + 0 + 1500,401);
         vertex(im + 0 + 1500,393);
         endShape();
         vertex(im + 2,386);
         vertex(im + 51,375);
         vertex(im + 80,388);
         vertex(im + 111,393);
         vertex(im + 147,387);
         vertex(im + 180,383);
         vertex(im + 215,386);
         vertex(im + 296,390);
         vertex(im + 340,390);
         vertex(im + 362,381);
         vertex(im + 387,386);
         vertex(im + 396,392);
         vertex(im + 400,400);
         vertex(im + 0,401);
         vertex(im + 0,393);
         vertex(im + 2 + 300,386);
         vertex(im + 51 + 300,375);
         vertex(im + 80 + 300,388);
         vertex(im + 111 + 300,393);
         vertex(im + 147 + 300,387);
         vertex(im + 180 + 300,383);
         vertex(im + 215 + 300,386);
         vertex(im + 296 + 300,390);
         vertex(im + 340 + 300,390);
         vertex(im + 362 + 300,381);
         vertex(im + 387 + 300,386);
         vertex(im + 396 + 300,392);
         vertex(im + 400 + 300,400);
         vertex(im + 0 + 300,401);
         vertex(im + 0 + 300,393);
         vertex(im + 2 + 600,386);
         vertex(im + 51 + 600,375);
         vertex(im + 80 + 600,388);
         vertex(im + 111 + 600,393);
         vertex(im + 147 + 600,387);
         vertex(im + 180 + 600,383);
         vertex(im + 215 + 600,386);
         vertex(im + 296 + 600,390);
         vertex(im + 340 + 600,390);
         vertex(im + 362 + 600,381);
         vertex(im + 387 + 600,386);
         vertex(im + 396 + 600,392);
         vertex(im + 400 + 600,400);
         vertex(im + 0 + 600,401);
         vertex(im + 0 + 600,393);
         vertex(im + 2 + 900,386);
         vertex(im + 51 + 900,375);
         vertex(im + 80 + 900,388);
         vertex(im + 111 + 900,393);
         vertex(im + 147 + 900,387);
         vertex(im + 180 + 900,383);
         vertex(im + 215 + 900,386);
         vertex(im + 296 + 900,390);
         vertex(im + 340 + 900,390);
         vertex(im + 362 + 900,381);
         vertex(im + 387 + 900,386);
         vertex(im + 396 + 900,392);
         vertex(im + 400 + 900,400);
         vertex(im + 0 + 900,401);
         vertex(im + 0 + 900,393);
         vertex(im + 2 + 1200,386);
         vertex(im + 51 + 1200,375);
         vertex(im + 80 + 1200,388);
         vertex(im + 111 + 1200,393);
         vertex(im + 147 + 1200,387);
         vertex(im + 180 + 1200,383);
         vertex(im + 215 + 1200,386);
         vertex(im + 296 + 1200,390);
         vertex(im + 340 + 1200,390);
         vertex(im + 362 + 1200,381);
         vertex(im + 387 + 1200,386);
         vertex(im + 396 + 1200,392);
         vertex(im + 400 + 1200,400);
         vertex(im + 0 + 1200,401);
         vertex(im + 0 + 1200,393);
         vertex(im + 2 + 1500,386);
         vertex(im + 51 + 1500,375);
         vertex(im + 80 + 1500,388);
         vertex(im + 111 + 1500,393);
         vertex(im + 147 + 1500,387);
         vertex(im + 180 + 1500,383);
         vertex(im + 215 + 1500,386);
         vertex(im + 296 + 1500,390);
         vertex(im + 340 + 1500,390);
         vertex(im + 362 + 1500,381);
         vertex(im + 387 + 1500,386);
         vertex(im + 396 + 1500,392);
         vertex(im + 400 + 1500,400);
         vertex(im + 0 + 1500,401);
         vertex(im + 0 + 1500,393);
         vertex(im + 2 + 1500,386);
         vertex(im + 51 + 1500,375);
         vertex(im + 80 + 1500,388);
         vertex(im + 111 + 1500,393);
         vertex(im + 147 + 1500,387);
         vertex(im + 180 + 1500,383);
         vertex(im + 215 + 1500,386);
         vertex(im + 296 + 1500,390);
         vertex(im + 340 + 1500,390);
         vertex(im + 362 + 1500,381);
         vertex(im + 387 + 1500,386);
         vertex(im + 396 + 1500,392);
         vertex(im + 400 + 1500,400);
         vertex(im + 0 + 1500,401);
         vertex(im + 0 + 1500,393);
         endShape();
         }
         
         
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
        
        if (timer <= 0) {
            background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU LOST!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas tente", 6, 137);
            text("novamente reinicinado o jogo, ", 5, 162);
            text("ou tente jogar os niveis mas facil", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            image(getImage("creatures/OhNoes"), 173, 229, 100, 100);
            textSize(101);
            text(" 🏚️ ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            
        }
        
        
        if (beaver.sticks/sticks.length >= 0.80) {
            background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU WIN!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas se ainda não", 6, 137);
            text("estiver sastifeito reinicie o jogo e tente ", 5, 162);
            text("jogar os outros niveis mas dificeis!!", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            text("  😎  ", 329, 199);
            image(getImage("creatures/Hopper-Cool"), 173, 229, 100, 100);
            textSize(101);
            text("🏡  ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            textSize(50);
            text(" 🥬️  ", 292, 297);
        }
    };
}   // FINALIZADO
function jogo3() {
    scene = 6;
    
    // Personagem
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
    };
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-90);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 10;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 7;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
    
    // Chão
    var grassXs = [];
    for (var i = 0; i < 25; i++) { 
        grassXs.push(i*20);
    }
    
    // DRAW
    draw = function() {
        
        // Movementação Chão
        background(168, 171, 171);
        fill(79, 78, 77);
        rectMode(CORNER);
        rect(0, height*0.90, width, height*0.10);
        
        for (var i = 0; i < grassXs.length; i++) {
            image(getImage("cute/PlainBlock"), grassXs[i], height*0.85, 34, 20);
            grassXs[i] -= 3;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
            }
        }
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 3;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 3;
        }
        
        textSize(18);
        text("Score: " + beaver.sticks, 20, 30);
        
        
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
                if (beaver.sticks/sticks.length >= 0.65) {
                         background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU WIN!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas se ainda não", 6, 137);
            text("estiver sastifeito reinicie o jogo e tente ", 5, 162);
            text("jogar os outros niveis mas dificeis!!", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            text("  😎  ", 329, 199);
            image(getImage("creatures/Hopper-Cool"), 173, 229, 100, 100);
            textSize(101);
            text("🏡  ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            textSize(50);
            text(" 🥬️  ", 292, 297);
        }
    };
}   // FINALIZADO


// jogos
function jogo4() {
    scene = 7;
    
    // Personagem
    var leftX = 161;
    var rightX = 222;
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
        this.badstick = 0;
    };
    
    var timer = 25;
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-90);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 5;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 5;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    
        Beaver.prototype.checkForbadStickGrab = function(badstick) {
        if ((badstick.x >= this.x && badstick.x <= (this.x + 40)) &&
            (badstick.y >= this.y && badstick.y <= (this.y + 40))) {
            badstick.y = -400;
            this.sticks--;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
        // Vareda BAD
    var badStick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    badStick.prototype.draw = function() {
        fill(255, 200, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var badsticks = [];
    for (var i = 0; i < 40; i++) {  
        badsticks.push(new badStick(i * 250 + 300, random(20, 260)));
    }
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
    
    // Chão
    var grassXs = [];
    for (var i = 0; i < 25; i++) { 
        grassXs.push(i*20);
    }
    
    // Arvores
    var grassYs = [];
    for (var i = 0; i < 25; i++) { 
        grassYs.push(i*220);
    }
    
    // Draw
    draw = function() {
        
        timer -= 0.01;
        
        background(184, 236, 255);
        fill(130, 79, 43);
        rectMode(CORNER);
        rect(0, height*0.90, width, height*0.10);
        
        // Movementação Árvore
        for (var l = 0; l < grassYs.length; l++) {
            image(getImage("cute/TreeTall"), grassYs[l], height*0.70, 50, 70);
            grassYs[l] -= 0.9;
            if (grassYs[l] <= -40) {
                grassYs[l] = width;
            }
        }
        
        // Movementação Chão
        for (var i = 0; i < grassXs.length; i++) {
            image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
            grassXs[i] -= 0.9;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
            }
        }
        
        noStroke();
        // clouds 
        fill(255, 170, 0);
        ellipse(200, 100, 100, 100);
        leftX  -= 0.1;
        rightX += 0.1;
        fill(255, 255, 255);
        // left cloud
        ellipse(leftX, 150, 126, 97);
        ellipse(leftX+62, 150, 70, 60);
        ellipse(leftX-62, 150, 70, 60);
        
        // right cloud
        ellipse(rightX, 100, 126, 97);
        ellipse(rightX+62, 100, 70, 60);
        ellipse(rightX-62, 100, 70, 60);
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 1.5;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 1.5;
        }
        
        // Movementação Vareda
        for (var i = 0; i < badsticks.length; i++) {
            badsticks[i].draw();
            beaver.checkForbadStickGrab(badsticks[i]);
            badsticks[i].x -= 1.5;
        }
        
        textSize(18);
        text("Score: " + beaver.sticks, 20, 30);
        text("Tempo: " + timer, 305, 30);
        
        
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
        
            if (timer <= 0) {
            background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU LOST!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas tente", 6, 137);
            text("novamente reinicinado o jogo, ", 5, 162);
            text("ou tente jogar os niveis mas facil", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            image(getImage("creatures/OhNoes"), 173, 229, 100, 100);
            textSize(101);
            text(" 🏚️ ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            
        }
        
        if (beaver.sticks/sticks.length >= 0.75) {
             background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU WIN!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas se ainda não", 6, 137);
            text("estiver sastifeito reinicie o jogo e tente ", 5, 162);
            text("jogar os outros niveis mas dificeis!!", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            text("  😎  ", 329, 199);
            image(getImage("creatures/Hopper-Cool"), 173, 229, 100, 100);
            textSize(101);
            text("🏡  ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            textSize(50);
            text(" 🥬️  ", 292, 297);
        }
    };
}   // MEDIO
function jogo5() {
    scene = 8;
    
    var generator=new Random(1);
    var Range=function(time,height,darkness){
        this.time=time;
        this.height=height;
        this.darkness=color(darkness,darkness,darkness);
        this.display=function(){
            for(var i=0;i<0.01*400;i+=0.01){
                rectMode(CORNER);
                var height=map(noise(i+this.time),0,1,0,this.height);
                fill(this.darkness);
                noStroke();
                rect(i*100,400-height,1,height);
            }
        };
    };
    
    //Ranges
    var ranges=[];
    for(var i=0;i<4;i++){
        ranges.push(new Range(i*100000,i*100+100,i*25));
    }
    
    //Sky
    var sky={
        display:function(){
            for(var i=0;i<400;i++){
                rectMode(CORNER);
                noStroke();
                fill(0,map(noise(i*0.0001),0,1,50,150),map(noise(i*0.01),0,1,0,255));
                rect(i,0,1,400);
            }
        }
    };
    
    //Stars
    var stars={
        positions:[],
        create:function(){
            if(this.positions.length<200){
                for(var i=0;i<200;i++){
                    this.positions.push({
                        x:random(0,400),
                        y:random(0,400),
                        size:generator.nextGaussian()*1+1
                    });
                }
            }
        },
        display:function(){
            this.create();
            for(var i=0;i<this.positions.length;i++){
                fill(255, 255, 255);
                noStroke();
                ellipse(this.positions[i].x,this.positions[i].y,this.positions[i].size,this.positions[i].size);
            }
        }
    };
    // Personagem
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
        this.badsticks =0;
    };
    
    var im = 0;
    var k = 0;
    var f = 0;
    var leftX = 59;
    var leftX2 = 89;
    var rightX = 251;
    var rightX2 = 412;
    var timer = 20;
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-50);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 6;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 6;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
        Beaver.prototype.checkForbadStickGrab = function(badstick) {
        if ((badstick.x >= this.x && badstick.x <= (this.x + 40)) &&
            (badstick.y >= this.y && badstick.y <= (this.y + 40))) {
            badstick.y = -400;
            this.sticks--;
        }
    };
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
        // BADVareda
    var badStick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    badStick.prototype.draw = function() {
        fill(209, 115, 20);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var badsticks = [];
    for (var i = 0; i < 40; i++) {  
        badsticks.push(new badStick(i * 300 + 300, random(20, 260)));
    }
    
    // DRAW
    draw = function() {
        background(19, 0, 82);
            sky.display();
        stars.display();
        for(var i=ranges.length-1;i>=0;i--){
        ranges[i].display();
        }
        noStroke();
        im -= 1.8;
        k -= 0.38;
        f -= 0.18;
        timer -= 0.01;
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 1.8;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 1.8;
        }
        
        // Movementação BAD Vareda
        for (var i = 0; i < badsticks.length; i++) {
            badsticks[i].draw();
            beaver.checkForbadStickGrab(badsticks[i]);
            badsticks[i].x -= 1.8;
        }
        
        fill(251, 0, 255);
        text("Score: " + beaver.sticks, 20, 30);
        text("tempo: " + timer, 305, 30);
         
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
        
        if (timer <= 0) {
            background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU LOST!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas tente", 6, 137);
            text("novamente reinicinado o jogo, ", 5, 162);
            text("ou tente jogar os niveis mas facil", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            image(getImage("creatures/OhNoes"), 173, 229, 100, 100);
            textSize(101);
            text(" 🏚️ ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            
        }
        
        
        if (beaver.sticks/sticks.length >= 0.80) {
            background(0, 255, 251);
            textSize(36);
            fill(0, 0, 0);
            text("YOU WIN!!!!", 100, 87);
            textSize(19);
            text("Obrigado por jogar, mas se ainda não", 6, 137);
            text("estiver sastifeito reinicie o jogo e tente ", 5, 162);
            text("jogar os outros niveis mas dificeis!!", 5, 186);
            text("atenciosamente: Aram", 5, 390);
            text("  😎  ", 329, 199);
            image(getImage("creatures/Hopper-Cool"), 173, 229, 100, 100);
            textSize(101);
            text("🏡  ", 17, 309);
            textSize(78);
            text(" 🍽️  ", 269, 309);
            textSize(50);
            text(" 🥬️  ", 292, 297);
        }
    };
}   // FINALIZADO
function bonus() {
    scene = 9;
    
    // Personagem
    var leftX = 161;
    var rightX = 222;
    var Beaver = function(x, y) {
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.sticks = 0;
        this.sticksm = 0;
    };
    
    Beaver.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y, 0, height-90);
        image(this.img, this.x, this.y, 40, 40);
    };
    
    Beaver.prototype.hop = function() {
        this.img = getImage("creatures/Hopper-Jumping");
        this.y -= 5;
    };
    
    Beaver.prototype.fall = function() {
        this.img = getImage("creatures/Hopper-Happy");
        this.y += 5;
    };
    
    Beaver.prototype.checkForStickGrab = function(stick) {
        if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
            (stick.y >= this.y && stick.y <= (this.y + 40))) {
            stick.y = -400;
            this.sticks++;
        }
    };
    
    Beaver.prototype.checkForStickmGrab = function(stickm) {
        if ((stickm.x >= this.x && stickm.x <= (this.x + 40)) &&
            (stickm.y >= this.y && stickm.y <= (this.y + 40))) {
            stickm.y = -400;
            this.sticksm++;
        }
    };
    
    
    
    
    
    var septuby = 0;
noStroke();
var cloud = function(x,y){
    
    fill(0, 0, 0,50);
    arc(x+174+2, y+261+2, 50, 50, 180, 360);
    arc(x+222+2, y+261+2, 79, 104, 181, 360);
    arc(x+263+2, y+261+2, 43, 54, 181, 360);
    rect(x+140+2,y+260+2,154,8,100);
    ellipse(x+187+2,y+237+2,30,30);
    fill(255, 255, 255);
    arc(x+174, y+261, 50, 50, 180, 360);
    arc(x+222, y+261, 79, 104, 181, 360);
    arc(x+263, y+261, 43, 54, 181, 360);
    rect(x+140,y+260,154,8,100);
    ellipse(x+187,y+237,30,30);
    
};
var Tube = function(x,y){


    fill(0, 0, 0,50);
    rect(x+2, -350+y+2, 50, 400,20);
    rect(x+2, 150+y+septuby+2, 50, 400,20);
    
    fill(217, 147, 147);
    rect(x, -350+y, 50, 400,20);
    rect(x, 150+y+septuby, 50, 400,20);
    fill(181, 111, 111);
    rect(x+24, 150+y+septuby, 50-30, 400,20);
    fill(181, 111, 111);
    rect(x+24, -350+y+septuby, 50-30, 392,20);
    
    fill(232, 181, 181);
    ellipse(x+24,y+165,33,21);
    ellipse(x+37,y+174,10,10);
    ellipse(x+22,y+176,10,10);
    ellipse(x+32,y+185,8,8);
    fill(181, 111, 111);
    ellipse(x+24,y+37,33,21);
    ellipse(x+15,y+29,10,10);
    ellipse(x+18,y+17,8,8);};
var tube2 = function(x,y){
    
    fill(0, 0, 0,50);
    rect(x+2, 150+y+septuby+2, 40, 400,20);


    fill(188, 147, 217);
    rect(x, 150+y+septuby, 40, 400,20);
    fill(158, 116, 189);
    rect(x+22, 157+y+septuby, 40-30, 400,20);
    
    fill(208, 177, 230);
    ellipse(x+21,y+165,28,21);
    ellipse(x+30,y+174,10,10);
    ellipse(x+17,y+176,10,10);
    ellipse(x+27,y+185,8,8);};
var bg2 = function(){
     background(143, 227, 255);
    fill(255, 255, 255,50);
    rect(20,20,360,380,20);
    cloud(153,-48);
    cloud(-218,-127);
    tube2(91,99);
    tube2(27,113);
    tube2(57,80);
    tube2(-6,71);
    tube2(91+130,99);
    tube2(27+130,35);
    tube2(57+130,80);
    tube2(-6+130,79);
    tube2(97+130*2,99);
    tube2(27+130*2,32);
    tube2(57+130*2,80);
    tube2(-6+130*2,71);
    tube2(121+130*2,82);
    fill(0, 0, 0,10);
    rect(0,282,400,100);
    rect(0,282+10,400,100);
    rect(0,282+20,400,100);
    rect(0,282+30,400,100);
    rect(0,282+40,400,100);
    
    fill(64, 161, 105);
    ellipse(20,341,146,73);
    fill(79, 181, 122);
    ellipse(20,341,75,67);
        
    fill(64, 161, 105);
    ellipse(263,341,146,73);
    fill(79, 181, 122);
    ellipse(252,341,75,67);};    
var bg = function(){
        
    noStroke();
    fill(191, 255, 0);
    rect(-1,247+94,401,62);
    fill(0, 0, 0,50);
    rect(-6,289+45,407,24);
    fill(255, 217, 0);
    stroke(181, 127, 27);strokeWeight(4);
    
    rect(-6,285+45,407,24);
    noStroke();
    fill(133, 207, 68);
    rect(-1,270+108,401,62);
    fill(207, 169, 80);};
    
    // Folha
    var Stickm = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stickm.prototype.draw = function() {
        fill(30, 255, 0);
        rectMode(CENTER);
        ellipse(this.x, this.y, 18, 18);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticksm = [];
    for (var i = 0; i < 40; i++) {  
        sticksm.push(new Stickm(i * 215 + 230, random(20, 260)));
    }
    
    // Vareda
    var Stick = function(x, y) {
        this.x = x;
        this.y = y;
    };
    
    Stick.prototype.draw = function() {
        fill(89, 71, 0);
        rectMode(CENTER);
        rect(this.x, this.y, 5, 40);
    };
    
    var beaver = new Beaver(200, 300);
    
    var sticks = [];
    for (var i = 0; i < 40; i++) {  
        sticks.push(new Stick(i * 40 + 300, random(20, 260)));
    }
    
    // Chão
    var grassXs = [];
    for (var i = 0; i < 25; i++) { 
        grassXs.push(i*20);
    }
    
    // Arvores
    var grassYs = [];
    for (var i = 0; i < 25; i++) { 
        grassYs.push(i*220);
    }
    
    // Draw
    draw = function() {
        background(184, 236, 255);
        fill(130, 79, 43);
        rectMode(CORNER);
        rect(0, height*0.90, width, height*0.10);
        
        
        bg();
        bg2();
        fill(130, 79, 43);
        rect(0, 360, 400, 50);
        
        // Movementação Chão
        for (var i = 0; i < grassXs.length; i++) {
            image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
            grassXs[i] -= 0.8;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
            }
        }
        
        
        // Movementação folha
        for (var i = 0; i < sticksm.length; i++) {
            sticksm[i].draw();
            beaver.checkForStickmGrab(sticksm[i]);
            sticksm[i].x -= 0.8;
        }
        
        textSize(18);
        text("Folhas: " + beaver.sticksm, 122, 30);
        
        
        // Movementação Vareda
        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 0.8;
        }
        
        textSize(18);
        text("Score: " + beaver.sticks, 20, 30);
        
        
        
        // Movementação personagem
        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
        
        if (beaver.sticks/sticks.length >= 0.75) {
             background(151, 90, 153);
            textSize(36);
            fill(0, 0, 0);
            text("FELIZ DIAS DAS MÃES!!!!", 5, 87);
            textSize(19);
            text("Mãe, sem você não sei viver;", 6, 137);
            text("Sem você não sei amar ", 5, 162);
            text("Sem você não sei falar", 5, 186);
            text("Mãe, nâo existo sem você", 5, 206);
            text("MÃE, TE AMO!!", 5, 390);
        }
    };
}   // FINALIZADO


// menu
function história() {
    background(241, 255, 82);
    scene = 2;
    textSize(15);
    text("Nesta aventura Você irá coletar SCORE (vareta)",7, 24);
    text("para ajudar o castor há construir sua casa!!",8, 47);
    text("mas cuidado com as armadilhas,e inimigo, vocẽ",7, 71);
    text("pode coletar folhas para fazer um bom almoço.",10, 97);
    text("BOA SORTE",141, 128);
    textSize(109);
    text("🍃",74, 280);
    
    fill(255, 255, 255);
    rect(253, 333, 108, 50); 
    textSize(26);
    fill(0, 0, 0);
    text("Sair", 282, 371);
    
    if(clicked === true && mouseX >= 253 && mouseX <= 359 && mouseY >= 284 && mouseY >= 333){
        scene = 0;
    }
    
    
}  // MEDIO
function tutorial() {
    background(241, 255, 82);
    scene = 3;
    
    textSize(15);
    text("Aperte qualquer botão do teclado para subir",7, 24);
    text("ou segure para subir mais rapido, ele decera ",8, 47);
    text("rapidamente no chão, agora so pegar as varetas",7, 71);
    text("no ar.",10, 97);
    text("BOA SORTE",141, 128);
    
    fill(255, 255, 255);
    rect(253, 333, 108, 50); 
    textSize(26);
    fill(0, 0, 0);
    text("Sair", 282, 371);
    
    if(clicked === true && mouseX >= 253 && mouseX <= 359 && mouseY >= 284 && mouseY >= 333){
        scene = 0;
    }
    
    
}  // MEDIO


draw = function() {
    
    if(scene === 0){
        menu();
    }
    if(scene === 1){
       niveis();
    }
    if(scene === 2){
        história();
    }
    if(scene === 3){
        tutorial();
    }
    if(scene === 4){
        jogo1();
    }
    if(scene === 5){
        jogo2();
    }
    if(scene === 6){
        jogo3();
    }
    if(scene === 7){
        jogo4();
    }
    if(scene === 8){
        jogo5();
    }
    if(scene === 9){
        bonus();
    }
    clicked = false;
};


menu();








// Nota : 0 de -10