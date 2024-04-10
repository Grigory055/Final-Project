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
import { useEffect, useRef, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import {events} from "./src/Events.js";
import { Boomerang } from '../Boomerang/Boomerang.js';

export function RPG() {
  const [open, setOpen] = useState(false);

  class Rod extends GameObject {
    constructor(x,y) {
      super({
        name: "Rod",
        position: new Vector2(x,y)
      });
      const sprite = new Sprite({
        resource: resources.images.rod,
        position: new Vector2(0, -5) // nudge upwards visually
      })
      this.addChild(sprite);
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
  
      setOpen(true);
    }
  }

  const canvasRef = useRef(null);

  // Establish the root scene
  const mainScene = new GameObject({
    position: new Vector2(0,0)
  })

  // Build up the scene by adding a sky, ground, and hero
  // const skySprite = new Sprite({
  //   resource: resources.images.sky,
  //   frameSize: new Vector2(320, 180)
  // })

  const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(1080, 840)
  })
  mainScene.addChild(groundSprite);

  const hero = new Hero(gridCells(6), gridCells(5))
  mainScene.addChild(hero);

  const camera = new Camera()
  mainScene.addChild(camera);

  const rod = new Rod(gridCells(7), gridCells(6))
  mainScene.addChild(rod);

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

    // Draw the sky
    // skySprite.drawImage(ctx, 0, 0)

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
        <DialogContent><Boomerang /></DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseClick()}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
    
  )
}
