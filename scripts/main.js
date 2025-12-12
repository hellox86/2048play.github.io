
import { GameField, mem } from "./game.js";

const field = new GameField(mem);
const body = document.querySelector("body");

field.generateNum(2);

body.addEventListener('keydown', (e) => {
    switch (e.key) {
    case "a":	
    case "ArrowLeft":
	field.moveLeft();
	field.print();
	break;
    case "d":
    case "ArrowRight":
	field.moveRight();
	field.print();
	break;
    case "w":
    case "ArrowUp":
	field.moveUp();
	field.print()
	break;
    case "s":
    case "ArrowDown":
	field.moveDown();
	field.print();
	break;	
    }
    field.generateNum();
    field.print();
})

