class Ctrl_game{


    constructor(model,view,vitesse){
      this.touchePress = 'right';
      this.direction = 'right';
      this.etat = 0 ;
      this.score = 0 ;
      this.model = model ;
      this.view = view ;
      this.vitesse = vitesse ;
      this.intro() ;
      document.addEventListener('keydown', (event) => {
                                                      const nomTouche = event.key;this.touchePress=nomTouche;
                                                    }, false);
    }

    intro =() =>{
      this.dialogIntro = document.getElementById("dialogIntro");
      dialogIntro.showModal();
    }


    deroulementPartie(){
              this.dialogIntro.close();
              this.pseudo = document.getElementById("pseudoInput").value;
              this.inter = setInterval(this.avancement, this.vitesse); //
              this.view.afficheScore(this.score);
          }

  avancement =() =>{
    if(this.etat != -1){
      var position ;
      var positionInv ;
      switch(this.touchePress){
        case "ArrowUp" : position = 'up';break;
        case "ArrowDown" : position = 'down';break;
        case "ArrowLeft" : position = 'left';break;
        case "ArrowRight" : position = 'right';break;
        default : position = 'right';break;
      }
      switch(this.direction){
        case "up" : positionInv = 'down';break;
        case "down" : positionInv = 'up';break;
        case "left" : positionInv = 'right';break;
        case "right" : positionInv = 'left';break;
      }
      if(position != positionInv){
            this.etat = this.model.changeposition(position);
            this.direction = position ;
      }
      else{
        this.etat = this.model.changeposition(this.direction);
      }
      if(this.model.queue != 0){
        if(this.model.needqueue == false)
          this.model.avancequeue()
      }
      this.model.needqueue && this.model.addqueue(this.model.posqueuex,this.model.posqueuey);
      if(this.etat != -1){
        this.view.actualise(this.model.grille,this.model.positiontete,this.view.context,this.model.direction);
      }
      if(this.etat == -1){
        this.finDePartie();
        clearInterval(this.inter);
      }
      if(this.etat == 1 ){
        this.score++;
        this.view.afficheScore(this.score);
        this.model.changefruitposition();
      }
    }
  }

  finDePartie(){
    var tabScore = JSON.parse(localStorage.getItem('scoreSnake2'));
    if(tabScore == null){
      tabScore = Array();
      tabScore.push({
          Pseudo: this.pseudo,
          Score: this.score
      });
      localStorage.setItem('scoreSnake2',JSON.stringify(tabScore));
    }
    else{
      if(tabScore.length < 6){
        tabScore.push({
            Pseudo: this.pseudo,
            Score: this.score
        });
        tabScore.sort(function (a, b) {
            return b.Score - a.Score;
        });
        localStorage.setItem('scoreSnake2',JSON.stringify(tabScore));
      }
      else{
        if(tabScore[5].Score < this.score){
          tabScore[5].Pseudo = this.pseudo ;
          tabScore[5].Score = this.score ;
          tabScore.sort(function (a, b) {
              return b.Score - a.Score;
          });
          localStorage.setItem('scoreSnake2',JSON.stringify(tabScore));
        }
      }
    }
    console.log(localStorage.getItem('scoreSnake2'));
    var $dialog = document.getElementById('mydialog');
    $dialog.showModal();
    var titre = document.getElementById('titreScore');
    titre.innerHTML='Bravo vous avez fait un score de '+this.score;
    var tab = document.getElementById("tabeauScore");
    for(var i= 0; i < tabScore.length; i++)
    {
      var tr = document.createElement("TR");
      var td1 = document.createElement("TD");
      var td2 = document.createElement("TD");
      var td3 = document.createElement("TD");

      console.log(tabScore[i]);

      td1.appendChild(document.createTextNode(i+1));
      td2.appendChild(document.createTextNode(tabScore[i].Pseudo));
      td3.appendChild(document.createTextNode(tabScore[i].Score));
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      tab.appendChild(tr);
    }

  }


 isValid(parm) {
  var val = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var i = 0 ;
  if (parm == "") return false;
  if (parm == null) return false;
  for (i; i<parm.length; i++) {
    if (val.indexOf(parm.charAt(i),0) == -1) return false;
  }
  return true;
}


}
