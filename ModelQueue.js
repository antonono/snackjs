class ModelQueue{
  constructor(precedent,suivant,positionx,positiony,direction) {
    this.precedent = precedent;
    this.suivant = suivant;
    this.posx = positionx;
    this.posy = positiony;
    if(suivant != undefined){
        this.suivant.precedent=this;
    }
  }

  changethenextnode(){
    if(this.suivant != undefined) {
      this.suivant.precedent=this;
    }
  }
  followprecedent = (x,y,grille,direction) => {
    var tab=[0,0,0];
    tab[0]=this.posx;
    tab[1]=this.posy;
    grille[this.posx][this.posy]=1;
    if(this.precedent=="tete"){
      if(this.posx - x == 2){
        this.posx--;
      }
      else if(this.posx - x ==-2){
        this.posx++
      }
      else if(this.posy - y ==-2){
        this.posy++;
      }
      else if(this.posy - y ==2){
        this.posy--;
      }
      else if(this.posy - y == -1 && this.posx - x == -1){
        if(direction=='right'){
          console.log("1");
          this.posy++;
        }
        else{
          console.log("2");
          this.posx++;
        }
      }
      else if(this.posy - y == 1 && this.posx - x == -1){
        if(direction=='up'){
          console.log("3");
          this.posx++;
        }
        else{
          console.log('4');
          this.posy--;
        }
      }
      else if(this.posy - y == 1 && this.posx - x == 1){//haut gauche
        if(direction=='left'){
          this.posy--;
          console.log("5");
        }
        else{
          console.log("6");
          this.posx--;
        }
      }
      else if(this.posy - y == -1 && this.posx - x == 1){//bas gauche
        if(direction=='down'){
          console.log("7");
          this.posx--;
        }
        else{
          console.log("8");
          this.posy++;
        }
      }
    }
    else{
      this.posx=x;
      this.posy=y;
    }
    grille[this.posx][this.posy]=-1;
    tab[2]=grille;
    return tab;
    /*
    console.log(x + " " + y+ " to");
    var xx,yy;
    xx=this.tabx;
    yy=this.taby;
    console.log(xx + " " + yy +" de");
    grille[this.posx][this.posy] = 1;
    this.tabx=x;
    this.taby=y;
    grille[this.posx][this.posy] = -1;
    var tab=[0,0,0];
    tab[0]=xx;
    tab[1]=yy;
    tab[2]=grille;
    return tab;
    */
  }


}
