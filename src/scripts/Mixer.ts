import { Juice } from './Juice';
import { Flavor } from './Flavor';

export interface Mixer {
  id: string;
  active: Juice | null;
  history: Array<Juice>;
}

export class Mixer {
  constructor(id: string) {
    this.id = id;
    this.active = null;
    this.history = [];
  }

  setActive(juice: Juice) {
    this.clearActive();
    this.active = juice;
    this.updateFlavorVolumes();
  }

  clearActive() {
    if (this.active !== null) this.history.push(this.active);
    this.active = null;
  }

  newJuice(
    name: string,
    totalVolume: number,
    flavors: Flavor[],
    nicotineMGperML: number,
    nicotineStrengthUndiluted: number,
  ) {
    const juice = new Juice(name, totalVolume, flavors, nicotineMGperML, nicotineStrengthUndiluted);
    this.setActive(juice);
    this.updateFlavorVolumes();
  }

  addFlavor(flavor: Flavor) {
    if (!this.active) return false;
    this.active.flavors.push(flavor);
    this.updateFlavorVolumes();
    return true;
  }

  createFlavor(name: string, percent: number, type?:string|undefined) {
    return new Flavor(name, percent, type);
  }

  createJuice(
    name: string,
    totalVolume: number,
    flavors: Flavor[],
    nicotineMGperML: number,
    nicotineStrengthUndiluted: number,
  ) {
    return new Juice(name, totalVolume, flavors, nicotineMGperML, nicotineStrengthUndiluted);
  }

  updateFlavorVolumes() {
    if (this.active === null) return false;

    for (const flav of this.active.flavors) {
      flav.volume = flav.ratio * 0.01 * this.active.totalVolume;
    }
    return true;
  }

  getJSON() {
    return JSON.stringify(this.active)
  }

}
