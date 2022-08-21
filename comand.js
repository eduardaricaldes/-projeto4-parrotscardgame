const gameCards=[
  {
    id:1,
    img:"img/metalparrot.gif",  
  },
  {
    id:2,
    img:"img/explodyparrot.gif",  
  },
  {
    id:3,
    img:"img/fiestaparrot.gif",  
  },
  {
    id:4,
    img:"img/revertitparrot.gif",  
  },
  {
    id:5,
    img:"img/tripletsparrot.gif",  
  },
  {

    id:6,
    img:"img/unicornparrot.gif",  
  },
  {
    id:7,
    img:"img/bobrossparrot.gif",  
  }, 
  {
    id:8,
    img:"img/mustacheparrot.gif",  
  },
];

//////// PROMPT
let userResponseQtd = prompt('Com quantas cartas quer jogar?')

let qtdCards = 4;

userResponseQtd = parseInt(userResponseQtd);

let isOk = true;
while(isOk){
  // verifica se valor esta dentro da limitacao
  if(userResponseQtd >=4 && userResponseQtd <= 14) {
    // verifica se é par
    if (userResponseQtd % 2 == 0){
      qtdCards = userResponseQtd / 2;  
      isOk = false;
    }else {
      userResponseQtd = prompt('Com quantas cartas quer jogar?');
      userResponseQtd = parseInt(userResponseQtd);
    }
  }else {
    userResponseQtd = prompt('Com quantas cartas quer jogar?');
    userResponseQtd = parseInt(userResponseQtd);
  }
}

///// criar cards
function randomList(qtd) {
  const list = [];
  const check = [];
  while(list.length < qtd) {
    const randomNumber = Math.floor(Math.random() * (qtd)) + 1;
    
    if(check.indexOf(randomNumber) === -1) {
      const card = gameCards.find(function(gameCard){
        return gameCard.id === randomNumber;
      });

      list.push(card);
      check.push(randomNumber);
    }
  }
  return list;
}

const pars1 = randomList(qtdCards);
const pars2 = randomList(qtdCards);

const game = document.querySelector(".game");

let html1 = '';
let html2 = '';
for(let i=0; i < pars1.length; i++){
  html1 = html1 + `
    <div class="card" card-id=${pars1[i].id} onclick=flip(this)>
      <div class="face front">
        <img src="img/front.png" />
      </div>
      <div class="face back">
        <img src=${pars1[i].img} /> 
      </div>
    </div>
  `;
}

for(let i=0; i < pars2.length; i++){
  html2 = html2 + `
    <div class="card" card-id=${pars2[i].id} onclick=flip(this)>
      <div class="face front">
        <img src="img/front.png" />
      </div>
      <div class="face back">
        <img src=${pars2[i].img} />
      </div>
    </div>
  `;
}

game.innerHTML = html1 + html2;

// FUNCOES
let firstCard;
let secondCard;

function flip(element){
  element.classList.add('flip');
  if (firstCard=== undefined){
    firstCard=element;
    return false;
  }

  secondCard=element;
  matchCards();
}
function unflip(element){
  element.classList.remove('flip');
}
function matchCards(){

  const firstCardId=firstCard.getAttribute('card-id');
  const secondCardId=secondCard.getAttribute('card-id');
  if( firstCardId===secondCardId ){
    firstCard=undefined;
    secondCard=undefined; 
  }else{
    setTimeout(() => {
      unflip(firstCard);
      unflip(secondCard);
      firstCard=undefined;
      secondCard=undefined;
    }, 1000);
  }
}

