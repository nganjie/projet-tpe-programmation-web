/** 
 * to delete an option and reset the container
 * */

export function resetDeleteOptions() {

	const delete_op = [...document.querySelectorAll(".delete_op")]

	delete_op.forEach(elt => {
		elt.addEventListener("click", removeEletCallback)
	})
}

function removeEletCallback(e) {

	const search_choice_op = document.querySelector(".search_choice_op")

	const currentTarget = e.currentTarget.parentElement
	console.log("currentTarget : ", currentTarget);

	currentTarget.removeEventListener("click", removeEletCallback)
	currentTarget.remove()

	const search_items = [...document.querySelectorAll(".search_item")]
	if (!search_items.length) search_choice_op.textContent = "Ajouter des filtres pour obtenir des résultats plus précis"

	console.log("removed")

}