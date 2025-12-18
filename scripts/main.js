
'use strict'

import { GameField, mem } from "./game.js";

const field = new GameField(mem);

field.draw();

document.addEventListener('keydown', (e) => {	
    if (!field.isGameOver()) {	
	if (e.key == "ArrowLeft" || e.key == "a") {
	    field.moveLeft();
	    field.generateNum();
	    field.print();
	} else if (e.key == "ArrowRight" || e.key == "d") {
	    field.moveRight();
	    field.generateNum();
	    field.print(); 
	} else if (e.key == "ArrowUp" || e.key == "w") {
	    field.moveUp();
	    field.generateNum();
	    field.print();
	} else if (e.key == "ArrowDown" || e.key == "s") {
	    field.moveDown();
	    field.generateNum();
	    field.print();
	}
    } else {
	console.log("Game Over!");
	field.draw();
    }
})

