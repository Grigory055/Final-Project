import './style.css'
import {resources} from "./src/Resource.js";
import {Sprite} from "./src/Sprite.js";
import {Vector2} from "./src/Vector2.js";
import {GameLoop} from "./src/GameLoop.js";
import {Input} from "./src/Input.js";
import {gridCells} from "./src/helpers/grid.js";
import {GameObject} from "./src/GameObject.js";
import {Hero} from "./src/objects/Hero/Hero.js";
import {Camera} from "./src/Camera.js";
import {Inventory} from "./src/objects/Inventory/Inventory.js";
import { ReactElement, useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {events} from "./src/Events.js";
import { Boomerang } from '../Boomerang/Boomerang.js';
import StartGame from '../Race/StartGame.js';
import { ExitToMap } from '../Dialogs/ExitToMap.js';

export function RPG() {
  const [open, setOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState<JSX.Element | null>(null)

  class Rod extends GameObject {
    constructor(x,y, component) {
      super({
        name: "Rod",
        position: new Vector2(x,y)
      });
      const sprite = new Sprite({
        resource: resources.images.rod,
        position: new Vector2(0, -5) // nudge upwards visually
      })
      this.addChild(sprite);
      this.component = component;
    }
  
    ready() {
      events.on("HERO_POSITION", this, pos => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
          this.onCollideWithHero();
        }
      })
    }
  
    onCollideWithHero() {
      // Remove this instance from the scene
      this.destroy();
  
      // Alert other things that we picked up a rod
      events.emit("HERO_PICKS_UP_ITEM", {
        type: "ROD",
        image: resources.images.rod,
        position: this.position
      })
      
      setModalComponent(() => this.component)
      setOpen(true);
    }
  }


  class DialogBubble extends GameObject {
    constructor(x,y, component) {
      super({
        name: "DialogBubble",
        position: new Vector2(x,y)
      });
      this.body = new Sprite({
        resource: resources.images.dialog,
        frameSize: new Vector2(32,32),
        hFrames: 3,
        vFrames: 1,
        frame: 2,
        position: new Vector2(-8, -20),
      })
      this.addChild(this.body);
      this.component = component;
  
    }
  
    ready() {
      events.on("HERO_POSITION", this, pos => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (roundedHeroX === this.position.x && roundedHeroY === this.position.y) {
          this.onCollideWithHero();
        }
      })
    }
  
    onCollideWithHero() {
      setModalComponent(() => this.component)
      setOpen(true);
    }
  }

  const canvasRef = useRef(null);

  // Establish the root scene
  const mainScene = new GameObject({
    position: new Vector2(0,0)
  })

  // Build up the scene by adding a sky, ground, and hero
  const waterSprite = new Sprite({
    resource: resources.images.water,
    frameSize: new Vector2(1056, 832)
  })
  mainScene.addChild(waterSprite);

  const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(1056, 832)
  })
  mainScene.addChild(groundSprite);

  const hero = new Hero(gridCells(20), gridCells(6))
  mainScene.addChild(hero);

  const camera = new Camera()
  mainScene.addChild(camera);

  const rod1 = new Rod(gridCells(19), gridCells(12), <Boomerang />)
  mainScene.addChild(rod1);

  const dialogBubble = new DialogBubble(gridCells(35), gridCells(14), <ExitToMap />)
  mainScene.addChild(dialogBubble);

  const inventory = new Inventory();


  // Add an Input class to the main scene
  mainScene.input = new Input();


  // Establish update and draw loops
  const update = (delta) => {
    mainScene.stepEntry(delta, mainScene)
  };

  const draw = () => { 

    const canvas = canvasRef.current;   
    const ctx = canvas.getContext("2d");     

    // Clear anything stale
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the water
    // waterSprite.drawImage(ctx, 0, 0)

    // Save the current state (for camera offset)
    ctx.save();

    //Offset by camera position
    ctx.translate(camera.position.x, camera.position.y);

    // Draw objects in the mounted scene
    mainScene.draw(ctx, 0, 0);

    // Restore to original state
    ctx.restore();

    // Draw anything above the game world
    inventory.draw(ctx, 0, 0)

    }

    const gameLoop = new GameLoop(update, draw);

    const handleCloseClick = () => {
      setOpen(false);
    }

  useEffect(() => {
    draw();  
    gameLoop.start();
  }, [])

  return (

    <>
      <canvas id="game-canvas" ref={canvasRef} width={320} height={180}></canvas>
      <Dialog open={open} maxWidth={false}>
        <DialogTitle textAlign="center">Title</DialogTitle>
        <DialogContent>{modalComponent}</DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseClick()}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}
