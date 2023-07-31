export const friendlyList = (list: string[]) => {
	if (list.length === 0) {
		return "";
	}

	if (list.length === 1) {
		return list[0];
	}

	let comma = false;

	list.forEach((element) => {
		if (element.includes(",")) {
			comma = true;
		}
	});

	if (comma) {
		return `${list.slice(0, -1).join("; ")}; and ${list.slice(-1)}`;
	}

	if (list.length === 2) {
		return `${list[0]} and ${list[1]}`;
	}

	return `${list.slice(0, -1).join(", ")}, and ${list.slice(-1)}`;
};
