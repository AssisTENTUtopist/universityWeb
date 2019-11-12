/*alert ("Привет, мир");
let years = prompt('Сколько лет?', 100);
alert('Вам '+years+' лет!');

let  person = {
	age: 25,
	name: "Vitaly",
	contact: {
		email: "mail@mail.mail",
		phone: "phone"
	}
};

alert(person.contact.email);

function ChangeText()
	{
		document.getElementById('p|').innerHTML="CliCked";
		document.getElementById('p|').style.color="blue";
	}
*/

document.write(document.anchors.length);
document.write("<div><b>Bold</b> and <i>cursive</i></div>" +
	"<div>Number of anchors = " + document.querySelectorAll("a[name]").length
	+ "</div><div>The first is " + document.querySelectorAll("a[name]")[0].innerHTML
	+ "</div><div>Number of forms = " + document.getElementsByTagName('form').length
	+ "</div><div>The first is " + document.getElementsByTagName('form')[0].innerHTML
	+ "</div><div>Number of pics = " + document.getElementsByTagName('img').length
	+ "</div><div>The first is " + document.getElementsByTagName('img')[0].id
	+ "</div><div>Number of refs = " + document.querySelectorAll("a[href]").length
	+ "</div><div>The first is " + document.querySelectorAll("a[href]")[0].innerHTML
	+ "</div><div>Name of domain = " + location.hostname
	+ "</div><div>Name of URL = " + document.URL
	+ "</div><div>Name of title = " + document.title
	+ "</div><div>Name of URL = " + location.href + "</div>");
x = document.getElementById("butter");
document.write("<div>Name of button is " +
	x.name + ", type is " + x.type + ", value is " + x.value);