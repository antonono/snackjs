class View {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
  }

  afficheimage(positionx,positiony,context,src){
    let img = new Image();
    img.src = src;
    img.onload = function() {
      context.drawImage(img,positionx*58,positiony*58,58,58);
    }
  }


  actualise(grille,positiontete,context) {
    //this.afficheimage(positiontete[0],positiontete[1],context,'./images/headsnake.png');
    for(var i=0;i<12;i++){
      for(var j=0;j<12;j++){
        if(grille[i][j]==3){
            this.afficheimage(i,j,context,'./images/food.png');
        }
        if(grille[i][j]==0){
          this.afficheimage(i,j,context,'./images/wall.png');
        }
      }
    }
  }

  intervalleimage(){
    this.changefruitposition;
    this.actualise(this.grille,this.positiontete,this.context);
  }

}
