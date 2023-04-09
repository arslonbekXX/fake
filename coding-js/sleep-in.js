function sleepIn(weekday, vacation) {
	if (weekday === true && vacation === false) {
		return false;
	}

	return true;
}

console.log(sleepIn(true, true));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));
