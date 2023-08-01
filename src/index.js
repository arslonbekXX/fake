const get = (obj, key) => {};

const person = {
	name: "Arslonbek",
	address: {
		state: "UZB",
		city: {
			name: "Tashkent city",
			street: {
				name: "Sebzor",
				flat: 13,
			},
		},
	},
};

const name = get(person, "name"); // "Arslonbek"
const streetName = get(person, "address.city.street.name"); // "Sebzor"
