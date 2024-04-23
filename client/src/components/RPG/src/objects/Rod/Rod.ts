import { GameObject } from "../../GameObject";
import { Vector2 } from "../../Vector2";
import { Sprite } from "../../Sprite";
import { resources } from "../../Resource";
import { events } from "../../Events";
import { store } from "../../../../../redux/store";
import { setDialog, switchDialog, switchHeroWalk } from "../../../../../redux/RPGSlice";

export class Rod extends GameObject {
  dialogID: any;

  constructor(x: number, y: number, name: string, dialogID: any) {
    super({ position: new Vector2(x, y)}, name );
    const sprite = new Sprite({
      resource: resources.images.rod,
      position: new Vector2(0, -5),
    }, "RodSprite");
    this.addChild(sprite);
    this.dialogID = dialogID;
  }

  ready() {
    events.on("HERO_POSITION", this, (pos: Vector2) => {
      const roundedHeroX = Math.round(pos.x);
      const roundedHeroY = Math.round(pos.y);
      if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
        this.onCollideWithHero();
      }
    });
  }

  onCollideWithHero() {
    this.destroy();

    events.emit("HERO_PICKS_UP_ITEM", {
      type: "ROD",
      image: resources.images.rod,
      position: this.position,
    });

    store.dispatch(setDialog(this.dialogID));
    store.dispatch(switchDialog(true));
    store.dispatch(switchHeroWalk(false));
  }
}