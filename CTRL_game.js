class Ctrl_game{


    constructor(model,view,vitesse){
      this.touchePress = 'right';
      this.direction = 'right';
      this.etat = 0 ;
      this.score = 0 ;
      this.model = model ;
      this.view = view ;
      this.vitesse = vitesse ;

      document.addEventListener('keydown', (event) => {
                                                      const nomTouche = event.key;this.touchePress=nomTouche;
                                                    }, false);
    }


    deroulementPartie(){
          //while(this.partie != 0){
          //}
              setInterval(this.avancement, this.vitesse); //
  }

  avancement =() =>{
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
    //console.log(this);
    this.view.actualise(this.model.grille,this.model.positiontete,this.view.context,this.model.direction);
    if(this.etat == -1){
      finDePartie();
      clearInterval();
    }
    if(this.etat == 1 ){
      this.score++;
      this.model.changefruitposition();
    }
  }

  finDePartie(){
    alert("Game Over :  vous avez fait un score de "+this.score);
  }


}
