import {GameObject} from "../../GameObject.js";
import {Sprite} from "../../Sprite.js";
import {resources} from "../../Resource.js";
import {Vector2} from "../../Vector2.js";
import {events} from "../../Events.js";

export class Inventory extends GameObject {
  constructor(name: any) {
    super({
      position: new Vector2(0, 1)
    }, name);

    this.nextId = 0;
    this.items = []

    // React to Hero picking up an item
    events.on("HERO_PICKS_UP_ITEM", this, (data: any) => {
      this.nextId += 1;
      this.items.push({
        id: this.nextId,
        image: resources.images.rod
      })
      this.renderInventory();
    })

    // Demo removing of something (could happen on item use)
    // setTimeout(() => {
    //   this.removeFromInventory(-2)
    // }, 2000)

    // Draw initial state on bootup
    this.renderInventory();
  }

  renderInventory() {

    // Remove stale drawings
    this.children.forEach((child: any) => child.destroy())

    // Draw fresh from the latest version of the list
    this.items.forEach((item: any, index: any) => {
      const sprite = new Sprite({
        resource: item.image,
        position: new Vector2(index*12, 0)
      })
      this.addChild(sprite);
    })
  }

  removeFromInventory(id: any) {
    this.items = this.items.filter(item => item.id !== id);
    this.renderInventory();
  }

}











