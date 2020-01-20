class Model {
  constructor() {}
  var grille = [[0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]];
  var positiontete = [4,4];
  var food = [Random(10)+1,Random(10)+1];
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
