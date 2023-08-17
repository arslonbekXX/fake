export const random = (max: number, min = 0) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomColor = () => {
	return `#${Math.random().toString(16).substring(2, 8)}`;
};
