export class Handler {
  constructor(game) {
    this.game = game;
    this.console = document.getElementById('console');
    this.devMessage(' dev cheats initialized \n' +
      ' 2 - clipping \n' +
      ' 3 - invincibility \n' +
      ' 4 - super speed \n' +
      ' 1 - all cheats '
    );
  }

  devMessage(msg) {
    let styles = [
      'background: linear-gradient(#ffffff, #ff00ff)',
      'border: 1px solid #3E0E02',
      'color: black',
      'display: block',
      'line-height: 40px',
      'text-align: center',
      'font-size: 18px',
      'font-weight: bold',
    ].join(';');

    console.log(`%c${msg}`, styles);
  }

  getWidth() {
    return this.game.getWidth();
  }

  getHeight() {
    return this.game.getHeight();
  }

  getKeyManager() {
    return this.game.getKeyManager();
  }

  getGameCamera() {
    return this.game.getGameCamera();
  }

  getWorld() {
    return this.world;
  }

  setWorld(world) {
    this.world = world;
  }

  getGame() {
    return this.game;
  }

  // getSoundManager(){
  //   return soundManager;
  // },
  // setSoundManager(sm){
  //   soundManager = sm;
  // }
}
