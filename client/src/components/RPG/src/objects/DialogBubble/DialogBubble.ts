import {GameObject, Vector2, Sprite, resources, events} from "../../";
import { store } from "../../../../../redux/store";
import { setDialog, switchDialog, switchHeroWalk } from "../../../../../redux/RPGSlice";
import { IEventData } from "../../../../../types/types";

export class DialogBubble extends GameObject {
  body: Sprite;
  dialogID: number;
  constructor(x: number, y: number, dialogID: number) {
    super({
      position: new Vector2(x, y),
    });
    this.body = new Sprite({
      resource: resources.images.dialog,
      frameSize: new Vector2(32, 32),
      hFrames: 3,
      vFrames: 1,
      frame: 2,
      position: new Vector2(-8, -20),
    });
    this.addChild(this.body);
    this.dialogID = dialogID;
  }

  ready() {
    events.on("HERO_POSITION", this, (data: IEventData) => {
      const heroPosition = data.position;
      const roundedHeroX = Math.round(heroPosition.x);
      const roundedHeroY = Math.round(heroPosition.y);
      if (
        roundedHeroX === this.position.x &&
        roundedHeroY === this.position.y
      ) {
        this.onCollideWithHero();
      }
    });
  }

  onCollideWithHero() {
    store.dispatch(setDialog(this.dialogID));
    store.dispatch(switchDialog(true));
    store.dispatch(switchHeroWalk(false));
  }
}