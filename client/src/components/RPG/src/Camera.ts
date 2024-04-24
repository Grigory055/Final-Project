import { GameObject } from "./GameObject.js";
import { events } from "./Events.js";
import { Vector2 } from "./Vector2.js";

interface HeroPosition {
  x: number;
  y: number;
}

interface GameObjectProps {
  position: Vector2;
}

export class Camera extends GameObject {
  constructor() {
    const initialProps: GameObjectProps = {
      position: new Vector2(0, 0)
    };

    super(initialProps);

    events.on("HERO_POSITION", this, (heroPosition: HeroPosition) => {
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