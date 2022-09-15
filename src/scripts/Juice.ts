import { Flavor } from './Flavor';

export interface Juice {
  name: string;
  mlTotalVolume: number;
  flavors: Array<Flavor>;
  mlNicotineVolume?: number;
  nicotineMGperML: number;
  nicotineStrengthMGperML: number;
  juiceStrengthMGperML: number;
  PG?: { total: number; added: number; ratio:number},
  VG?: { total: number; added: number; ratio:number}
}

export class Juice implements Juice {
  constructor(
    name: string,
    mlTotalVolume: number,
    flavors: Array<Flavor>,
    nicotineMGperML: number,
    nicotineStrengthMGperML: number,
  ) {
    this.name = name;
    this.mlTotalVolume = mlTotalVolume;
    this.flavors = flavors;
    this.nicotineStrengthMGperML = nicotineStrengthMGperML;
    this.juiceStrengthMGperML = nicotineMGperML
    this.mlNicotineVolume = (this.mlTotalVolume * nicotineMGperML) / nicotineStrengthMGperML;
    if (isNaN(this.mlNicotineVolume)) this.mlNicotineVolume = 0
    this.updateFlavorVolumes()
  }

  setRatio(VG:number) {
    this.updateFlavorVolumes()
    let flavorVG = 0,
      flavorPG = 0
    for (const flavor of this.flavors) {
      if (flavor.type === 'PG' && flavor.volumeNeededML) flavorPG += flavor.volumeNeededML
      if (flavor.type === 'VG' && flavor.volumeNeededML) flavorVG += flavor.volumeNeededML
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
      flav.volumeNeededML = flav.ratio * 0.01 * this.mlTotalVolume;
    }
    return true;
  }
}
