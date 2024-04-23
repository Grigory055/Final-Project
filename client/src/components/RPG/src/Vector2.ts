export interface Vector2Interface {
  x: number;
  y: number;
  
  duplicate(): Vector2Interface;
}

export class Vector2 implements Vector2Interface {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  duplicate(): Vector2 {
    return new Vector2(this.x, this.y);
  }
}