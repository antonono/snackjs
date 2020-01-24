class Ctrl_game{

    constructor(model,view){
      this.model = model ;
      this.view = view ;
      this.touchePress = null;
      this.direction = 'right' ;
      document.addEventListener('keydown', (event) => {
                                                      const nomTouche = event.key;this.touchePress='nomTouche';
                                                    }, false);
    }

    lancerPartie(){
      this.partie = 1 ;
      let snake = new Snake();

    }

    deroulementPartie(){
          //while(this.partie != 0){
          //}
          while(true){
              setTimeout(this.avancement, 500); //
          }
  }

  avancement(){
    var position ;
    var positionInv ;
    switch(this.touchePress){
      case "ArrowUp" : position = 'up';break;
      case "ArrowDown" : position = 'down';break;
      case "ArrowLeft" : position = 'left';break;
      case "ArrowRight" : position = 'right';break;
      default : break;
    }
    switch(this.direction){
      case "up" : positionInv = 'down';break;
      case "down" : positionInv = 'up';break;
      case "left" : positionInv = 'right';break;
      case "right" : positionInv = 'left';break;
    }
    if(position != positionInv){
          model.changeposition(position);
    }
  }


}

var game = new Ctrl_game();
game.deroulementPartie();
