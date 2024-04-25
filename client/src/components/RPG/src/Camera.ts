import { IEventData } from "../../../types/types";
import { events, GameObject, Vector2 } from "./";

// const obj = new GameObject({ position: new Vector2(0, 0) });
// console.log(obj);


export class Camera extends GameObject {
  constructor() {
    super({ position: new Vector2(0, 0) });

    events.on("HERO_POSITION", this, (data: IEventData) => {
      const heroPosition = data.position;
      const personHalf = 8;
      const canvasWidth = 320;
      const canvasHeight = 180;
      const halfWidth = -personHalf + canvasWidth / 2;
      const halfHeight = -personHalf + canvasHeight / 2;
      this.position = new Vector2(
        -heroPosition.x + halfWidth,
        -heroPosition.y + halfHeight
      );
    });
  }
}