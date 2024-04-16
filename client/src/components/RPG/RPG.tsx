import './style.css'
import { useEffect, useRef } from 'react';
import { resources, Sprite, Vector2, GameLoop, Input, gridCells, GameObject, Hero, DialogBubble, NPC, Camera, Inventory, Rod } from "./src";
import { useParams } from 'react-router-dom';
import { phase0objects, phase0walls, phase1objects, phase1walls, phase2objects, phase2walls, phase3objects, phase3walls } from './src/levels/'
import { useAppDispatch } from '../../redux/hooks';
import { setWalls, switchDialog } from '../../redux/RPGSlice';
import { Navbar } from '../Navbar/Navbar';
const walls = [phase0walls, phase1walls, phase2walls, phase3walls]
const gameObjects = [phase0objects, phase1objects, phase2objects, phase3objects];


export function RPG() {

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const levelObjects = gameObjects[Number(id)];
  const canvasRef = useRef();
  
  useEffect(() => {
    dispatch(switchDialog(false));
    const { x, y } = levelObjects.hero.position
    const newHero = new Hero(gridCells(x), gridCells(y));
    dispatch(setWalls(walls[Number(id)]));
      
    const mainScene = new GameObject({
      position: new Vector2(0, 0),
    });

    // const waterSprite = new Sprite({
    //   resource: resources.images.water,
    //   frameSize: new Vector2(1056, 832)
    // })
    // mainScene.addChild(waterSprite);

    const groundSprite = new Sprite({
      resource: resources.images[`phase${id}`],
      frameSize: new Vector2(1312, 1152),
    });
    mainScene.addChild(groundSprite);

    const camera = new Camera();
    mainScene.addChild(camera);

    const rod1 = new Rod(gridCells(levelObjects.rod1.x), gridCells(levelObjects.rod1.y), levelObjects.rod1.dialogID)
    mainScene.addChild(rod1);

    const rod2 = new Rod(gridCells(levelObjects.rod2.x), gridCells(levelObjects.rod2.y), levelObjects.rod2.dialogID)
    mainScene.addChild(rod2);

    const rod3 = new Rod(gridCells(levelObjects.rod3.x), gridCells(levelObjects.rod3.y), levelObjects.rod3.dialogID)
    mainScene.addChild(rod3);

    const dialogBubble = new DialogBubble(gridCells(levelObjects.dialogBubble.x), gridCells(levelObjects.dialogBubble.y), levelObjects.dialogBubble.dialogID)
    mainScene.addChild(dialogBubble);

    const npc1 = new NPC(
      gridCells(levelObjects.npc1.x),
      gridCells(levelObjects.npc1.y),
      levelObjects.npc1.dialogID,
      levelObjects.npc1.exit.x,
      levelObjects.npc1.exit.y,
      levelObjects.npc1.skin)

    mainScene.addChild(npc1);

    const npc2 = new NPC(
      gridCells(levelObjects.npc2.x),
      gridCells(levelObjects.npc2.y),
      levelObjects.npc2.dialogID,
      levelObjects.npc2.exit.x,
      levelObjects.npc2.exit.y,
      levelObjects.npc2.skin)
      
    mainScene.addChild(npc2);

    mainScene.addChild(newHero);

    const inventory = new Inventory();

    mainScene.input = new Input();

    const update = (delta) => {
      mainScene.stepEntry(delta, mainScene);
    };

    const draw = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // waterSprite.drawImage(ctx, 0, 0)
        ctx.save();
        ctx.translate(camera.position.x, camera.position.y);
        mainScene.draw(ctx, 0, 0);
        ctx.restore();
        inventory.draw(ctx, 0, 0);
      }
    };

    const gameLoop = new GameLoop(update, draw);

    draw();
    gameLoop.start();
  }, []);

  return (
    <>
      <canvas
        id="game-canvas"
        ref={canvasRef}
        width={320}
        height={180}
      ></canvas>
      <Navbar />
    </>
  );
}
