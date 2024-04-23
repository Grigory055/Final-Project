import { Vector2 } from './Vector2.js';
import { events } from './Events.js';

export class GameObject {
  constructor({ position }: { position: any }, name: string ) {
    this.position = position ?? new Vector2(0, 0);
    this.children = [];
    this.parent = null;
    this.hasReadyBeenCalled = false;
    this.name = name;
  }

  // First entry point of the loop
  stepEntry(delta: any, root: any) {
    // Call updates on all children first
    this.children.forEach((child: any) => child.stepEntry(delta, root));

    // Call ready on the first frame
    if (!this.hasReadyBeenCalled) {
      this.hasReadyBeenCalled = true;
      this.ready();
    }

    // Call any implemented Step code
    this.step(delta, root);
  }

  // Called before the first `step`
  ready() {
    // ...
  }

  // Called once every frame
  step(_delta: any) {
    // ...
  }

  /* draw entry */
  draw(ctx: any, x: any, y: any) {
    const drawPosX = x + this.position.x;
    const drawPosY = y + this.position.y;

    // Do the actual rendering for Images
    this.drawImage(ctx, drawPosX, drawPosY);

    // Pass on to children
    this.children.forEach((child: any) => child.draw(ctx, drawPosX, drawPosY));
  }

  drawImage(ctx: any, drawPosX: any, drawPosY: any) {
    //...
  }

  // Remove from the tree
  destroy() {
    this.children.forEach((child: any) => {
      child.destroy();
    });
    this.parent.removeChild(this);
  }

  /* Other Game Objects are nestable inside this one */
  addChild(gameObject: any) {
    gameObject.parent = this;
    this.children.push(gameObject);
  }

  removeChild(gameObject: any) {
    events.unsubscribe(gameObject);
    this.children = this.children.filter(g => {
      return gameObject !== g;
    });
  }
}
