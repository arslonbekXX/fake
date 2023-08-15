export class Box {
	private x: number;
	private vx: number;

	constructor(private name: string, private friend?: Box) {
		this.x = 20;
		this.vx = 20;
	}

	run() {
		console.log(`[PARENT]: ${this.name} is running...`);
	}

	move() {
		this.element.style.translate = "";
	}

	eat() {
		console.log(`[PARENT]: ${this.name} is eating...`);
	}

	hi() {
		console.log(`Hi(👋🏻) ${this.friend?.name} from ${this.name}`);
	}
}
