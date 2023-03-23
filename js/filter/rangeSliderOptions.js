const rangeSliderOptions = {
	values: [2_000_000, 6_000_000],
	min: 1_000_000,
	max: 10_000_000,
	step: 10_000,
	railHeight: 3,
	trackHeight: 3,
	pointRadius: 10
}

// colors that appears to randomly to each user choice
const COLORS = ["#fe4a49", "#2ab7ca", " #03396c", "#f6cd61", "#fe8a71", "#4169e1"]
/**
 * a function to return a random color  base on the COLORS array
 * @returns string
 */
const generateRandomColor = function () {
	const ind = Math.floor(Math.random() * COLORS.length)
	return COLORS[ind]
}

export { rangeSliderOptions, generateRandomColor }