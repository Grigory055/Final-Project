import { Input, Vector2, events } from './';

export class GameObject {
  position: Vector2;
  children: Array<GameObject>;
  parent: GameObject | null;
  hasReadyBeenCalled: boolean;
  input?: Input;
  constructor({ position }: { position: Vector2 | undefined } ) {
    this.position = position ?? new Vector2(0, 0);
    this.children = [];
    this.parent = null;
    this.hasReadyBeenCalled = false;
  }

  // First entry point of the loop
  stepEntry(delta: number, root: GameObject) {
    // Call updates on all children first
    this.children.forEach((child: GameObject) => child.stepEntry(delta, root));

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
  step(_delta: number, root: GameObject) {
    if (root) return;
  }

  /* draw entry */
  draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    const drawPosX = x + this.position.x;
    const drawPosY = y + this.position.y;

    // Do the actual rendering for Images
    this.drawImage(ctx, drawPosX, drawPosY);

    // Pass on to children
    this.children.forEach((child: GameObject) => child.draw(ctx, drawPosX, drawPosY));
  }

  drawImage(ctx: CanvasRenderingContext2D, drawPosX: number, drawPosY: number) {
    if(ctx && drawPosX && drawPosY) return;
  }

  // Remove from the tree
  destroy() {
    this.children.forEach((child: GameObject) => {
      child.destroy();
    });
    this.parent?.removeChild(this);
  }

  /* Other Game Objects are nestable inside this one */
  addChild(gameObject: GameObject) {
    gameObject.parent = this;
    this.children.push(gameObject);
  }

  removeChild(gameObject: GameObject) {
    events.unsubscribe(gameObject);
    this.children = this.children.filter((g: GameObject) => {
      return gameObject !== g;
    });
  }
}
