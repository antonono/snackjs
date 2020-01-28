function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var cpt =0;
const IMG1 = new Image();
const IMG2 = new Image();
const IMG3 = new Image();
const IMG4 = new Image();
const IMG5 = new Image();
const IMG6 = new Image();
IMG1.src='./images/bodysnake.png';
IMG2.src='./images/boardgame.png';
IMG3.src='./images/food.png';
IMG4.src='./images/headsnake.png';
IMG5.src='./images/score.png';
IMG6.src='./images/wall.png';
IMG2.addEventListener("load",verifchargement(lancerapp));
IMG1.addEventListener("load",verifchargement(lancerapp));
IMG3.addEventListener("load",verifchargement(lancerapp));
IMG4.addEventListener("load",verifchargement(lancerapp));
IMG5.addEventListener("load",verifchargement(lancerapp));
IMG6.addEventListener("load",verifchargement(lancerapp));


function verifchargement(callback){
  if(cpt>=5){
    callback();
  }
  else {
    cpt++;
  }
}

function lancerapp(){
  const app = new Ctrl_game(new Model(), new View());
  app.deroulementPartie();
}
