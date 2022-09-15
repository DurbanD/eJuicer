import { Flavor } from './Flavor';

export interface Juice {
  name: string;
  mlTotalVolume: number;
  flavors: Array<Flavor>;
  mlNicotineVolume?: number;
  nicotineStrengthMGperML: number;
  juiceStrength: number;
  PG?: { total: number; added: number; ratio:number},
  VG?: { total: number; added: number; ratio:number}
}

export class Juice implements Juice {
  constructor(
    name: string,
    mlTotalVolume: number,
    flavors: Array<Flavor>,
    juiceStrength: number,
    nicotineStrengthMGperML: number,
  ) {
    this.name = name;
    this.mlTotalVolume = mlTotalVolume;
    this.flavors = flavors;
    this.nicotineStrengthMGperML = nicotineStrengthMGperML;
    this.juiceStrength = juiceStrength
    this.mlNicotineVolume = (this.mlTotalVolume * juiceStrength) / nicotineStrengthMGperML;
    if (isNaN(this.mlNicotineVolume)) this.mlNicotineVolume = 0
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

    vgInfo.total = (VG * 0.01) * this.mlTotalVolume
    vgInfo.added = vgInfo.total - flavorVG
    pgInfo.total = this.mlTotalVolume - vgInfo.total
    pgInfo.added = pgInfo.total - flavorPG

    this.PG = pgInfo
    this.VG = vgInfo
    return
  }

  updateFlavorVolumes() {

    for (const flav of this.flavors) {
      flav.volume = flav.ratio * 0.01 * this.mlTotalVolume;
    }
    return true;
  }
}
