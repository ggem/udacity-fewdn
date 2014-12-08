var moonWalkers = [
	"Neil Armstrong",
	"Buzz Aldrin",
	"Pete Conrad",
	"Alan Bean",
	"Alan Shepard",
	"Edgar Mitchell",
	"David Scott",
	"James Irwin",
	"John W Young",
	"Charles Duke",
	"Eugene Cernan",
	"Harrison Schmitt"
];

// given a name in "FirstName MiddleInitial LastName" form, returns the name
// in "LastName, FirstName MiddleInitial" form.  Note that MiddleInitial is optional.
function reverseName(name) {
	var names = name.split(' ');
	var size = names.length;
	return names[size-1] + ", " + names.slice(0,size-1).join(" ");
}

// convert the names from "First Last" format to "Last, First" format and then sorts them alphabetically.
function alphabetizer(names) {
	return names.map(reverseName).sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
