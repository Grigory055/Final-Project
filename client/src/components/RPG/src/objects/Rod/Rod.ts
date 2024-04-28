import { GameObject, Vector2, Sprite, resources, events } from "../../";
import { store } from "../../../../../redux/store";
import { setDialog, switchDialog, switchHeroWalk } from "../../../../../redux/RPGSlice";
import { IEventData } from "../../../../../types/types";

export class Rod extends GameObject {
  dialogID: number;

  constructor(x: number, y: number, dialogID: number) {
    super({ position: new Vector2(x, y) });
    const sprite = new Sprite({
      resource: resources.images.rod,
      position: new Vector2(0, -5),
    });
    this.addChild(sprite);
    this.dialogID = dialogID;
  }

  ready() {
    events.on("HERO_POSITION", this, (data: IEventData) => {
      const heroPosition = data.position;
      const roundedHeroX = Math.round(heroPosition.x);
      const roundedHeroY = Math.round(heroPosition.y);
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