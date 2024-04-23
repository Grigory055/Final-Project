type UpdateFunction = (deltaTime: number) => void;
type RenderFunction = () => void;

export class GameLoop {
  private lastFrameTime: number;
  private accumulatedTime: number;
  private timeStep: number;
  private update: UpdateFunction;
  private render: RenderFunction;
  private rafId: number | null;
  private isRunning: boolean;

  constructor(update: UpdateFunction, render: RenderFunction) {
    this.lastFrameTime = 0;
    this.accumulatedTime = 0;
    this.timeStep = 1000 / 60; // 60 frames per second

    this.update = update;
    this.render = render;

    this.rafId = null;
    this.isRunning = false;
  }

  private mainLoop = (timestamp: number) => {
    if (!this.isRunning) return;

    const deltaTime: number = timestamp - this.lastFrameTime;
    this.lastFrameTime = timestamp;

    // Accumulate all the time since the last frame.
    this.accumulatedTime += deltaTime;

    // Fixed time step updates.
    // If there's enough accumulated time to run one or more fixed updates, run them.
    while (this.accumulatedTime >= this.timeStep) {
      this.update(this.timeStep); // Here, we pass the fixed time step size.
      this.accumulatedTime -= this.timeStep;
    }

    // Render
    this.render();

    this.rafId = requestAnimationFrame(this.mainLoop);
  };

  start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.rafId = requestAnimationFrame(this.mainLoop);
    }
  }

  stop(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.isRunning = false;
  }
}