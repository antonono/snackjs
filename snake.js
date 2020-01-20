class Model {
  constructor() {}
  var grille = [[0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0],
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,2,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]
                [0,1,1,1,1,1,1,1,1,1,1,0]];
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
