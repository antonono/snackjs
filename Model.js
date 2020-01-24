class Model {
  constructor() {
    this.food = [getRandomInt(10)+1,getRandomInt(10)+1];
    this.positiontete = [5,5];
    this.taillequeue = 0;
    this.grille =      [[0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,1,1,1,1,1,1,1,1,1,1,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0]];
    this.grille[this.food[0]][this.food[1]]=3;
  }
  changeposition(position){
    switch (position) {
      case "left":this.positiontete[0]=this.positiontete[0]-1;break;
      case "right":this.positiontete[0]=this.positiontete[0]+1;break;
      case "up":this.positiontete[1]=this.positiontete[1]+1;break;
      case "down":this.positiontete[1]=this.positiontete[1]-1;break;
      default:break;
    }
  }
  changefruitposition(){
    this.grille[this.food[0]][this.food[1]]==1;
    this.food=[getRandomInt(10)+1,getRandomInt(10)+1];
    this.grille[this.food[0]][this.food[1]]==3;
  }
  addqueue(x,y){
    this.taillequeue++;
    this.grille[x][y]==3;
  }
}
