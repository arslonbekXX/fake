import { Box } from "./box";
import { random } from "./utils";

function init() {
	const boxes: Box[] = [];

	for (let i = 1; i <= 10; i++) {
		const box = new Box(`Box-${i}`, 100);
		boxes.push(box);
	}

	for (let box of boxes) {
		const friends = boxes.filter((b) => b !== box);
		box.setFriends(friends);
		box.move();
	}
}

init();
