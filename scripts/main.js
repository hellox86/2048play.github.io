
import { GameField, mem } from "./game.js";

const field = new GameField(mem);
const body = document.querySelector("body");

field.generateNum(2);

field.print();

body.addEventListener('keydown', (e) => {
    switch (e.key) {
    case "a":	
    case "ArrowLeft":
	console.log("Move Left!");
	break;
    case "d":
    case "ArrowRight":
	console.log("Move Right!");
	break;
    case "w":
    case "ArrowUp":
	console.log("Move Up!");
	break;
    case "s":
    case "ArrowDown":
	console.log("Move Down!");
	break;	
    }
})

