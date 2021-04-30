/* Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.

Milestone 1
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

  //Milestone 1
  arrCats.forEach((cat) => {
     $('#mailes-1 ul').append(listGenerator(cat.color, cat.name));
  });
  //end Milestone 1

  //Milestone 2
  const pink = '#FF00E6';
  const blue = '#0084FF';
  const arrNewCats = arrCats.map((cat) => {
    let color = (cat.gender === 'female') ? pink : blue ;
    let opacity = cat.age / 10;
    return {
      ...cat,
      ribbon: {
        color,
        opacity
      }
    };
  })//end map
  

  const femaleCats = arrNewCats.filter((cat) => cat.gender === 'female');
  const maleCats = arrNewCats.filter((cat) => cat.gender === 'male');

  femaleCats.forEach((cat) => {
    $('#mailes-2-female ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color,cat.ribbon.opacity));
  });
  maleCats.forEach((cat) => {
    $('#mailes-2-male ul').append(listGenerator(cat.color, cat.name, cat.ribbon.color,cat.ribbon.opacity));
  });
  //end Milestone 2

  //Milestone 3
  const catsOrder = [...femaleCats,...maleCats];
  const targetCats = catsOrder.map((cat) =>{
    const {name, color, ribbon} = cat
    $('#mailes-3 ul').append(listGenerator(color,name,ribbon.color,ribbon.opacity));
    return {name, color, ribbon};
  })
  //end Milestone 3

});

//funzioni 
function listGenerator (colorCat, name, ...ribbon){
  let tagRibbon ="";
  if(ribbon.length > 0){
    tagRibbon = `<i class="fas fa-ribbon" style="color:${ribbon[0]}; opacity:${ribbon[1]};"></i>`
  }
  let html = `
    <li>
      <i class="fas fa-cat" style="color:${colorCat}"></i>
      ${tagRibbon}
      <span>${name}</span>
    </li>
  `
  return html
}