function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Model {
  constructor() {
    this.food = [getRandomInt(10)+1,getRandomInt(10)+1];
    console.log(this.food[0] + " " + this.food[1]);
  }
  grille =      [[0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0]];
  positiontete = [4,4];
  food = [getRandomInt(10)+1,getRandomInt(10)+1];
}

class View {
  constructor() {}

}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

const app = new Controller(new Model(), new View())
var modele = new Model();
