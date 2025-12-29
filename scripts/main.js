'use strict'

import { GameField, mem } from "./game.js";

const field = new GameField(mem);
const restart = document.getElementById("restart");
const count = document.getElementById("count");

field.reset();

function spawn() {
    setTimeout(() => {
	field.generateNum();
    }, 150);

}
field.update();
restart.addEventListener("click", () => {
    field.reset();
    count.innerText = `Score: ${field.count}`;
})
if (!field.isGameOver()) {
    document.addEventListener("keydown", (e) => {	
	
	if (e.key == "ArrowLeft" || e.key == "a") {
	    const prev = field.getF();
	    field.moveLeft();
	    const now = field.getF();
	    if(!field.cmp(prev, now)) {
		spawn();
	    }
	} else if ((e.key == "ArrowRight" || e.key == "d")) {
	    if(!field.moveRight()) {
		spawn();
	    }
	} else if (e.key == "ArrowUp" || e.key == "w") {
	    if(!field.moveUp()) {
		spawn();
	    }
	} else if (e.key == "ArrowDown" || e.key == "s") {
	    if(!field.moveDown()) {
		spawn();
	    }
	}
	console.log(field.count);
	count.innerText = `Score: ${field.count}`;
	field.update();	
	
    })
} else {
    alert("Game Over!");
    field.reset();
    count.innerText = `Score: ${field.count}`;
}


