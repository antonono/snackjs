function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Model {
  constructor() {
    this.food = [getRandomInt(10)+1,getRandomInt(10)+1];
    this.positiontete = [4,4];
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

class View {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
  }



  actualise(grille,positiontete) {
    var img = new Image();
    for(var i=1;i<11;i++){
      for(var j=1;j<11;j++){
        if(grille[i][j]==3){
          this.context.drawImage(img,j*58,i*58,58,58);
        }
      }
    }
    img.source = './images/food.png';
  }

}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

const app = new Controller(new Model(), new View());
app.model.changefruitposition();
console.log(app.model.food);
console.log(app.model.grille);
app.view.actualise(app.model.grille,app.model.positiontete);
