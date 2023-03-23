import { search_choices } from "./search_filter.js";

export default function getAllSearchOptionsValue() {

	const search_items = [...document.querySelectorAll(".search_item")]
	//console.log("search_item", search_items);

	if (!search_items.length) return null

	return search_items.forEach(elt => {

		const value = elt.getAttribute("optionValue")
		const key = elt.getAttribute("key")

		// add it
		search_choices[key] = value
		console.log("les choix : ", search_choices);

	})
}

