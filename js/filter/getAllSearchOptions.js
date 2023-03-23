
export default function getAllSearchOptionsValue() {

	const search_items = [...document.querySelectorAll(".search_item")]
	console.log("search_item", search_items);

	if (!search_items.length) return null

	return search_items.map(elt => {

		const attribute = elt.getAttribute("optionValue")

		if (elt.classList.contains("price_item")) {
			return { value: attribute.split("-"), key: Date.now() }
		}

		return { value: attribute, key: Date.now() }

	})
}

