import Model from 'demo/model';
//model is the game itself
import View from 'demo/view';
// model on screen
import Controller from 'demo/controller';
//control of the game 

// Initialize the controller I guess
const game = new Controller(Model, View);
game.start();
