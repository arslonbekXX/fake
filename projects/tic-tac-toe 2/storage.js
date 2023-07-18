export function setItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key, defaultValue) {
	return JSON.parse(localStorage.getItem(key)) || defaultValue;
}

export function removeItem(key) {
	localStorage.removeItem(key);
}

export function clear() {
	localStorage.clear();
}
