import {GameObject, Vector2, isSpaceFree, moveTowards, Sprite, resources, Animations, FrameIndexPattern, events} from "../../";
import {DOWN, LEFT, RIGHT, UP} from "../../Input";
import {
  PICK_UP_DOWN,
  STAND_DOWN,
  STAND_LEFT,
  STAND_RIGHT,
  STAND_UP,
  WALK_DOWN,
  WALK_LEFT,
  WALK_RIGHT,
  WALK_UP
} from "./heroAnimations";
import { store } from "../../../../../redux/store";
import { IEventData, ImageObject } from "../../../../../types/types";



export class Hero extends GameObject {
body: Sprite;
facingDirection: string;
destinationPosition: Vector2;
isWalking: boolean;
itemPickupTime: number;
itemPickupShell: GameObject | null;
stepAudio: HTMLAudioElement;
lastX?: number;
lastY?: number;
  constructor(x: number, y: number, character: string, stepAudio: HTMLAudioElement) {
    super({
      position: new Vector2(x, y),
    });

    const shadow = new Sprite({
      resource: resources.images.shadow,
      frameSize: new Vector2(32, 32),
      position: new Vector2(-8, -19),
    })
    this.addChild(shadow);

    this.body = new Sprite({
      resource: resources.images[character],
      frameSize: new Vector2(32,32),
      hFrames: 3,
      vFrames: 5,
      frame: 1,
      position: new Vector2(-8, -20),
      animations: new Animations({
        walkDown: new FrameIndexPattern(WALK_DOWN),
        walkUp: new FrameIndexPattern(WALK_UP),
        walkLeft: new FrameIndexPattern(WALK_LEFT),
        walkRight: new FrameIndexPattern(WALK_RIGHT),
        standDown: new FrameIndexPattern(STAND_DOWN),
        standUp: new FrameIndexPattern(STAND_UP),
        standLeft: new FrameIndexPattern(STAND_LEFT),
        standRight: new FrameIndexPattern(STAND_RIGHT),
        pickUpDown: new FrameIndexPattern(PICK_UP_DOWN),
      })
    })
    this.addChild(this.body);

    this.facingDirection = DOWN;
    this.destinationPosition = this.position.duplicate();
    this.isWalking = true;
    this.itemPickupTime = 0;
    this.itemPickupShell = null;
    this.stepAudio = stepAudio;

    // React to picking up an item
    events.on("HERO_PICKS_UP_ITEM", this, (data: IEventData) => {
      this.onPickUpItem(data)
    })

  }

  step(delta: number, root: GameObject) {

    const state = store.getState();
    this.isWalking = state.RPGSlice.heroIsWalking;

    // Lock movement if celebrating an item pickup
    if (this.itemPickupTime > 0) {
      this.workOnItemPickup(delta);
      return;
    }

    if (!this.isWalking) return;

    const distance = moveTowards(this, this.destinationPosition, 1);
    const hasArrived = distance <= 1;
    // Attempt to move again if the hero is at his position
    if (hasArrived) {
      this.tryMove(root)
    }

    this.tryEmitPosition()
  }

  tryEmitPosition() {
    if (this.lastX === this.position.x && this.lastY === this.position.y) {
      return;
    }
    
    this.lastX = this.position.x;
    this.lastY = this.position.y;
    events.emit("HERO_POSITION", {position: this.position})
  }

  tryMove(root: GameObject) {
    const {input} = root;

    if (!input?.direction) {

      if (this.facingDirection === LEFT) { this.body.animations?.play("standLeft")}
      if (this.facingDirection === RIGHT) { this.body.animations?.play("standRight")}
      if (this.facingDirection === UP) { this.body.animations?.play("standUp")}
      if (this.facingDirection === DOWN) { this.body.animations?.play("standDown")}

      return;
    }

    let nextX = this.destinationPosition.x;
    let nextY = this.destinationPosition.y;
    const gridSize = 16;

    if (input.direction === DOWN) {
      nextY += gridSize;
      this.body.animations?.play("walkDown");
    }
    if (input.direction === UP) {
      nextY -= gridSize;
      this.body.animations?.play("walkUp");
    }
    if (input.direction === LEFT) {
      nextX -= gridSize;
      this.body.animations?.play("walkLeft");
    }
    if (input.direction === RIGHT) {
      nextX += gridSize;
      this.body.animations?.play("walkRight");
    }
    this.facingDirection = input.direction ?? this.facingDirection;

    const state = store.getState();
    const walls = state.RPGSlice.walls

    // Validating that the next destination is free
    if (isSpaceFree(walls, nextX, nextY)) {
      this.destinationPosition.x = nextX;
      this.destinationPosition.y = nextY;
    }

    this.stepAudio.play();
  }

  onPickUpItem({ image, position }: IEventData) {
    // Make sure we land right on the item
    this.destinationPosition = position.duplicate();

    // Start the pickup animation
    this.itemPickupTime = 500; // ms

    this.itemPickupShell = new GameObject({ position: new Vector2(0, 0) });
    this.itemPickupShell.addChild(new Sprite({
      resource: image as ImageObject,
      position: new Vector2(0, -18)
    }))
    this.addChild(this.itemPickupShell);
  }

  workOnItemPickup(delta: number) {
    this.itemPickupTime -= delta;
    this.body.animations?.play("pickUpDown")

    // Remove the item being held overhead
    if (this.itemPickupTime <= 0) {
      this.itemPickupShell?.destroy();
    }
  }
}