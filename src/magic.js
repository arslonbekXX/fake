const MAX_SPEED = 60; // max car
function radar(carSpeed) {
	if (carSpeed > MAX_SPEED) {
		console.log("shtraf (100 UZS), 50% skidka 😄");
	} else if (carSpeed > MAX_SPEED + 20) {
		console.log("shtraf (200 UZS), 50% skidka 😄");
	} else if (carSpeed > MAX_SPEED + 40) {
		console.log("moshina bizda (1000 UZS), 50% skidka 😄");
	}
}
