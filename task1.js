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
const imageOut = document.querySelector('.heroes__photo');
const heroName = document.querySelector('.heroes__name');
const heroUniv = document.querySelector('.heroes__universe');
const heroAlt = document.querySelector('.heroes__alterego');
const heroOccup = document.querySelector('.heroes__occupation');
const heroChar = document.querySelector('.heroes__characteristics');

const heroRating = document.querySelector('.heroes-rating');  
const radingText = document.querySelector('.heroes-rating__text');
let btn = document.querySelector('.heroes-rating__btn');

let heroes = JSON.parse(json);
const ratings = [1,2,3,4,5,6,7,8,9,10];

  for (let i = 0; i < heroes.length; i++) {
    let img = document.createElement('img');
    img.setAttribute('data-key', i)
    img.src = heroes[i].image;
imageOut.append(img)
  }

  for (let i = 0; i < ratings.length; i++) {
    let input = document.createElement('input');
    input.setAttribute('data-rate', i+1);
    input.type = 'radio';
    input.name = 'hero-rating'
    heroRating.append(input)
  }

  imageOut.addEventListener('click', showInfo)
  function showInfo (event){
      const key = event.target.dataset['key'];
     // console.log(key);
      if (key === undefined) {
          return true;
        }
heroName.textContent = heroes[key].name
heroUniv.textContent = heroes[key].universe
heroAlt.textContent = heroes[key].alterego
heroOccup.textContent = heroes[key].occupation
heroChar.textContent = heroes[key].characteristics
radingText.innerHTML = `Оцените героя от 1 до 10`
heroRating.classList.add('act');


btn = document.createElement('button');
btn.innerHTML = "Ok";
radingText.append(btn)

document.querySelectorAll('.heroes__photo img').forEach(item => item.classList.remove('active'));
event.target.classList.add('active');

  }

  //btn.addEventListener('click',  setValue)

  heroRating.addEventListener('change', setValue)
  function setValue (element) {
    let heroValue = element.target.dataset['rate'];
console.log(heroValue);
btn.addEventListener('click', function () {
localStorage.setItem('heroValue', heroValue);
let localName = document.querySelector('.heroes__name').textContent;
localStorage.setItem('heroName', localName);
    console.log(localStorage.getItem('heroValue'));
    console.log(localStorage.getItem('heroName'));
    //let heroValues.push(heroes.name, localValue)

}
 )
    }