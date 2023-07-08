const MAX_NUMBER = 50;

export function randomNumber({ start = 0, finish = MAX_NUMBER } = {}) {
	return Math.floor(Math.random() * (finish - start + 1)) + start;
}
