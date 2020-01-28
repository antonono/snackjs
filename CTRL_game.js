class Ctrl_game{


    constructor(model,view){
      this.touchePress = 'right';
      this.direction = 'right';
      this.etat = 1 ;
      this.model = model ;
      this.view = view ;

      document.addEventListener('keydown', (event) => {
                                                      const nomTouche = event.key;this.touchePress=nomTouche;
                                                    }, false);
    }

    lancerPartie(){
      this.partie = 1 ;
      let snake = new Snake();

    }

    deroulementPartie(){
      setInterval(this.avancement, 300); //
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
    this.view.actualise(this.model.grille,this.model.positiontete,this.view.context,this.model.direction);
    //console.log(this);
  }


}
