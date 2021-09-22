function quickSort(items) {
	const length = items.length;

	if (length <= 1) {
		return items;
	}
	const PIVOT = items[0];
	const GREATER = [];
	const LESSER = [];

	for (let i = 1; i < length; i++) {
		if (items[i] > PIVOT) {
			GREATER.push(items[i]);
		} else {
			LESSER.push(items[i]);
		}
	}

    console.log("GREATER", GREATER);
    console.log("LESSER", LESSER);

	let sorted = quickSort(LESSER);
	sorted.push(PIVOT);
    console.log("PIVOT", PIVOT);
	sorted = sorted.concat(quickSort(GREATER));

	return sorted;
}

// Implementation of quick sort

let ar = [0, 5, 3, 2, 2];
ar = quickSort(ar);
// Array after sort
console.log(ar);
