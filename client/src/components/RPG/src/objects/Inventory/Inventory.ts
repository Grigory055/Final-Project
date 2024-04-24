import { GameObject } from "../../GameObject";
import { Sprite } from "../../Sprite";
import { Vector2 } from "../../Vector2";
import { events } from "../../Events";

interface InventoryItem {
  id: number;
  image: HTMLImageElement;
}

export class Inventory extends GameObject {
  nextId: number;
  items: InventoryItem[];

  constructor() {
    super({ position: new Vector2(0, 1) });

    this.nextId = 0;
    this.items = [];

    // React to Hero picking up an item
    events.on("HERO_PICKS_UP_ITEM", this, (data: { type: string; image: HTMLImageElement; position: Vector2 }) => {
      this.nextId += 1;
      this.items.push({
        id: this.nextId,
        image: data.image,
      });
      this.renderInventory();
    });

    // Draw initial state on bootup
    this.renderInventory();
  }

  renderInventory() {
    // Remove stale drawings
    this.children.forEach((child: any) => child.destroy());

    // Draw fresh from the latest version of the list
    this.items.forEach((item, index) => {
      const sprite = new Sprite({
        resource: item.image,
        position: new Vector2(index * 12, 0),
      });
      this.addChild(sprite);
    });
  }

  removeFromInventory(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
    this.renderInventory();
  }
}