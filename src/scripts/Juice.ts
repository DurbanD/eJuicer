import { Flavor } from './Flavor';

export interface Juice {
  name: string;
  totalVolume: number;
  flavors: Array<Flavor>;
  nicotineVolume?: number;
  nicotineStrengthUndiluted: number;
  juiceStrength: number;
  PG?: { total: number; added: number; ratio:number},
  VG?: { total: number; added: number; ratio:number}
}

export class Juice implements Juice {
  constructor(
    name: string,
    totalVolume: number,
    flavors: Array<Flavor>,
    juiceStrength: number,
    nicotineStrengthUndiluted: number,
  ) {
    this.name = name;
    this.totalVolume = totalVolume;
    this.flavors = flavors;
    this.nicotineStrengthUndiluted = nicotineStrengthUndiluted;
    this.juiceStrength = juiceStrength
    this.nicotineVolume = (this.totalVolume * juiceStrength) / nicotineStrengthUndiluted;
    if (isNaN(this.nicotineVolume)) this.nicotineVolume = 0
    this.updateFlavorVolumes()
  }

  setRatio(VG:number) {
    this.updateFlavorVolumes()
    let flavorVG = 0,
      flavorPG = 0
    for (const flavor of this.flavors) {
      if (flavor.type === 'PG' && flavor.volume) flavorPG += flavor.volume
      if (flavor.type === 'VG' && flavor.volume) flavorVG += flavor.volume
    }

    const vgInfo = {
      total: 0,
      added: 0,
      ratio: VG
    }
    const pgInfo = {
      total: 0,
      added: 0,
      ratio: 100-VG
    }

    vgInfo.total = (VG * 0.01) * this.totalVolume
    vgInfo.added = vgInfo.total - flavorVG
    pgInfo.total = this.totalVolume - vgInfo.total
    pgInfo.added = pgInfo.total - flavorPG

    this.PG = pgInfo
    this.VG = vgInfo
    return
  }

  updateFlavorVolumes() {

    for (const flav of this.flavors) {
      flav.volume = flav.ratio * 0.01 * this.totalVolume;
    }
    return true;
  }
}
