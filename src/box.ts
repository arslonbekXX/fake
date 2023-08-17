import { random, randomColor } from "./utils";

export class Box {
	public x: number;
	public y: number;
	public speedX: number;
	public speedY: number;
	public color: string;
	public r: number;
	public element: HTMLDivElement;
	public frameID: number;
	public friends: Box[];

	constructor(public name: string, public size: number) {
		this.r = size / 2;
		this.x = random(window.innerWidth - this.size);
		this.y = random(window.innerHeight - this.size);
		this.speedX = [-1, 1][Math.floor(Math.random() * 2)];
		this.speedY = [-1, 1][Math.floor(Math.random() * 2)];
		this.color = randomColor();

		this.element = document.createElement("div");
		this.element.innerText = name;
		this.element.style.background = this.color;
		this.element.style.width = `${this.size}px`;
		this.element.style.height = `${this.size}px`;
		this.element.classList.add("box");
		this.element.style.left = `${this.x}px`;
		this.element.style.top = `${this.y}px`;
		document.body.appendChild(this.element);
	}

	stop() {
		console.log("this.name = ", { name: this.name, frameID: this.frameID });
		cancelAnimationFrame(this.frameID);
	}

	move() {
		this.x += this.speedX;
		this.y += this.speedY;

		for (const friend of this.friends) {
			const x1 = this.x - this.r;
			const y1 = this.y - this.r;
			const x2 = friend.x - friend.r;
			const y2 = friend.y - friend.r;

			const d = Math.floor(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

			if (d + 1 === this.r + friend.r || d - 1 === this.r + friend.r) {
				this.speedX *= -1;
				this.speedY *= -1;
				friend.speedX *= -1;
				friend.speedY *= -1;
			}
		}

		if (this.x === 0 || this.x === window.innerWidth - this.size) this.speedX *= -1;

		if (this.y === 0 || this.y === window.innerHeight - this.size) this.speedY *= -1;

		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";

		this.frameID = window.requestAnimationFrame(this.move.bind(this));
	}

	setFriends(friends: Box[]) {
		this.friends = friends;
	}
}
