import getAllSearchOptionsValue from "./getAllSearchOptions.js"
import { generateRandomColor } from "./rangeSliderOptions.js"
import { resetDeleteOptions } from "./resetDeleteOptions.js"

/**
 * a function to create element that with appears as the user choice .search_choice_op element
 * @param {*} value 
 * @return div
 */

const createDOMElementForOptionsSearch = function (value) {

	const div = document.createElement("div")

	console.log("value : ", value)

	div.classList.add("search_item")
	div.setAttribute("optionValue", value)
	div.innerHTML = `<span>${value}</span>
				<span class="delete_op">×</span>`
	div.style.backgroundColor = generateRandomColor()

	const search_items = [...document.querySelectorAll(".search_item")]
	const search_choice_op = document.querySelector(".search_choice_op")

	if (!search_items.length) {
		console.log("object : ", search_choice_op);
		search_choice_op.innerHTML = ""
	}

	search_choice_op.appendChild(div)
	resetDeleteOptions()

	// call the getAllOptions funtion to test it
	console.log("Options Value : ", getAllSearchOptionsValue())

	return div

}

export { createDOMElementForOptionsSearch }