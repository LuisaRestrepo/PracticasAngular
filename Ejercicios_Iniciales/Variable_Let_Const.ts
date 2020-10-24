//Definir variable en javascript con let, se puede usar var
//Cuando se utiliza let, las variables con mismo nombre, en diferentes scopes quedan en espacio de memoria diferente
//si dentro de un if, se cambia la misma variable se debe usar var

var mensaje1 = 'Hola';
console.log(mensaje1);

let mensaje = 'Hola';

if(true){ let mensaje = 'Mundo'}

console.log(mensaje);

//Si nunca se cambia la variable usar const
const M1 = 123;

//Tipo de variables
let cualquiercosa; // es de tipo any, evitar trabajar con esta
let boleano: boolean = true;
let hoy:Date = new Date();

//crear objetos
let spiderman = {nombre: 'Edad', edad: 30};
spiderman = {nombre:'Luisa', edad:28};

let nombre:string = "Luisa";
let apellido:string = "Restrepo";
let edad:number = 26;

//concatendado normal
//let texto = "Hola, " + nombre + " " + apellido + "("+ edad +")";
//concaternarlo con templates literales
let texto = `Hola,
${ nombre } ${ apellido }
(${ edad })`;

//processamiento de información con template literales
let texto3 = `Hola,
${ nombre } ${ apellido }
(${ edad + 100})`;

function getEdad(){return 100+100+300;}
let texto4 = `Hola,
${ nombre } ${ apellido }
(${ getEdad()})`;

let texto2:string = `${ 1+2}`;

console.log(texto2);
