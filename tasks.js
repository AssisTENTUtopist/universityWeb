let fistring = "Proposal sentence offer and suggestion.";
document.write(fistring + "<div/>");
document.write("Number of words " + fistring.split(" ").length
	 + " Number of letters: " + fistring.length);
document.write("<div/>You better not to forget<b> to close them");
document.write("<div/>document.write goes after script tag "
	+ "and script tag needs to be written in that specific tag");
document.write("<div/>Name of URL = " + location.href + " with protocol "
	+ location.protocol + " pathname " + location.pathname.split(".")[0]
	+ " and extension " + location.pathname.split(".")[1]);
document.write("<div/> Substr" + window.location.search.replace('?',' ').split('&'));
let maxWidth = 0;
let sumOfHeights = 0;
for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
	if (document.getElementsByTagName('img')[i].width > maxWidth)
		maxWidth = document.getElementsByTagName('img')[i].width;
	sumOfHeights += document.getElementsByTagName('img')[i].height;
}
document.write("<div/>Number of anchors = " + document.querySelectorAll("a[name]").length
	+ "<div/>The first is " + document.querySelectorAll("a[name]")[0].innerHTML
	+ "<div/>Number of refs = " + document.querySelectorAll("a[href]").length
	+ "<div/>Number of imgs " + + document.getElementsByTagName('img').length
	+ "<div/>The width of first is " + document.getElementsByTagName('img')[0].width
	+ "<div/>The max width is " + maxWidth + "<div/>The sum of heights is " + sumOfHeights);
for (var i = 0; i < 10; i++) {
	document.write("<form name='" + (i+1) + "'>"
		+ "<input type='button' class='pic' value='Show name of form'"
		+ "onClick='alert(&quot;Show name of form&quot;)'></input>"
		+ "<input type='button' class='pic' value='Affiliation'"
		+ "onClick='alert(" + (i+1) + ")'></input>"
		+ "<input type='text'></input>"
		+ "<input type='button' class='pic' value='Reset'"
		+ "onClick='document.getElementsByName("+ (i+1) +")[0].reset()'></input>"
		+ "<input type='button' class='pic' value='Amount of fields'"
		+ "onClick='alert(document.getElementsByName("+ (i+1) +")[0].elements.length)'></input>"
		+ "</form>");
}
document.write("<div/>" + document.getElementsByTagName('form')[1].name);
for (var i = 3; i < document.getElementsByTagName('form').length; i+= 2) {
	document.write(", " + document.getElementsByTagName('form')[i].name);
}
let refs = document.querySelectorAll("a[href]");

document.write("<div/>table");

let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

for (var j = 0; j < refs.length; j++) {
	let bool=1;
	for (var i = 0; i < j-1; i++) {
		if (refs[j].innerHTML==refs[i].innerHTML) {bool=0}
	}
	if (bool) {
		let row = document.createElement("tr");
		let cell = document.createElement("td");
		let cellText = document.createElement("div");
		cellText.textContent = refs[j].innerHTML;
		cell.appendChild(cellText);
		row.appendChild(cell);

		cell = document.createElement("td");
		cellText = document.createElement("div");
		let cell2 = document.createElement("td");
		let cellText2 = document.createElement("div");
		let count = 0;
		let comma = 0;
		for (var i = 0; i < refs.length; i++) {
			if (refs[j].innerHTML==refs[i].innerHTML) {
				count+=1;
				if (comma) {
					cellText2.textContent+=", " + refs[i];
				} else {
					cellText2.textContent+=refs[i];
				}
				comma = 1;
			}
		}
		cellText.textContent = count;
		cell.appendChild(cellText);
		row.appendChild(cell);
		cell2.appendChild(cellText2);
		row.appendChild(cell2);

		tblBody.appendChild(row);
	}
}
tbl.appendChild(tblBody);
document.getElementsByTagName('body')[0].appendChild(tbl);
tbl.setAttribute('border', '2');