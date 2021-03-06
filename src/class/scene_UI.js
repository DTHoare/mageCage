
/**
 * The HUD/UI for the game. Has spell, mana and tooltip information
 */
class Scene_UI extends Phaser.Scene {

    constructor () {
        super({ key: 'UIScene', active: true });

        this.manaText;
        this.spellText;
        this.tooltip;

    }

    preload () {
    }

    create () {
      this.add.image(480, 30, 'ui');

      this.manaText = this.add.bitmapText(200,20, 'editundo', 'Mana: ');
      this.manaText.setTint(0xcf4ed8);

      this.spellText = this.add.bitmapText(340,20, 'editundo', 'Spell: ');
      this.spellText.setTint(0xcf4ed8);

      this.tooltip = this.add.bitmapText(700,20, 'editundo', '');

      //  Grab a reference to the Game Scene
      this.gameScene = game.scene.getScene('GameScene');

      this.levelText = this.add.bitmapText(20,20, 'editundo', 'Level: ' + this.gameScene.level);
      this.levelText.setTint(0xcf4ed8);

      // Listen to events to change the tooltip
      this.gameScene.events.on('changeTooltip', function (text) {

          this.tooltip.setText(text);

      }, this);

      this.gameScene.events.on('postInit', function () {

          this.levelText.setText('Level: ' + this.gameScene.level);

      }, this);

    }


    /**
     * update - each tick spellText and mana are updated
     *
     */
    update () {
      if(player) {
        this.manaText.setText("Mana: " + player.state.mana);
        this.spellText.setText("Spell: " + player.state.spell);
      }


      //for some reason this fixes the text rendering bug in debug mode...
      // but introduces new bug in books?
      //let render = this.gameScene.add.graphics();
      //let bounds = this.spellText.getTextBounds();
      //
      //render.lineStyle(3, 0xffff37);
      //render.strokeRectShape(bounds["global"]);

    }
}
