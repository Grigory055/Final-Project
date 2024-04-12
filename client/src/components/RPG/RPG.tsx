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
import { ExitToMap, DialogSvetaPhase0, DialogAntonPhase0 } from '../Dialogs';
import { QuestionsP0W1, QuestionsP0W2, QuestionsP0W3 } from '../Questions/index.js';
import { useParams } from 'react-router-dom';
import { phase0walls } from './src/levels/phase0walls.js'
import { phase1walls } from './src/levels/phase1walls.js'
const walls = [phase0walls, phase1walls]
const hero = new Hero(gridCells(1), gridCells(1));

export function RPG() {
  const [open, setOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState<JSX.Element | null>(null)
  const { id } = useParams();
  console.log(id);
  console.log(hero);
  

  const handleCloseClick = () => {
    setOpen(false);
    hero.isWalking = true;
    console.log(hero.isWalking);
  }

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
      hero.isWalking = false;
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
      hero.isWalking = false;
    }
  }

  class NPC extends GameObject {
    constructor(x,y, component, exitCoordX, exitCoordY, skin) {
      super({
        name: "NPC",
        position: new Vector2(x,y)
      });

      const shadow = new Sprite({
        resource: resources.images.shadow,
        frameSize: new Vector2(32, 32),
        position: new Vector2(-8, -19),
      })
      this.addChild(shadow);

      this.body = new Sprite({
        resource: resources.images.npc,
        frameSize: new Vector2(32,32),
        hFrames: 2,
        vFrames: 2,
        frame: skin,
        position: new Vector2(-8, -19),
      })
      this.addChild(this.body);
      this.component = component;
      this.exitCoords = { exitCoordX, exitCoordY }
  
    }
  
    ready() {
      events.on("HERO_POSITION", this, pos => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (roundedHeroX === this.position.x - 16 && roundedHeroY === this.position.y ||
            roundedHeroX === this.position.x + 16 && roundedHeroY === this.position.y ||
            roundedHeroX === this.position.x && roundedHeroY === this.position.y + 16) {
          this.onCollideWithHero();
        }
      })
    }
  
    onCollideWithHero() {
      setModalComponent(() => this.component);
      setOpen(true);
      hero.walls.delete(`${this.exitCoords.exitCoordX},${this.exitCoords.exitCoordY}`);
      hero.isWalking = false;
    }
  }

















  const canvasRef = useRef();
  console.log(canvasRef);  

  // Establish the root scene
  const mainScene = new GameObject({
    position: new Vector2(0,0)
  })

  // Build up the scene by adding a sky, ground, and hero
  // const waterSprite = new Sprite({
  //   resource: resources.images.water,
  //   frameSize: new Vector2(1056, 832)
  // })
  // mainScene.addChild(waterSprite);

  const groundSprite = new Sprite({
    resource: resources.images[`phase${id}`],
    frameSize: new Vector2(1152, 1152)
  })
  mainScene.addChild(groundSprite);

  const camera = new Camera()
  mainScene.addChild(camera);

  const rod1 = new Rod(gridCells(39), gridCells(20), <QuestionsP0W1 handleCloseClick={handleCloseClick} />)
  mainScene.addChild(rod1);

  const rod2 = new Rod(gridCells(46), gridCells(39), <QuestionsP0W2 handleCloseClick={handleCloseClick} />)
  mainScene.addChild(rod2);

  const rod3 = new Rod(gridCells(35), gridCells(48), <QuestionsP0W3 handleCloseClick={handleCloseClick} />)
  mainScene.addChild(rod3);

  const dialogBubble = new DialogBubble(gridCells(35), gridCells(24), <ExitToMap />)
  mainScene.addChild(dialogBubble);

  const sveta = new NPC(gridCells(24), gridCells(26), <DialogSvetaPhase0 handleCloseClick={handleCloseClick} />, 384, 384, 0)
  mainScene.addChild(sveta);

  const anton = new NPC(gridCells(24), gridCells(49), <DialogAntonPhase0 />, 384, 384, 2)
  mainScene.addChild(anton);

  mainScene.addChild(hero);

  const inventory = new Inventory();


  // Add an Input class to the main scene
  mainScene.input = new Input();


  // Establish update and draw loops
  const update = (delta) => {
    mainScene.stepEntry(delta, mainScene)
  };

  const draw = () => {
    if (canvasRef.current) {
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
  }
    
  const gameLoop = new GameLoop(update, draw);

  useEffect(() => {
    console.log('useEffect', gameLoop.isRunning);
    hero.position = new Vector2(gridCells(19), gridCells(26));
    hero.destinationPosition = hero.position.duplicate();
    hero.walls = walls[Number(id)];
    draw();  
    gameLoop.start();
  }, [])

  return (

    <>
      <canvas id="game-canvas" ref={canvasRef} width={320} height={180}></canvas>;
      <Dialog open={open} maxWidth={false}>
        <div id='modal'>
          <div id="modal-header" className='section'>
            <div className='left'></div>
            <div className='center'></div>
            <div className='right'></div>
          </div>
          <div id="modal-content" className='section'>
            <div className='left'></div>
            <div className='center'>
              <div className='controls'><button onClick={() => handleCloseClick()} className='close' /></div>
              {modalComponent}
            </div>
            <div className='right'></div>
          </div>
          <div id="modal-footer" className='section'>
            <div className='left'></div>
            <div className='center'></div>
            <div className='right'></div>
          </div>
        </div>
      </Dialog>
    </>
    
  )
}
