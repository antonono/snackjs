class View {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
  }

  afficheimage(positionx,positiony,context,image){
      context.drawImage(image,positionx*58,positiony*58,58,58);
    }

  affichetete(positionx,positiony,context,image,direction){
    context.save();
    switch (direction) {
      case "up":
      context.translate(350,350);
      context.rotate(Math.PI);
      context.translate(-350,-350);
      context.drawImage(image,700-58-positionx*58,700-58-positiony*58,58,58);
      context.rotate(-Math.PI);
      context.restore();
      break;

      case "left":
      context.translate(350,350);
      context.rotate(Math.PI/2);
      context.translate(-350,-350);
      context.drawImage(image,positiony*58,700-58-positionx*58,58,58);
      context.rotate(-Math.PI/2);
      context.restore();
      break;
      case "right":
      context.translate(350,350);
      context.rotate(3*Math.PI/2);
      context.translate(-350,-350);
      context.drawImage(image,700-58-positiony*58,positionx*58,58,58);
      context.rotate(-3*Math.PI/2);
      context.restore();
      break;
      case "down":
      context.drawImage(image,positionx*58,positiony*58,58,58);
      break;
      default:break;
    }


    //
    context.restore();
  }


  actualise=(grille,positiontete,context,direction) => {
    for(var i=0;i<12;i++){
      for(var j=0;j<12;j++){
        if(grille[i][j]==2){
            this.afficheimage(i,j,context,IMG3);
        }
        if(grille[i][j]==0){
          this.afficheimage(i,j,context,IMG6);
        }
        if(grille[i][j]==-1){
          this.afficheimage(i,j,context,IMG1);
        }
        if(grille[i][j]==1){
          this.afficheimage(i,j,context,IMG2);
        }
      }
    }
   this.affichetete(positiontete[0],positiontete[1],context,IMG4,direction);
//    this.afficheimage(positiontete[0],positiontete[1],context,'./images/headsnake.png');
  }

  afficheScore(score){
    const divScore = document.getElementById("score");
    console.log(divScore);
    divScore.innerHTML = "score = "+score ;
  }

}
