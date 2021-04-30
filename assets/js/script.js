/* Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

Tramite la funzione .forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

Milestone 2
Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

Milestone 3
Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome e colore e colore e opacità del fiocco per ogni gatto. */
$(document).ready(function(){
 
  const arrCats = [
    {
      name:'fufy',
      age: 3,
      color: '#CE8580',
      gender:'male'
    },
    {
      name:'lala',
      age: 2,
      color: '#827D7D',
      gender:'female'
    },
    {
      name:'pallina',
      age: 3,
      color: '#866241',
      gender:'female'
    },
    {
      name:'micio',
      age: 5,
      color: '#D76242',
      gender:'male'
    },
    {
      name:'briciola',
      age: 1,
      color: '#000000',
      gender:'female'
    },
  ];

});