import './style.css'
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@mui/material';
import { resources, Sprite, Vector2, GameLoop, Input, gridCells, GameObject, Hero, Camera, Inventory, events } from "./src";
import { DialogSvetaPhase0, DialogAntonPhase0, DialogSvetaPhase1, DialogMaksPhase1, DialogStartPhase0, DialogStartPhase1 } from '../Dialogs';
import { QuestionsP0W1, QuestionsP0W2, QuestionsP0W3, QuestionsP1W1, QuestionsP1W2, QuestionsP1W3 } from '../Questions';
import { useParams } from 'react-router-dom';
import { phase0objects, phase0walls, phase1objects, phase1walls, phase2objects, phase2walls } from './src/levels/'
import QuestionsP2W1 from '../Questions/QuestionsP2/QuestionsP2W1';
import QuestionsP2W2 from '../Questions/QuestionsP2/QuestionsP2W2';
import DialogStartPhase2 from '../Dialogs/DialogsPhase2/DialogStartPhase2';
import DialogSvetaPhase2 from '../Dialogs/DialogsPhase2/DialogSvetaPhase2';
import DialogGrishaPhase2 from '../Dialogs/DialogsPhase2/DialogGrishaPhase2';
const walls = [phase0walls, phase1walls, phase2walls]
const gameObjects = [phase0objects, phase1objects, phase2objects];


export function RPG() {
  const [open, setOpen] = useState(false);
  const [hero, setHero] = useState({});
  const [modalComponent, setModalComponent] = useState<JSX.Element | null>(
    null
  );
  const { id } = useParams();
  const levelObjects = gameObjects[Number(id)];

  const handleCloseClick = () => {
    setOpen(false);
    setHero((person) => {
      person.isWalking = true;
      return hero;
    })
    
  }

  const dialogs = [
    {
      rod1: <QuestionsP0W1 handleCloseClick={handleCloseClick} />,
      rod2: <QuestionsP0W2 handleCloseClick={handleCloseClick} />,
      rod3: <QuestionsP0W3 handleCloseClick={handleCloseClick} />,
      dialogBubble: <DialogStartPhase0 handleCloseClick={handleCloseClick} />,
      npc1: <DialogSvetaPhase0 handleCloseClick={handleCloseClick} />,
      npc2: <DialogAntonPhase0 handleCloseClick={handleCloseClick} />,
    },
    {
      rod1: <QuestionsP1W1 handleCloseClick={handleCloseClick} />,
      rod2: <QuestionsP1W2 handleCloseClick={handleCloseClick} />,
      rod3: <QuestionsP1W3 handleCloseClick={handleCloseClick} />,
      dialogBubble: <DialogStartPhase1 handleCloseClick={handleCloseClick} />,
      npc1: <DialogSvetaPhase1 handleCloseClick={handleCloseClick} />,
      npc2: <DialogMaksPhase1 handleCloseClick={handleCloseClick} />,
    },
    {
      rod1: <QuestionsP2W1 handleCloseClick={handleCloseClick} />,
      rod2: <QuestionsP2W2 handleCloseClick={handleCloseClick} />,
      // rod3: <QuestionsP3W3 handleCloseClick={handleCloseClick} />,
      dialogBubble: <DialogStartPhase2 handleCloseClick={handleCloseClick} />,
      npc1: <DialogSvetaPhase2 handleCloseClick={handleCloseClick} />,
      npc2: <DialogGrishaPhase2 handleCloseClick={handleCloseClick} />,
    },
    {
      rod1: <QuestionsP0W1 handleCloseClick={handleCloseClick} />,
      rod2: <QuestionsP0W2 handleCloseClick={handleCloseClick} />,
      rod3: <QuestionsP0W3 handleCloseClick={handleCloseClick} />,
      dialogBubble: <DialogStartPhase0 handleCloseClick={handleCloseClick} />,
      npc1: <DialogSvetaPhase0 handleCloseClick={handleCloseClick} />,
      npc2: <DialogAntonPhase0 handleCloseClick={handleCloseClick} />,
    },
  ]

  const levelDialogs = dialogs[Number(id)];

  class Rod extends GameObject {
    constructor(x, y, component) {
      super({
        name: "Rod",
        position: new Vector2(x, y),
      });
      const sprite = new Sprite({
        resource: resources.images.rod,
        position: new Vector2(0, -5), // nudge upwards visually
      });
      this.addChild(sprite);
      this.component = component;
    }

    ready() {
      events.on("HERO_POSITION", this, (pos) => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (
          roundedHeroX === this.position.x &&
          roundedHeroY === this.position.y
        ) {
          this.onCollideWithHero();
        }
      });
    }

    onCollideWithHero() {
      // Remove this instance from the scene
      this.destroy();

      // Alert other things that we picked up a rod
      events.emit("HERO_PICKS_UP_ITEM", {
        type: "ROD",
        image: resources.images.rod,
        position: this.position,
      });

      setModalComponent(() => this.component);
      setOpen(true);
      setHero((hero) => {
        hero.isWalking = false;
        return hero;
      })
    }
  }

  class DialogBubble extends GameObject {
    constructor(x, y, component) {
      super({
        name: "DialogBubble",
        position: new Vector2(x, y),
      });
      this.body = new Sprite({
        resource: resources.images.dialog,
        frameSize: new Vector2(32, 32),
        hFrames: 3,
        vFrames: 1,
        frame: 2,
        position: new Vector2(-8, -20),
      });
      this.addChild(this.body);
      this.component = component;
    }

    ready() {
      events.on("HERO_POSITION", this, (pos) => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (
          roundedHeroX === this.position.x &&
          roundedHeroY === this.position.y
        ) {
          this.onCollideWithHero();
        }
      });
    }

    onCollideWithHero() {
      setModalComponent(() => this.component);
      setOpen(true);
      setHero((hero) => {
        hero.isWalking = false;
        return hero;
      })
      
    }
  }

  class NPC extends GameObject {
    constructor(x, y, component, exitCoordX, exitCoordY, skin) {
      super({
        name: "NPC",
        position: new Vector2(x, y),
      });

      const shadow = new Sprite({
        resource: resources.images.shadow,
        frameSize: new Vector2(32, 32),
        position: new Vector2(-8, -19),
      });
      this.addChild(shadow);

      this.body = new Sprite({
        resource: resources.images.npc,
        frameSize: new Vector2(32, 32),
        hFrames: 2,
        vFrames: 3,
        frame: skin,
        position: new Vector2(-8, -19),
      });
      this.addChild(this.body);
      this.component = component;
      this.exitCoords = { exitCoordX, exitCoordY };
    }

    ready() {
      events.on("HERO_POSITION", this, (pos) => {
        // detect overlap...
        const roundedHeroX = Math.round(pos.x);
        const roundedHeroY = Math.round(pos.y);
        if (
          (roundedHeroX === this.position.x - 16 &&
            roundedHeroY === this.position.y) ||
          (roundedHeroX === this.position.x + 16 &&
            roundedHeroY === this.position.y) ||
          (roundedHeroX === this.position.x &&
            roundedHeroY === this.position.y + 16)
        ) {
          this.onCollideWithHero();
        }
      });
    }

    onCollideWithHero() {
      setModalComponent(() => this.component);
      setOpen(true);
      setHero((hero) => {
        hero.walls.delete(
          `${this.exitCoords.exitCoordX},${this.exitCoords.exitCoordY}`
        );
        hero.isWalking = false;
        return hero;
      })
      
    }
  }

  const canvasRef = useRef();
  
  useEffect(() => {

    const { x, y } = levelObjects.hero.position
    const newHero = new Hero(gridCells(x), gridCells(y));
    newHero.walls = new Set(walls[Number(id)]);
    setHero(newHero);
    console.log(newHero.children);
    
  // Establish the root scene
  const mainScene = new GameObject({
    position: new Vector2(0, 0),
  });

  // Build up the scene by adding a sky, ground, and hero
  // const waterSprite = new Sprite({
  //   resource: resources.images.water,
  //   frameSize: new Vector2(1056, 832)
  // })
  // mainScene.addChild(waterSprite);

  const groundSprite = new Sprite({
    resource: resources.images[`phase${id}`],
    frameSize: new Vector2(1152, 1152),
  });
  mainScene.addChild(groundSprite);

  const camera = new Camera();
  mainScene.addChild(camera);

  const rod1 = new Rod(gridCells(levelObjects.rod1.x), gridCells(levelObjects.rod1.y), levelDialogs.rod1)
  mainScene.addChild(rod1);

  const rod2 = new Rod(gridCells(levelObjects.rod2.x), gridCells(levelObjects.rod2.y), levelDialogs.rod2)
  mainScene.addChild(rod2);

  const rod3 = new Rod(gridCells(levelObjects.rod3.x), gridCells(levelObjects.rod3.y), levelDialogs.rod3)
  mainScene.addChild(rod3);

  const dialogBubble = new DialogBubble(gridCells(levelObjects.dialogBubble.x), gridCells(levelObjects.dialogBubble.y), levelDialogs.dialogBubble)
  mainScene.addChild(dialogBubble);

  const npc1 = new NPC(
    gridCells(levelObjects.npc1.x),
    gridCells(levelObjects.npc1.y),
    levelDialogs.npc1,
    levelObjects.npc1.exit.x,
    levelObjects.npc1.exit.y,
    levelObjects.npc1.skin)

  mainScene.addChild(npc1);

  const npc2 = new NPC(
    gridCells(levelObjects.npc2.x),
    gridCells(levelObjects.npc2.y),
    levelDialogs.npc2,
    levelObjects.npc2.exit.x,
    levelObjects.npc2.exit.y,
    levelObjects.npc2.skin)
    
  mainScene.addChild(npc2);

  mainScene.addChild(newHero);

  const inventory = new Inventory();

  // Add an Input class to the main scene
  mainScene.input = new Input();

  // Establish update and draw loops
  const update = (delta) => {
    mainScene.stepEntry(delta, mainScene);
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
      inventory.draw(ctx, 0, 0);
    }
  };

  const gameLoop = new GameLoop(update, draw);

    console.log('useEffect', gameLoop.isRunning);

    draw();
    gameLoop.start();
    return () => {
      setHero({});
    }
  }, []);

  return (
    <>
      <canvas
        id="game-canvas"
        ref={canvasRef}
        width={320}
        height={180}
      ></canvas>
      ;
      <Dialog open={open} maxWidth={false}>
        <div id="modal">
          <div id="modal-header" className="section">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
          </div>
          <div id="modal-content" className="section">
            <div className="left"></div>
            <div className="center">
              <div className="controls">
                <button onClick={() => handleCloseClick()} className="close" />
              </div>
              {modalComponent}
            </div>
            <div className="right"></div>
          </div>
          <div id="modal-footer" className="section">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
