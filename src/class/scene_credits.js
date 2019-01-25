class Scene_credits extends Phaser.Scene {

  constructor ()
  {
    super('Credits');
  }

  create () {
    this.add.bitmapText(100, 200, 'editundo', "Created by Daniel Hoare")
    this.add.bitmapText(50, 400, 'editundo', "'Almost New', 'Intended Force' & 'Heroic Age'")
    this.add.bitmapText(50, 430, 'editundo', "       - Kevin MacLeod (incompetech.com)")
    this.add.bitmapText(50, 460, 'editundo', "Licensed under Creative Commons: By Attribution 3.0")
    this.add.bitmapText(100, 600, 'editundo', "Special thanks to Joellen for her patience")

    var text = this.add.bitmapText(300, 50, 'editundo', "Click to return")
    text.setTint(0xcf4ed8)

    this.input.on("pointerup", function() {
      this.scene.launch('MainMenu')
      this.scene.remove("Credits")
    }, this)

  }

}
