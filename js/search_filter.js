const COLORS = ["#fe4a49", "#2ab7ca", " #03396c", "#f6cd61", "#fe8a71", "#4169e1"]
 export let search_choices = []

const generateRandomColor = function () {
	const ind = Math.floor(Math.random() * COLORS.length)
	return COLORS[ind]
}

const slider = new RangeSlider("#price", {
	values: [23_500_00, 50_000_000],
	min: 1_000_000,
	max: 100_000_000,
	step: 10_000,
	railHeight: 3,
	trackHeight: 3,
	pointRadius: 10
})
const min_max_pirce = document.querySelector(".min_max_pirce")
var tmp_price;
var tmp_d =0;
slider.onChange(values => {
	if (!min_max_pirce) return

	min_max_pirce.innerHTML = `<strong>Price </strong> : (${values[0]} fcfa , ${values[1]} fcfa)`

	const stringValue = `${values[0]} - ${values[1]}`;
	if(tmp_d!=0)
	{
		console.log(tmp_d);
		console.log("je suis malade");
		console.log(search_choice_op.querySelector("#prix"));
		var number_choice = search_choice_op.querySelector("#prix");
		number_choice.click();
		delete search_choices["prix_min"];
		delete search_choices["prix_max"];
			console.log(search_choices);
		console.log(search_choice_op);
	}
	if(tmp_d==0)
	{
		tmp_price = stringValue;
		tmp_d++;
	}
	
	
	createDivEletItem(stringValue)
	search_choices["prix_min"] = values[0];
	search_choices["prix_max"] = values[1];
	
	
	console.log(Number(stringValue.slice(0,4)));
	console.log(search_choices["prix_max"]);

})

const selects = document.querySelectorAll(".select-search");
console.log(selects);
const search_choice_op = document.querySelector(".search_choice_op")

selects.forEach(elt => {
	console.log(elt.id);

	elt.addEventListener("change", e => {
		//console.log(elt.id);
		//const value = elt.value
		console.log(elt.value);
		if (!Boolean(elt.value)) return;
		createDivEletItem(elt.value)
		console.log(elt);

		// call of the deleteop function
		resetDeleteOptions()

		search_choices[elt.id] =elt.value
		console.log(search_choices);
		console.log(objLength(search_choices));

	})
})

const createDivEletItem = function (value) {
	const div = document.createElement("div")
    var idValue;
	
	if(Number(value.slice(0,4)))
	{
		idValue = "prix";
	}else idValue="all";
	console.log(value)
	console.log(div)

	div.classList.add("search_item")
	div.innerHTML = `<span >${value}</span>
				<span class="delete_op" id="${idValue}">×</span>`
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
			var element = elt.parentElement.querySelector("span").textContent
			//console.log(elt.parentElement.querySelector("span").textContent);
			
			elt.parentElement.remove();
			//elt.parentElement.removeChild(elt.parentElement.querySelector("span"));
			//elt.parentElement.parentElement.removeChild(elt.parentElement);
			
			var index  = search_choices.indexOf(element);
			var key =KeysTab(element,search_choices);
			console.log(key);
			delete search_choices[key];
			console.log(search_choices);

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
function KeysTab(value,tab)
{
	console.log("ça commence :"+objLength(tab));
	console.log(tab);
	for(var key in tab)
	{
		if(tab[key]==value)
		{
			return key;
		}
		//console.log(key);
	}
}
//export const tab = "un balle";
/*export search_choices;
export function tabc()
{
	return search_choices;
}*/

