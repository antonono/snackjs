function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




const app = new Ctrl_game(new Model(), new View());
app.model.changefruitposition();
app.view.actualise(app.model.grille,app.model.positiontete,app.view.context);
