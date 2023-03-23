const COLORS = ["#fe4a49", "#2ab7ca", " #03396c", "#f6cd61", "#fe8a71", "#4169e1"]
 export let search_choices = []

const generateRandomColor = function () {
	const ind = Math.floor(Math.random() * COLORS.length)
	return COLORS[ind]
}

const slider = new RangeSlider("#price", {
	values: [23_500_000, 50_000_000],
	min: 10_000_000,
	max: 100_000_000,
	step: 10_000,
	railHeight: 3,
	trackHeight: 3,
	pointRadius: 10
})
const min_max_pirce = document.querySelector(".min_max_pirce")
slider.onChange(values => {
	if (!min_max_pirce) return

	min_max_pirce.innerHTML = `<strong>Price </strong> : (${values[0]} fcfa , ${values[1]} fcfa)`

	const stringValue = `${values[0]} - ${values[1]}`
	createDivEletItem(stringValue)
	search_choices["prix"] = stringValue

})

const selects = document.querySelectorAll("select")
const search_choice_op = document.querySelector(".search_choice_op")

selects.forEach(elt => {
	//console.log(elt.id);

	elt.addEventListener("change", e => {

		const value = elt.value
		if (!Boolean(value)) return

		createDivEletItem(value)
		console.log(elt);

		// call of the deleteop function
		resetDeleteOptions()

		search_choices[elt.id] =value
		console.log(search_choices);
		console.log(objLength(search_choices));

	})
})

const createDivEletItem = function (value) {
	const div = document.createElement("div")

	console.log(value)
	console.log(div)

	div.classList.add("search_item")
	div.innerHTML = `<span>${value}</span>
				<span class="delete_op">×</span>`
	div.style.backgroundColor = generateRandomColor()

	if (!objLength(search_choices)) search_choice_op.textContent = ""

	search_choice_op.appendChild(div)
	resetDeleteOptions()

}

// to attach listenner on every delete_op
function resetDeleteOptions() {
	const delete_op = document.querySelectorAll(".delete_op")
	console.log(delete_op)
	delete_op.forEach(elt => {
		elt.addEventListener("click", function (e) {
			console.log("removed")
			elt.parentElement.parentElement.removeChild(elt.parentElement)

			const textContent = search_choice_op.textContent
			if (!textContent) search_choice_op.textContent = "Ajouter des filtres pour obtenir des résultats plus précis"
		})
	})
}

export function objLength(obj){
    var i=0;
    for(var props in obj){
        i++;
    }
    return i;
}
//export const tab = "un balle";
/*export search_choices;
export function tabc()
{
	return search_choices;
}*/

