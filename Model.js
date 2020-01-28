class Model {
  constructor() {
    this.food = [getRandomInt(10)+1,getRandomInt(10)+1];
    this.direction = "down";
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
    this.grille[this.food[0]][this.food[1]]=2;
    console.log(this.food[0] + " " + this.food[1]);
  }


  changeposition = (position) =>{
    switch (position) {
      case "left":this.positiontete[0]=this.positiontete[0]-1;this.direction="left";break;
      case "right":this.positiontete[0]=this.positiontete[0]+1;this.direction="right";break;
      case "up":this.positiontete[1]=this.positiontete[1]-1;this.direction="up";break;
      case "down":this.positiontete[1]=this.positiontete[1]+1;this.direction="down";break;
      default:break;
    }
    console.log(this.grille[this.positiontete[0]][this.positiontete[1]]);
    if(this.grille[this.positiontete[0]][this.positiontete[1]]<=0){
      console.log("mur");
      return -1;
    }

    if(this.grille[this.positiontete[0]][this.positiontete[1]]==2)
    {
        console.log("fruit");
        return 1;
    }
    return 0;
  }

  changefruitposition(){
    this.grille[this.food[0]][this.food[1]]==1;
    this.food=[getRandomInt(10)+1,getRandomInt(10)+1];
    this.grille[this.food[0]][this.food[1]]==2;
  }

  addqueue(x,y){
    this.taillequeue++;
    this.grille[x][y]==-1;
  }
}
