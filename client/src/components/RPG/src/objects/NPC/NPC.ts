import { GameObject } from "../../GameObject";
import { Vector2 } from "../../Vector2";
import { Sprite } from "../../Sprite";
import { resources } from "../../Resource";
import { events } from "../../Events";
import { store } from "../../../../../redux/store";
import { setDialog, switchDialog, switchHeroWalk } from "../../../../../redux/RPGSlice";

interface ExitCoords {
  exitCoordX: number;
  exitCoordY: number;
}

export class NPC extends GameObject {
  body: Sprite;
  dialogID: any;
  exitCoords: ExitCoords;

  constructor(
    x: number,
    y: number,
    name: string,
    dialogID: any,
    exitCoordX: number,
    exitCoordY: number,
    skin: number
  ) {
    super({ position: new Vector2(x, y)}, name );

    const shadow = new Sprite({
      resource: resources.images.shadow,
      frameSize: new Vector2(32, 32),
      position: new Vector2(-8, -19),
    });
    this.addChild(shadow);

    this.body = new Sprite({
      resource: resources.images.npc,
      frameSize: new Vector2(32, 32),
      hFrames: 2,
      vFrames: 5,
      frame: skin,
      position: new Vector2(-8, -19),
    });
    this.addChild(this.body);

    this.dialogID = dialogID;
    this.exitCoords = { exitCoordX, exitCoordY };
  }

  ready() {
    events.on("HERO_POSITION", this, (pos: Vector2) => {
      const roundedHeroX = Math.round(pos.x);
      const roundedHeroY = Math.round(pos.y);
      const { x, y } = this.position;

      if (
        (roundedHeroX === x - 16 && roundedHeroY === y) ||
        (roundedHeroX === x + 16 && roundedHeroY === y) ||
        (roundedHeroX === x && roundedHeroY === y + 16)
      ) {
        this.onCollideWithHero();
      }
    });
  }

  onCollideWithHero() {
    store.dispatch(switchHeroWalk(false));
    store.dispatch(setDialog(this.dialogID));
    store.dispatch(switchDialog(true));
  }
}