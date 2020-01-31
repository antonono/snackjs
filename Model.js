class Model {
  constructor() {
    this.food = [getRandomInt(10)+1,getRandomInt(10)+1];
    this.direction = "down";
    this.positiontete = [5,5];
    this.taillequeue = 0;
    this.queue = 0;
    this.needqueue = false;
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
  }

  avancequeue = () => {
    var tab,tab2;
    tab=this.queue.followprecedent(this.positiontete[0],this.positiontete[1],this.grille,this.direction);
    this.grille=tab[2];
    let queue = this.queue;
    while(queue.suivant != undefined){
      tab2=queue.suivant.followprecedent(tab[0],tab[1],this.grille);
      this.grille=tab2[2];
      tab=tab2;
      queue = queue.suivant;
    }

  }

  changeposition = (position) =>{
    switch (position) {
      case "left":this.positiontete[0]=this.positiontete[0]-1;this.direction="left";break;
      case "right":this.positiontete[0]=this.positiontete[0]+1;this.direction="right";break;
      case "up":this.positiontete[1]=this.positiontete[1]-1;this.direction="up";break;
      case "down":this.positiontete[1]=this.positiontete[1]+1;this.direction="down";break;
      default:break;
    }
    if(this.grille[this.positiontete[0]][this.positiontete[1]]<=0){
      return -1;
    }

    if(this.grille[this.positiontete[0]][this.positiontete[1]]==2)
    {
        return 1;
    }
    return 0;
  }

  changefruitposition = () => {
    this.grille[this.food[0]][this.food[1]]=1;
    this.posqueuex = this.food[0];
    this.posqueuey = this.food[1];
    this.food=[getRandomInt(10)+1,getRandomInt(10)+1];
    this.grille[this.food[0]][this.food[1]]=2;
    this.needqueue= true;
  }

  addqueue(x,y){
    if(this.queue==0){
      this.queue=new ModelQueue("tete",undefined,x,y,this.direction);
      this.grille[x][y]=-1;
    }
    else {
      var qe = this.queue;
      this.queue=new ModelQueue("tete",qe,x,y,this.direction);
      qe.precedent=this.queue;
      this.grille[x][y]=-1;
    }
    this.taillequeue++;

    this.needqueue=false;
  }
}
