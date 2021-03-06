class Scene_levelSelect extends Phaser.Scene {

  constructor ()
  {
    super('LevelSelect');
  }

  create() {
    this.add.image(480, 360, 'bg_menu');
    this.addButton(250, 50, "return", "return")
    for(var i = 0; i <= 9; i++) {
      var nrow = 5
      var xi = i % nrow
      var yi = Math.floor(i/nrow)
      this.addButton(450+ 160*yi, 150+30*xi, "Level "+i, "level "+i)
    }
    this.addButton(450+ 80, 150+180, "Level end", "level end")


    this.input.on('gameobjectover', function (pointer, button)
    {
        button.setFrame(1);
    }, this);
    this.input.on('gameobjectout', function (pointer, button)
    {
        button.setFrame(0);
    }, this);

    this.input.on('gameobjectup', function (pointer, button)
    {
      if(button.getData('index') === 'return') {
        this.scene.resume('MainMenu')
        this.scene.remove('LevelSelect')
      } else if (button.getData('index').includes('level')) {
        game.scene.add('GameScene', new Scene_game(), true, {level: button.getData('index').split(" ")[1]})
        game.scene.add('UIScene', new Scene_UI(), true)
        this.scene.remove('LevelSelect')
        //launch and then remove scene to prevent crash on stopping a paused matter physics
        this.scene.resume('MainMenu')
        game.scene.getScene('MainMenu').bgMusic.stop();
        this.scene.remove('MainMenu')
      }


    }, this);
  }

  addButton(x, y, text, scene) {
    var button = this.add.sprite(x, y, 'button', 0).setInteractive()
    button.setData('index', scene)
    var startText = this.add.bitmapText(x, y, 'editundo', text)
    button.displayWidth = startText.width*1.3
    startText.setOrigin(0.5,0.5)
  }

  destroy() {
    this.destroyed = true;
    this.events.off("shutdown", this.destroy, this);
    this.events.off("destroy", this.destroy, this);

    this.input.off('gameobjectover', function (pointer, button){})
    this.input.off('gameobjectout', function (pointer, button){})
    this.input.off('gameobjectup', function (pointer, button){})
  }

}
