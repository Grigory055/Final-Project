interface AnimationFrame {
  time: number;
  frame: number;
}

interface AnimationConfig {
  frames: AnimationFrame[];
  duration?: number;
}

export class FrameIndexPattern {
  private currentTime: number;
  private animationConfig: AnimationConfig;
  private duration: number;

  constructor(animationConfig: AnimationConfig) {
    this.currentTime = 0;
    this.animationConfig = animationConfig;
    this.duration = animationConfig.duration ?? 500;
  }

  get frame(): number {
    const { frames } = this.animationConfig;
    for (let i = frames.length - 1; i >= 0; i--) {
      if (this.currentTime >= frames[i].time) {
        return frames[i].frame;
      }
    }
    throw new Error("Time is before the first keyframe");
  }

  step(delta: number): void {
    this.currentTime += delta;
    if (this.currentTime >= this.duration) {
      this.currentTime = 0;
    }
  }
}