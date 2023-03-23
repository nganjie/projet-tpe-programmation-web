import { rangeSliderOptions } from "./rangeSliderOptions.js"
import { resetDeleteOptions } from "./resetDeleteOptions.js"
import { createDOMElementForOptionsSearch } from "./createDOMElementForOptionsSearch.js"

const slider = new RangeSlider("#price", rangeSliderOptions)
const min_max_pirce = document.querySelector(".min_max_pirce")

// charger d'abord le Slider pour le prix
slider.onChange(values => {
	if (!min_max_pirce) return

	// check if the user has already choose a price and delete it before insert it again
	const price_item = document.querySelector(".price_item")
	if (price_item)
		price_item.remove()

	min_max_pirce.innerHTML = `<strong>Price </strong> : (${values[0]} fcfa , ${values[1]} fcfa)`

	const stringValue = `${values[0]} - ${values[1]}`
	createDOMElementForOptionsSearch(stringValue).classList.add("price_item")

})

const selects = document.querySelectorAll("select")
selects.forEach(elt => {

	elt.addEventListener("change", e => {

		const value = elt.value
		if (!Boolean(value)) return
		// create the element
		createDOMElementForOptionsSearch(value)

		// call of the deleteop function
		resetDeleteOptions()

	})

})




