class View {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
  }

  afficheimage(positionx,positiony,context,src){
    let img = new Image();
    img.src = src;
    img.onload = () => {
      context.drawImage(img,positionx*58,positiony*58,58,58);
    }
  }

  affichefondecran(context){
    let img = new Image();
    img.src = './images/boardgame.png';
    img.onload = () => {
      context.drawImage(img,0,0,700,700);
    }
  }


  actualise=(grille,positiontete,context) => {
    //this.affichefondecran(context);
    for(var i=0;i<12;i++){
      for(var j=0;j<12;j++){
        if(grille[i][j]==2){
            this.afficheimage(i,j,context,'./images/food.png');
        }
        if(grille[i][j]==0){
          this.afficheimage(i,j,context,'./images/wall.png');
        }
        if(grille[i][j]==-1){
          this.afficheimage(i,j,context,'./images/bodysnake.png');
        }
        if(grille[i][j]==1){
          this.afficheimage(i,j,context,'./images/boardgame.png');
        }
      }
    }
    this.afficheimage(positiontete[0],positiontete[1],context,'./images/headsnake.png');
  }

}
