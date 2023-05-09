function getCards(text = "") {
	for (let i = 0; i < text.length; i++) {
		const char = text[i]; // "8"
		if (!Number.isNaN(8)) {
			const cardNumber = text.substring(i, i + 16);

			if (!Number.isNaN(Number(cardNumber))) return cardNumber;
		}
	}

	return cards;
}

const cardNumber = getCards(
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque labore nostrum voluptatibus hic cumque tempore illo ea voluptates rerum nemo reiciendis assumenda accusantium necessitatibus, nobis ipsum saepe enim quia voluptatem iure eum? Numquam totam rem suscipit asperiores ipsam voluptatem amet rerum magnam delectus veniam quisquam quia adipisci atque veritatis cupiditate fugiat, quis autem non nisi? Doloribus vero in corporis tempore labore similique, ipsum laudantium accusamus omnis beatae eveniet culpa provident nemo delectus recusandae odio nesciunt voluptatum officiis assumenda, cum dolore maiores. Sequi minima aliquam expedita voluptates doloremque recusandae, ipsum sed quos facilis iure tempora beatae culpa consequatur possimus. Necessitatibus consequatur iste nesciunt nobis, voluptatem quasi id laboriosam voluptate culpa cumque incidunt et maxime tenetur, dolorum sapiente. Quaerat ea enim veniam, dolorem voluptate aliquid saepe ex fugit consectetur ipsum reiciendis id et facere nihil quo quos ut, magni illo? Eum 8600134822052356 dolorum ab quaerat saepe culpa libero sed in, quas minus consectetur nam enim assumenda a sapiente, 9860123443210000 placeat quae iure impedit odit? Error eum pariatur fugiat perspiciatis quidem facilis libero, facere nulla excepturi consequatur distinctio mollitia nemo odio at quam veritatis! Delectus numquam tempore a debitis voluptas asperiores reprehenderit facilis saepe, mollitia quibusdam labore atque culpa."
);

console.log("result = ", result);
