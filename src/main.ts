class Person {
	constructor(public name: string, public birthDate: string) {}

	eat() {
		console.log(`${this.name} is eating(🍽️)...`);
	}

	run() {
		console.log(`${this.name} is running(🏃)...`);
	}
}

class Doctor extends Person {
	run() {}
}
class Teacher extends Person {
	run() {}
}

const doctor = new Doctor("Kent", "10.10.1995");
const teacher = new Teacher("Mark", "20.04.2000");

// console.log(doctor.run === teacher.run);
console.log(doctor);
console.log(teacher);
