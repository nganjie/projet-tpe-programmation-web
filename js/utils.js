export function objLength(obj) {
	var i = 0;
	for (var props in obj) {
		i++;
	}
	return i;
}