function getRelationship(a, b) {
	if (isNaN(a))
		if (isNaN(b))
			return showError(a + " and " + b + " are not numbers");
		else
			return showError(a + " is not a number");
	else if (isNaN(b))
		return showError(b + " is not a number");
	else
		return getRelationshipNumbers(a, b);
}

function showError(reason) {
	return "Can't compare relationships because " + reason;
}

// this function assumes the arguments are numbers.
function getRelationshipNumbers(a, b) {
	if (a < b)
		return "<";
	else if (a > b)
		return ">";
	else
		return "=";
}
