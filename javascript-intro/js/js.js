/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!');
console.log("Hello World");

/* Her er en konsol, der skriver Mojn */
console.log("Mojn du");//her er en kommentar

/** Variabler: Strenge */
let a = "Huske at skirve til Michael i aften...";
let b = "23";
let c = 23;

/** Js kan regne */
console.log(b+b);
console.log(c*c);

/** Booleans: true eller flase */
let julemandenEksisterer = true;
console.log("Findes Julemanden?" + julemandenEksisterer);

let aftensmad = false;

let vaer_23_booked = false;

/** Kontrolstruktur 
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }
*/

  /** Konkatenering "kliste sammen" med + */
let header = "<h1>" + a + "</h1>";
console.log(header);

document.getElementById("hej").innerHTML = header;
document.getElementById("hej").style.color = "blue";