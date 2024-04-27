import { GameObject, Vector2, Sprite, resources, events } from "../../";
import { store } from "../../../../../redux/store";
import { setDialog, switchDialog, switchHeroWalk } from "../../../../../redux/RPGSlice";
import { IEventData } from "../../../../../types/types";

interface ExitCoords {
  exitCoordX: number;
  exitCoordY: number;
}

export class NPC extends GameObject {
  body: Sprite;
  dialogID: number;
  exitCoords: ExitCoords;

  constructor(
    x: number,
    y: number,
    dialogID: number,
    exitCoordX: number,
    exitCoordY: number,
    skin: number
  ) {
    super({ position: new Vector2(x, y) });

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
    events.on("HERO_POSITION", this, (data: IEventData) => {
      const heroPosition = data.position;
      const roundedHeroX = Math.round(heroPosition.x);
      const roundedHeroY = Math.round(heroPosition.y);
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