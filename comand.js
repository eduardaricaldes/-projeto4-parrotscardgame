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

function randomList(qtd) {
  const list = [];
  const check = [];
  while(list.length < qtd) {
    const sequence = Math.floor(Math.random() * (qtd)) + 1;

    if(check.indexOf(sequence) === -1) {
      const card = gameCards.find(function(gameCard){
        return gameCard.id === sequence;
      });
      list.push(card);
      check.push(sequence);
    }
  }
  return list;
}


const userResponseQtd = prompt('Com quantas cartas quer jogar?')
let html1 = '';
let html2 = '';

const game = document.querySelector(".game");

let qtdCards = 4;

if (userResponseQtd>=4 && userResponseQtd<=14 ){

  if (userResponseQtd % 2 == 0){
    qtdCards = userResponseQtd / 2;
    
  } else {
    //  correcao em caso seja impar, soma mais 1 para se tornar par
    qtdCards = (userResponseQtd + 1) / 2;

  } 
}

const pars1 = randomList(qtdCards);
const pars2 = randomList(qtdCards);


for(let i=0; i < pars1.length; i++){
  html1 += `
    <div class="card" card-id=${pars1[i].id}>
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
  html2 += `
    <div class="card" card-id=${pars2[i].id}>
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
