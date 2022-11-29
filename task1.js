let json =
`[{
"image": "images/batman.jpg",
  "name": "Бэтмен",
"universe": "DC Comics",
"alterego": "Брюс Уэйн",
"occupation": "борец с преступностью, филантроп, миллиардер",
"characteristics": "интеллект, ловкость",
"friends": "Робин, Бэтгерл"
},
{
  "image": "images/superman.jpg",
"name": "Супермен",
"universe": "DC Comics",
"alterego": "Кларк Кент",
"occupation": "борец за справедливость",
"characteristics": "непробиваемость, суперсила, полет, самоисцеление, суперзрение, суперслух",
"friends": "собака Крипто"
},
{
  "image": "images/ironman.jpg",
  "name": "Железный человек",
"universe": "Marvel Comics",
"alterego": "Тони Старк",
"occupation": "гений, филантроп,миллиардер, плейбой",
"characteristics": "интеллект, обширные познания науки и техники, связь со всемирной поутиной, бронекостюмы",
"friends": "Мстители"
},
{
  "image": "images/spiderman.jpg",
  "name": "Человек-паук",
"universe": "DC Comics",
"alterego": "Питер Паркер",
"occupation": "борец за справедливость, студент, фотограф",
"characteristics": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
"friends": "Мстители, Фантастическая четверка, Люди Икс"
}
]`
document.addEventListener("DOMContentLoaded", function(event){
  let heroes = JSON.parse(json);
  const imageOut = document.querySelector('.heroes__photo');
  const heroesInfo = document.querySelector('.heroes__about');
  const heroName = document.querySelector('.heroes__name');
  for (let heroe of heroes){
    let img = document.createElement('img');
    img.setAttribute('data',heroe.image)
    img.src = heroe.image;
imageOut.append(img)
  }
  imageOut.addEventListener('click', showInfo)
  function showInfo(event) {
const key = event.target.attributes.data.value
if (key === undefined) {
  return true;
}
heroName.textContent = heroes[key].name // и тут я не успеваю разобраться как по ключу найти нужные свойства объекта
  }
})