import {Vector2} from "./Vector2.js";
import {GameObject} from "./GameObject.js";

export class Sprite extends GameObject {
  resource?: any;
      frameSize?: any;
      hFrames?: any;
      vFrames?: any;
      frame?: any;
      scale?: any;
      position?: any;
      animations?: any;
      frameMap?:any;
  constructor({
      resource, // image we want to draw
      frameSize, // size of the crop of the image
      hFrames, // how the sprite arranged horizontally
      vFrames, // how the sprite arranged vertically
      frame, // which frame we want to show
      scale, // how large to draw this image
      position, // where to draw it (top left corner)
      animations,
    }: {
      resource?: any
      frameSize?: any
      hFrames?: any
      vFrames?: any
      frame?: any
      scale?: any
      position?: any
      animations?: any
    }, name?: string) {
    super({ position }, name);
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(16,16);
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2(0,0);
    this.animations = animations ?? null;
    this.buildFrameMap();
  }

  buildFrameMap() {
    let frameCount = 0;
    for (let v=0; v<this.vFrames; v++) {
      for (let h=0; h<this.hFrames; h++) {
        this.frameMap.set(
            frameCount,
            new Vector2(this.frameSize.x * h, this.frameSize.y * v)
        )
        frameCount++;
      }
    }
  }

  step(delta:any, root:any) {
    if(root){
      console.log('')
    }
    if (!this.animations) {
      return 
    }
    this.animations.step(delta);
    this.frame = this.animations.frame;
  }

  drawImage(ctx: any, x: any, y: any) {
    if (!this.resource.isLoaded) {
      return;
    }

    // Find the correct sprite sheet frame to use
    let frameCoordX = 0;
    let frameCoordY = 0;
    const frame = this.frameMap.get(this.frame);
    if (frame) {
      frameCoordX = frame.x;
      frameCoordY = frame.y;
    }

    const frameSizeX = this.frameSize.x;
    const frameSizeY = this.frameSize.y;

    ctx.drawImage(
        this.resource.image,
        frameCoordX,
        frameCoordY, // Top Y corner of frame
        frameSizeX, //How much to crop from the sprite sheet (X)
        frameSizeY, //How much to crop from the sprite sheet (Y)
        x, //Where to place this on canvas tag X (0)
        y, //Where to place this on canvas tag Y (0)
        frameSizeX * this.scale, //How large to scale it (X)
        frameSizeY * this.scale, //How large to scale it (Y)
    );
  }

}